
from fastapi import FastAPI, UploadFile, File
import shutil
import os

from utils.document_parser import extract_text_from_pdf, extract_pages_from_pdf
from analyzer.policy_analyzer import analyze_privacy_policy
from risk_engine.risk_scorer import calculate_risk_score
from evidence.evidence_engine import find_evidence_for_risk

app = FastAPI(title="PrivacyOS AI Engine")


@app.get("/")
def home():
    return {
        "status": "online",
        "service": "PrivacyOS AI Engine"
    }


@app.post("/analyze")
async def analyze_policy(file: UploadFile = File(...)):

    file_path = "temp_policy.pdf"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        # Extract document
        text = extract_text_from_pdf(file_path)
        pages = extract_pages_from_pdf(file_path)

        # Gemini analysis
        analysis = analyze_privacy_policy(text)

        # Risk score
        risk = calculate_risk_score(analysis)

        # Evidence
        evidence = []

        for detected_risk in analysis.get("risks", []):
            result = find_evidence_for_risk(
                detected_risk,
                pages
            )

            evidence.append(result)

        return {
            "status": "success",
            "document": file.filename,
            "risk_score": risk["risk_score"],
            "risk_level": risk["risk_level"],
            "risks": analysis.get("risks", []),
            "evidence": evidence,
            "recommendations": analysis.get(
                "recommendations",
                []
            )
        }

    finally:

        if os.path.exists(file_path):
            os.remove(file_path)