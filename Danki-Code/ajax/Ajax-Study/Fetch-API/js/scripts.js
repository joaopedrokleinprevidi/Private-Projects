const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

//pegando todos os posts
async function getAllPosts(){  //sera utilizado await por isso tem que ser uma async function

    const response = await fetch(url);  //estou esperando o que a url me responde(await)

    console.log(response);  //imprimindo resposta da url

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post => {
        
    }))
}