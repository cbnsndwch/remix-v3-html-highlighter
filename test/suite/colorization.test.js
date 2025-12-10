/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// @ts-check
import { describe, test, expect } from 'vitest';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { commands, Uri } = require('vscode');
import { join, basename, dirname } from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function assertUnchangedTokens(testFixurePath) {
    let fileName = basename(testFixurePath);

    const data = await commands.executeCommand('_workbench.captureSyntaxTokens', Uri.file(testFixurePath));
    
    let resultsFolderPath = join(dirname(dirname(testFixurePath)), 'colorize-results');
    if (!fs.existsSync(resultsFolderPath)) {
        fs.mkdirSync(resultsFolderPath);
    }
    let resultPath = join(resultsFolderPath, fileName.replace('.', '_') + '.json');
    if (fs.existsSync(resultPath)) {
        let previousData = JSON.parse(fs.readFileSync(resultPath).toString());
        try {
            expect(data).toEqual(previousData);
        } catch (e) {
            fs.writeFileSync(resultPath, JSON.stringify(data, null, '\t'), { flag: 'w' });
            if (Array.isArray(data) && Array.isArray(previousData) && data.length === previousData.length) {
                for (let i = 0; i < data.length; i++) {
                    let d = data[i];
                    let p = previousData[i];
                    if (d.c !== p.c || hasThemeChange(d.r, p.r)) {
                        throw e;
                    }
                }
                // different but no tokenization ot color change: no failure
            } else {
                throw e;
            }
        }
    } else {
        fs.writeFileSync(resultPath, JSON.stringify(data, null, '\t'));
    }
}

function hasThemeChange(d, p) {
    let keys = Object.keys(d);
    for (let key of keys) {
        if (d[key] !== p[key]) {
            return true;
        }
    }
    return false;
};

describe('colorization', () => {
    let extensionColorizeFixturePath = join(__dirname, 'colorize-fixtures');
    if (fs.existsSync(extensionColorizeFixturePath)) {
        let fixturesFiles = fs.readdirSync(extensionColorizeFixturePath);
        fixturesFiles.forEach(fixturesFile => {
            // define a test for each fixture
            test(fixturesFile, async () => {
                await assertUnchangedTokens(join(extensionColorizeFixturePath, fixturesFile));
            });
        });
    }
});
