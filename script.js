function showSection(sectionId) {
  document.getElementById("carregar").classList.add("hidden");
  document.getElementById("pagar").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

function calcularCarregar() {
  const cambio = parseFloat(document.getElementById("cambio1").value);
  const valor = parseFloat(document.getElementById("valorPagar").value);
  const moeda = document.getElementById("moeda1").value.trim().toLowerCase();

  if (!moeda || isNaN(cambio) || isNaN(valor)) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (moeda !== "euro" && moeda !== "dolar" && moeda !== "kz") {
    alert("Por favor, informe a moeda como: euro, dolar ou kz.");
    return;
  }

  const carregar = cambio * valor * 1.11;
  const pagar = carregar * 0.02 * 1.14 + carregar;

  document.getElementById("resultadoCarregar1").textContent = `Deve fazer carregamento de: ${carregar.toFixed(3)}kz.`;

  document.getElementById("resultadoCarregar2").textContent = `Para isso precisa ter na conta: ${pagar.toFixed(2)}kz.`;
  
  document.getElementById("resultadoCarregar3").textContent = `Para compra de: ${valor} ${moeda}`;
}

function calcularPagar() {
  const moeda = document.getElementById("moeda2").value.trim().toLowerCase();
  const cambio = parseFloat(document.getElementById("cambio2").value);
  const saldo = parseFloat(document.getElementById("saldoCartao").value);

  if (!moeda || isNaN(cambio) || isNaN(saldo)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  if (moeda !== "euro" && moeda !== "dolar" && moeda !== "kz") {
    alert("Por favor, informe a moeda como: euro, dolar ou kz.");
    return;
  }

  const pagar = saldo / (cambio * 1.11);
  document.getElementById("resultadoPagar").textContent = `Compra possível é de: ${pagar.toFixed(2)} ${moeda}`;
}
