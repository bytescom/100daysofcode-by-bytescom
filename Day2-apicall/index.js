const listApiData = document.querySelector(".posts-list-container");

// Step-1 - fetch api using XHR-Method
function fetchusingXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            displayResults(xhr.response);
        } else {
            console.log("Error, Please try again!");
        }
    };
}




function displayResults(posts) {
    listApiData.innerHTML = posts.map(
        (postItem) => `
    <div class="post-item">
      <h3>${postItem.title}</h3>
      <p>${postItem.body}</p>
    </div>
    `
    )
        .join(" ");
}

fetchusingXHR();
