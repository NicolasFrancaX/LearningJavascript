/**
 * Escreva uma função isVowel(vowel) que retorne true se a letra
 * informada for uma vogal
 */

function isVowel(vowel) {
  letter = vowel.toLowerCase();
  return 'aeiou'.indexOf(letter) >= 0;
}
