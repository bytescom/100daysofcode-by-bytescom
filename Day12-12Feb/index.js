const categories = ["All", "Men", "Women", "Kids"];
const content = [
    {
        id: "Men",
        label: "Men Shirt 1",
        img: "https://via.placeholder.com/250x200?text=Men+Shirt+1",
    },
    {
        id: "Men",
        label: "Men Shirt 2",
        img: "https://via.placeholder.com/250x200?text=Men+Shirt+2",
    },
    {
        id: "Men",
        label: "Men Shirt 3",
        img: "https://via.placeholder.com/250x200?text=Men+Shirt+3",
    },
    {
        id: "Men",
        label: "Men Shirt 4",
        img: "https://via.placeholder.com/250x200?text=Men+Shirt+4",
    },
    {
        id: "Men",
        label: "Men Shirt 5",
        img: "https://via.placeholder.com/250x200?text=Men+Shirt+5",
    },
    {
        id: "Women",
        label: "Women Shirt 1",
        img: "https://via.placeholder.com/250x200?text=Women+Shirt+1",
    },
    {
        id: "Women",
        label: "Women Shirt 2",
        img: "https://via.placeholder.com/250x200?text=Women+Shirt+2",
    },
    {
        id: "Women",
        label: "Women Shirt 3",
        img: "https://via.placeholder.com/250x200?text=Women+Shirt+3",
    },
    {
        id: "Women",
        label: "Women Shirt 4",
        img: "https://via.placeholder.com/250x200?text=Women+Shirt+4",
    },
    {
        id: "Women",
        label: "Women Shirt 5",
        img: "https://via.placeholder.com/250x200?text=Women+Shirt+5",
    },
    {
        id: "Kids",
        label: "Kids Shirt 1",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+1",
    },
    {
        id: "Kids",
        label: "Kids Shirt 2",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+2",
    },
    {
        id: "Kids",
        label: "Kids Shirt 3",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+3",
    },
    {
        id: "Kids",
        label: "Kids Shirt 4",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+4",
    },
    {
        id: "Kids",
        label: "Kids Shirt 5",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+5",
    },
    {
        id: "Kids",
        label: "Kids Shirt 6",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+6",
    },
    {
        id: "Kids",
        label: "Kids Shirt 7",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+7",
    },
    {
        id: "Kids",
        label: "Kids Shirt 8",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+8",
    },
    {
        id: "Kids",
        label: "Kids Shirt 9",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+9",
    },
    {
        id: "Kids",
        label: "Kids Shirt 10",
        img: "https://via.placeholder.com/250x200?text=Kids+Shirt+10",
    },
];

const filterButtons = document.querySelector(".filter-buttons-wrapper");
const contentWrapper = document.querySelector(".content-wrapper");

function createCategory() {
    categories.forEach((category) => {
        const buttonEle = document.createElement("button");
        buttonEle.innerText = category;
        buttonEle.classList.add("filter-button");
        buttonEle.setAttribute("data-filter", category);

        filterButtons.appendChild(buttonEle);
    });
}

function createContent() {
    content.forEach((contentItem) => {
        const singleContentItem = document.createElement("div");
        singleContentItem.classList.add("card", contentItem.id);

        const img = document.createElement("img");
        img.src = contentItem.img;
        img.alt = contentItem.label;

        const title = document.createElement("h3");
        title.textContent = contentItem.label;

        const footer = document.createElement("div");
        footer.classList.add("card-footer");
        footer.textContent = contentItem.id;

        singleContentItem.appendChild(img);
        singleContentItem.appendChild(title);
        singleContentItem.appendChild(footer);

        contentWrapper.appendChild(singleContentItem);
    });
}

createCategory();
createContent();

const allFilterButtons = document.querySelectorAll(".filter-button");
const allCards = document.querySelectorAll(".card");

function filterCardsByCategory(extractCurrentCategory, allCards) {
    allCards.forEach((item) => {
        const isShowAllCards = extractCurrentCategory.toLowerCase() === "all";
        const isItemFiltered = !item.classList.contains(extractCurrentCategory);

        if (isItemFiltered && !isShowAllCards) {
            item.classList.add("hide");
        } else {
            item.classList.remove("hide");
        }
    });
}

allFilterButtons.forEach((singleFilterbuttonItem) => {
    singleFilterbuttonItem.addEventListener("click", () => {
        const extractCurrentCategory = singleFilterbuttonItem.dataset.filter;

        console.log(extractCurrentCategory);
        filterCardsByCategory(extractCurrentCategory, allCards);
    });
});