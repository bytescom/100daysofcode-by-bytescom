const productContent = document.querySelector(".product-content");
const loadMoreBtn = document.querySelector(".Btn");
let currentstep = 0;

async function fetchAllItems(getCurrentStep) {
    try {
        const response = await fetch(
            `https://dummyjson.com/products?limit=10&skip=${
                getCurrentStep === 0 ? 0 : getCurrentStep * 10
            }`,
            {
                method: "GET",
            }
        );
        const result = await response.json();
        if (result && result.products) displayResults(result.products);
    } catch (e) {
        console.log(e);
    }
}

function displayResults(productList) {
    console.log(productList);
    productList.forEach((list) => {
        const productWrapper = document.createElement("div");
        const productThumbnail = document.createElement("img");
        const productTitle = document.createElement("p");
        const productBrand = document.createElement("p");
        const priceRatingDiv = document.createElement("div");
        const productPrice = document.createElement("span");
        const productRating = document.createElement("span");

        productTitle.textContent = list.title;
        productThumbnail.src = list.thumbnail;
        productBrand.textContent = list.brand;
        productPrice.textContent = `$${list.price}`;
        productRating.innerHTML = `<i class="fa-solid fa-star" style="color: #ffffff;"></i> ${list.rating}`;

        productWrapper.classList.add("product-wrapper");
        productThumbnail.classList.add("product-thumbnail");
        productTitle.classList.add("product-title");
        productBrand.classList.add("product-brand");
        priceRatingDiv.classList.add("price-rating");
        productPrice.classList.add("product-price");
        productRating.classList.add("product-rating");

        priceRatingDiv.appendChild(productPrice);
        priceRatingDiv.appendChild(productRating);

        productWrapper.appendChild(productThumbnail);
        productWrapper.appendChild(productTitle);
        productWrapper.appendChild(productBrand);
        productWrapper.appendChild(priceRatingDiv);

        productContent.appendChild(productWrapper);
    });

    // Disable the "Load More" button if 100 items are displayed
    if (productContent.children.length === 100) {
        loadMoreBtn.setAttribute("disabled", "true");
    }
}

// Initial fetch
fetchAllItems(currentstep);

// Load more button event listener
loadMoreBtn.addEventListener("click", () => {
    currentstep += 1; // Increment the global `currentstep`
    fetchAllItems(currentstep); // Pass the updated value
});