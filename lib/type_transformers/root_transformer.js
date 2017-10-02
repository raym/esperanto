var
  RootTransformer = function(record) {
    this.index = -1;
    this.translations = this.translationsFromRecord(record);
  }
;

RootTransformer.prototype.translationsFromRecord = function(record) {
  var
    root = record.root,
    suffixes = record.suffixes || []
    suffixTranslations = record.suffixes.map(function(value, index, array) {
      return {
        eo: root + value.suffix,
        en: value.translation
      }
    })
  ;
  return this.shuffleArray(suffixTranslations);
};

RootTransformer.prototype.next = function() {
  if (!this.hasMore()) {
    return null
  }
  this.index = this.index + 1;
  return this.translations[this.index];
};

RootTransformer.prototype.hasMore = function() {
  return this.index + 1 < this.translations.length;
};

RootTransformer.prototype.shuffleArray = function(array) {
  var length = array.length;
  var shuffled = Array(length);
  for (var index = 0, rand; index < length; index++) {
    rand = 0 + Math.floor(Math.random() * (index + 1));
    if (rand !== index) shuffled[index] = shuffled[rand];
    shuffled[rand] = array[index];
  }
  return shuffled;
};

module.exports = RootTransformer;
