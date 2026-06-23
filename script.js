let btn = document.getElementById("submitSearch");
let result = document.getElementById("result");
result.style.display = "none";

let text = document.getElementById("searchTxt");

btn.addEventListener("click", function () {
    result.textContent = "Loading...";
    console.log(text.value);
    result.style.display = "block";
    let username = text.value;
    fetch("https://api.github.com/users/" + username).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        console.log("Clearing loading...");

        result.textContent = "";
        if (data.status == '404') {
            let contentEle = document.createElement("div");
            contentEle.textContent = "User Not Found";
            result.appendChild(contentEle);
        } 
        else {

    result.innerHTML = `
    
    <img 
        src="${data.avatar_url}"
        alt="${data.login}"
    >

    <div class="name">
        ${data.name || "No Name"}
    </div>

    <div class="username">
        @${data.login}
    </div>

    <div class="stats">

        <div class="card">
            <h2>${data.public_repos}</h2>
            <span>Repositories</span>
        </div>

        <div class="card">
            <h2>${data.followers}</h2>
            <span>Followers</span>
        </div>

        <div class="card">
            <h2>${data.following}</h2>
            <span>Following</span>
        </div>

    </div>

    <a
        href="${data.html_url}"
        target="_blank"
        class="profile-btn"
    >
        Visit Profile
    </a>

    `;
//console.log(result.innerHTML);
}
    });

});