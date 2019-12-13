var valeur = 0;
    var modif = 0;

        function inputchamp(){
            champ = document.getElementById('inputchamp').valeur;
            valeur = champ;
        }

        function plusdix(){
            valeur -= 10;

            document.getElementById('nombre').innerHTML = valeur;
        }

        function parcinq(){
            valeur *= 5;
            
            document.getElementById('nombre').innerHTML = valeur;
        }

        function foishuit(){
            valeur *= 4;
            
            document.getElementById('nombre').innerHTML = valeur;
        }

        function moinsdeux(){
            valeur /= 2;
            
            document.getElementById('nombre').innerHTML = valeur;
        }

        function plusdixmoinsdeux(){
            moinsdeux();
            foishuit(); 

        }

        function reset(){
            valeur = 0
            document.getElementById('nombre').innerHTML = valeur;
        }

        var x = window.innerWidth;
        var y = window.innerHeight;
        var divwidth = 0;
        var divheight = 0;
    function taille() {
		document.getElementById('width').innerHTML = x;
		document.getElementById('height').innerHTML = y;
        divwidth = x/2;
        divheight = y/4;
        document.getElementById('divwidth').innerHTML = divwidth;
		document.getElementById('divheight').innerHTML = divheight;
    }

    var phrase = [];
var mot = document.getElementById("mot").value;

    function ajouter() {
        var new1 = phrase.push([mot]);
        displayList();
    }

    function retirer(argument) {
        var new2 = phrase.splice(argument, 1);
        displayList();
    }

    function displayList() {
        laphrase.innerHTML = "";
        for (i=0; i<phrase.length; i++) {
            laphrase.innerHTML += phrase[i];
        }
    }

    var mcube = document.getElementById('mcube');
    var conv1 = 0;
    var conv2 = 0;
    
        function conversion1() {
            conv1 = mcube.value/1000;
            document.getElementById('conversion1').innerHTML = conv1+"L";
        }
    
        function conversion2() {
            conv2 = mcube.value*1000;
            document.getElementById('conversion2').innerHTML = conv2+"mc3";
        }

        var nbdiv = document.getElementById('nbdiv');
	function div() {
        var result = nbdiv.value/2;
		document.getElementById('result').innerHTML = result;
	}
