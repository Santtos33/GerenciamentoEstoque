const form = document.getElementById("form-produto");
const tabela = document.querySelector("#tabela-estoque tbody");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const validade = document.getElementById("validade").value;

  adicionarProduto({ nome, quantidade, validade });
  form.reset();
});

function adicionarProduto(produto) {
  const tr = document.createElement("tr");

  const dataValidade = new Date(produto.validade);
  const hoje = new Date();
  const diasRestantes = (dataValidade - hoje) / (1000 * 60 * 60 * 24);

  if (produto.quantidade <= 3 || diasRestantes < 7) {
    tr.classList.add("alerta");
  }

  tr.innerHTML = `
    <td>${produto.nome}</td>
    <td>${produto.quantidade}</td>
    <td>${produto.validade}</td>
    <td>
      <button onclick="removerProduto(this)">Remover</button>
    </td>
  `;
  tabela.appendChild(tr);
}

function removerProduto(botao) {
  botao.closest("tr").remove();
}
