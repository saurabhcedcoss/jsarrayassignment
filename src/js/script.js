/* Create a javscript array to store the information 
of products given in the attachment and display them on a HTML page*/
const products = [
  {
    company: "Samsung",
    model: "Galaxy",
    memory: "64",
    price: "15000",
    quantity: "23",
    rating: "0",
  },
  {
    company: "Nokia",
    model: "S730",
    memory: "128",
    price: "22000",
    quantity: "16",
    rating: "0",
  },
  {
    company: "Xiaomi",
    model: "Note",
    memory: "32",
    price: "12000",
    quantity: "20",
    rating: "0",
  },
  {
    company: "Apple",
    model: "S12",
    memory: "64",
    price: "25000",
    quantity: "20",
    rating: "0",
  },
];
/*------------------ add new products to array--------------------*/
function addproduct() {
  products.forEach((element) => {
    if (element.company == document.getElementById("company").value) {
      alert("Product Already Exists");
    }
  });
  products.push({
    company: document.getElementById("company").value,
    model: document.getElementById("model").value,
    memory: document.getElementById("memory").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
  });
  document.getElementById("company").value = "";
  document.getElementById("model").value = "";
  document.getElementById("memory").value = "";
  document.getElementById("price").value = "";
}
//---------------------------add and display product table ends-------------------------------------
let checkvalue = 0;
let product_table =
  "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick='deleterow()'>Delete Items</button></th></tr>";
for (var i = 0; i < products.length; i++) {
  product_table += "<tr  style='border-bottom:1px grey solid;'>";
  product_table += "<td>" + products[i].company + "</td>";
  product_table += "<td>" + products[i].model + "</td>";
  product_table += "<td>" + products[i].memory + "</td>";
  product_table += "<td>" + products[i].price + "</td>";
  product_table += "<td>" + products[i].quantity + "</td>";
  product_table += "<td>" + products[i].rating + "</td>";
  product_table +=
    "<td><input type='checkbox' id='itemadded' value='" +
    checkvalue++ +
    "' onclick='getval(this)'></td>";
  product_table += "</tr>";
}
product_table += "</table>";
document.getElementById("productlist").innerHTML = product_table;
/*------------

Add a dropdown and a textbox with search button to search and display the 
product according to the attachment.

------------------------*/
function showcompanymodel() {
  document.getElementById("srchcompmodel").style.display = "flex";
}
function closecompanymodel() {
  document.getElementById("srchcompmodel").style.display = "none";
}
let prsearchcompany =
  "<select id='selected_compnay'><option>Select Company</option>";
for (var j = 0; j < products.length; j++) {
  prsearchcompany +=
    "<option value='" +
    products[j].company +
    "'>" +
    products[j].company +
    "</option>";
}
prsearchcompany += "</select>";
/*allow only available product to type in table*/
let productsearch =
  "<input list='availprods' id = 'searchmodel'><datalist id='availprods'>";
