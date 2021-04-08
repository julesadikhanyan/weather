function deleteCity(object) {
    let id = object.parentElement.parentElement.id;
    favorites.splice(Number(id), 1);
    updateLocalStorage();
    object.parentElement.parentElement.remove();
    let cities = document.querySelectorAll('.city');
    for (let i = 0; i < cities.length; i++) {
        cities[i].id = i.toString();
    }
    if (favorites.length === 0) {
        localStorage.removeItem('cities');
    }
}