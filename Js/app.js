var mostrarOcultar = function(e) {
    var tabSeleccionado = (e.target.dataset.tabSeleccionado);
    var desayuno = document.getElementById('desayuno');
    var comida = document.getElementById('comida');
    var cena = document.getElementById('cena');
    if (tabSeleccionado === 'tabDesayuno') {
        desayuno.style.display = 'block';
        comida.style.display = 'none';
        cena.style.display = 'none';
    } else if (tabSeleccionado === 'tabComida') {
        comida.style.display = 'block';
        desayuno.style.display = 'none';
        cena.style.display = 'none';
    } else if (tabSeleccionado === 'tabCena') {
        cena.style.display = 'block';
        desayuno.style.display = 'none';
        comida.style.display = 'none';
    }
}
var cargarPagina = function() {
    var desayuno = document.getElementById('desayuno');
    var comida = document.getElementById('comida');
    var cena = document.getElementById('cena');
    desayuno.style.display = 'none';
    comida.style.display = 'none';
    cena.style.display = 'none';
    var elementosTab = document.getElementsByClassName('tab');
    for (var i = 0; i < elementosTab.length; i++) {
        elementosTab[i].addEventListener('click', mostrarOcultar);
    }
}

cargarPagina();