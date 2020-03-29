import http from 'http';
import express from 'express';
import routes from './routes';
import restaurantsData from './data/restaurantsData';
import dishesData from './data/dishesData';

const APP = express();
const SERVER = http.createServer(APP);

let restaurantsPerZone = [];
let selectedDishes = [];
let confirmedDishes = [];

routes(APP, restaurantsData, dishesData, restaurantsPerZone, selectedDishes, confirmedDishes);

SERVER.listen(4000);