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
        document.write("<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let v = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    
    if(!Number(v)){
        alert("O valor deve ser numérico");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    
    if(!Number(v)){
        alert("O valor deve ser numérico");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
     }
     if(!Number(j)){
        alert("Os juros deve ser numérico");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
     }
     if(!Number(m)){
        alert("O valor do mes deve ser numérico");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return

     let r = 0;
     for(let i=1; i <= t;i++){
         r = v * (1+(j/100));
         document.write("mes " + "valor:" + moeda(r) + "<br>");
         v = r;
     }
    document.write("Resultado: " + moeda(r));

}
