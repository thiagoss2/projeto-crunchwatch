// CRANDO A AÇÃO DE CLIQUE

const btnHamburger = document.querySelector('[js-btn-hamburger]');
const menuLateralFixo = document.querySelector('[js-menu-lateral-fixo]');
const menuLateralFixoBtnX = document.querySelector('[js-menu-lateral-fixo-btn-x]');


// BLOCO DROPDOWN EPISODEOS
const episodeosDescricaoBloco = document.querySelector('[js-episodeos-descricao-media]');
const  dropdownepisodeosDescricao = document.querySelector('[js-episodeos-descricao-dropdown]');




const menuLateralFixoOculto = function() {
    menuLateralFixo.classList.toggle("ativo");
}


const menuLateralFixoAtivo  = function () {
    menuLateralFixo.classList.toggle("ativo");
}

btnHamburger.addEventListener('click' , menuLateralFixoAtivo);
menuLateralFixoBtnX.addEventListener('click' , menuLateralFixoOculto );

//  elemento.onClick = funcaoQueSeraExecutada();


episodeosDescricaoBloco.addEventListener('click', function () {
    dropdownepisodeosDescricao.classList.toggle("ativo")
});