# Remix v3 HTML Syntax Highlighter

This VS Code extension provides syntax highlighting for **Remix v3** HTML tagged templates (e.g. \`html\`...\`\`).

It is a specialized fork of [Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates) designed specifically for the Remix v3 `html` tag.

## Usage

Simply use the `html` tag in your JavaScript or TypeScript files:

```ts
import { html } from "@remix-run/html-template";

const myComponent = html`
    <div class="container">
        <h1>Hello Remix!</h1>
        <button onclick="alert('clicked')">Click me</button>
    </div>
`;
```

The content inside the template string will be highlighted as HTML.

## Acknowledgments

This extension is a fork of the excellent [vscode-comment-tagged-templates](https://github.com/mjbvz/vscode-comment-tagged-templates) by [Matt Bierner](https://github.com/mjbvz).

If you need general-purpose syntax highlighting for various languages using comments (e.g. \`/* css */\`), please use the original extension:
[Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates).

This fork strips away the other languages and comment-based detection to focus solely on the `html` tag experience for Remix developers.

## Contributing

To build this extension, you'll need [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/).

First, [fork](https://help.github.com/articles/fork-a-repo/) this repo and clone your fork:

```bash
git clone https://github.com/YOUR_GITHUB_ACCOUNT_NAME/remix-v3-html-highlighter.git
code remix-v3-html-highlighter
```

Then install dev dependencies using pnpm:

```bash
pnpm install
```

To run the tests:

```bash
npm run test
```