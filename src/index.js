function displaysalesorderProcess(response) {
  console.log("sales order process generated");
  new Typewriter("salesOrder", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

function generatesalesOrder(event) {
    event.preventDefault();
}


let instructionsInput = document.querySelector("#user-instructions");
let apiKey ="932e5ebeaff542505e2e03t63ba9boe8";
let prompt = `Userinstructions: Generate a sales order process about ${instructionsInput.value}`;
let context = "You are an experienced sales order manager expert and excel in everything sales related. Your mission is to generate a process with all the 5 steps of a sales order in basic HTML. Sign the sales order process with 'SheCodes AI' inside a strong element at the end of the sales process and NOT at the beginning";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let salesorderElement = document.querySelector("#sales-order");
salesorderElement.classList.remove("hidden");
salesorderElement.innerHTML = `<div class="generating">⏳Generating sales order process ${instructionsInput.value}</div>`;

console.log("Generating sales order");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiURL).then(displaysalesorderProcess);

let salesorderFormElement = document.querySelector("#sales-order-generator-form");
salesorderFormElement.addEventListener("submit, generatesalesOrder");