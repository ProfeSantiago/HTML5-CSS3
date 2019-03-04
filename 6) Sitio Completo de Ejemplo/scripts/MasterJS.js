/***********************************************
Lic. Santiago Rodríguez P. Updated: 01-01-15
***********************************************/
var x=$(document);
	x.ready(inicializarEventos); //Se ejecuta al cargar la pagina.
	
	function inicializarEventos() {	
		$( "input[type=submit], a, button" ).button();	

		PonePunteroManita('.miLink'); //Le pone el puntero de manita al elemento
	}// Fin inicializarEventos	
//------------------------------------------------------------------------

