const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownSerivce = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const turndownService  = new TurndownSerivce();
    //1.Convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    //2.Sanitize HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });

    //3.Convert markdown
    const sanitizedMarkdown= turndownService.turndown(sanitizedHtml);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;