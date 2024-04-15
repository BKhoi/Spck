const tablets = [
  {
    name: "Graphics Drawing Tablet",
    price: 60,
    image: "../img/tablet12.jpg",
    instock: 8,
    desc: "An affordable Art tablet with a pen and a pre-installed Drawing and Animation apps for those who want to draw",
  },
  {
    name: "Drawing Tablet with Screen",
    price: 205,
    image: "../img/tablet2.jpg",
    instock: 5,
    desc: "It works with major graphics software like Photoshop, Painter, Illustrator, Clip Studio, SAI and more.",
  },
  {
    name: "PicassoTab Drawing Tablet",
    price: 189,
    image: "../img/tablet3.jpg",
    instock: 7,
    desc: " The IPS HD screen makes crystal clear pictures and the 64GB disk allows downloading thousands of free apps from the play store.",
  },
];

const pens = [
  {
    name: "Micro Fineliner Drawing Art Pens",
    price: 20,
    image: "../img/pen1.jpg",
    instock: 3,
    desc: "The professional micro pen kit contains assorted types of pen tips from 0.2mm to 3.0mm, plus a brush tip.",
  },
  {
    name: "iBayam Journal Planner Pens Colored Pens",
    price: 25,
    image: "../img/pen2.jpg",
    instock: 5,
    desc: "Smart Fineliner Color Pens Set 18 Unique Colors, 0.38 mm Fine Point Colored Pens, With water-based ink.",
  },
  {
    name: "YISAN 12 Art Black Drawing Pens Set",
    price: 19,
    image: "../img/pen3.webp",
    instock: 9,
    desc: "Perfect as Journal Pens, Planner Pens, Journaling Pens, Calligraphy Pens, Cool Pens, Cute School Pens",
  },
];

const sketchbooks = [
  {
    name: "Reflexions Hardbound Sketch Books",
    price: 40,
    image: "../img/skb1.jpg",
    instock: 3,
    desc: "Are expertly bound journals with premium acid-free 110 gram (70 lb) weight light cream colored paper.",
  },
  {
    name: "Sketchbook Fliptop Landscape Spiral Hardcover",
    price: 35,
    image: "../img/skb22.jpg",
    instock: 6,
    desc: "This beautiful medium-size 7 x 10 sketchbook has a spiral binding, a flip-top format and Kraft cover with removable sticker.",
  },
  {
    name: "Artist's Thick Paper Sketchbook Hardcover",
    price: 49,
    image: "../img/skb333.jpg",
    instock: 2,
    desc: "Are the sketchbooks of choice for amateur and professional artists alike. Perforated pages make it easy to give as a gift!",
  },
];

const productItems = document.getElementById("tablets");
function getProducts() {
  for (let i = 0; i < tablets.length; i++) {
    productItems.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../detail/detail.html">
        <img
          src="${tablets[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h5 class="card-title name">${tablets[i].name}</h5>
          <div class="card-text">
            <p>
            ${tablets[i].desc}
            </p>
            <p id="price">Price: $${tablets[i].price}</p>
            <p id="instock">In Stock: ${tablets[i].instock}</p>
          </div>
          <a href="./detail/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts();

const productItems2 = document.getElementById("pens");
function getProducts2() {
  for (let i = 0; i < pens.length; i++) {
    productItems2.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../detail/detail.html">
        <img
          src="${pens[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h5 class="card-title name">${pens[i].name}</h5>
          <div class="card-text">
            <p>
            ${pens[i].desc}
            </p>
            <p id="price">Price: $${pens[i].price}</p>
            <p id="instock">In Stock: ${pens[i].instock}</p>
          </div>
          <a href="./detail/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts2();

const productItems3 = document.getElementById("sketchbooks");
function getProducts3() {
  for (let i = 0; i < sketchbooks.length; i++) {
    productItems3.innerHTML += `
      <div class="col-md-4 col-12">
      <div class="card" style="width: 18rem">
      <a href="../detail/detail.html">
        <img
          src="${sketchbooks[i].image}"
          class="card-img-top product-img"
          alt="..."
        />
        </a>
        <div class="card-body">
          <h5 class="card-title name">${sketchbooks[i].name}</h5>
          <div class="card-text">
            <p>
            ${sketchbooks[i].desc}
            </p>
            <p id="price">Price: $${sketchbooks[i].price}</p>
            <p id="instock">In Stock: ${sketchbooks[i].instock}</p>
          </div>
          <a href="./detail/detail.html" class="btn detail-btn"
            >See more information</a
          >
        </div>
      </div>
    </div>
      `;
  }
}
getProducts3();

document.getElementById("search").addEventListener("click", (event) => {
  event.preventDefault();
  let valueSearch = document.getElementById("search-input").value.trim();
  let cards = document.querySelectorAll(".card");
  let names = document.querySelectorAll(".name");

  for (let i = 0; i < cards.length; i++) {
    let aProductName = names[i].innerHTML;

    if (aProductName.includes(valueSearch)) {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
});
