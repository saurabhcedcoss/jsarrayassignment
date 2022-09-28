/* Create a javscript array to store the information 
of products given in the attachment and display them on a HTML page*/
let products = [];
function addproduct() {
  products.push({
    company: document.getElementById("company").value,
    model: document.getElementById("model").value,
    memory: document.getElementById("memory").value,
    price: document.getElementById("price").value,
  });
  console.log(products);
  document.getElementById("company").value = "";
  document.getElementById("model").value = "";
  document.getElementById("memory").value = "";
  document.getElementById("price").value = "";
  let product_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_table += "<td>" + products[i].company + "</td>";
    product_table += "<td>" + products[i].model + "</td>";
    product_table += "<td>" + products[i].memory + "</td>";
    product_table += "<td>" + products[i].price + "</td>";
    product_table += "</tr>";
  }
  product_table += "</table>";
  document.getElementById("productlist").innerHTML = product_table;
  /*Add a dropdown and a textbox with search button to search and display the 
product according to the attachment.*/
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
  /*allow only available product to type in textbox*/
  let productsearch =
    "<input list='availprods' id = 'searchmodel'><datalist id='availprods'>";
  for (var k = 0; k < products.length; k++) {
    productsearch += "<option value='" + products[k].model + "'/>";
  }
  productsearch += "</datalist>";
  document.getElementById("prcompany").innerHTML = prsearchcompany;
  document.getElementById("productsearch").innerHTML = productsearch;
  document.getElementById("prsearchwithcompany").style.display = "";
}
function filtercompany() {
  let srchcomp = document.getElementById("selected_compnay").value;
  let srchmodel = document.getElementById("searchmodel").value;
  console.log(srchmodel);
  const results = products.filter((element) => {
    return element.company === srchcomp && element.model === srchmodel;
  });
  let product_search_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
  for (var i = 0; i < results.length; i++) {
    product_search_table += "<tr  style='border-bottom:1px grey solid;'>";
    product_search_table += "<td>" + results[i].company + "</td>";
    product_search_table += "<td>" + results[i].model + "</td>";
    product_search_table += "<td>" + results[i].memory + "</td>";
    product_search_table += "<td>" + results[i].price + "</td>";
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
