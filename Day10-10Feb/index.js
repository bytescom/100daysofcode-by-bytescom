const input = document.querySelector(".inputbox");
const btn = document.querySelectorAll(".button");

let string = "";
let arr = Array.from(btn);

arr.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1)
            input.value = string;
        }
        else{
            string+= e.target.innerHTML;
            input.value = string;
        }

    })
})