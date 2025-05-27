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
  const moeda = document.getElementById("moeda").value.trim().toLowerCase();
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

  const pagar = saldo / cambio + (saldo / cambio) * 0.09;
  document.getElementById("resultadoPagar").textContent = `Total a pagar: ${pagar.toFixed(2)} ${moeda}`;
}
