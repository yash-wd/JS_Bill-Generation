var starters = 500,
  main_Course = 1500,
  indian = 900,
  chinese = 650,
  desserts = 450;
var starters_q = 0,
  main_Course_q = 0,
  indian_q = 0,
  chinese_q = 0,
  desserts_q = 0;
var name = "",
  email = "";
var startersBill = "",
  main_CourseBill = "",
  indianBill = "",
  chineseBill = "",
  dessertsBill = "";

document.getElementById("name").addEventListener("keyup", function () {
  // name = document.getElementById("name").value;
  document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function () {
  // name = document.getElementById("name").value;

  document.getElementById("email2").innerHTML = this.value;
});

document.getElementById("starters").addEventListener("keyup", function () {
  if (this.value == "" || this.value == 0) {
    startersBill = "";
    starters_q = 0;
    showBill();
  } else {
    starters_q = this.value;
    startersBill =
      "<tr><td>starters</td><td>Rs. " +
      starters +
      "</td><td>" +
      starters_q +
      "</td><td>" +
      starters * starters_q +
      "</td></tr>";
    showBill();
  }
});

document.getElementById("main_Course").addEventListener("keyup", function () {
  if (this.value == "" || this.value == 0) {
    main_CourseBill = "";
    main_Course_q = 0;
    showBill();
  } else {
    main_Course_q = this.value;
    main_CourseBill =
      "<tr><td>main_Course</td><td>Rs. " +
      main_Course +
      "</td><td>" +
      main_Course_q +
      "</td><td>" +
      main_Course * main_Course_q +
      "</td></tr>";
    showBill();
  }
});

document.getElementById("indian").addEventListener("keyup", function () {
  if (this.value == "" || this.value == 0) {
    indianBill = "";
    indian_q = 0;
    showBill();
  } else {
    indian_q = this.value;
    indianBill =
      "<tr><td>indian</td><td>Rs. " +
      indian +
      "</td><td>" +
      indian_q +
      "</td><td>" +
      indian * indian_q +
      "</td></tr>";
    showBill();
  }
});

document.getElementById("chinese").addEventListener("keyup", function () {
  if (this.value == "" || this.value == 0) {
    chineseBill = "";
    chinese_q = 0;
    showBill();
  } else {
    chinese_q = this.value;
    chineseBill =
      "<tr><td>chinese</td><td>Rs. " +
      chinese +
      "</td><td>" +
      chinese_q +
      "</td><td>" +
      chinese * chinese_q +
      "</td></tr>";
    showBill();
  }
});

document.getElementById("desserts").addEventListener("keyup", function () {
  if (this.value == "" || this.value == 0) {
    dessertsBill = "";
    desserts_q = 0;
    showBill();
  } else {
    desserts_q = this.value;
    dessertsBill =
      "<tr><td>desserts</td><td>Rs. " +
      desserts +
      "</td><td>" +
      desserts_q +
      "</td><td>" +
      desserts * desserts_q +
      "</td></tr>";
    showBill();
  }
});

function showBill() {
  document.getElementById("bill").innerHTML =
    startersBill + main_CourseBill + indianBill + chineseBill + dessertsBill; //table statement

  var amount =
    starters * starters_q +
    main_Course * main_Course_q +
    indian * indian_q +
    chinese * chinese_q +
    desserts * desserts_q;

//   console.log(amount);

  var gst = parseInt(amount * 0.18);

  var total_amount = parseInt(amount + gst);

//   console.log(total_amount);

  document.getElementById("amount").innerHTML = parseInt(amount);
  document.getElementById("gst").innerHTML = parseInt(gst);
  document.getElementById("total").innerHTML = parseInt(total_amount);

  if (total_amount <= 2000) {
    let x = total_amount + 200;
    // console.log(x);
    var tip = document.getElementById("tip");
    tip.innerHTML = " " + x;
  } else if (total_amount > 2000) {
    let y = total_amount + 500;
    // console.log(y);
    var tip = document.getElementById("tip");
    tip.innerHTML = " " + y;
  }
}