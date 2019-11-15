function printRepos(repos) {
    const html = prepareRepos(repos);

    $('.js-results').html(`<ol>${html}</ol`);
}

function prepareRepos(repos) {
    let html = ``;
    repos.forEach(repo => html += `<li><a href="${repo.html_url}">${repo.name}</a></li>`);

    return html;
}

function getRepos(username) {
    const url = `https://api.github.com/users/${username}/repos?sort=updated`;

    fetch(url)
    .then(repos => repos.json())
    .then(repos => {
        printRepos(repos);
    })
    .catch(error => {
        alert("Something didn't work!");
    });
}

function handleForm() {
    $('form').on('submit', event => {
        event.preventDefault();

        let username = $('input').val();
        getRepos(username)
    });
}

function main() {
    handleForm();
}

$(main);