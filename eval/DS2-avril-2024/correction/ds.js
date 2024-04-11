

// Exercice 1 Bis ----------------------------------

function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function testIsLeap(){
       console.log( isLeap( 2024 );  // affiche : true
       console.log( isLeap( 1998 );  // affiche : false
       console.log( isLeap( 2100 );  // affiche : false
  
}


// Exercice 2 ----------------------------------

function nbCommonChars(s1, s2){

    let commonChars = 0;
    let minSize = Math.min(s1.length, s2.length);

    for(let i = 0; i < minSize; i++){

        if( s1[i] === s2[i] ){
            commonChars++;
        }
    }

    return commonChars;

}

function testNbCommonChars(){

    console.log( "nbCommonChars", nbCommonChars("ABCD", "EFGH"), 0 ) ; // affiche : 0
    console.log( "nbCommonChars", nbCommonChars("ABCD", "EBGD"), 2 ) ; // affiche : 2
    console.log( "nbCommonChars", nbCommonChars("AFGH", "EFGH"), 3 ) ; // affiche : 3


}

// Exercice 3 ----------------------------------

// version très élégante 

function snakeTocamel(s){ 
    return s.split("_").filter(el => el!= "").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
}


function snakeCase2camelCase(s) {
    const splitString = s.split("_");
    return splitString.reduce( (finalString,string) => finalString+string.slice(0,1).toUpperCase()+string.slice(1));
}

function snakeCase2camelCase(snakeCase){

    let camelCase = "";
    let toUpper = false;

    for(let i = 0; i < snakeCase.length; i++){
        let char = snakeCase[i];

        if (char !== "_"){
            camelCase += toUpper ? char.toUpperCase() : char;
        }

        toUpper = (char === "_");
    }

    return camelCase;

}

function testSnakeCase2camelCase(){

    console.log(snakeCase2camelCase("taille_de_la_liste") ) ;   // affiche : tailleDeLaListe

    // cas particuliers ajoutés par MSO
    console.log("1. _ en début de mot :", snakeCase2camelCase("_taille_de_la_liste"), "TailleDeLaListe" ) ;   // affiche : TailleDeLaListe
    console.log("2. _ en fin de mot :", snakeCase2camelCase("taille_de_la_liste_"), "tailleDeLaListe" ) ;   // affiche : tailleDeLaListe
    console.log("3. deux _ à la suite :", snakeCase2camelCase("taille__de_la_liste_"), "tailleDeLaListe" ) ;   // affiche : tailleDeLaListe
    console.log("4. chaîne vide :", snakeCase2camelCase(""), "" ) ;   // affiche : chaîne vide
    console.log("5. _ :", snakeCase2camelCase("_"), "" ) ;   // affiche : chaîne vide

}




function main(){
        //testIsLeap();
    //testNbCommonChars();
    //testSnakeCase2camelCase();

}


main();
