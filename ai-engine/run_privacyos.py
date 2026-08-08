from utils.document_parser import (
    extract_text_from_pdf,
    extract_pages_from_pdf
)

from analyzer.policy_analyzer import analyze_privacy_policy

from risk_engine.risk_scorer import calculate_risk_score

from evidence.evidence_engine import find_evidence_for_risk


PDF_PATH = "test_documents/privacy_policy.pdf"


def run_privacyos(pdf_path):

    print("\n" + "=" * 50)
    print("          🛡️ PRIVACYOS")
    print("=" * 50)

    # --------------------------------
    # 1. Extract document
    # --------------------------------

    print("\n📄 Reading privacy policy...")

    text = extract_text_from_pdf(pdf_path)

    pages = extract_pages_from_pdf(pdf_path)

    print(f"✅ Extracted {len(text)} characters")
    print(f"📑 Document contains {len(pages)} pages")

    # --------------------------------
    # 2. Gemini analysis
    # --------------------------------

    print("\n🤖 Analyzing privacy policy...")

    analysis = analyze_privacy_policy(text)

    print("✅ Privacy analysis complete")

    # --------------------------------
    # 3. Risk scoring
    # --------------------------------

    print("\n⚠️ Calculating risk score...")

    risk_result = calculate_risk_score(analysis)

    # --------------------------------
    # 4. Evidence extraction
    # --------------------------------

    print("\n🔎 Finding supporting evidence...")

    evidence_results = []

    for risk in analysis.get("risks", []):

        evidence = find_evidence_for_risk(
            risk,
            pages
        )

        evidence_results.append(evidence)

    # --------------------------------
    # 5. Final report
    # --------------------------------

    print("\n")
    print("=" * 50)
    print("          🛡️ PRIVACYOS REPORT")
    print("=" * 50)

    print("\n🎯 PRIVACY RISK SCORE")

    print(
        f"\n{risk_result['risk_score']} / 100"
    )

    print(
        f"Risk Level: "
        f"{risk_result['risk_level'].upper()}"
    )

    # --------------------------------
    # Risks + Evidence
    # --------------------------------

    print("\n" + "-" * 50)

    print("⚠️ IDENTIFIED RISKS")

    for index, evidence in enumerate(
        evidence_results,
        start=1
    ):

        print(f"\n{index}. {evidence['risk']}")

        print(
            f"   📄 Page: "
            f"{evidence['page']}"
        )

        print(
            f"   🎯 Confidence: "
            f"{evidence['confidence']}"
        )

        print(
            f"   📌 Evidence:\n"
            f"   {evidence['evidence']}"
        )

    # --------------------------------
    # Recommendations
    # --------------------------------

    print("\n" + "-" * 50)

    print("💡 RECOMMENDATIONS")

    for recommendation in analysis.get(
        "recommendations",
        []
    ):

        print(f"• {recommendation}")

    print("\n" + "=" * 50)

    print("🛡️ PRIVACYOS VERDICT")

    print(
        risk_result["risk_level"]
        .upper()
        + " RISK"
    )

    print("=" * 50)

    return {
        "analysis": analysis,
        "risk": risk_result,
        "evidence": evidence_results
    }


if __name__ == "__main__":

    run_privacyos(PDF_PATH)