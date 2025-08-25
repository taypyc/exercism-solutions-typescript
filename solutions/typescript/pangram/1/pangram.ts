export function isPangram(sentence: string) {
  const lowerSentence = sentence.toLowerCase();
    
    const lettersFound = new Set();
    for (const char of lowerSentence) {        
        if (char >= 'a' && char <= 'z') {
            lettersFound.add(char);
        }
    }

  return lettersFound.size === 26;
}
