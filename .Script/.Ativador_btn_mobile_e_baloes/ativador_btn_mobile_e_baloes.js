//======================== dando funcionalidade ao botao mobile==============		
			const btnMobile = document.getElementById('btn-lista');

			function toggleMenu(){
				const nav = document.getElementById('navegador');
				nav.classList.toggle('active');
			}

			btnMobile.addEventListener('click' , toggleMenu);
			btnMobile.addEventListener('touchstar' , toggleMenu);

//===========================================================================
/*função para ativar e desativar div relçacionada ao balão de informações*/
			function selecionar(x){
				const ativar = document.getElementById(x);
				if(ativar.className == 'div-interna' || ativar.className == 'div-interna desativado' ){

				ativar.classList.remove('desativado');
				ativar.classList.add('ativado');

			}else{

				ativar.classList.remove('ativado');
				ativar.classList.add('desativado');
			}
		}
		
/*=========================================================================*/	