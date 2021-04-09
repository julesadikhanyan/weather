async function addCity() {
    let input = document.querySelector('input').value;
    if (input !== '') {
        let data = await fetchWeatherByName(input);
        if (data.cod === '404') {
            alert(data.message);
        } else {
            let id = data.id.toString();
            if (favorites.indexOf(id) === -1) {
                let sectionID = favorites.length.toString();
                createFromTemplate(sectionID);
                favorites.push(id);
                await sleep(1000).then(() => { printFavoriteCity(data, sectionID) })
                updateLocalStorage();
            } else {
                alert('this city already exists!');
            }
        }
        document.querySelector('input').value = '';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}