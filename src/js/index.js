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
})
injetarDados()
