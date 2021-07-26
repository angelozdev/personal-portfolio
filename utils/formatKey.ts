function formatKey(text: string): string {
  const formatedText = text
    .toLowerCase()
    .replace(/[\.\-\_]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s/g, "_");
  return formatedText;
}

export default formatKey;
