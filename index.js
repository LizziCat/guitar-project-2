function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();

}

let CATALOG = [];

//http://myjson.dit.upm.es/api/bins/2qe9 - удаленный сервер
//server/catalog.json

fetch('http://myjson.dit.upm.es/api/bins/ah3l')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        render();
    })
    .catch(error => {
        console.log(error);
    });