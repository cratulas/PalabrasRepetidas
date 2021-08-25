function fetchText(){
    return document.getElementById('texto-entrada').textContent
}

function cleanData(text){
    text = text.replaceAll(',','');
    text = text.replaceAll('.','');
    text = text.replaceAll('\n','');
    text = text.replaceAll('?','');
    text = text.replaceAll('!','');
    
    return text
}

function formatData(text){
    return text.split(' ');
}

function findDuplicates(text){
    let data = formatData(text);
    
    let duplicatedWords = [];
    let matchedElements = [];

    let arraysito = [];

    for (let i = 0; i < data.length; i++){
        let num = data[i];
        let duplicates = 0;
        for (let z = 0; z < data.length; z++){
            if(num === data[z] && !matchedElements.includes(num)){
                duplicates ++;                
            }
        }
        matchedElements.push(num);
        if (duplicates > 0 ){
            duplicatedWords.push(`${num} ${duplicates}`)
            arraysito.push(num)
            arraysito.push(duplicates)
        }
    }
    return arraysito
}

function cuantasVecesAparece(cadena, caracter){
    var indices = [];
    for(var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
    return indices.length;
    }


//Primero


let textito = fetchText();
let cantidad = [];

for (let i = 0; i < textito.length; i++){

    if (textito[i] === textito[i].toUpperCase()){
        //console.log('Es mayuscula')
    }
    else {

        let coincidencias = cuantasVecesAparece(textito, textito[i]);

        if (cantidad.includes(textito[i]) != true){
            cantidad.push(textito[i]);
            cantidad.push(coincidencias);
        }
    };

}

for (let index = 0; index < cantidad.length; index= index + 2) {
    var p1 = document.createElement("p");
    var texto_de_p1 = document.createTextNode('Letra: ' + cantidad[index] + ', Cantidad: ' + cantidad[index+1]);
    p1.appendChild(texto_de_p1);
    document.getElementsByTagName('body')[0].appendChild(p1);
    
}



// segundo
let actualResults = findDuplicates(cleanData(fetchText()));

for (let index = 0; index < actualResults.length; index= index + 2) {
    var p1 = document.createElement("p");
    var texto_de_p1 = document.createTextNode('Palabra: ' + actualResults[index] + ', Cantidad: ' + actualResults[index+1]);
    p1.appendChild(texto_de_p1);
    document.getElementsByTagName('body')[0].appendChild(p1);
    
}




