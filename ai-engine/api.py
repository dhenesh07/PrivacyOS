from fastapi import FastAPI, UploadFile, File
import shutil
import os
from pydantic import BaseModel

from copilot.privacy_copilot import ask_privacy_copilot

from utils.document_parser import (
    extract_text_from_pdf,
    extract_pages_from_pdf
)

from analyzer.policy_analyzer import analyze_privacy_policy
from risk_engine.risk_scorer import calculate_risk_score
from evidence.evidence_engine import find_evidence_for_risk


app = FastAPI(title="PrivacyOS AI Engine")


# ==========================================
# CURRENT PRIVACYOS ANALYSIS SESSION
# ==========================================

current_session = {
    "policy_text": None,
    "analysis": None,
    "risk_score": None,
    "evidence": []
}


# ==========================================
# COPILOT REQUEST
# ==========================================

class CopilotRequest(BaseModel):
    question: str


# ==========================================
# HOME
# ==========================================

@app.get("/")
def home():

    return {
        "status": "online",
        "service": "PrivacyOS AI Engine"
    }


# ==========================================
# ANALYZE PRIVACY POLICY
# ==========================================

@app.post("/analyze")
async def analyze_policy(file: UploadFile = File(...)):

    file_path = "temp_policy.pdf"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:

        # ----------------------------------
        # Extract document
        # ----------------------------------

        text = extract_text_from_pdf(file_path)

        pages = extract_pages_from_pdf(file_path)


        # ----------------------------------
        # Gemini analysis
        # ----------------------------------

        analysis = analyze_privacy_policy(text)


        # ----------------------------------
        # Risk score
        # ----------------------------------

        risk = calculate_risk_score(analysis)


        # ----------------------------------
        # Evidence
        # ----------------------------------

        evidence = []

        for detected_risk in analysis.get("risks", []):

            result = find_evidence_for_risk(
                detected_risk,
                pages
            )

            evidence.append(result)


        # ==================================
        # SAVE CURRENT SESSION
        # ==================================

        current_session["policy_text"] = text

        current_session["analysis"] = analysis

        current_session["risk_score"] = risk["risk_score"]

        current_session["evidence"] = evidence


        # ----------------------------------
        # API response
        # ----------------------------------

        return {

            "status": "success",

            "document": file.filename,

            "risk_score": risk["risk_score"],

            "trust_score": 100 - risk["risk_score"],

            "risk_level": risk["risk_level"],

            "risks": analysis.get(
                "risks",
                []
            ),

            "evidence": evidence,

            "recommendations": analysis.get(
                "recommendations",
                []
            )
        }


    finally:

        if os.path.exists(file_path):

            os.remove(file_path)


# ==========================================
# AI PRIVACY COPILOT
# ==========================================

@app.post("/copilot")
def copilot(request: CopilotRequest):

    # ----------------------------------
    # Check whether a policy was analyzed
    # ----------------------------------

    if current_session["policy_text"] is None:

        return {

            "status": "error",

            "message": "No privacy policy has been analyzed yet."
        }


    # ----------------------------------
    # Ask Copilot
    # ----------------------------------

    answer = ask_privacy_copilot(

        question=request.question,

        policy_text=current_session["policy_text"],

        analysis=current_session["analysis"],

        risk_score=current_session["risk_score"],

        evidence=current_session["evidence"]
    )


    # ----------------------------------
    # Return answer
    # ----------------------------------

    return {

        "status": "success",

        "question": request.question,

        "answer": answer
    }