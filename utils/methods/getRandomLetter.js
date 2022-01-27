/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomLetter = () => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return alphabet[rand(0, alphabet.length - 1)];
};

function getRandomWord(title) {
  const text = title;
  let finalWord = '';
  for (let i = 0; i < text.length; i++) {
    finalWord += text[i] === ' ' ? ' ' : getRandomLetter();
  }

  return finalWord;
}
const wordsShaker = (defaultWords, setter) => {
  if (isGoing) return;

  let isGoing = false;
  let interv = 'undefined';
  let canChange = false;
  let globalCount = 0;
  let count = 0;
  const INITIAL_WORD = defaultWords;

  isGoing = true;
  const randomWord = getRandomWord(defaultWords);
  setter(randomWord);

  interv = setInterval(() => {
    let finalWord = '';
    for (let x = 0; x < INITIAL_WORD.length; x++) {
      if (x <= count && canChange) {
        finalWord += INITIAL_WORD[x];
      } else {
        finalWord += INITIAL_WORD[x] === ' ' ? ' ' : getRandomLetter();
        // finalWord += getRandomLetter();
      }
    }
    setter(finalWord);
    if (canChange) {
      count++;
    }
    if (globalCount >= 20) {
      canChange = true;
    }
    if (count >= INITIAL_WORD.length) {
      clearInterval(interv);
      count = 0;
      canChange = false;
      globalCount = 0;
      isGoing = false;
    }
    globalCount++;
  }, 50);
};

export { wordsShaker };
