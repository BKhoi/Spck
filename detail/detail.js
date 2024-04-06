const btn = document.getElementByIdO("btn");
btn.onclick = function (event) {
  event.preventDefault();
  location.replace("../pay/pay.html");
};
