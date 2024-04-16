const botaoMostrarProjeto = document.querySelector(".btn-mostrar-projetos");
const botaoVoltarProjeto = document.querySelector(".btn-voltar-projetos");
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");
const chk = document.getElementById("chk");

let projetosAtivados = [];

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
        projetosAtivados.push(projetoInativo)
    });

    botaoMostrarProjeto.classList.add("remover");
    botaoVoltarProjeto.classList.add("adicionar");
};

function voltarProjetos() {
    projetosAtivados.forEach(projetoAtivado => {
        projetoAtivado.classList.remove("ativo");
    });

    projetosAtivados = [];
    
    botaoMostrarProjeto.classList.remove("remover");
    botaoVoltarProjeto.classList.remove("adicionar");
};

botaoMostrarProjeto.addEventListener("click", mostrarMaisProjetos);
botaoVoltarProjeto.addEventListener("click", voltarProjetos);

chk.addEventListener("click", () => {
    document.body.classList.toggle("white");
});