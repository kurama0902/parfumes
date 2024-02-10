const router = require('express').Router();

const createTable = require('../dbFunctions/createTable');
const deleteFromTableById = require('../dbFunctions/deleteFromTableById');
const deleteTable = require('../dbFunctions/deleteTable');
const getAllDataFromTable = require('../dbFunctions/getAllDataFromTable');
const getInfoFromTableById = require('../dbFunctions/getInfoFromTableById');
const insertIntoTable = require('../dbFunctions/insertIntoTable');
const updateProductInfoById = require('../dbFunctions/updateProductInfoById');

router.route('/createTable').post((req, res) => {
    const { tableName, dataArray } = req?.body;
    const status = createTable(tableName, dataArray);

    if(status) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
    
});

router.route('/deleteTable').post((req, res) => {
    const { tableName } = req?.body;
    const status = deleteTable(tableName);

    if(status) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

router.route('/insertIntoTable').post((req, res) => {
    const { tableName, dataArray } = req?.body;

    const status = insertIntoTable(tableName, dataArray);

    if(status) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

router.route('/updateProductInfoById').post((req, res) => {
    const { tableName, dataArray } = req?.body;

    const status = updateProductInfoById(tableName, dataArray);

    if(status) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

router.route('/deleteFromTableById').post((req, res) => {
    const { tableName, IDs } = req?.body;

    const status = deleteFromTableById(tableName, IDs);

    if(status) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
})

router.route('/getInfoFromTableById').post((req, res) => {
    const { tableName, IDs } = req?.body;

    const tableData = getInfoFromTableById(tableName, IDs);

    if(tableData) {
        tableData.then(resp => res.send(resp));
    } else {
        res.sendStatus(401);
    }
})

router.route('/getAllDataFromTable').post((req, res) => {
    const { tableName } = req?.body;

    const tableData = getAllDataFromTable(tableName);

    if(tableData) {
        tableData.then(resp => res.send(resp));
    } else {
        res.sendStatus(401);
    }
})

module.exports = router;