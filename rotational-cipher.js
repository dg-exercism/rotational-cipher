//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RotationalCipher {
  static rotate(letters, degree) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const capitals = alphabet.split('').map(letter => letter.toUpperCase());
    const cipher = alphabet.split('');
    const transformed = letters.split('').map(letter => {
      const skip = letter.match(/[\\.',!]/g) || letter === ' ' || letter.match(/[0-9]/g)
      const isCapital = capitals.includes(letter);
      const alphaIndex = !skip ? cipher.indexOf(letter.toLowerCase()) : 0;
      const caseSensitive = isCapital && !skip ? letter.toUpperCase() : letter;
      const wrapIndex = alphaIndex + degree > 26 ? (alphaIndex + degree) - 26 : 0;
      const cipherCaseWrap = isCapital && !skip ? cipher[wrapIndex].toUpperCase() : cipher[wrapIndex];
      const cipherCase = isCapital && !skip && alphaIndex + 1 + degree < 26 ? cipher[degree + alphaIndex].toUpperCase() : cipher[degree + alphaIndex];
      return skip ? 
        letter :
        degree === 26 ? 
        caseSensitive :
        alphaIndex + 1 + degree > 26 ?
        cipherCaseWrap :
        cipherCase
    });
    return transformed.join('')
  }
}
