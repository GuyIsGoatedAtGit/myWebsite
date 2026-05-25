document.getElementById("btn1").onclick = () => {
  alert("First button");
};

document.getElementById("btn2").onclick = () => {
  alert("Second button");
};
const secretBtn = document.getElementById("secretBtn");

if (secretBtn) {
  secretBtn.onclick = () => {
    alert("Home clicked");
  };
}

const returnBtn = document.getElementById("returnBtn");

if (returnBtn) {
  returnBtn.onclick = () => {
    alert("About clicked");
  };
}
