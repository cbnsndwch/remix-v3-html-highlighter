/**
 * List of languages
 *
 * name: Human readable indentifier for the langauge
 *
 * language: vscode language identifier
 *
 * identifiers: Strings used in comments to identify language
 *
 * source: Name of the toplevel textmate scope for the language
 */
const languages = [
    { name: 'basic', language: 'html', identifiers: ['html', 'htm', 'shtml', 'xhtml', 'inc', 'tmpl', 'tpl'], source: 'text.html.basic' },
];
exports.languages = languages;
