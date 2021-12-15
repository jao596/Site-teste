var entidade = document.getElementById('imagem');

// Altere o número para a apliação/redução desejada
var fator_lupa = 2;

entidade.onmouseover = function () { this.style.width = (this.clientWidth * fator_lupa) + "px"; };

entidade.onmouseout = function () { this.style.width = (this.clientWidth / fator_lupa) + "px"; };
<img id="imagem" width="200" src="https://www.google.com.br/images/srpr/logo11w.png" />