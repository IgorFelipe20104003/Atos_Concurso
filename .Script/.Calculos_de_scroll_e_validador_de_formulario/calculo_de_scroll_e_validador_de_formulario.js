	/*======================== calculo para o scrol fixo subir e descer conforme parametros ======================================*/
		let barra = document.getElementById('scroll-fixed-top');
		let total = document.documentElement;

				window.addEventListener('scroll', function() {
				    let value = parseFloat(100 * total.scrollTop / (total.scrollHeight - total.clientHeight));
				    if(value >= 1.5){
				    	barra.classList.remove('desactive');
				    	barra.classList.add('active');
				    }else{
				      	barra.classList.remove('active');
				    	barra.classList.add('desactive');
				    }

				});
	//===========================================================*/	

	//========================= Validador de dados do formulario 	

		function Checar_Dados(){

			let checar = "";

			if(document.dados.nome.value  == "" || document.dados.nome.value.length < 5 )
				checar += "Nome(em branco ou inválido)\n";

			if(document.dados.email.value == "" || document.dados.email.value.indexOf("@")== -1 || document.dados.email.value.indexOf(".") == -1 )
				checar += "Email (em branco ou inválido)\n";

			if(document.dados.mensagem.value  == "" || document.dados.mensagem.value.length < 5 )
				checar += "Mensagem(em branco ou inválda)\n";

			if(checar != ""){
				alert("Favor preencha os campos em branco:\n=================\n" + checar + "\n=================\n");
							window.text('en-US');
			}else{
				alert("Enviando Dados");
			}
		}


