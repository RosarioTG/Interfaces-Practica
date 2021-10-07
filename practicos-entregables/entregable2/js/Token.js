"use strict";

class Token {
    constructor(token1, token2, colour, totalTokens, context){
        this.colour = colour; // contiene la imagen elegida para la ficha
        this.token1 = token1; // arreglo para guardar las fichas del primer jugador
        this.token2 = token2; // arreglo para guardar las fichas del segundo jugador
        this.totalTokens = totalTokens; // cantidad de fichas que va a tener cada jugador
        this.context = context; 
        
    }

    
    getToken1(){
        return this.token1; // retorna el arreglo con todas las fichas del jugador 1 de esa instacia con lo que se lo llame
    }

    getToken2(){
        return this.token2;
    }

    

    createToken(){
        switch(this.colour){  // el swicht seria como un if , si le parametro que le llega coincide con el caso 1 se ejecuta el codigo dentro del caso y si el parametro  es igual al caso 2 se ejecuta el codigo del caso 2
            case player1.colour: // el caso 1 funciona para las fichas del jugador 1
                
                for(let i = 0; i < this.totalTokens; i++){  
                    let texto = "Fichas jugador 1";
                    this.context.font="10pt Verdana"; // tipo y tamaño de letra para el texto 
                    this.context.fillText(texto,60,110); // filltext permite poner texto dentro del canvas , pasamos como parametro el texto que queremos poner y las posiciones
                    let x = Help.getRandomInt(70, 110); // posicion random para ubicar las fichas en el canvas del lado izquierdo , llama a un medodo statico (es statico para poder ingresar desde otras clases sin tenes que generar una instanvia de la misma)que esta en la clase help 
                    let y = Help.getRandomInt(150, 350);
                    let token ; 
                    token = new Circle(x, y, 20, this.colour, this.context); // la ficha circular utlizando la clase circulo que recibe posiciones , tamaño y la imagen que se le va a colocar
                    this.token1.push(token);  // guardamos esa ficha ( "circulo") dentro del arreglo del jugador 1 ya que es el caso 1
                }
                break;
            case player2.colour: 
                for(let i = 0; i < this.totalTokens; i++){
                    let texto = "Fichas jugador 2"
                    this.context.font="10pt Verdana";
                    this.context.fillText(texto,680,110);
                    let x = Help.getRandomInt(680, 730); // posicion random para ubicar las fichas en el canvas del lado derecho
                    let y = Help.getRandomInt(150, 350);
                    let token                                 // en el caso 2 sucede lo mismo que en el caso 1 pero cambian los datos ya que es para crear las fichas del jugador 2
                   token = new Circle(x, y, 20, this.colour, this.context);
                   this.token2.push(token);
                }
                break;
        }
    }
    

    drawToken(tokens){
        tokens.forEach(t => { // este metodo es llamado con cada arreglo de cada  jugador
            t.draw();   // se recorre ficha por ficha y se llama al meto draw que lo diduja
        });
    }

    static drawTokens(tokens1,tokens2){ // es un metodo statico para que se pueda ingresar sin una instancia creada de la clase 
        canvas = document.querySelector("canvas");
        context = canvas.getContext("2d");   
        context.fillStyle="white";
        context.fillRect(0, 0, canvas.width, canvas.height);   // deja el canvas en blanco y luego vuelve a dibujar todas las fichas
        tokens2.forEach(T => {
            T.draw()
        });
        tokens1.forEach(t => {
            t.draw();
        }); 
        
    } // la utilizamos para que se mueve una ficha y se tiene q volver a dibujar todo 
    
    static drawInOldPosition (elemento, X ,Y ){  // a este metodo le llega una ficha y los posiciones viejas , que son las posiciones en las que estaba la ficha antes de moverla
        elemento.posX = X;  // se cambia las posiciones nuevas por las viejas
        elemento.posY = Y ;
       Help.redraw(); // llama a un metodo statico de la clase help para volver a dibujarlas en las posiciones viejas 
    }  // este metodo lo utilizamos para que cuando un jugador suelte la ficha en otro lugar que no sea el lugar donde debe soltarse , esta ficha se vuelva a dibujar en el lugar donde estaba 
} 