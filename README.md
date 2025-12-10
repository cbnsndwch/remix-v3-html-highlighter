# Remix v3 HTML Syntax Highlighter

This VS Code extension provides syntax highlighting for **Remix v3** HTML tagged templates (e.g. html\`...\`).

It is a specialized fork of [Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates) designed specifically for the Remix v3 `html` tag.

## Usage

Simply use the `html` tag in your JavaScript or TypeScript files:

![Example](assets/example.png)

The content inside the template string will be highlighted as HTML.

## Acknowledgments

This extension is a fork of the excellent [vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates) by [Matt Bierner](https://github.com/mjbvz).

If you need general-purpose syntax highlighting for various languages using comments (e.g. \`/* css */\`), please use the original extension:
[Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates).

This fork strips away the other languages and comment-based detection to focus solely on the `html` tag experience for Remix v3 developers.

## License

This repository is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.