const price = document.getElementById("cardPrice");
const description = document.getElementById("cardDescription");
const image = document.getElementById("cardImg");
const title = document.getElementById("cardTitle");

//product objects
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

// receive data from url
const urlData = decodeURI(window.location.search).substring(1);

// Counties available
const Nairobi = {
  name: "nairobi",
  zones: [
    "core CBD",
    "Peri-CBD",
    "west of tom mboya St",
    "East of Tom Mboya St",
  ],
};
const Kisumu = {
  name: "kisumu",
  zones: ["Township", "east kolwa", "central kolwa", "west kolwa"],
};

const allZones = {
  firstZone: Nairobi.zones[0],
  secondZone: Nairobi.zones[1],
  thirdZone: Nairobi.zones[2],
  forthZone: Nairobi.zones[3],
  fifthZone: Kisumu.zones[0],
  sixthZone: Kisumu.zones[1],
  seventhZone: Kisumu.zones[2],
  eigth: Kisumu.zones[3],
};

// zones data

const zonesData = [
  {
    name: allZones.firstZone,
    deliveryFee: 200,
    deliveryDay: "20/5/2022",
  },
  {
    name: allZones.secondZone,
    deliveryFee: 500,
    deliveryDay: "3/2/2023",
  },
  {
    name: allZones.thirdZone,
    deliveryFee: 100,
    deliveryDay: "1/7/2022",
  },
  {
    name: allZones.forthZone,
    deliveryFee: 99,
    deliveryDay: "2/3/2022",
  },
  {
    name: allZones.fifthZone,
    deliveryFee: 50,
    deliveryDay: "1/2/2022",
  },
  {
    name: allZones.sixthZone,
    deliveryFee: 300,
    deliveryDay: "5/2/2022",
  },
  {
    name: allZones.seventhZone,
    deliveryFee: 45,
    deliveryDay: "4/8/2022",
  },
  {
    name: allZones.eigth,
    deliveryFee: 150,
    deliveryDay: "4/10/2022",
  },
];

// populate data to product
if (product1.id == urlData) {
  price.innerText = product1.price;

  image.src = product1.img;
  description.innerText = product1.description;
  title.innerText = product1.title;
}

if (product2.id == urlData) {
  price.innerText = product2.price;
  image.src = product2.img;
  description.innerText = product2.description;
  title.innerText = product2.title;
}
if (product3.id == urlData) {
  price.innerText = product3.price;
  image.src = product3.img;
  description.innerText = product3.description;
  title.innerText = product3.title;
}
document.getElementById("paypal-button-container").style.display = "none";
document.getElementById("checkout").style.display = "none";
document.getElementById("more-info").style.display = "none";
const totalAmount = document.getElementById("total");
document.getElementById("loc").onchange = function () {
  const value = document.getElementById("loc").value;

  const deliveryInfo = document.getElementById("delivery-info");
  const pickUpInfo = document.getElementById("pickup-info");
  if (value == Nairobi.name) {
    let x;
    let y;
    let z;
    let p;
    x = document.getElementById("op1").value = Nairobi.zones[0];
    document.getElementById("op1").innerText = Nairobi.zones[0];

    y = document.getElementById("op2").value = Nairobi.zones[1];
    document.getElementById("op2").innerText = Nairobi.zones[1];

    z = document.getElementById("op3").value = Nairobi.zones[2];
    document.getElementById("op3").innerText = Nairobi.zones[2];

    p = document.getElementById("op4").value = Nairobi.zones[3];
    document.getElementById("op4").innerText = Nairobi.zones[3];

    // populate data

    document.getElementById("zones").onchange = function () {
      document.getElementById("paypal-button-container").innerHTML = "";
      document.getElementById("checkout").style.display = "block";
      document.getElementById("more-info").style.display = "block";
      document.getElementById("paypal-button-container").style.display = "none";
      const zneValue = document.getElementById("zones").value;
      let filteredData;
      if (zneValue) {
        filteredData = zonesData.filter((zone) => zone.name == zneValue);
        const { deliveryDay, deliveryFee } = filteredData[0];

        let amount;
        amount = parseInt(price.innerText) + deliveryFee;

        pay(amount);
        totalAmount.innerText = "Total amount is " + amount;
        deliveryInfo.innerText =
          "The delivery day for this product will be on " + deliveryDay;
        pickUpInfo.innerText = "product deliver fee is " + deliveryFee;
      }
    };
  } else if (value == Kisumu.name) {
    let x;
    let y;
    let z;
    let p;
    x = document.getElementById("op1").value = Kisumu.zones[0];
    document.getElementById("op1").innerText = Kisumu.zones[0];

    y = document.getElementById("op2").value = Kisumu.zones[1];
    document.getElementById("op2").innerText = Kisumu.zones[1];

    z = document.getElementById("op3").value = Kisumu.zones[2];
    document.getElementById("op3").innerText = Kisumu.zones[2];

    p = document.getElementById("op4").value = Kisumu.zones[3];
    document.getElementById("op4").innerText = Kisumu.zones[3];
    // check the zone mathes its data

    document.getElementById("zones").onchange = function () {
      document.getElementById("paypal-button-container").innerHTML = "";
      document.getElementById("checkout").style.display = "block";
      document.getElementById("paypal-button-container").style.display = "none";
      document.getElementById("more-info").style.display = "block";
      const zneValue = document.getElementById("zones").value;
      let filteredData;
      if (zneValue) {
        filteredData = zonesData.filter((zone) => zone.name == zneValue);
        const { deliveryDay, deliveryFee } = filteredData[0];
        let amount;
        amount = parseInt(price.innerText) + deliveryFee;
        pay(amount);

        totalAmount.innerText = amount;
        deliveryInfo.innerText =
          "The delivery day for this product will be on " + deliveryDay;
        pickUpInfo.innerText = "product deliver fee is ksh " + deliveryFee;
      }
    };

    // populate data
  }
};

document.getElementById("checkout").onclick = function () {
  document.getElementById("paypal-button-container").style.display = "block";
  document.getElementById("checkout").style.display = "none";
};

function pay(amount) {
  let converted;

  converted = amount / 100;

  paypal
    .Buttons({
      createOrder: function (data, actions) {
        // Set up the transaction
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: converted,
              },
            },
          ],
        });
      },
    })
    .render("#paypal-button-container");
}

// setInterval(() => {
//   pay();
// }, 1000);
