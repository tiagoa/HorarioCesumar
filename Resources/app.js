var webview = Titanium.UI.createWebView({url:'index.htm'});
var window = Titanium.UI.createWindow();
var statusConexao = Titanium.Network.networkTypeName;
window.add(webview);
window.open();
if(statusConexao == 'NONE'){
	alert('Você precisa estar conectado à internet para consultar o horário.');
}
