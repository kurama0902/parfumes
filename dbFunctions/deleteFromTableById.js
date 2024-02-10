const getClient = require('../get-client');

const deleteFromTableById = async (tableName, IDs) => {

    try {
        const client = await getClient();
        let deleteFromTableQuery = '';
        
        IDs.forEach(id => {
            deleteFromTableQuery += `DELETE FROM ${tableName} WHERE id=${id};`;
        });
        await client.query(deleteFromTableQuery);
        console.log('DELETED ITEM');
        client.end();
        return true;
    } catch (error) {
        console.error('CANNOT DELETE AN ITEM', error);
        client.end()
        return false;
    }
}

module.exports = deleteFromTableById;