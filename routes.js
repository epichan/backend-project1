const routes = (APP, restaurantsData, dishesData, restaurantsPerZone, selectedDishes, confirmedDishes) => {
    APP.get('/', (req, res) => {
        res.json({restaurantsData})
});

    APP.get('/restaurants', (req, res) => {
        const zoneID = req.query.id;//El id es la variable que pones en postman
        restaurantsPerZone.push(restaurantsData.filter(item => item.zoneID === Number(zoneID)));
        res.json({restaurantsPerZone});
        restaurantsPerZone.length = 0;
});

APP.get('/dishes', (req, res) => {
    const dishID = req.query.id;
    selectedDishes.push(dishesData.find(item => item.dishID === Number(dishID)));
    console.log(selectedDishes);
    res.json({selectedDishes});
});

APP.get('/deletedDishes', (req, res) => {
    const dishID = req.query.id;
    console.log(selectedDishes);
    //Revisar como borrar solo uno si tiene el mismo dishID
    selectedDishes = selectedDishes.filter(item => item.dishID !== Number(dishID));
    res.json({selectedDishes});
});

APP.get('/checkout', (req, res) => {
    confirmedDishes = selectedDishes.slice(0, selectedDishes.length);
    console.log(confirmedDishes);
    res.json({confirmedDishes});
});

APP.get('/cancelOrder', (req, res) => {
    confirmedDishes.length = 0;
    res.json({confirmedDishes});
});

}

export default routes;