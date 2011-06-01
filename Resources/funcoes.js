$(document).bind("mobileinit", function(){
	$.mobile.pageLoadErrorMessage = "Erro ao carregar página";
	$.loadingMessage = "Carregando…";
});
function url_encode(stringue) {
	var hex_chars = "0123456789ABCDEF";
	var noEncode = /^([a-zA-Z0-9\_\-\.])$/;
	var n, stringueCode, hex1, hex2, stringueEncode = "";
	for(n = 0; n < stringue.length; n++) {
		if (noEncode.test(stringue.charAt(n))) {
			stringueEncode += stringue.charAt(n);
		} else {
			stringueCode = stringue.charCodeAt(n);
			hex1 = hex_chars.charAt(Math.floor(stringueCode / 16));
			hex2 = hex_chars.charAt(stringueCode % 16);
			stringueEncode += "%" + (hex1 + hex2);
		}
	}
	return stringueEncode;
}
// url_decode version 1.0  
function url_decode(stringue) {
	var n, stringueCode, stringueDecode = "";
	for (n = 0; n < stringue.length; n++) {
		if (stringue.charAt(n) == "%") {
			stringueCode = stringue.charAt(n + 1) + stringue.charAt(n + 2);
			stringueDecode += String.fromCharCode(parseInt(stringueCode, 16));
			n += 2;
		} else {
			stringueDecode += stringue.charAt(n);
		}
	}
	return stringueDecode;
}