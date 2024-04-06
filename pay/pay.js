const payBtn = document.getElementById("pay-btn");
const cardName = document.getElementById("card-name");
const expiryDate = document.getElementById("expiry-date");
const cvv = document.getElementById("cvv");

pay.onsubmit = function (event) {
  event.preventDefault();
  if (
    cardName.value.trim().length == 0 ||
    expiryDate.value.trim().length == 0 ||
    cvv.value.trim().length == 0
  ) {
    alert("Fill out the empty blanks");
  } else {
    alert("Item purchased successfully");
  }
};
