function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmDolar = parseFloat(valor);
	var valorEmReal = valorEmDolar * 5.5;
	console.log(valorEmReal);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido;
}