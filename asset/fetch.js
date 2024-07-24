const containerRepos = document.querySelector('.carousel-repos');
const API = 'https://github-repos.p.rapidapi.com/search?user=ahenao10';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4c6fc8673fmsh8af972ce2604c76p12dc1bjsn9baf27844802',
        'x-rapidapi-host': 'github-repos.p.rapidapi.com'
    }
};

async function fetchData(url, opt) {
    const response = await fetch(url, opt);
    const data = await response.json()
    const repos = await data.repositories // vienen como un array de varios objetos
    return repos;
}

(async () => {
    try {
        const repositories = await fetchData(API, options)

        repositories.forEach(repo => {
            const carouselItem = document.createElement('div')
            carouselItem.className = 'carousel-item';

            const title = document.createElement('a')
            title.href = repo.url
            title.textContent = repo.name;
            title.setAttribute('target', '_blank');

            const description = document.createElement('p')
            description.textContent = repo.description;

            carouselItem.append(title, description);

            containerRepos.appendChild(carouselItem);
        });
        
    } catch {
        alert('Ha ocurrido un error mostrando los repositorios, por favor recargue la página')
    }

})()