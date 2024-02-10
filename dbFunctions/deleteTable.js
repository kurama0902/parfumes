const getClient = require('../get-client');

const deleteTable = async (tableName) => {
    try {
        const client = await getClient();
        let deleteTableQuery = `DROP TABLE ${tableName}`;
        const res = await client.query(deleteTableQuery);
        console.log(`DELETED table.`);
        await client.end();
        return true;
    } catch (error) {
        console.error('CANNOT DELETE A TABLE', error);
        return false;
    }
};

module.exports = deleteTable;