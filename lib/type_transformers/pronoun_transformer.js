var
  PronounTransformer = function(record) {
    this.record = record;
    this.translationUsed = false;
  }
;

PronounTransformer.prototype.next = function() {
  this.translationUsed = true;
  return {
    eo: this.record.pronoun,
    en: this.record.translation
  };
};

PronounTransformer.prototype.hasMore = function() {
  return !this.translationUsed;
};

module.exports = PronounTransformer;
