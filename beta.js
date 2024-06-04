/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */  
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

    

	

 
            

               





