import re


def find_evidence_for_risk(risk, pages):
    """
    Find the most relevant page and sentence for a detected privacy risk.
    """

    risk_words = extract_keywords(risk)

    best_page = None
    best_sentence = ""
    best_score = 0

    for page in pages:

        text = page["text"]

        # Split page into sentences
        sentences = re.split(r'(?<=[.!?])\s+', text)

        for sentence in sentences:

            sentence_lower = sentence.lower()

            score = sum(
                1 for word in risk_words
                if word in sentence_lower
            )

            if score > best_score:
                best_score = score
                best_page = page["page"]
                best_sentence = sentence.strip()

    if best_page is None:
        return {
            "risk": risk,
            "evidence": "No direct evidence found.",
            "page": None,
            "confidence": "low"
        }

    if best_score >= 3:
        confidence = "high"
    elif best_score >= 2:
        confidence = "medium"
    else:
        confidence = "low"

    return {
        "risk": risk,
        "evidence": best_sentence,
        "page": best_page,
        "confidence": confidence
    }


def extract_keywords(risk):
    """
    Extract useful keywords from a risk description.
    """

    stop_words = {
        "the", "and", "for", "with", "that",
        "this", "from", "into", "without",
        "their", "they", "does", "data"
    }

    words = re.findall(r'\b[a-zA-Z]{4,}\b', risk.lower())

    return [
        word for word in words
        if word not in stop_words
    ]