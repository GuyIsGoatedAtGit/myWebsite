document.getElementById("btn1").onclick = () => {
  alert("First button");
};

document.getElementById("btn2").onclick = () => {
  alert("Second button");
};
const secretBtn1 = document.getElementById("secretBtn1");

if (secretBtn1) {
  secretBtn1.onclick = () => {};
}

const returnBtn1 = document.getElementById("returnBtn1");

if (returnBtn1) {
  returnBtn1.onclick = () => {};
}
const secretBtn2 = document.getElementById("secretBtn2");

if (secretBtn2) {
  secretBtn2.onclick = () => {};
}

const returnBtn2 = document.getElementById("returnBtn2");

if (returnBtn2) {
  returnBtn2.onclick = () => {};
}
