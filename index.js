const bill = document.querySelector("#bill input");
const tips = document.querySelectorAll("#tips-button button");
const people = document.querySelector("#people input");
const tipAmount = document.querySelector("#tip-amount div");
const total = document.querySelector("#total div");
const reset = document.querySelector("#reset");

function computeTips(){
    tips.forEach((el) => {
        el.addEventListener("click", () => {

            const parziale = bill.value / people.value;

            const tip = (parziale * el.innerHTML.replace("%", ""))/100;
            tipAmount.innerHTML = tip.toFixed(2);

            const totalWithTip = (bill.value / people.value) + tip;
            total.innerHTML = totalWithTip.toFixed(2);

        }
    )
    }       
)};

function resetTemplate(){
    reset.addEventListener("click", () => {
        tipAmount.innerHTML = "$0.00";
        total.innerHTML = "$0.00";
        bill.value = "";
        people.value = "";
    })
}
    
computeTips();
resetTemplate();