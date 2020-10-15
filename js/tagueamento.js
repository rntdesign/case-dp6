// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

(function() {

	
	// Botao Menu Contato contato
	var contact = document.querySelector('.menu-lista-contato'); 
	contact.addEventListener("click", function(){
	  	ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
	}, false);
	// Fim 


	var pdf = document.querySelector('.menu-lista-download'); 
	pdf.addEventListener("click", function(){
		ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
	}, false);


	var more = document.getElementsByClassName('card-montadoras') 
	
	for (var i = 0; i < more.length; i++) {
	    more[i].addEventListener('click', function(event) {
	        ga('send', 'event', 'analise', 'ver_mais', this.getAttribute('data-name'));
	    });
	}


	var form = document.querySelector('.contato button'); 
	form.addEventListener("click", function(){

		if(document.getElementById('email').value!="") {
	  		ga('send', 'event', 'contato', 'email', 'preencheu');
	  	}

	  	if(document.getElementById('telefone').value!="") {
	  		ga('send', 'event', 'contato', 'telefone', 'preencheu');
	  	}
	  	if(document.getElementById('nome').value!="") {
	  		ga('send', 'event', 'contato', 'nome', 'preencheu');
	  	}

	  	if((document.getElementById('email').value!="") && (document.getElementById('telefone').value!="") && (document.getElementById('nome').value!=""))   {
			ga('send', 'event', 'contato', 'enviado', 'enviado');
		}

	}, false);




})();
