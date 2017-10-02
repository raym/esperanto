var
  ArticleTransformer = function(record) {
    this.record = record;
    this.translationUsed = false;
  }
;

ArticleTransformer.prototype.next = function() {
  this.translationUsed = true;
  return {
    eo: this.record.article,
    en: this.record.translation
  };
};

ArticleTransformer.prototype.hasMore = function() {
  return !this.translationUsed;
};

module.exports = ArticleTransformer;
