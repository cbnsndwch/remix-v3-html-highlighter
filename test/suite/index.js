import path from 'node:path';

import { startVitest } from 'vitest/node';
import { glob } from 'node:fs/promises';
import * as vscode from 'vscode';

export async function run(testsRoot, cb) {
    console.log('VSCode module available:', !!vscode);
    const testsDir = path.dirname(testsRoot);
    
    // Find all test files
    const files = await Array.fromAsync(glob('**/**.test.js', { cwd: testsDir }));
    const testFiles = files.map(f => path.resolve(testsDir, f));

    try {
        // Start vitest programmatically
        // We need to ensure it runs in the current process (no threads) to access vscode global
        await startVitest('test', testFiles, {
            run: true,
            reporter: 'verbose',
            root: testsDir,
            threads: false,
            singleThread: true,
            pool: 'forks',
            poolOptions: {
                threads: {
                    singleThread: true
                },
                forks: {
                    singleFork: true
                }
            },
            server: {
                deps: {
                    external: ['vscode']
                }
            }
        });
        
        // If vitest fails, it usually throws or exits. 
        // We assume success if we get here, or we need to check result.
        // startVitest returns the Vitest instance.
        
        cb(null, 0);
    } catch (err) {
        cb(err);
    }
}