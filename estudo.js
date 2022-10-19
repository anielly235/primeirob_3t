let tabuada = 111;
function escreva(){
    document.write("<h1> Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada*10) + "<br>");
}

let lista = ["Jesus","Spessato","Duarte","Jorge","Neusa","Gilmar","Jossyara"];

function mostraLista(){
    document.write("Tamanho da Lista: " + lista.length + "<br>");
    for(let i = 0; i < lista.length; i++){
        document.write("Professor: " + lista[i] + "<br>")
    } 
}


function multiplica(){
    for(let i = 6; i <= 8; i++){
        document,write("o valor do i = " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x "+j+" = " + (i*j) + "<br>");
        }
        
    }
}

function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    let r = 0;
    for(let i=1; i <= t;i++){
        r = v * (1+(j/100));
        v = r;   
     }
    document.write("Resultado: R$ " + r);
}
function media(){
    let n1 = document.getElementById ("n1").value;
    let n1 = document.getElementById ("n2").value;
    let n1 = document.getElementById ("n3").value;
    let n1 = document.getElementById ("n4").value;

    let r = (Number (n1)+Number(n2)+Number (n3)+Number(n4))/4;
    document.getElementById("result").innerHTML = "Média: " + r;
    
}
