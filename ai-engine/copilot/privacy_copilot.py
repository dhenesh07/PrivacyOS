import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=API_KEY)


def ask_privacy_copilot(
    question,
    policy_text,
    analysis,
    risk_score,
    evidence=None
):
    """
    PrivacyOS AI Copilot.

    Answers user questions using:
    - Privacy policy
    - Risk analysis
    - Risk score
    - Evidence
    """

    evidence = evidence or []

    prompt = f"""
You are PrivacyOS AI Copilot.

Your job is to help users understand a privacy policy
in simple and clear language.

IMPORTANT RULES:
1. Answer ONLY using the provided privacy policy,
   analysis, risk score, and evidence.
2. Do not invent facts.
3. If the answer cannot be found in the provided information,
   say that the policy does not provide enough information.
4. Clearly distinguish between facts and recommendations.
5. Do not provide legal advice.
6. Mention page numbers when relevant.
7. Keep the answer concise and user-friendly.

PRIVACY POLICY:
{policy_text}

PRIVACY ANALYSIS:
{analysis}

RISK SCORE:
{risk_score}/100

SUPPORTING EVIDENCE:
{evidence}

USER QUESTION:
{question}

Provide a helpful answer for the user.
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt
    )

    return response.text