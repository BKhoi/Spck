const products = [
  {
    name: "Graphics Drawing Tablet",
    price: 60,
    image: "img/tablet12.jpg",
    instock: 8,
    desc: "An affordable Art tablet with a pen and a pre-installed Drawing and Animation apps for those who want to draw",
  },
  {
    name: "Drawing Tablet with Screen",
    price: 205,
    image: "img/tablet2.jpg",
    instock: 5,
    desc: "It works with major graphics software like Photoshop, Painter, Illustrator, Clip Studio, SAI and more.",
  },
  {
    name: "PicassoTab Drawing Tablet",
    price: 189,
    image: "img/tablet3.jpg",
    instock: 7,
    desc: " The IPS HD screen makes crystal clear pictures and the 64GB disk allows downloading thousands of free apps from the play store.",
  },
];

const productItems = document.getElementById("products");
function getProducts() {
  for (let i = 0; i < products.length; i++) {
    productItems.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
        <img
          src="${products[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title name">${products[i].name}</h5>
          <div class="card-text">
            <p>
            ${products[i].desc}
            </p>
            <p id="price">Price: $${products[i].price}</p>
            <p id="instock">In Stock: $${products[i].instock}</p>
          </div>
          <a href="./detail/detail.html" class="btn btn-primary"
            >Go somewhere</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts();

document.getElementById("search").addEventListener("click", () => {
  let valueSearch = document.getElementById("search-input").value.trim();
  let cards = document.querySelectorAll(".card");
  let names = document.querySelectorAll(".name");

  for (let i = 0; i < cards.length; i++) {
    let aProductName = names[i].innerHTML;

    if (aProductName.includes(valueSearch)) {
      cards[i].classList.remove("hide");
      console.log(cards[i]);
    } else {
      cards[i].classList.add("hide");
    }
  }
});
