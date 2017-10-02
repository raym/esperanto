var
  WordTransformer = function(record) {
    this.record = record;
    this.translationUsed = false;
  }
;

WordTransformer.prototype.next = function() {
  this.translationUsed = true;
  return {
    eo: this.record.word,
    en: this.record.translation
  };
};

WordTransformer.prototype.hasMore = function() {
  return !this.translationUsed;
};

module.exports = WordTransformer;