for (var k = 0; k < products.length; k++) {
  productsearch += "<option value='" + products[k].model + "'/>";
}
productsearch += "</datalist>";
document.getElementById("prcompany").innerHTML = prsearchcompany;
document.getElementById("productsearch").innerHTML = productsearch;
function filtercompany() {
  let srchcomp = document.getElementById("selected_compnay").value;
  let srchmodel = document.getElementById("searchmodel").value;
  const results = products.filter((element) => {
    return element.company === srchcomp && element.model === srchmodel;
  });
  let product_search_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < results.length; i++) {
    product_search_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_search_table += "<td>" + results[i].company + "</td>";
    product_search_table += "<td>" + results[i].model + "</td>";
    product_search_table += "<td>" + results[i].memory + "</td>";
    product_search_table += "<td>" + results[i].price + "</td>";
    product_search_table += "<td>" + products[i].quantity + "</td>";
    product_search_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_search_table += "</tr>";
  }

  product_search_table += "</table>";
  document.getElementById("search_productlist").innerHTML =
    product_search_table;
  document.getElementById("productlist").style.display = "none";
  document.getElementById("showall").style.display = "";
}
function showall() {
  document.getElementById("productlist").style.display = "";
  document.getElementById("search_productlist").style.display = "none";
  document.getElementById("showall").style.display = "none";
}
/*----------------------------------------------------------------

Inventory manager should be able to update the quantity of a products. Display the updated quantity

-------------------------------------------------------------------*/
// menu button and add update quantity option
function showquan() {
  //show update quantity option and populate product
  document.getElementById("updquanopt").style.display = "block";
  let prsearchproduct =
    "<select id='selected_product'><option>Select Product</option>";
  for (var j = 0; j < products.length; j++) {
    prsearchproduct +=
      "<option value='" +
      products[j].model +
      "'>" +
      products[j].model +
      "</option>";
  }
  prsearchproduct += "</select>";
  document.getElementById("prodforquan").innerHTML = prsearchproduct;
}
//closemenu
function closequanupd() {
  document.getElementById("updquanopt").style.display = "none";
}
//update and add quantity
function updquan() {
  // get the list using product filter
  let addQuantity = document.getElementById("quanadd").value;
  addQuantity = parseInt(addQuantity);
  let getproduct = document.getElementById("selected_product").value;
  let product_quan_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  products.forEach((element) => {
    if (element.model == getproduct) {
      let currentquantity = parseInt(element.quantity);
      let newquan = addQuantity + currentquantity;
      element.quantity = newquan;
      console.log(newquan);
      product_quan_table += "<tr  style='border-bottom:1px grey solid;'>";
      product_quan_table += "<td>" + element.company + "</td>";
      product_quan_table += "<td>" + element.model + "</td>";
      product_quan_table += "<td>" + element.memory + "</td>";
      product_quan_table += "<td>" + element.price + "</td>";
      product_quan_table += "<td>" + newquan + "</td>";
      product_quan_table +=
        "<td><input type='checkbox' id='itemadded' value='" +
        checkvalue++ +
        "' onclick='getval(this)'></td>";
      product_quan_table += "</tr>";
    }
  });
  product_quan_table += "</table>";
  document.getElementById("productlist").innerHTML = product_quan_table;
}
/*-------------------------------
 Take the details of a new product from the user as shown in the attachment 
and add it to the array after the second product. Use proper validations if required.

----------------------------*/
function showinsprod() {
  // get length of list
  let listdrop = "<option value='0'>At the Begining</option>";
  for (var listlength = 1; listlength <= products.length; listlength++) {
    listdrop +=
      "<option value='" + listlength + "'>" + listlength + "</option>";
  }
  document.getElementById("lengthoflist").innerHTML = listdrop;
  document.getElementById("listbtwshow").style.display = "inline-block";
}
function closelistbtw() {
  document.getElementById("listbtwshow").style.display = "none";
}
function addproductbtw() {
  let listindex = document.getElementById("lengthoflist").value;
  let productinlist = {
    company: document.getElementById("company").value,
    model: document.getElementById("model").value,
    memory: document.getElementById("memory").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
  };
  //add product to the given list index number
  products.splice(listindex, 0, productinlist);
  document.getElementById("company").value = "";
  document.getElementById("model").value = "";
  document.getElementById("memory").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("lengthoflist").value = "0";
  let product_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_table += "<td>" + products[i].company + "</td>";
    product_table += "<td>" + products[i].model + "</td>";
    product_table += "<td>" + products[i].memory + "</td>";
    product_table += "<td>" + products[i].price + "</td>";
    product_table += "<td>" + products[i].quantity + "</td>";
    product_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_table += "</tr>";
  }
  product_table += "</table>";
  document.getElementById("productlist").innerHTML = product_table;
  //add and display product table ends
}
/*-----------------

Filter and display the products with in a given price range.

----------------*/
function showfilter() {
  document.getElementById("filteroption").style.display = "inline";
}
function closefilter() {
  document.getElementById("filteroption").style.display = "none";
}
//  get input and dislplay filtered result
function filterbyprice() {
  var minPrice = document.getElementById("minprice").value;
  var maxPrice = document.getElementById("maxprice").value;
  // validate the prices to be different
  if (minPrice == maxPrice) {
    alert("Select Different Value");
  }
  //search between the range
  let product_range_table =
    "<h4> Product between Rs:" +
    minPrice +
    " and Rs: " +
    maxPrice +
    "</h4><table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  products.forEach((element) => {
    if (element.price >= minPrice && element.price <= maxPrice) {
      product_range_table += "<tr  style='border-bottom:1px grey solid;'>";
      product_range_table += "<td>" + element.company + "</td>";
      product_range_table += "<td>" + element.model + "</td>";
      product_range_table += "<td>" + element.memory + "</td>";
      product_range_table += "<td>" + element.price + "</td>";
      product_range_table += "<td>" + element.quantity + "</td>";
      product_range_table +=
        "<td><input type='checkbox' id='itemadded' value='" +
        checkvalue++ +
        "' onclick='getval(this)'></td>";
      product_range_table += "</tr>";
    }
  });
  product_range_table += "</table>";
  document.getElementById("productlist").innerHTML = product_range_table;
  document.getElementById("minprice").value = "";
  document.getElementById("maxprice").value = "";
}
/*-----------------------------------------

Customer should be able to mark the rating for a product that 
should be visible in the rating column.

-----------------------------*/
function showrateopt() {
  document.getElementById("rate_pr_drop").style.display = "flex";
  let prsearchproduct = "<select id='prtorate'><option>Select Product</option>";
  for (var j = 0; j < products.length; j++) {
    prsearchproduct +=
      "<option value='" +
      products[j].model +
      "'>" +
      products[j].model +
      "</option>";
  }
  prsearchproduct += "</select>";
  document.getElementById("prod_drop_down").innerHTML = prsearchproduct;
}
function closerateopt() {
  document.getElementById("rate_pr_drop").style.display = "none";
}
function rateprod() {
  var torateProduct = document.getElementById("prtorate").value;
  var ratingProuct = document.getElementById("ratings").value;
  for (const i of products) {
    if (i.model == torateProduct) {
      i.rating = ratingProuct;
    }
  }
  let product_rate_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_rate_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_rate_table += "<td>" + products[i].company + "</td>";
    product_rate_table += "<td>" + products[i].model + "</td>";
    product_rate_table += "<td>" + products[i].memory + "</td>";
    product_rate_table += "<td>" + products[i].price + "</td>";
    product_rate_table += "<td>" + products[i].quantity + "</td>";
    product_rate_table += "<td>" + products[i].rating + "</td>";
    product_rate_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_rate_table += "</tr>";
  }
  product_rate_table += "</table>";
  document.getElementById("productlist").innerHTML = product_rate_table;
}
/*-------------------------------

Add two dropdowns to sort and display a product based on the fields a product
have as given in the attachment. 

--------------------------------------*/
function opensortopt() {
  document.getElementById("sortopt").style.display = "flex";
}
function closesortopt() {
  document.getElementById("sortopt").style.display = "none";
}
function sortprod() {
  var ascDsc = document.getElementById("ascdsc").value;
  var proPerty = document.getElementById("property").value;
  //for ascending
  if (ascDsc == "Ascending") {
    if (proPerty == "Company") {
      products.sort((a, b) => {
        let fa = a.company,
          fb = b.company;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    if (proPerty == "Model") {
      products.sort((a, b) => {
        let fa = a.model,
          fb = b.model;
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    }
    if (proPerty == "Memory") {
      products.sort((a, b) => {
        return a.memory - b.memory;
      });
    }
    if (proPerty == "Price") {
      products.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }
  //for Descending
  if (ascDsc == "Descending") {
    if (proPerty == "Company") {
      products.sort((a, b) => {
        let fa = a.company,
          fb = b.company;
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    }
    if (proPerty == "Model") {
      products.sort((a, b) => {
        let fa = a.model,
          fb = b.model;
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    }
    if (proPerty == "Memory") {
      products.sort((a, b) => {
        return b.memory - a.memory;
      });
    }
    if (proPerty == "Price") {
      products.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }
  console.log(products);
  let product_rate_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_rate_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_rate_table += "<td>" + products[i].company + "</td>";
    product_rate_table += "<td>" + products[i].model + "</td>";
    product_rate_table += "<td>" + products[i].memory + "</td>";
    product_rate_table += "<td>" + products[i].price + "</td>";
    product_rate_table += "<td>" + products[i].quantity + "</td>";
    product_rate_table += "<td>" + products[i].rating + "</td>";
    product_rate_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_rate_table += "</tr>";
  }
  product_rate_table += "</table>";
  document.getElementById("productlist").innerHTML = product_rate_table;
  //check for asc or desc and property in string
  //if(ascDsc == "Ascending" && proPerty == )
}
/*------------------------------  

Select product(s) from the list and their quantity and add them to 
a array then generate a billing invoice according to the attachment.

-------------------------------*/
function showgeneratebill() {
  document.getElementById("generatebill").style.display = "flex";
  document.getElementById("show_inv_quan").style.display = "flex";
  let invoice_prod = "<select id='prtoinv'><option>Select Product</option>";
  for (var j = 0; j < products.length; j++) {
    invoice_prod +=
      "<option value='" +
      products[j].model +
      "'>" +
      products[j].model +
      "</option>";
  }
  invoice_prod += "</select>";
  document.getElementById("invoice_prod").innerHTML = invoice_prod;
}
function closeshowgeneratebill() {
  document.getElementById("generatebill").style.display = "none";
  document.getElementById("show_inv_quan").style.display = "none";
}
const invoice = [];
let subtotal = "0";
function addtocart() {
  var add_prod = document.getElementById("prtoinv").value;
  var add_quan = document.getElementById("inv_quan").value;
  products.forEach((element) => {
    if (element.model === add_prod) {
      var added_prod = element.model;
      var added_quan = add_quan;
      var product_total = parseInt(element.price) * parseInt(add_quan);
      var product_inventory = parseInt(element.quantity) - parseInt(add_quan);
      element.quantity = product_inventory;
      invoice.push({
        description: added_prod,
        quantity: added_quan,
        amount: product_total,
      });
      subtotal = parseInt(subtotal) + parseInt(product_total);
    }
  });
  let cart_table =
    "<table width= '50%' style='text-align:left;'><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";
  for (let crt = 0; crt < invoice.length; crt++) {
    cart_table += "<tr>";
    cart_table += "<td>" + invoice[crt].description + "</td>";
    cart_table += "<td>" + invoice[crt].quantity + "</td>";
    cart_table += "<td>" + invoice[crt].amount + "</td></tr>";
  }
  console.log(cart_table);
  cart_table +=
    "<tr><td></td><th>TOTAL:</th><td style='text:align:right;'>" +
    subtotal +
    "</td></tr></table>";
  document.getElementById("cartlist").innerHTML = cart_table;
  let product_rate_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_rate_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_rate_table += "<td>" + products[i].company + "</td>";
    product_rate_table += "<td>" + products[i].model + "</td>";
    product_rate_table += "<td>" + products[i].memory + "</td>";
    product_rate_table += "<td>" + products[i].price + "</td>";
    product_rate_table += "<td>" + products[i].quantity + "</td>";
    product_rate_table += "<td>" + products[i].rating + "</td>";
    product_rate_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_rate_table += "</tr>";
  }
  product_rate_table += "</table>";
  document.getElementById("productlist").innerHTML = product_rate_table;
  let cart_length =
    "<button style='color:green;' onclick = showcart()>Cart " +
    invoice.length +
    "</button>";
  document.getElementById("cart_area").innerHTML = cart_length;
}

function showcart() {
  document.getElementById("cartlist").style.display = "block";
}
function generatebill() {
  document.getElementById("cartlistsection").style.display = "block";
}
function closecart() {
  document.getElementById("cartlistsection").style.display = "none";
}
/*Add a checkbox with every product. User can select one or more products
 to delete from the list and display the remaining products after deletion.*/
todelete = [];
function getval(obj) {
  if (document.getElementById("itemadded").checked === true) {
    var x = {
      delindex: obj.value,
      delcompany: products[obj.value].company,
      delmodel: products[obj.value].model,
      delmemory: products[obj.value].memory,
      delpice: products[obj.value].price,
      delquantity: products[obj.value].quantity,
    };
    todelete.push(x);
  }
  let selectedItem = obj.value;
}
function deleterow() {
  for (c = 0; c < todelete.length; c++) {
    delind = todelete[c].delindex;
    console.log(delind);
    products.splice(0, delind);
  }

  let checkvalue = 0;
  let product_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th><th><button id='deletebtn' onclick=delete()>Delete Items</button></th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_table += "<td>" + products[i].company + "</td>";
    product_table += "<td>" + products[i].model + "</td>";
    product_table += "<td>" + products[i].memory + "</td>";
    product_table += "<td>" + products[i].price + "</td>";
    product_table += "<td>" + products[i].quantity + "</td>";
    product_table += "<td>" + products[i].rating + "</td>";
    product_table +=
      "<td><input type='checkbox' id='itemadded' value='" +
      checkvalue++ +
      "' onclick='getval(this)'></td>";
    product_table += "</tr>";
  }

  product_table += "</table>";
  document.getElementById("productlist").innerHTML = product_table;
}
