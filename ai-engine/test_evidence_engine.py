from utils.document_parser import (
    extract_text_from_pdf,
    extract_pages_from_pdf
)

from analyzer.policy_analyzer import analyze_privacy_policy

from evidence.evidence_engine import find_evidence_for_risk


pdf_path = "test_documents/privacy_policy.pdf"


print("📄 Reading privacy policy...")

text = extract_text_from_pdf(pdf_path)

print(f"✅ Extracted {len(text)} characters")


print("\n📑 Extracting pages...")

pages = extract_pages_from_pdf(pdf_path)

print(f"✅ Extracted {len(pages)} pages")


print("\n🤖 Analyzing policy with Gemini...")

analysis = analyze_privacy_policy(text)

print("✅ Gemini analysis complete")


print("\n🔎 Finding evidence for detected risks...")


for risk in analysis["risks"]:

    evidence = find_evidence_for_risk(
        risk,
        pages
    )

    print("\n--------------------------------")

    print("⚠️ Risk:")
    print(risk)

    print("\n📌 Evidence:")
    print(evidence["evidence"])

    print(f"\n📄 Page: {evidence['page']}")

    print(f"🎯 Confidence: {evidence['confidence']}")