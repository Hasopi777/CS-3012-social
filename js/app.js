const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const unContainer = document.querySelector(".profile-username");
// const imageContainer = document.querySelector(".profile-image");

const client_id = "565b0b7aa0c9c7eafb3c";
const client_secret = "ead17169a57c3ce0bc6663c9280a22d61d22d37e";

const fetchUsers = async(user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id =${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data }
};
const getRepos = async(user) => {
    const repo_call = await fetch(`https://api.github.com/users/${user}/repos?client_id =${client_id}&client_secret=${client_secret}`);

    const repos = await repo_call.json();
    return{ data : repos }
};


// async function getRepos(){
//     clear();
//     const url ="https:/api.github.com/search/repositories?q=stars:>100000"
//     // const response = await fetch(url)
//     // const result = await response.json()

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);   
        
        nameContainer.innerHTML = `Name: <span class="main_profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main_profile-value">${res.data.login}</span>`;
        // imageContainer.innerHTML = `<img class="main_profile-value" src=${res.data.avatar_url}/>`;

    })
};

const showRepos = () => {
    getRepos(inputValue.value).then((repo) => {
        console.log(repo); 
    })
};

searchButton.addEventListener("click", () => {
    showData();
    showRepos();
})