from copilot.privacy_copilot import ask_privacy_copilot


policy = """
We retain your Personal Data for as long as is required
to fulfil the activities set out in this Privacy Policy,
for as long as otherwise communicated to you or for as
long as is permitted by applicable law.
"""

analysis = """
Risk detected:
Vague data retention period with no specific timeline.
"""

evidence = [
    {
        "risk": "Vague data retention period",
        "page": 7,
        "confidence": "high",
        "text": "We retain your Personal Data for as long as..."
    }
]

question = "Why is the data retention policy risky?"


answer = ask_privacy_copilot(
    question=question,
    policy_text=policy,
    analysis=analysis,
    risk_score=70,
    evidence=evidence
)

print("\n========== PRIVACYOS AI COPILOT ==========\n")
print(answer)
