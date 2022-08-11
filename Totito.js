let turno = "X";
let juegoActivo = true;
const wintTextElemento =  document.getElementById('winText');
// funcion principal del juego
const jugar = (x,y) => {
	if (!juegoActivo) return;

	let cambioTurno = false;
	const idElemento = "cuadro_" + x + y;

	if(document.getElementById(idElemento).innerHTML == ""){
		document.getElementById(idElemento).innerHTML = turno;	
		cambioTurno = true;
	}

	const cuadro1 = document.getElementById("cuadro_11").innerHTML;
	const cuadro2 = document.getElementById("cuadro_12").innerHTML;
	const cuadro3 = document.getElementById("cuadro_13").innerHTML;
	const cuadro4 = document.getElementById("cuadro_21").innerHTML;
	const cuadro5 = document.getElementById("cuadro_22").innerHTML;
	const cuadro6 = document.getElementById("cuadro_23").innerHTML;
	const cuadro7 = document.getElementById("cuadro_31").innerHTML;
	const cuadro8 = document.getElementById("cuadro_32").innerHTML;
	const cuadro9 = document.getElementById("cuadro_33").innerHTML;

	const cuadro1Styl = document.getElementById("cuadro_11");
	const cuadro2Styl = document.getElementById("cuadro_12");
	const cuadro3Styl = document.getElementById("cuadro_13");
	const cuadro4Styl = document.getElementById("cuadro_21");
	const cuadro5Styl = document.getElementById("cuadro_22");
	const cuadro6Styl = document.getElementById("cuadro_23");
	const cuadro7Styl = document.getElementById("cuadro_31");
	const cuadro8Styl = document.getElementById("cuadro_32");
	const cuadro9Styl = document.getElementById("cuadro_33");


	if (cuadro1 == turno && cuadro2  == turno && cuadro3 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;
		cuadro1Styl.style.cssText += 'background-color: lightslategrey';
		cuadro2Styl.style.cssText += 'background-color: lightslategrey';
		cuadro3Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro1 == turno && cuadro4  == turno && cuadro7 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;  
	  	cuadro1Styl.style.cssText += 'background-color: lightslategrey';
		cuadro4Styl.style.cssText += 'background-color: lightslategrey';
		cuadro7Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;	
	}else if (cuadro1 == turno && cuadro5  == turno && cuadro9 == turno){
		wintTextElemento.innerText = `¡¡El ugador ${turno} a Ganado!!`;
		cuadro1Styl.style.cssText += 'background-color: lightslategrey';
		cuadro5Styl.style.cssText += 'background-color: lightslategrey';
		cuadro9Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro3 == turno && cuadro6  == turno && cuadro9 == turno){
		wintTextElemento.innerText = `¡¡El ugador ${turno} a Ganado!!`;
		cuadro3Styl.style.cssText += 'background-color: lightslategrey';
		cuadro6Styl.style.cssText += 'background-color: lightslategrey';
		cuadro9Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro3 == turno && cuadro5  == turno && cuadro7 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;
		cuadro3Styl.style.cssText += 'background-color: lightslategrey';
		cuadro5Styl.style.cssText += 'background-color: lightslategrey';
		cuadro7Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro7 == turno && cuadro8  == turno && cuadro9 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;
		cuadro7Styl.style.cssText += 'background-color: lightslategrey';
		cuadro8Styl.style.cssText += 'background-color: lightslategrey';
		cuadro9Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro2 == turno && cuadro5  == turno && cuadro8 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;
		cuadro2Styl.style.cssText += 'background-color: lightslategrey';
		cuadro5Styl.style.cssText += 'background-color: lightslategrey';
		cuadro8Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	}else if (cuadro4 == turno && cuadro5  == turno && cuadro6 == turno){
		wintTextElemento.innerText = `¡¡El jugador ${turno} a Ganado!!`;
		cuadro4Styl.style.cssText += 'background-color: lightslategrey';
		cuadro5Styl.style.cssText += 'background-color: lightslategrey';
		cuadro6Styl.style.cssText += 'background-color: lightslategrey';
		juegoActivo = false;
	} 
	if(cambioTurno){
		if (turno === "X"){
			turno = "O";
		}else{
			turno = "X";
		}
	}
}
function reiniciar(){
	location.reload();
}