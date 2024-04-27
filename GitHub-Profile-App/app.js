const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searhBox = document.querySelector("#search")

const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
    <div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>Bio : ${data.bio}</p>

        <ul class="info">
            <li${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong> Following</strong></li>
            <li>${data.public_repos}<strong> Repo</strong></li>
        </ul>

        <div class="repos">
            
        </div>
    </div>
</div>
` 
main.innerHTML = card;

getRepos(username)

}

getUser("Sohaib0403")


const getRepos = async (username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    data.forEach(
        (item) =>  {
            const elem = document.createElement("a");
            elem.classList.add("repo")
            elem.href = item.HTML_url 
            elem.innerHTML = item.name
            elem.target = "_blank"
            repos.appendChild(elem)

        }
    )
}

const formSubmit = () => {
    
    if (searhBox.value != ""){
        getUser(searhBox.value);
        searhBox.value = "" 
    }
    return false;
}

searhBox.addEventListener(
    "focusout",
    function () {
        formSubmit
    }
)