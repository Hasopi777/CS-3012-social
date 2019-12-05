const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");

const client_id = "565b0b7aa0c9c7eafb3c";
const client_secret = "ead17169a57c3ce0bc6663c9280a22d61d22d37e";

const fetchUsers = async(user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id =${client_id}&client_secret=${client_secret}`);
}

searchButton.addEventListener("click", () => {
    console.log("hello");
})