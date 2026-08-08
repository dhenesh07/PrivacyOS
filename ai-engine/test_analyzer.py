from utils.document_parser import extract_text_from_pdf
from analyzer.policy_analyzer import analyze_privacy_policy


pdf_path = "test_documents/privacy_policy.pdf"

print("📄 Reading privacy policy...")

text = extract_text_from_pdf(pdf_path)

print(f"✅ Extracted {len(text)} characters")

print("\n🤖 Sending policy to Gemini...")

analysis = analyze_privacy_policy(text)

print("\n========== PRIVACYOS ANALYSIS ==========\n")

print(f"Risk Score : {analysis['risk_score']}/100")
print(f"Risk Level : {analysis['risk_level']}")

print("\nData Collected:")
for item in analysis["data_collected"]:
    print(f" - {item}")

print("\nThird-Party Sharing:")
for item in analysis["third_party_sharing"]:
    print(f" - {item}")

print("\nRisks:")
for item in analysis["risks"]:
    print(f" ⚠️ {item}")

print("\nRecommendations:")
for item in analysis["recommendations"]:
    print(f" 💡 {item}")
    