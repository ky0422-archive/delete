import * as vscode from 'vscode'
import * as rimraf from 'rimraf'

export const activate = (context: vscode.ExtensionContext) =>
    context.subscriptions.push(
        vscode.commands.registerCommand('delete.delete', () => {
            if (!vscode.workspace.workspaceFolders) vscode.window.showErrorMessage('No workspace opened.')
            else {
                vscode.workspace.workspaceFolders.map((f) => {
                    vscode.window.showInformationMessage(`Deleting ${f.name}`)
                    rimraf(f.uri.fsPath, (e) => vscode.window.showErrorMessage(e!.message))
                })

                vscode.workspace.updateWorkspaceFolders(0, 1)
            }
        })
    )

export const deactivate = () => {}
