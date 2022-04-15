import * as vscode from 'vscode';
import * as rimraf from 'rimraf';

export const _delete = (_: vscode.ExtensionContext) => {
    if (vscode.workspace.workspaceFolders === undefined) {
        vscode.window.showErrorMessage('No workspace opened.');
    } else {
        vscode.workspace.workspaceFolders.map((f) => {
            vscode.window.showInformationMessage(`Deleting ${f.name}`);
            rimraf(f.uri.fsPath, (e) => {
                vscode.window.showErrorMessage(e!.message);
            });
        });
        vscode.workspace.updateWorkspaceFolders(0, 1);
    }
};