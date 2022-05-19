// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "testmrsc" is now active!');

	let disposable = vscode.commands.registerCommand('testmrsc.pull_strapi', function () {
		vscode.window.showInformationMessage('pull from Strapi');	
	});
	
	let disposable2 = vscode.commands.registerCommand('testmrsc.publish_strapi', function () {
		vscode.window.showInformationMessage('publish on Strapi');
	})
	context.subscriptions.push(disposable, disposable2);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
