var

  WordTransformer = require('./type_transformers/word_transformer'),
  ArticleTransformer = require('./type_transformers/article_transformer'),
  RootTransformer = require('./type_transformers/root_transformer'),
  PronounTransformer = require('./type_transformers/pronoun_transformer'),

  TranslationTransformer = function(record) {
    switch (record.type) {
      case 'word':
        return new WordTransformer(record);
        break;
      case 'article':
        return new ArticleTransformer(record);
        break;
      case 'root':
        return new RootTransformer(record);
        break;
      case 'pronoun':
        return new PronounTransformer(record);
        break;
    }
  }
;

module.exports = TranslationTransformer;
