const htmlmin = require('html-minifier');

module.exports = (config) => {

  // HTML Minification

  config.addTransform('htmlmin', (content, outputPath) => {
    if(outputPath && outputPath.endsWith('.html')) {
      const result = htmlmin.minify(
        content, {
          removeComments: true
        }
      );

      return result;
    }

    return content;
  });

  // Passthrough Copy

  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/img');
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/scripts');

  // Config

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'md', 'njk'
    ],
  };
}
