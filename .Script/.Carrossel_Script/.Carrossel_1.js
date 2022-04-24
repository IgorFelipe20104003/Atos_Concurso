	// Definindo variaveis para capturar o id do elemento que 
	//ativara a função
	const selectDireita = document.getElementById("seta-direita");
	const selectEsquerda = document.getElementById("seta-esquerda");

	//definindo qual evento ocorrera quando clicar nos 
	//elementos que possuem determinado id
	selectDireita.addEventListener("click" , btn_Direita);
	selectEsquerda.addEventListener("click" , btn_Esquerda);

//=============================================================================
	//função ativada o clicar na seta para esquerda
		function btn_Esquerda(){
		const nav = document.getElementById("navegador-scroll");
		const apont = document.getElementById("apontador");		
		if(nav.className == 'activeD'){
			nav.classList.remove('activeD');
			nav.classList.add('centro');
			nav.classList.add('activeE');

			apont.classList.remove('activeD');
			apont.classList.add('centro');
			apont.classList.add('activeE');

				}else if( nav.className == 'centro activeE' ||  nav.className == 'centro activeD'){
					nav.classList.remove('centro','activeD');
					nav.classList.add('activeE')

					apont.classList.remove('centro','activeD');
					apont.classList.add('activeE');

						}else if(nav.className == 'activeE') {
									nav.classList.remove('activeE');
									apont.classList.remove('activeE');

									nav.classList.add('activeD');
									apont.classList.add('activeD');

										}else{
										 nav.classList.add('activeE');
										 apont.classList.add('activeE');
										}
									}
	
//=============================================================================
//função ativada o clicar na seta para direita
		function btn_Direita(){
		const nav = document.getElementById("navegador-scroll");
		const apont = document.getElementById("apontador");
		if(nav.className == 'activeE'){
			nav.classList.remove('activeE');
			nav.classList.add('centro'); 
			nav.classList.add('activeD');

			apont.classList.remove('activeE');
			apont.classList.add('centro');
			apont.classList.add('activeD');

		}else if ( nav.className == 'centro activeD' || nav.className == 'centro activeE' ){
			nav.classList.remove('centro','activeE');
			nav.classList.remove('centro','activeD');
			nav.classList.add('activeD'); 

			apont.classList.remove('centro','activeE');
			apont.classList.remove('centro','activeD');
			apont.classList.add('activeD');

				}else if(nav.className == 'activeD') {
							nav.classList.remove('activeD');
							apont.classList.remove('activeD');

							nav.classList.add('activeE');
						    apont.classList.add('activeE');

								}else{
									 nav.classList.add('activeD');
									 apont.classList.add('activeD');
										}
		}