var

  Records = require('./lib/records'),
  TranslationTransformer = require('./lib/translation_transformer'),

  records = new Records();
  record = null,
  translations = null,
  translation = null,

  readline = require('readline'),

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  }),

  askForTranslation = function(translation, rl) {
    console.log(translation.en);
    rl.prompt();
    return translation.eo;
  },

  endProgram = function() {
    console.log('All done!');
    process.exit(0);
  }

;

if (records.hasMore()) {
  record = records.next();
  translations = new TranslationTransformer(record);
  if (translations.hasMore()) {
    translation = translations.next();
  } else {
    // TODO: figure out how to robustly retrieve the next translation
  }
} else {
  endProgram();
}

askForTranslation(translation, rl);

rl
  .on('line', function(line) {

    var
      guess = line.trim(),
      answer = translation.eo
    ;

    if (guess === answer) {
      console.log('Yep!\n');
    } else {
      console.log(`Nope, the correct answer is: ${answer}\n`);
    }

    if (!translations.hasMore()) {
      if (!records.hasMore()) {
        endProgram();
      }
      record = records.next();
      translations = new TranslationTransformer(record);
    }

    translation = translations.next();
    askForTranslation(translation, rl);

  })
  .on('close', endProgram)
;
