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

7