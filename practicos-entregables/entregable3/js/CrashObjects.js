"use strict";

class CrashObjects{

    static terminarAnimacion (){
        console.log(termino);
    }

    //Metodo creado para ir mostrando de manera aleatoria los objetos en pantalla.
    static randomColosion (selected){
    let barril = document.getElementById("barril");
    let flecha = document.getElementById("flecha");
    let moneda = document.getElementById("moneda");
    let moneda1 = document.getElementById("moneda1");
    let flecha1 = document.getElementById("flecha1");
    let barril1 = document.getElementById("barril1");
        
        switch(selected){  
            case 1: 
                if (ColisionEnd.barril == 0){
                    barril.className= "barril";
                }else {
                    ColisionEnd.barril = 0; 
                }
            break;

            case 2: 
                if (ColisionEnd.moneda == 0){
                    moneda.className= "moneda";
                }else {
                    ColisionEnd.moneda = 0 ;
                }
                
            break;

            case 3:
                if (ColisionEnd.flecha == 0){
                    flecha.className= "flecha";
                }else {
                    ColisionEnd.flecha = 0;
                }
            break;
    
            case 4:
                if (ColisionEnd.flecha1 == 0){
                    flecha1.className= "flecha1";
                }else {
                    ColisionEnd.flecha1 = 0;
                }
            break;
    
            case 5: 
                if (ColisionEnd.moneda1 == 0){
                    moneda1.className= "moneda";
                }else{
                    ColisionEnd.moneda1 = 0;
                }
            break;
            
            case 6: 
                if (ColisionEnd.barril1 == 0){
                    barril1.className= "barril";
                }else {
                    ColisionEnd.barril1 = 0; 
                }
            break;
        } 
    }

// decta la colison entre el objeto que le llega por parametro y el div de la persona
// para saber si hay una colision vamos haciendo las comparaciones con los lados de cada div
    static DetectarColision(b,dead){
        let a  = document.getElementById("person").getBoundingClientRect();
        var a_pos = { t : a.top, 
                    l: a.left, 
                    r: a.left + a.width, 
                    b: a.top + a.height};
        var b_pos =  {t : b.top, 
                    l: b.left, 
                    r: b.left + b.width, 
                    b: b.top + b.height};
                   //Detecta si se superponen las áreas
        if(   a_pos.l <= b_pos.r && a_pos.r >= b_pos.l 
        && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b ){
            dead.Estadodead = true;
            // este if lo hacemos para que cuando se detecter una colisicion y la persona no este muerta anterior mente se haga la animacion de morir 
            if(dead.Actual == false){
                Juego.fin = true;
            let persona = document.getElementById("person");
            persona.style.background = 'url('+avatar.imgDead+')';
            persona.className= "personDead";
            }
        }
    }
// decta la colison entre el objeto que le llega por parametro y el div de la persona
// para saber si hay una colision vamos haciendo las comparaciones con los lados de cada div
    static DetectarColisionMoneda(b ,dead ,parameter){
        let a  = document.getElementById("person").getBoundingClientRect();
        let textoMoneda = document.getElementById("cantidad");
        let moneda = document.getElementById("moneda");
        let moneda1 = document.getElementById("moneda1");
        var a_pos = { t : a.top, 
                    l: a.left, 
                    r: a.left + a.width, 
                    b: a.top + a.height};
        var b_pos =  {t : b.top, 
                    l: b.left, 
                    r: b.left + b.width, 
                    b: b.top + b.height};
                   //Detecta si se superponen las áreas
        if( a_pos.l <= b_pos.r && a_pos.r >= b_pos.l 
        && a_pos.b >= b_pos.t && a_pos.t <= b_pos.b ){
            //if para ocultar la moneda si se produjo la colision 
            if (parameter == "moneda1"){
                moneda1.className = 'none';
                ColisionEnd.moneda1 = 1 ;
            }else if (parameter == "moneda"){
                moneda.className = 'none';
                ColisionEnd.moneda = 1 ;
            }
            // if para hacer el contador 
            if (CantidadMoneda.cantidad < 10 ){
            CantidadMoneda.cantidad += 1;
            textoMoneda.innerHTML = CantidadMoneda.cantidad;
            }
            //if para que cuando junte 10 monedas se muestre el cartel de ganador 
            if (CantidadMoneda.cantidad == 10){
                Juego.fin = true;
                dead.Estadodead= true;
                dead.Actual=true;
                let winner = document.getElementById("winner")
                winner.style.display= 'block';
            }
            
        }
    }
}