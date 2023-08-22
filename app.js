const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  const checkBox = document.querySelectorAll('input[type="checkbox"]');
  const quantity = document.querySelectorAll("select");
  let totalAmount = 0;
  let count = 0;
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      count += parseInt(quantity[i].value);
      totalAmount += parseFloat(
        checkBox[i].getAttribute("data-price") * quantity[i].value
      );
      console.log(
        `Name: ${checkBox[i].getAttribute("data-name")} Rate: ${checkBox[
          i
        ].getAttribute("data-price")} Quantity: ${quantity[i].value} Amount: ${
          checkBox[i].getAttribute("data-price") * quantity[i].value
        }`
      );
    }
  }
  console.log(`Total Qnty: ${count}, Total Amount: ${totalAmount}`);
  if (totalAmount > 0) {
    let confirmOrderPlace = confirm(`Your Total Amount: ${totalAmount}`);
    if (confirmOrderPlace) {
      document.write("You Order has been Placed, You can pay at the counter");
    } else {
      document.write("Order Cancelled by user");
    }
  } else {
    alert("Please Select atleast One Item Or Select Quantity");
  }
});
