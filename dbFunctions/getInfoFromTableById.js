const getClient = require('../get-client');

const getInfoFromTableById = async (tableName, IDs) => {

    try {
        const client = await getClient();
        const values = IDs.map(id => `id = ${id}`).join(' OR ')
        let getInfoQuery = `SELECT * FROM ${tableName} WHERE ${values};`

        const result = await client.query(getInfoQuery);
        console.log('DATA TAKEN FROM TABLE');
        client.end()
        return result.rows;
    } catch (error) {
        console.error('CANNOT GET DATA FROM TABLE');
        client.end()
        return false;
    }
}

module.exports = getInfoFromTableById;