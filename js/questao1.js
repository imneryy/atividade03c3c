//Selecionaod os elementos na tela

const lado1 = document.querySelector("#lado1");
const lado2 = document.querySelector("#lado2");
const lado3 = document.querySelector("#lado3");
const resultado = document.querySelector("#resultado");
const btntriangulo = document.querySelector("#calcular");
const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");

lado1.onblur = () => {
  if (lado1.value == "") {
    l1.style = "color: #aa0044";
    lado1.style = "border-color: #aa0044";
  } else {
    l1.style = "color: #000000";
    lado1.style = "border-color: #000000";
  }
};
lado2.onblur = () => {
  if (lado2.value == "") {
    l2.style = "color: #aa0044";
    lado2.style = "border-color: #aa0044";
  } else {
    l2.style = "color: #000000";
    lado2.style = "border-color: #000000";
  }
};
lado3.onblur = () => {
  if (lado3.value == "") {
    l3.style = "color: #aa0044";
    lado3.style = "border-color: #aa0044";
  } else {
    l3.style = "color: #000000";
    lado3.style = "border-color: #000000";
  }
};

btntriangulo.onclick = () => {
  if (lado1.value || lado2.value || lado3.value === "") {
  }
  resultado.value = trianguloType(lado1.value, lado2.value, lado3.value);
  console.log(lado1);
};

const trianguloType = (lado1, lado2, lado3) => {
  console.log(lado1, lado2, lado3);
  if (lado1 === lado2 && lado2 === lado3) return "Equilátero";
  else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3)
    return "Isósceles";
  else return "Escaleno";
};
