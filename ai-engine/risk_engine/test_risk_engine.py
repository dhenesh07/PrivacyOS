
from analyzer.policy_analyzer import analyze_privacy_policy
from risk_engine.risk_scorer import calculate_risk_score
from utils.document_parser import extract_text_from_pdf


pdf_path = "test_documents/privacy_policy.pdf"

print("📄 Reading privacy policy...")

text = extract_text_from_pdf(pdf_path)

print(f"✅ Extracted {len(text)} characters")

print("\n🤖 Analyzing with Gemini...")

analysis = analyze_privacy_policy(text)

print("✅ Gemini analysis complete")

print("\n⚠️ Calculating privacy risk...")

risk_result = calculate_risk_score(analysis)

print("\n========== PRIVACYOS RISK ENGINE ==========\n")

print(f"Risk Score : {risk_result['risk_score']}/100")
print(f"Risk Level : {risk_result['risk_level']}")

print("\nRisk Details:")

for risk in risk_result["risk_details"]:
    print(
        f"⚠️ [{risk['category']}] "
        f"{risk['description']} "
        f"(+{risk['points']})"
    )