alert("welcome:to the fresh fruits website");

function functiona() {
  document.getElementById(
    "link"
  ).innerHTML = `Fruits are an excellent source of essential vitamins and minerals,and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.`;
  document.getElementById("link1").innerHTML = "read less";
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("link");
  var btnText = document.getElementById("link1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// function functionb() {
//   document.getElementById("link1").innnerHTML =
//     "Fruits are an excellent source of essential vitamins and minerals,and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.";
// }
// function functionc() {
//   let con = prompt("how many kg you can buy it?", 1);
//   const appleprice = con * 200;
//   alert(`your order price is ${appleprice}`);
//   document.getElementById("cart1").innerHTML = alert(
//     "your item is added to the cart"
//   );
// }
// document.querySelector("mango1");
// document.addEventListener("click", fruitmango);

// function fruitmango() {
//   let num = prompt("enter the number you can buy it?");
//   let total = num * 70;
//   alert(`you can buy ${num} apples and total is ${total}`);
// }

window.onload = () => {
  const cart = document.getElementById("cart_items_count");
  const allItems = JSON.parse(localStorage.getItem("cart"));
  for (let i = 0; i < allItems?.length; i++) {
    console.log(allItems[i]);
  }
  if (!localStorage["cart"]) {
    localStorage.setItem("cart", JSON.stringify({}));
  } else {
    updateCart();
  }
};

const updateCart = () => {
  const data = JSON.parse(localStorage.getItem("cart"));
  console.log(data);
  document.getElementById("cart_items_count").innerHTML = `${
    Object.keys(data).length
  }`;
};
const arr = [];

function functiond(a, b, image) {
  let item = a;
  let item1 = b;

  // var x = document.getElementById("inumber").value;

  // for(i=0;i<data)
  // var y = document.getElementById("i1number").value;

  //

  const finalitem = document.getElementById(a).value;

  console.log(finalitem);
  // alert(finalitem);
  let total = finalitem * b;

  const pair = { [item]: finalitem, total };

  const prev = JSON.parse(localStorage.getItem("cart"));
  console.log(prev);
  localStorage.setItem(
    "cart",
    JSON.stringify({ ...prev, [item]: { count: finalitem, image, total } })
  );
  console.log(localStorage);

  updateCart();

  // alert(` fruit ${a} quantity is ${finalitem} and your total is${total}`);

  // alert("your item is added sucessfuly");
  // location.replace("register.html");
}

// function cart123() {
//   alert(arr);
//   alert(localStorage.cart);
// }
//
// let c = {
//   coconut: "8",
// };
//cart functionality

if (1 >= 0) {
  function func() {
    // console.log("print");
    // console.log(arr);
    // if (abc.length >= 0) {
    //   document.getElementById("myimage").src = "mango.jpg";
    // }
  }
}
// func();
// if (arr.length >= 0) {
//   console.log("you get it");
// }
// function callby() {}
// if (arr[0].coconut >= 0) {
//   console.log("yes you are great");
// }
// switch (arr[i] != 0) {
//   case coconut: {
//     document.querySelectorById("hello").style.src = "coconut.jpg";
//   }
//   case papaya: {
//     document.querySelectorById("hello").style.src = "papya.jpg";
//   }
// }
