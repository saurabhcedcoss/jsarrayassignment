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
  let product_table =
    "<table width='70%'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
  for (var i = 0; i < products.length; i++) {
    product_table += "<tr>";
    product_table += "<td>" + products[i].company + "</td>";
    product_table += "<td>" + products[i].model + "</td>";
    product_table += "<td>" + products[i].memory + "</td>";
    product_table += "<td>" + products[i].price + "</td>";
    product_table += "</tr>";
  }
  product_table += "</table>";
  document.getElementById("productlist").innerHTML = product_table;
}
