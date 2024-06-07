/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */  
// Diferents idiomes per la GUI
    const Idiomes_dft = [
        {
            "IdIdioma": "ca",
            "Titol": "Versió amb Base de Dades Joc del Penjat",
            "Versio": "Versió γ Joc del Penjat",
            "Input": "Escriu una lletra minúscula",
            "Pregunta": "Anam a la quinta forca?",
            "Comprovar": "Comprovar",
            "Paraula": "Paraula:",
            "Sopes": "Demanes sopes?",
            "Pista": "Pista",
            "Vides": "Vides:",
            "Moix": "Un moix en té set?",
            "Lletres": "Lletres:",
            "Ets": "Ets de lletres?",
            "URLpistes": "URLpistes:",
            "Dita": "Dita",
            "Dita1": "A la quinta forca, ",
            "Dita2": "A ca un penjat, no hi anomenis cordes, ",
            "Dita3": "Setze jutges d'un jutjat mengen fetge d'un penjat, …",
            "Credits": "Crèdits:",
            "YouTube": "Joc Penjat on Scratch",
            "Wikis": "Penjat",
            "Idioma": "en Català",
            "Diccionari": "Diccionari",
            "Teclat": "Mostra o Amaga",
            "Incorrecte": "Caràcter incorrecte!",
            "Repetida": "Lletra repetida!",
            "Encertat": "Has encertat!",
            "Guanyat": "i has guanyat!",
            "Fallat": "Has fallat!",
            "Perdut": "i has perdut!",
            "Descansi": "En pau descansi – RIP!",
            "Puntuacio": "Puntuació:"
        },
        {
            "IdIdioma": "es",
            "Titol": "Versión con Base de Datos Juego del Ahorcado",
            "Versio": "Versión γ Juego del Ahorcado",
            "Input": "Escribe una letra minúscula",
            "Pregunta": "Vamos al quinto pino?",
            "Comprovar": "Comprobar",
            "Paraula": "Palabra:",
            "Sopes": "Te rindes?",
            "Pista": "Pista",
            "Vides": "Vidas:",
            "Moix": "Un gato tiene siete?",
            "Lletres": "Letras:",
            "Ets": "Eres de letras?",
            "URLpistes": "URLpistas:",
            "Dita": "Dicho",
            "Dita1": "Al quinto pino, ",
            "Dita2": "En casa de un ahorcado, no hables de cuerdas,",
            "Dita3": "Dieciséis jueces de un juzgado comen hígado de un ahorcado, …",
            "Credits": "Crèditos:",
            "YouTube": "Juego Ahorcado on Scratch",
            "Wikis": "Ahorcado",
            "Idioma": "en Español",
            "Diccionari": "Diccionario",
            "Teclat": "Muestra o Esconde",
            "Incorrecte": "Carácter incorrecto!",
            "Repetida": "Letra repetida!",
            "Encertat": "Has acertado!",
            "Guanyat": "y has ganado!",
            "Fallat": "Has fallado!",
            "Perdut": "y has perdido!",
            "Descansi": "En paz descanse - RIP!",
            "Puntuacio": "Puntuación:"
        },
        {
            "IdIdioma": "en",
            "Titol": "Hangman Game Database Version",
            "Versio": "Hangman Game γ Versión",
            "Input": "Write a lowercase letter",
            "Pregunta": "Are we going to the boondocks?",
            "Comprovar": "Check it",
            "Paraula": "Word:",
            "Sopes": "You give up?",
            "Pista": "Clue",
            "Vides": "Lives:",
            "Moix": "A cat has seven?",
            "Lletres": "Letters:",
            "Ets": "Are you in liberal arts?",
            "URLpistes": "URLclues:",
            "Dita": "Saying",
            "Dita1": "To the boondocks,",
            "Dita2": "In a hanged man's home, don't talk about ropes,",
            "Dita3": "Sixteen judges of a court eat the liver of a hangman, …",
            "Credits": "Credits:",
            "YouTube": "Hangman Game on Scratch",
            "Wikis": "Hangman",
            "Idioma": "in English",
            "Diccionari": "Dictionary",
            "Teclat": "Show or Hide",
            "Incorrecte": "Wrong character!",
            "Repetida": "Repeated letter!",
            "Encertat": "You're right!",
            "Guanyat": "and you have won!",
            "Fallat": "You have failed!",
            "Perdut": "and you have lost!",
            "Descansi": "Rest in peace - RIP!",
            "Puntuacio": "Score:"
        }
    ]
    var Idiomes = Idiomes_dft;
    
     // Simulam una Taula de ParaulesPistes, similar a la consulta a la base de dades, amb un array d'objectes
    const Taula_dft = [
        // Deixam per defecte les paraules i pistes en Català
        {"Paraula": "cordes", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "fetge", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "forca", "Pista": "A la quinta forca"},
        {"Paraula": "jutges", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "jutjat", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "mengen", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"},
        {"Paraula": "penjat", "Pista": "A ca un penjat, no hi anomenis cordes"},
        {"Paraula": "quinta", "Pista": "A la quinta forca"},
        {"Paraula": "setze", "Pista": "Setze jutges d'un jutjat mengen fetge d'un penjat"}
    ];
    var Taula = Taula_dft;
    var IdIdioma= "ca";
   
    
    var vides=7
    var Paraula = []; //bones
    var Lletres=["_","_","_","_","_","_","_"]; //errades
    
    //Llista de paraules per al joc i les pistes asociades
    var paraules=["cordes","fetge","forca","jutges","jutjat","mengen","penjat","quinte","setze"];
    var pistes=["A la quinta forca", "A ca un penjat,ni hi anomenis cordes", "Setze jutges d'un jutjat mengen fetge d'un penjat"];
    var paraulespistes=[1,2,0,2,2,2,1,0,2];
     
    //Escuull una paraula aleatòriament
    var aleatori=Math.floor(Math.random() * paraules.length);
    var paraula=paraules[aleatori];
    var pista= pistes[paraulespistes[aleatori]];
    
    //Alternativament, fent servir l’array d’objectes
    //window.alert(Taula.lenght);
        // aleatori = Math.floor(Math.random() * Taula.lenght);
        // paraula = Taula[aleatori].Paraula;
        // pista = Taula[aleatori].Pista;
    //window.alert("aleatori=" + aleatori + ",paraula=" + paraula * ", pista=" + pista);

    //Marcam cada lletra amb un "_"
    for(var i=0; i < paraula.length; i++) {
        Paraula[i]= "_" ;
    }   
        
        
function Comprobar() {

    // var paraula=document.getElementById("paraula").innerHTML;

    var lletra = document.getElementById("caracter").value;

    lletra = lletra.toLowerCase();
    switch (lletra) {
        case "à":
        case "á":
            lletra = "a";
            break;
        case "è":
        case "é":
            lletra = "e";
            break;
        case "ì":
        case "í":
        case "ï":
            lletra = "i";
            break;
        case "ò":
        case "ó":
            lletra = "o";
            break;
        case "ù":
        case "ú":
        case "ü":
            lletra = "u";
            break;

    }
    
    //alert(paraula);
    var pos = paraula.indexOf(lletra);

    if ((pos != -1) && (lletra != "")) {
        // text="Aquesta lletra es correcta";
        window.alert("És Correcta");

      //  document.getElementById("Paraula").innerHTML=
     //  document.getElementById("Paraula").innerHTML+lletra;
        document.getElementById("miau").play();
        for (var i = pos; i < paraula.length; i++) {
            if (paraula[i] == lletra) {
                Paraula[i] = lletra;
            }
        }        
        document.getElementById("Paraula").innerHTML = Paraula;

    } else if (((lletra >= "a") && (lletra <= "z")) ||
            (lletra == "ñ") || (lletra == "-") ||
            (lletra == "ç") || (lletra == ".")) {
        window.alert("És incorrecta")
        document.getElementById("boom_cloud").play();
        
        Lletres[7 - vides] = lletra;
        document.getElementById("Lletres").innerHTML = Lletres;
               // alert(Lletres);

        // text = "Aquesta lletra es Incorrecta";
        vides = vides - 1;
        MostraImg();
        document.getElementById("vides").innerHTML =
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + vides;
        //  document.getElementById("Lletres").innerHTML =
        //  document.getElementById("Lletres").innerHTML+lletra;
        //  document.getElementById("boom_cloud").play();


    } else {

        window.alert("Caràcter incorrecte");
    }

    if (vides <= 0) {
        window.alert("i has perdut");
        document.getElementById("cat-fight").play();
        AturaTot();
    } else {
        //if (paraula.length >= 14) {
        if (Paraula.indexOf("_")== -1) {
            window.alert("i has guanyat");
            document.getElementById("cheer").play();
            AturaTot();
        }
    }
    document.getElementById("clock_ticking").play();

}

function AturaTot() {
    document.getElementById("cara").disabled = true;
    document.getElementById("caracter").disabled = true;
}

function MostraImg() {
    switch (vides) {
        case 6:
            document.getElementById("ahorcado_6").hidden = false;

            break;

        case 5:
            document.getElementById("ahorcado_5").hidden = false;
            document.getElementById("ahorcado_6").hidden = true;

            break;

        case 4:
            document.getElementById("ahorcado_4").hidden = false;
            document.getElementById("ahorcado_5").hidden = true;

            break;

        case 3:
            document.getElementById("ahorcado_3").hidden = false;
            document.getElementById("ahorcado_4").hidden = true;

            break;

        case 2:
            document.getElementById("ahorcado_2").hidden = false;
            document.getElementById("ahorcado_3").hidden = true;

            break;

        case 1:
            document.getElementById("ahorcado_1").hidden = false;
            document.getElementById("ahorcado_2").hidden = true;

            break;

        case 0:
            document.getElementById("ahorcado_0").hidden = false;
            document.getElementById("ahorcado_1").hidden = true;

        default:
            break;
    }
}

function amaga() {
    document.getElementById("ahorcado_0").hidden = true;
    document.getElementById("ahorcado_1").hidden = true;
    document.getElementById("ahorcado_2").hidden = true;
    document.getElementById("ahorcado_3").hidden = true;
    document.getElementById("ahorcado_4").hidden = true;
    document.getElementById("ahorcado_5").hidden = true;
    document.getElementById("ahorcado_6").hidden = true;
}

var seconds = 0;
function timer() {
    seconds = seconds + 1;
    document.getElementById("counter").innerHTML = seconds;
}
setInterval(timer, 1000);

//Canviam els diferents literals de la GUI seguns l'idioma
function CanviarIdioma(IdIdioma){
    window.alert("canviar Idioma");
    if((IdIdioma != "ca")&&(IdIdioma !="es")){
        document.getElementById("Idiomes").value = IdIdioma;
       
    }
    AlaWeb_SQLite(IdIdioma);
    Idioma = Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma);
    
    document.title = Idioma.Titol;
    document.getElementById("Versio").innerHTML = Idioma.Versio;
    document.getElementById("lletra").placeholder = Idioma.Input;
    document.getElementById("cara").innerHTML = Idioma.Comprovar;
    document.getElementById("Pista").innerHTML = Idioma.Pista;
    
        // Escull una nova paraula aleatòriament
        window.alert("Nova paraula aleatòria / Nueva palabra aleatoria / New random word!");
        aleatori = Math.floor(Math.random() * Taula.length);
        paraula = Taula[aleatori].Paraula;
        pista = Taula[aleatori].Pista;

        Paraula = [];
        // Marcam cada lletra amb un "_"
        for (var i = 0; i < paraula.length; i++) {
            Paraula[i] = "_";
        }
        document.getElementById("paraula").innerHTML = Paraula;

        for (var i = 0; i < Vides_dft - Vides; i++) {
            Lletres[i] = "_";
        }
        document.getElementById("lletres").innerHTML = Lletres;

        Vides = Vides_dft;    
        document.getElementById("vides").innerHTML =
                "&nbsp;&nbsp;&nbsp;\n\
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Vides;

        // AmagaForca();
       
        // Bandera de la paraula/pista
        if (IdIdioma_ant == "en") { IdIdioma_ant = "gb"; }                                
        document.getElementById("bandera").src = "img/" + IdIdioma_ant + ".png";                      
        IdIdioma_ant = IdIdioma;
       
        // Bandera del textos de la GUI
        if ((IdIdioma != "ca") && (IdIdioma != "es")) {
            // Per a l'idioma "en = English" la bandera es la de "gb = Great Britain"  
            if (IdIdioma == "en") { IdIdioma = "gb"; }                                
            document.getElementById("gb").src = "img/" + IdIdioma + ".png";        
        }
    }



    // Funció per carregar la base de dades penjat.db
    function AlaWeb_SQLite(IdIdioma) {
        window.alert("AlaWeb_SQLite IdIdioma = '" + IdIdioma + "'");
        config = {
            locateFile: filename => `/dist/${filename}`
        };

        // Recuperam de la base de dades els TextosGUI per tots els Idiomes
        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT * FROM TblTextosGUI;',
        //     [], function(idiomes) {Print_Data(Idiomes = idiomes.pop());}
          [], function(idiomes) {SQL_TblTextosGUI(IdIdioma, idiomes.pop());}
        );

        alasql('ATTACH SQLITE DATABASE penjat("db/penjat.db"); USE penjat; \n\
                SELECT Paraula, Pista \n\
                FROM TblParaules INNER JOIN TblPistes \n\
                    ON TblParaules.IdPista = TblPistes.IdPista \n\
                    WHERE TblParaules.IdIdioma = "' + IdIdioma + '" ;',
        //    [], function(taula){Print_Data(Taula = taula.pop());}
          [], function(taula) {SQL_TblParaulesPistes(IdIdioma, taula.pop());}
        );
  } 
  

   function SQL_TblTextosGUI(IdIdioma, TblTextosGUI){
     Idiomes = TblTextosGUI;
     if(Idiomes.lenght == 0) { Idiomes = Idiomes_dft; };
        if(Idiomes.find(Idioma => Idioma.IdIdioma == IdIdioma) == undefined) {
        window.alert("GUI: Idioma no trobat / Idioma no encontrado / Lenguage not found");
        Idiomes = Idiomes_dft;
        
    };
}

  //ACABAR
function SQL_TblParaulesPistes(IdIdioma, TblParaulesPistes) {

//Window.alert("SQL_TblParaulesPistes IdIdioma ='ss" + IdIdioma + " ' ");

Taula = TblParaulesPistes;
if (Taula.length ==0) {
window.alert("Idioma sense paraules / Idioma sin palabras / Lenguaje without words!");
Taula = Taula_dft;
IdIdioma = "ca";
IdIdioma_ant = Idioma;
} else {
//window.alert("Paraules en idioma / Palabras en idioma / Language words = ' "IdIdioma + " ' ")
};
// window.alert(Taula[0].Pista);
}   

 // Print data  
    function Print_Data(res) {
        for (var i in res)
        {
           // console.log("row " + i);
           // document.getElementById("res").innerHTML += "<br>";
           for (var j in res[i])
             {
              // console.log(" " + res[i][j]);
              // document.getElementById("res").innerHTML += res[i][j] + ", ";
              window.alert("res[" + i + "][" +j + "] = " + res[i][j]);
             }
        }
    } 


	

 
            

               





