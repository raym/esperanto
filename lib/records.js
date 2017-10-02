var Records = function() {
  this.index = -1;
  this.records = [
    {
      type: 'root',
      root: 'vir',
      suffixes: [
        {
          suffix: 'o',
          translation: 'man'
        },
        {
          suffix: 'ino',
          translation: 'woman'
        }
      ]
    },
    {
      type: 'root',
      root: 'knab',
      suffixes: [
        {
          suffix: 'o',
          translation: 'boy'
        },
        {
          suffix: 'ino',
          translation: 'girl'
        }
      ]
    },
    {
      type: 'root',
      root: 'est',
      suffixes: [
        {
          suffix: 'i',
          translation: 'to be'
        }
      ],
      conjugations: [
        {
          'as': {
            '1PS': 'am',
            //'1PP': 'are',
            '2PS': 'are' //,
            //'2PP': 'are',
            //'3PS': 'is',
            //'3PP': 'are'
          }
        }
      ]
    },
    {
      type: 'article',
      article: 'la',
      translation: 'the'
    },
    {
      type: 'word',
      word: 'ne',
      translation: 'no'
    },
    {
      type: 'pronoun',
      pronoun: 'mi',
      translation: 'I',
      personal: '1PS'
    },
    {
      type: 'pronoun',
      pronoun: 'vi',
      translation: 'you',
      personal: '2PS'
    }
  ];
};

Records.prototype.hasMore = function() {
  return this.index + 1 < this.records.length;
};

Records.prototype.next = function() {
  if (!this.hasMore()) {
    return null;
  }
  this.index = this.index + 1;
  return this.records[this.index];
};

module.exports = Records;
