// JavaScript Document
$(document).ready(function(e) {
	
	$('html,body').animate({scrollTop:'0px'}, 0); 
	
	
});

var controlPosicion=1;
function masGaleria(){
	controlPosicion++;
	if(controlPosicion>3){
		controlPosicion=1;
	}
	if(controlPosicion==1){
		$("#cargatexto").html("<h3>PS Talents</h3><p>The platform of future talents</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_1.jpg'>");
		$("#contador").html("1/3");
	}else if(controlPosicion==2){
		$("#cargatexto").html("<h3>PS Talents</h3><p>Awards and recognitions</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_2.jpg'>");
		$("#contador").html("2/3");
	}else{
		$("#cargatexto").html("<h3>PS Talents</h3><p>Awards and recognitions</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_3.jpg'>");
		$("#contador").html("3/3");
	}
	
}
function menosGaleria(){
	controlPosicion--;
	if(controlPosicion<1){
		controlPosicion=3;
	}
	if(controlPosicion==1){
		$("#cargatexto").html("<h3>PS Talents</h3><p>The platform of future talents</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_1.jpg'>");
		$("#contador").html("1/3");
	}else if(controlPosicion==2){
		$("#cargatexto").html("<h3>PS Talents</h3><p>Awards and recognitions</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_2.jpg'>");
		$("#contador").html("2/3");
	}else{
		$("#cargatexto").html("<h3>PS Talents</h3><p>Awards and recognitions</p>");
		$("#cargaimagen").html("<img src='images/cuadro3_3.jpg'>");
		$("#contador").html("3/3");
	}
	
}




var controlmusica=0;
function PararReproducirMusica(){
	if(controlmusica==0){
		var opcion=document.getElementById("musica");
		fadeSound(opcion,'up');
		controlmusica=1;
		$("#audioboton").attr('src', 'images/pause.png');

	}else{
		var opcion=document.getElementById("musica");
		fadeSound(opcion,'down');
		controlmusica=0;
		$("#audioboton").attr('src', 'images/play.png');
	}

}

function fadeSound(element,level){
	if(level == 'up'){

			i = 0;
			max = 100;
			element.volume = i;
			element.play();
			var interval = setInterval(function(){
					if(i >= max){
						clearInterval(interval);
					}else{

						element.volume = i/100;

						i++;
						//console.log(i+"#"+i/100);
					}
				},
				10);


		}else if(level == 'down'){
			j = 100;
			max = 0;
			var interval = setInterval(function(){
				if(j <= max){
					element.pause();
					clearInterval(interval);
				}else{
				element.volume = j/100;
				j--;
				//console.log(j+"#"+j/100);
				}

				},
				10);

		}
}


function mostrarVideo(numero){
	if(numero=="1"){
		$("#mivideo").html("<video src='media/videocase.mp4' autoplay controls preload></video>");
	}else{
		$("#mivideo").html("<video src='media/video2.mp4' autoplay controls preload></video>");
	}
	setTimeout(function(){
		$("#ventanaFlotante").fadeIn(300);
	},300);
	
}

function CerrarVentana(){
	$("#ventanaFlotante").fadeOut(300);
	setTimeout(function(){
		$("#mivideo").html("");
	},300);
}