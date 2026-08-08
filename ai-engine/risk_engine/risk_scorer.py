def calculate_risk_score(analysis: dict) -> dict:
    """
    Calculate an explainable privacy risk score.
    Higher score = higher privacy risk.
    """

    risks = analysis.get("risks", [])

    score = 0
    risk_details = []

    for risk in risks:

        risk_text = risk.lower()

        if any(word in risk_text for word in [
            "retention",
            "deletion"
        ]):
            points = 20
            category = "Data Retention"

        elif any(word in risk_text for word in [
            "third-party",
            "third party",
            "unauthorized"
        ]):
            points = 20
            category = "Third-Party Sharing"

        elif any(word in risk_text for word in [
            "advertiser",
            "advertising",
            "targeting",
            "profiling"
        ]):
            points = 15
            category = "Advertising & Tracking"

        elif "consent" in risk_text:
            points = 15
            category = "Consent"

        elif any(word in risk_text for word in [
            "disclaimer",
            "responsibility",
            "transmission"
        ]):
            points = 10
            category = "User Protection"

        else:
            points = 10
            category = "Other"

        score += points

        risk_details.append({
            "category": category,
            "description": risk,
            "points": points
        })

    score = min(score, 100)

    if score >= 70:
        level = "high"
    elif score >= 40:
        level = "medium"
    else:
        level = "low"

    return {
        "risk_score": score,
        "risk_level": level,
        "risk_details": risk_details
    }