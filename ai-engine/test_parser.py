from utils.document_parser import extract_text_from_pdf


pdf_path = "test_documents/privacy_policy.pdf"

text = extract_text_from_pdf(pdf_path)

print("PDF extraction successful!")
print(f"Characters extracted: {len(text)}")

print("\n--- First 1000 characters ---\n")
print(text[:1000])