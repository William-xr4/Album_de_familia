var lista_imagem = ["familia.jpg", "Vinicius.jpg", "Dayse.jpg", "William.jpg", "Ana.jpg", "Helena.jpg"];
var lista_nome = ["Família Leite", "Vinicius", "Dayse", "William", "Ana", "Helena"];
var indice = 0;
function mudar_imagem_e_texto(){
    if (indice>5){
        indice=0;
    }
    if (indice>1){
        document.getElementById("imagem").style.width="400px";
        document.getElementById("imagem").style.height="600px";
    }
    else{
        document.getElementById("imagem").style.width="600px";
        document.getElementById("imagem").style.height="450px";
    }
    document.getElementById("nome").innerHTML=lista_nome[indice];
    document.getElementById("imagem").src=lista_imagem[indice];
    indice++;
}