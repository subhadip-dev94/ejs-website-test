const route = require('express').Router();
const appController = require("../controllers/app.controller")
const FileUploader = require('../helper/fileUpload');

const fileUpload = new FileUploader({
    folderName: "uploads",
    supportedFiles: ["text/csv", "application/vnd.ms-excel", "application/octet-stream", "application/csv"],
    fieldSize: 1024 * 1024 * 5
});


route.get('/', appController.getForm);
route.post('/upload-csv', fileUpload.upload().single("csvfile"), appController.uploadCSV);
route.get('/list', appController.getList);

module.exports = route;