let favorites = [];

window.onload = function () {
    getCurrentPosition();
    loadLocalStorage();
}

function createFromTemplate(id) {
    let favorites = document.querySelector('.favorites');
    let template = document.querySelector('.favorites-template');
    template.content.querySelector('.city').setAttribute('id', id);
    let clone = document.importNode(template.content, true);
    favorites.append(clone);
}