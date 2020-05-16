class Hangman {
  constructor(word) {
    this.word = word.toLowerCase();
    this.attempts = 6;
    this.template = '_'.repeat(this.word.length);
    this.wrongLetters = [];
  }

  guess(char) {
    const allIndex = (char) => {
      let all = [];
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === char) all.push(i);
      }
      return all;
    }

    const setChar = (i, char) => {
      this.template = `${this.template.substr(0, i)}${char}${this.template.substr(i + char.length)}`;
    }

    if (this.attempts <= 0) {
      console.log(`${this.template} | you lose!`);
      return this;
    }
    let all = allIndex(char);

    for (let i = 0; i < all.length; i++) {
      setChar(all[i], char);
    }

    if (this.template === this.word) {
      console.log(`${this.template} | you won!`);
      return this;
    }
    if (!this.word.includes(char)) {
      this.wrongLetters.push(char);
      this.attempts -= 1;
      console.log(`wrong letter, errors left ${this.attempts}/6 | ${this.wrongLetters.join(',')}`);
      return this;
    }
    console.log(this.template);
    return this;
  }

  getGuessedString() {
    // console.log(this.template);
    return this.template;
  }

  getErrorsLeft() {
    // console.log(this.attempts);
    return this.attempts;
  }

  getWrongSymbols() {
    // console.log(this.wrongLetters);
    return this.wrongLetters;
  }

  getStatus() {
    // console.log(`${this.template}, errors left ${this.attempts}`);
    return `${this.template}, errors left ${this.attempts}`;
  }

  startAgain(newWord) {
    this.word = newWord.toLowerCase();
    this.attempts = 6;
    this.template = '_'.repeat(this.word.length);
    this.wrongLetters = [];
    return this;
  }
}

module.exports = new Hangman('webpurple');
