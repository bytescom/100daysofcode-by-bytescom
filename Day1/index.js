const data = [
    {
        id: 1,
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        id: 2,
        question: "What is Vite?",
        answer: "Vite is a modern front-end build tool that provides fast and optimized development experience."
    },
    {
        id: 3,
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript."
    },
    {
        id: 4,
        question: "What is a component in React?",
        answer: "A component in React is a reusable piece of UI that can have its own state and behavior."
    },
    {
        id: 5,
        question: "What is the use of useState in React?",
        answer: "useState is a React hook used to add state to functional components."
    },
    {
        id: 6,
        question: "What is a build tool?",
        answer: "A build tool is used to bundle, optimize, and transform code for production deployment."
    },
];

const getAccordionData = document.querySelector(".accordion")

function createAccordionData() {
    getAccordionData.innerHTML = data
        .map((dataItem) => `
        <div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i id="plus" class="fa-solid fa-plus"></i>
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>
            `
        )
        .join(" ")
}

createAccordionData();



const getAccordionTitles = document.querySelectorAll(".accordion_title");


getAccordionTitles.forEach((currentItem) => {
    currentItem.addEventListener("click", () => {
        const icon = currentItem.querySelector("i");
        const content = currentItem.nextElementSibling;

        if (currentItem.classList.contains("active")) {
            currentItem.classList.remove("active");
            content.classList.remove("active");
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        } else {
            const alreadyActiveTitle = document.querySelector(".accordion_title.active");
            const alreadyActiveContent = document.querySelector(".accordion_content.active");

            if (alreadyActiveTitle) {
                alreadyActiveTitle.classList.remove("active");
                alreadyActiveContent.classList.remove("active");
                const activeIcon = alreadyActiveTitle.querySelector("i");
                activeIcon.classList.remove("fa-minus");
                activeIcon.classList.add("fa-plus");
            }

            currentItem.classList.add("active");
            content.classList.add("active");
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }
    });
});