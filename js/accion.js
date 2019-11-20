var boton=document.getElementsByTagName("button")[0];/*en la variable boton (lista),
traigo la colección de etquetas "button" , en este caso la unica etiqueta button (posicion "0")*/
boton.onclick=ocultar;///evento onclick me dispara la función ocultar
var turno=true;
var conte=document.getElementsByTagName("div");
var puntoX=0;
var puntoO=0;

function ocultar()
	{
		var modal=document.getElementsByClassName("modal")[0];///en la variable modal traigo los elementos 
		///con el nombre de la clase "modal", en este caso el unico (posición "0")
		modal.className+=" oculto";/*Concateno los nombres de las clases modal y oculto*/
		///modal.className="modal oculto";
		for (i=0; i<conte.length; i++)//este ciclo for borra el contenido del tablero
			{
				conte[i].innerHTML="";
				conte[i].setAttribute("onclick","escribir("+i+")");
				conte[i].className="";
			}

		boton.setAttribute("onclick","ocultar()");//sobreescribe el atributo reiniciar cuando "ganó"
	}

function mostrar()
	{
		var modal=document.getElementsByClassName("modal")[0];
		modal.className="modal";
	}

///conte[0].onclick=function(){escribir(0)};
conte[0].setAttribute("onclick","escribir(0)");//creo el atributo "onclick, escribir()" en cada etiqueta DIV con su posicion.
conte[1].setAttribute("onclick","escribir(1)");
conte[2].setAttribute("onclick","escribir(2)");
conte[3].setAttribute("onclick","escribir(3)");
conte[4].setAttribute("onclick","escribir(4)");
conte[5].setAttribute("onclick","escribir(5)");
conte[6].setAttribute("onclick","escribir(6)");
conte[7].setAttribute("onclick","escribir(7)");
conte[8].setAttribute("onclick","escribir(8)");

function escribir(num)
	{
		var h2=document.createElement("h2");/*Traigo todos los h2*/
		if(turno==true)
			{
				h2.innerHTML="X";
				h2.className="X";
				turno=false;
			}
		
		else
			{
				h2.innerHTML="O";
				h2.className="O";
				turno=true;
			}
		
		conte[num].appendChild(h2);
		
		conte[num].className="elegido";
		/*conte[num].setAttribute("onclick","");*/
		conte[num].removeAttribute("onclick");
		ganar();
		
	}

function ganar()
	{
		
		if (conte[0].innerHTML!="" && conte[1].innerHTML!="" && conte[2].innerHTML!="" && conte[3].innerHTML!="" && conte[4].innerHTML!="" && conte[5].innerHTML!="" && conte[6].innerHTML!="" && conte[7].innerHTML!="" && conte[8].innerHTML!="")
			{
				//alert("Empate");
				var modal=document.getElementsByTagName("section")[0];
				modal.childNodes[0].innerHTML="Empate!!!";
				modal.childNodes[2].innerHTML="Jugar otra!";

				mostrar();
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[1].innerHTML && conte[0].innerHTML==conte[2].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();

			}

		if (conte[3].innerHTML!="" && conte[3].innerHTML==conte[4].innerHTML && conte[3].innerHTML==conte[5].innerHTML)
			{
				var vence=conte[3].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[6].innerHTML!="" && conte[6].innerHTML==conte[7].innerHTML && conte[6].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[6].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[3].innerHTML && conte[0].innerHTML==conte[6].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[1].innerHTML!="" && conte[1].innerHTML==conte[4].innerHTML && conte[1].innerHTML==conte[7].innerHTML)
			{
				var vence=conte[1].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[5].innerHTML && conte[2].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[2].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[4].innerHTML && conte[0].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[4].innerHTML && conte[2].innerHTML==conte[6].innerHTML)
			{
				var vence=conte[2].firstChild.innerHTML;
				//alert("Gano "+vence+" !!!");
				punto(vence);//llamamos a la funcion punto y trae el valor de variable vence.
				mostrar();
			}

		
	}

function punto(anotar)//Para contar los puntos de quien gana
	{
		h1=document.getElementsByTagName("h1");
		if(anotar=="X")
			{
				puntoX+=1;
				h1[0].innerHTML="X:"+puntoX;
			}

		else
			{
				puntoO+=1;
				h1[1].innerHTML="O:"+puntoO;
			}

		var modal=document.getElementsByTagName("section")[0];
		
		if (puntoO<5 && puntoX<5)
			{
				modal.childNodes[0].innerHTML="Gano "+anotar+"!!!";
				modal.childNodes[2].innerHTML="Jugar otra!";	
			}
		else
			{
				modal.childNodes[0].innerHTML="CAMPEON DEFINITIVO"+anotar+"!!!";
				modal.childNodes[2].innerHTML="Reiniciar!";
				modal.childNodes[2].setAttribute("onclick","reiniciar()");

			}
	

		mostrar();

	}

	function reiniciar()
		{
			puntoX=0;
			puntoO=0;
			h1=document.getElementsByTagName("h1");
			h1[0].innerHTML="X:";
			h1[1].innerHTML="O:";
			ocultar();
		}

