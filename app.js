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

  translations = [
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

  askNextFromTranslations = (index, translations, rl) => {
    nextIndex = index + 1;
    if (nextIndex >= translations.length) {
      return null;
    } else {
      askForTranslation(translations[nextIndex], rl);
      return nextIndex;
    }
  },

  endProgram = () => {
    console.log('All done!');
    process.exit(0);
  }

  currentIndex = askNextFromTranslations(-1, translations, rl)

;

rl
  .on('line', (line) => {
    var
      guess = line.trim(),
      answer = translations[currentIndex].eo
    ;
    if (guess === answer) {
      console.log('Yep!\n');
    } else {
      console.log(`Nope, the correct answer is: ${answer}\n`);
    }
    currentIndex = askNextFromTranslations(currentIndex, translations, rl);
    if (currentIndex === null) {
      endProgram();
    }
  })
  .on('close', endProgram)
;
