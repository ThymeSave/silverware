const stringSimilarity = require("string-similarity")
const SIMILARITY_MIN_THRESHOLD = .5;
const SIMILARITY_EXACT = 1;

const sortMatches = (a : Match, b : Match) => b.similarity - a.similarity;

export interface Match {
  key: string
  similarity: number
}

export const findMatches = (variants: { [key: string]: string }, text: string): Match[] => {
  const keys = Object.keys(variants);
  const keyLength = keys.length;
  let matches: Match[] = [];

  for (let i = 0; i < keyLength; i++) {
    const key = keys[i];
    const variant = variants[key];
    const similarity = Number(stringSimilarity.compareTwoStrings(variant, text).toFixed(4));

    if (similarity == SIMILARITY_EXACT) {
      return [
        {
          key,
          similarity
        }
      ]
    } else if (similarity >= SIMILARITY_MIN_THRESHOLD) {
      matches.push({
        key,
        similarity
      });
    }
  }

  return matches.sort(sortMatches);
};
