function generatesalesOrder(event) {
    event.preventDefault();

new Typewriter("salesOrder", {
  strings: "Receive the purchase order",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let salesorderFormElement = document.querySelector("#sales-order-generator-form");
salesorderFormElement.addEventListener("submit, generatesalesOrder");