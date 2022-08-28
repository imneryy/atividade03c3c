const luidymoura = document.querySelector("#luidy-moura");
const btnlm = document.querySelector("#calcular-lm");
const resultadolm = document.querySelector("#resultado-lm");

luidymoura.onblur = () => {
  if (lado2.value == "") {
    llm.style = "color: #aa0044";
    luidymoura.style = "border-color: #aa0044";
  } else {
    luidymoura.style = "color: #000000";
    llm.style = "border-color: #000000";
  }
};

btnlm.onclick = () => {
  resultadolm.innerText = LM(luidymoura.value);
};

const LM = (luidymoura) => {
  let resultadolm = [];

  for (let i = 1; i <= luidymoura; i++) {
    if (i % 5 == 0 && !(i% 9 == 0)) {
      resultadolm.push("Luidy");
    }

    if (i % 9 == 0 && !(i % 5 == 0)) {
      resultadolm.push("Moura");
    }

    if (i % 5 == 0 && (i % 9 == 0)) {
      resultadolm.push("LuidyMoura");
    }

    if (i % 5 !== 0 && i % 9 !== 0) {
      resultadolm.push(i);
    }
  }
  return resultadolm;
};