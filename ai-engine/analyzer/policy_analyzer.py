import os
import json

from dotenv import load_dotenv
from google import genai


load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env file")

client = genai.Client(api_key=api_key)


def analyze_privacy_policy(policy_text: str) -> dict:

    prompt = f"""
You are a privacy compliance analyst.

Analyze the following privacy policy and return ONLY valid JSON.

Identify:

1. Overall privacy risk score from 0 to 100
2. Risk level: low, medium, or high
3. Types of personal data collected
4. Purpose of data processing
5. Third-party data sharing
6. Data retention practices
7. User privacy rights
8. Security measures
9. Major privacy risks
10. Recommended improvements

Use this exact JSON structure:

{{
    "risk_score": 0,
    "risk_level": "low",
    "data_collected": [],
    "processing_purposes": [],
    "third_party_sharing": [],
    "data_retention": [],
    "user_rights": [],
    "security_measures": [],
    "risks": [],
    "recommendations": []
}}

Privacy Policy:

{policy_text}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    result = response.text.strip()

    # Remove markdown code fences if Gemini adds them
    if result.startswith("```"):
        result = result.replace("```json", "").replace("```", "").strip()

    return json.loads(result)