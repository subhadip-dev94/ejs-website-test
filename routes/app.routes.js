const route = require('express').Router();
const appController = require("../controllers/app.controller")

route.get('/', appController.home);
route.get('/donate', appController.donate);
route.get('/news', appController.news);
route.get('/about', appController.about);
route.get('/causes', appController.causes);
route.get('/volunteer', appController.volunteer);
route.get('/contact', appController.contact);

module.exports = route;