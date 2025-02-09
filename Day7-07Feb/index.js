const getAllBtn = document.querySelectorAll(".btn");

// using event target offset
// getAllBtn.forEach((btn) => {
//     btn.addEventListener("click", (event) => {

//         let xCoordinateValue = event.clientX - event.target.offsetLeft;
//         let yCoordinateValue = event.clientY - event.target.offsetTop;

//         let rippleElement = document.createElement("span");
//         rippleElement.style.left = `${xCoordinateValue}px`;
//         rippleElement.style.top = `${yCoordinateValue}px`;

//         btn.appendChild(rippleElement);

//         window.setTimeout(()=>{
//             rippleElement.remove();
//         },500);
//     })
// })



// using getBoundingClientRect()
function createRipple(event) {
    const btn = event.currentTarget;
    const rect = btn.getBoundingClientRect();
    console.log(rect);


    const xCoordinateValue = event.clientX - rect.left;
    const yCoordinateValue = event.clientY - rect.top;

    const rippleElement = document.createElement("span");
    rippleElement.style.left = `${xCoordinateValue}px`;
    rippleElement.style.top = `${yCoordinateValue}px`;

    btn.appendChild(rippleElement);

    window.setTimeout(() => {
        rippleElement.remove();
    }, 1000);
};

getAllBtn[0].addEventListener("click", createRipple);

getAllBtn[1].addEventListener("mouseenter", (event) => {
    createRipple(event);
});
