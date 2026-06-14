let btn = document.getElementById("submitSearch");
let result = document.getElementById("result");
result.style.display = "none";

let text = document.getElementById("searchTxt");
3
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
        } else {
            let contentImage = document.createElement("img");
            let contentName = document.createElement("div");
            let contentLogin = document.createElement("div");
            let contentFollower = document.createElement("div");
            let Following = document.createElement("div");
            let Repos = document.createElement("div");
            let profile = document.createElement("a");
            profile.textContent = "Profile Button";
            profile.href = data.html_url;

            console.log(data.avatar_url);
            contentImage.src = data.avatar_url;
            contentName.textContent = "Name-" + data.name;
            contentFollower.textContent = "Follower-" + data.followers;
            contentLogin.textContent = "Login-" + data.login;
            Following.textContent = "Following:-" + data.following;
            Repos.textContent = "Repository:-" + data.public_repos;
            result.appendChild(contentImage);
            result.appendChild(contentName);
            result.appendChild(contentLogin);
            result.appendChild(contentFollower);
            result.appendChild(Following);
            result.appendChild(Repos);
            result.appendChild(profile);

        }
    });

});