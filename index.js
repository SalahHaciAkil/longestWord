const getLongestWord = (sentence = "") => {
  if (typeof sentence !== "string")
    throw new Error("sentence must be a string");
  let longestWord = "";
  let greatestVowelsCount = 0;
  const splitted = sentence.split(/\s+/);

  splitted.forEach((word) => {
    const sanitizedWord = word.replace(/[^a-z]/gi, "");
    const wordVowelsCount = sanitizedWord.match(/[aeiou]/gi)?.length || 0;
    if (
      sanitizedWord.length > longestWord.length ||
      (sanitizedWord.length === longestWord.length &&
        wordVowelsCount > greatestVowelsCount)
    ) {
      longestWord = sanitizedWord;
      greatestVowelsCount = wordVowelsCount;
    }
  });

  return longestWord;
};

try {
  const sentence =
    "people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  console.log(getLongestWord(sentence));
} catch (error) {
  console.log(error);
}
// Test cases:

// empty string, invalid inputs (edge cases)
// same length but with different vowel counts
// punctuation marks and numbers .e.g people,
// more than one whitespace between 2 words: "people     learn   from"
