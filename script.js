function showSection(sectionId) {
  document.getElementById("carregar").classList.add("hidden");
  document.getElementById("pagar").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

function calcularCarregar() {
  const cambio = parseFloat(document.getElementById("cambio1").value);
  const valor = parseFloat(document.getElementById("valorPagar").value);

  if (isNaN(cambio) || isNaN(valor)) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const pagar = cambio * valor + (cambio * valor) * 0.09;
  const carregar = pagar * 0.02 + (pagar * 0.02) * 0.15 + pagar;

  document.getElementById("resultadoCarregar").textContent = `Total a carregar: ${carregar.toFixed(2)} kz`;
}

function calcularPagar() {
  const moeda = document.getElementById("moeda").value.toLowerCase();
  const cambio = parseFloat(document.getElementById("cambio2").value);
  const saldo = parseFloat(document.getElementById("saldoCartao").value);

  if (isNaN(cambio) || isNaN(saldo) || !moeda) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (["euro", "dolar", "kz"].includes(moeda)) {
    const pagar = cambio * saldo + (cambio * saldo) * 0.09;
    document.getElementById("resultadoPagar").textContent = `Total a pagar: ${pagar.toFixed(2)} ${moeda}`;
  } else {
    alert("Por favor, preencha com 'euro', 'dolar' ou 'kz'.");
  }
}
