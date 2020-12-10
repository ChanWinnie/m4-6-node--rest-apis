const { words } = require('./data/words');

const getWord = (req,res) => {
    const id = req.params.id;
    const word = words.find((word) => word.id === id)
    //console.log(word);
    res.status(200).json({ status: 200, data: word })
}

const getRandomWord = (req,res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    //console.log(randomWord);
    delete randomWord.word;
    //console.log(randomWord);
    res.status(200).json({ status: 200, data: randomWord })
}

const guessWord = (req, res) => {
    const id = req.params.id;
    const letter = req.params.letter;
    const wordObject = words.find((word) => word.id === id)
    const word = wordObject.word.split("");
    //console.log(word)
    let stat = 400;
    const checkLetter = word.map((char) => {
        if(char != letter) {
            return char = false;
        } else if(char === letter) {
            stat = 200;
            return char = true;
        }
    })

    res.json({ status: stat, word: checkLetter})
}

module.exports = { getWord , getRandomWord, guessWord };