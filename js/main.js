// product objects
const product1 = {
  title: "sneakers",
  description: "very nice sneakers",
  price: 2500,
  img: "./images/pexels-mnz-1598505.jpg",
  id: 56125,
};

const product2 = {
  title: "Nikeee",
  description: "modern wear shoes",
  price: 3500,
  id: 6362,
  img: "./images/revolt-164_6wVEHfI-unsplash.jpg",
};

const product3 = {
  title: "Rubber shoes",
  description: "Those rubbers everyone wants to wear",
  price: 4500,
  id: 6748,
  img: "./images/pexels-mnz-1598508.jpg",
};

// pass in values to product
const Oneimage = (document.getElementById("cardOneImage").src = product1.img);
const Onetitle = (document.getElementById("cardOnetitle").innerText =
  product1.title);
const Onedescription = (document.getElementById(
  "cardOnedescription"
).innerText = product1.description);
const Oneprice = (document.getElementById("cardOnePrice").innerText =
  product1.price);

const Twoimage = (document.getElementById("cardtwoImage").src = product2.img);
const Twotitle = (document.getElementById("cardtwotitle").innerText =
  product2.title);
const Twodescription = (document.getElementById(
  "cardtwodescription"
).innerText = product2.description);
const Twoprice = (document.getElementById("cardtwoPrice").innerText =
  product2.price);

const Threeimage = (document.getElementById("cardthreeImage").src =
  product3.img);
const Threetitle = (document.getElementById("cardthreetitle").innerText =
  product3.title);
const Threedescription = (document.getElementById(
  "cardthreedescription"
).innerText = product3.description);
const Threeprice = (document.getElementById("cardthreePrice").innerText =
  product3.price);

// handle onclick for each Card
document.getElementById("card1").onclick = function () {
  window.location.href = "product.html" + "?" + product1.id;
};
document.getElementById("card2").onclick = function () {
  window.location.href = "product.html" + "?" + product2.id;
};

document.getElementById("card3").onclick = function () {
  window.location.href = "product.html" + "?" + product3.id;
};
