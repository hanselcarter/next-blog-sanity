/**
 * Splits a sentence into an array of strings at each uppercase letter.
 *
 * This function takes a sentence as input and splits it into an array of substrings
 * wherever an uppercase letter is encountered. The uppercase letter itself is included
 * at the beginning of the next substring.
 *
 * @param sentence - The sentence to be split.
 * @returns An array of substrings split at each uppercase letter.
 */
export function splitSentence(sentence: string): string[] {
  return sentence.split(/(?=[A-Z])/);
}
