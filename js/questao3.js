const nota = document.querySelector("#nota");
const btnnota = document.querySelector("#calcular-nota");
const resultadonota = document.querySelector("#resultado-nota");
const lnota = document.querySelector("#lnota");

nota.onblur = () => {
  if (lado2.value == "") {
    lnota.style = "color: #aa0044";
    nota.style = "border-color: #aa0044";
  } else {
    lnota.style = "color: #000000";
    nota.style = "border-color: #000000";
  }
};

nota.onchange = (event) => {
  const numberNota = parseInt(event.target.value);
  if (numberNota > 100) {
    nota.value = 100;
  } else if (numberNota < 0) {
    nota.value = 0;
  }
};

btnnota.onclick = () => {
  resultadonota.value = calculoNota(nota.value);
};

const calculoNota = (nota) => {
  if (nota === "") {
    alert("Coloque um número no campo nota!");
    return;
  }
  const notaNumber = parseInt(nota);
  const nextDivisibleNumber = notaNumber - (notaNumber % 5) + 5;
  if (notaNumber < 40) return "Reprovado";
  if (nextDivisibleNumber - notaNumber < 3) {
    const notaArredondada = nextDivisibleNumber;
    return `Aprovado com: ${notaArredondada} pontos!`;
  } else {
    return `Aprovado com: ${notaNumber} pontos!`;
  }
};
