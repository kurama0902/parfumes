const getClient = require('../get-client');

const getAllDataFromTable = async (tableName) => {
    try {
        const client = await getClient();
        const getAllDataQuery = `SELECT * FROM ${tableName};`;
        const data = await client.query(getAllDataQuery);
        client.end();
        console.log('ALL THE DATA TAKEN FROM TABLE');
        return data.rows
    } catch (error) {
        console.log('CANNOT TAKE ALL THE DATA FROM TABLE', error);
    }
}

module.exports = getAllDataFromTable;