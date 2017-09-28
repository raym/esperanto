var

  roots = {
    'vir': {
      'o': 'man',
      'ino': 'woman'
    },
    'knab': {
      'o': 'boy',
      'ino': 'girl'
    },
    'est': {
      'i': 'to be',
      'as': {
        '1PS': 'am',
        '1PP': 'are',
        '2PS': 'are',
        '2PP': 'are',
        '3PS': 'is',
        '3PP': 'are'
      }
    }
  },

  dictionary = [
    {
      eo: 'ne',
      en: 'no'
    },
    {
      eo: 'la',
      en: 'the'
    },
    {
      eo: 'mi',
      en: 'I'
    },
    {
      eo: 'vi',
      en: 'you'
    }
  ],

  readline = require('readline'),

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }),

  askForTranslation = (translation, rl) => {
    console.log(translation.en);
    rl.prompt();
    return translation.eo;
  },

  askNextFromDictionary = (index, dictionary, rl) => {
    nextIndex = index + 1;
    if (nextIndex >= dictionary.length) {
      return null;
    } else {
      askForTranslation(dictionary[nextIndex], rl);
      return nextIndex;
    }
  },

  endProgram = () => {
    console.log('All done!');
    process.exit(0);
  }

  currentIndex = askNextFromDictionary(-1, dictionary, rl)

;

rl
  .on('line', (line) => {
    var
      guess = line.trim(),
      answer = dictionary[currentIndex].eo
    ;
    if (guess === answer) {
      console.log('Yep!\n');
    } else {
      console.log(`Nope, the correct answer is: ${answer}\n`);
    }
    currentIndex = askNextFromDictionary(currentIndex, dictionary, rl);
    if (currentIndex === null) {
      endProgram();
    }
  })
  .on('close', endProgram)
;
