import * as vscode from 'vscode';
import { _delete } from './delete.js';

export const activate = (context: vscode.ExtensionContext) => {
	const dd = vscode.commands.registerCommand('delete.delete', () => {
		_delete(context);
	});

	context.subscriptions.push(dd);
};

export const deactivate = () => {};
