const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const btnbhaskara = document.querySelector("#calcular-bhaskara");
const la = document.querySelector("#la");
const lb = document.querySelector("#lb");
const lc = document.querySelector("#lc");
const resx1 = document.querySelector("#resx1");
const resx2 = document.querySelector("#resx2");

a.onblur = () => {
  if (a.value == "") {
    la.style = "color: #aa0044";
    a.style = "border-color: #aa0044";
  } else {
    la.style = "color: #000000";
    a.style = "border-color: #000000";
  }
};
b.onblur = () => {
  if (b.value == "") {
    lb.style = "color: #aa0044";
    b.style = "border-color: #aa0044";
  } else {
    lb.style = "color: #000000";
    b.style = "border-color: #000000";
  }
};
c.onblur = () => {
  if (c.value == "") {
    lc.style = "color: #aa0044";
    c.style = "border-color: #aa0044";
  } else {
    lc.style = "color: #000000";
    c.style = "border-color: #000000";
  }
};

btnbhaskara.onclick = () => {
  console.log(a, b, c, resx1, resx2);
  const resultadoEquacao = bhaskara(a.value, b.value, c.value);
  if (resultadoEquacao) {
    resx1.value = resultadoEquacao.x1;
    resx2.value = resultadoEquacao.x2;
  }
  console.log(a, b, c, resx1, resx2);
};

function bhaskara(a, b, c) {
  const delta = b * b - 4 * a * c;

  if (!a || !b || !c) {
    alert("Insira os valores de a, b e c");
  } else if (a == 0) {
    alert("O valor de <strong>a</strong>, deve ser diferente de 0");
  } else if (delta < 0) {
    alert("Sem raízes reais");
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { x1, x2 };
  }
}
