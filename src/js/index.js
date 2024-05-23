const dadosNum = document.getElementById("idConselho")
const dadosDescricao = document.getElementById("descripConselho")
const dadosBtn = document.getElementById("sort")

async function PegarDado(){
  try{
    const resposta = await fetch("https://api.adviceslip.com/advice")

    if(!resposta.ok){
      throw new Error("Ocorreu um erro ao tentar buscar as informações da API",err)
    }

    const respostaFetch = await resposta.json()
    const dadosId = `Advice #${respostaFetch.slip.id}`
    const dadosTexto = `"${respostaFetch.slip.advice}"`

    dadosNum.innerText = dadosId
    dadosDescricao.innerText = dadosTexto

  }catch(err){
    console.error("Erro ao tentar buscar as informações da API", err);
  }
}

dadosBtn.addEventListener('click', PegarDado);

PegarDado()


 

//Primeiro push

/*
const btn = document.querySelector("#sort");

async function dados() {
  const url = "https://api.adviceslip.com/advice";
  const resposta = await fetch(url);
  return await resposta.json();
}

async function injetarDados() {
  const informacoes = await dados();
  const info = informacoes.slip.id;
  document.getElementById("idConselho").innerText = `Advice #${info}`;
  const texto = informacoes.slip.advice;
  document.getElementById("descripConselho").innerText = texto;
}


document.getElementById("sort").addEventListener("click",()=>{
    injetarDados()
})*/
