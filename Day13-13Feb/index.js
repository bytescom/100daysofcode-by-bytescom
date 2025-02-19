const paginationWrapper = document.querySelector(".pagination-list");

function createDummyData() {
    for (let i = 1; i <= 120; i++) {
        const li = document.createElement("li");
        li.textContent = `Card ${i}`;
        paginationWrapper.appendChild(li);
    }
}
createDummyData();


const getAllListItems = document.querySelectorAll("li");
const paginationNo = document.querySelector('.pages-btn');
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let pageLimit = 12;
let pageCount = Math.ceil(getAllListItems.length / pageLimit);
let currPage = 1;
console.log(pageCount);


function createPageNumber(getCurrentIndex) {
    const pageNumber = document.createElement("button");
    pageNumber.classList.add("page-number");
    pageNumber.textContent = getCurrentIndex;
    pageNumber.setAttribute("page-index", getCurrentIndex);
    paginationNo.appendChild(pageNumber);
}

function createPaginationNumber() {
    for (let i = 1; i <= pageCount; i++) {
        createPageNumber(i);
    }
}


function handleActiveCurrentPage() {
    const pageNumberBtn = document.querySelectorAll(".page-number");
    pageNumberBtn.forEach(button => {
        button.classList.remove('active-status');
        const getPageNumberIndex = Number(button.getAttribute("page-index"));

        if (getPageNumberIndex === currPage) {
            button.classList.add("active-status")
        }
    })

}

function handleDisableBtn(getBtn) {
    getBtn.classList.add("disabled");
    getBtn.setAttribute("disabled", true)
}

function handleEnableBtn(getBtn) {
    getBtn.classList.remove("disabled");
    getBtn.removeAttribute("disabled")
}

function handleActivePageBtnStatus() {
    if (currPage === 1) {
        handleDisableBtn(prevBtn);
    } else {
        handleEnableBtn(prevBtn);
    }

    if (pageCount === currPage) {
        handleDisableBtn(nextBtn);
    } else {
        handleEnableBtn(nextBtn);
    }

}

function handleCurrentPage(createCurrentPageNumber) {
    currPage = createCurrentPageNumber;

    handleActiveCurrentPage();
    handleActivePageBtnStatus();

    const getPrevRange = (createCurrentPageNumber - 1) * pageLimit;
    const getCurrRange = (createCurrentPageNumber * pageLimit);

    getAllListItems.forEach((listItem, index) => {
        listItem.classList.add("hide-list-item");

        if (index >= getPrevRange && index < getCurrRange) {
            listItem.classList.remove("hide-list-item");
        }
    });
}

createPaginationNumber();
handleCurrentPage(currPage);

prevBtn.addEventListener("click", () => {
    handleCurrentPage(currPage - 1);
});

nextBtn.addEventListener("click", () => {
    handleCurrentPage(currPage + 1);
});

document.querySelectorAll(".page-number").forEach((button) => {
    const getCurrentPageIndex = Number(button.getAttribute("page-index"));

    if (getCurrentPageIndex) {
        button.addEventListener("click", () => {
            handleCurrentPage(getCurrentPageIndex);
        });
    }
});

