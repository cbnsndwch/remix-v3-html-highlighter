//@ts-check
import { runTests } from '@vscode/test-electron';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function go() {
    try {
        const extensionDevelopmentPath = path.resolve(__dirname, '..');
        const extensionTestsPath = path.resolve(__dirname, 'suite/index.cjs');

        /**
         * Basic usage
         */
        await runTests({
            extensionDevelopmentPath,
            extensionTestsPath,
        });
    } catch (err) {
		console.error('Failed to run tests', err);
		process.exit(1);
	}
}

go();
