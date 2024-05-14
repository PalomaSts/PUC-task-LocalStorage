const conteudo = document.getElementById('conteudo')

var registro = new Object();

const tbl = document.createElement("table");
tbl.setAttribute("id","tabelaBoletim");

const tblHead = document.createElement("thead");

const tblBody = document.createElement("tbody");
var cellText;
var arr=[];

function Registro(nome,total,media,resultado){
    this.Aluno=nome;
    this.Total=total;
    this.Media=media;
    this.Resultado=resultado;    
}

function limparCampos() {
    window.document.querySelector("#nome").value = null;
    window.document.querySelector("#nota1").value = null;
    window.document.querySelector("#nota2").value = null;
    window.document.querySelector("#nota3").value = null;
}

function adicionar() {
    let aluno = document.getElementById("nome").value;
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);

    registro.total = nota1 + nota2 + nota3;
    registro.media = registro.total / 3;
    if (registro.media > 70) {
        registro.resultado = 'Aprovado';
    } else {
        registro.resultado = 'Reprovado';
    }
    registro.aluno = aluno;

    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("td");
            switch (j) {
                case 0:
                    cellText = document.createTextNode(`${registro.aluno}`);
                    break;
                case 1:
                    cellText = document.createTextNode(`${registro.total}`);
                    break;
                case 2:
                    cellText = document.createTextNode(`${registro.media.toFixed(2)}`);
                    break;
                case 3:
                    cellText = document.createTextNode(`${registro.resultado}`);
                    break;
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.getElementById("conteudo").appendChild(tbl);   


    arr = JSON.parse(localStorage.getItem('boletim')) || [];

    arr.push(new Registro(registro.aluno,registro.total,registro.media.toFixed(2),registro.resultado));

    limparCampos();
}

function carregar(){
    const rowH = document.createElement("tr");
    rowH.setAttribute("id","cabecalho");

    for (let i = 0; i < 4; i++) {
        const cellH = document.createElement("th");
        switch (i) {
            case 0:
                cellText = document.createTextNode(`Aluno`);
                break;
            case 1:
                cellText = document.createTextNode(`Total`);
                break;
            case 2:
                cellText = document.createTextNode(`Media`);
                break;
            case 3:
                cellText = document.createTextNode(`Resultado`);
                break;
        }
        cellH.appendChild(cellText);
        rowH.appendChild(cellH);
    }
    tblHead.appendChild(rowH);
    tbl.appendChild(tblHead);
    document.getElementById("conteudo").appendChild(tbl);

    console.log("local storage tamanho: " + localStorage.length);
    console.log(localStorage);

    let boletim = JSON.parse(localStorage.getItem("boletim"));

    if (boletim != null){
        console.log("valor variável boletim: " + boletim);
        console.log("tamanho variável boletim: " + boletim.length);

        let tamanho = boletim.length;
        for(let j = 0; j < tamanho; j++){

            console.log("Teste: " + boletim[j].Aluno);

            reload(boletim[j].Aluno,boletim[j].Total,boletim[j].Media,boletim[j].Resultado);
        }
    }

}

function reload(aluno, total, media, resultado){
    for (let i = 0; i < 1; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
            const cell = document.createElement("td");
            switch (j) {
                case 0:
                    cellText = document.createTextNode(`${aluno}`);
                    break;
                case 1:
                    cellText = document.createTextNode(`${total}`);
                    break;
                case 2:
                    cellText = document.createTextNode(`${media}`);
                    break;
                case 3:
                    cellText = document.createTextNode(`${resultado}`);
                    break;
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.getElementById("conteudo").appendChild(tbl);
}

function gravar() {
    console.log("entrou no gravar")
    let string = JSON.stringify(arr);
    localStorage.setItem("boletim", string);
}

function apagar() {
    localStorage.clear();
}