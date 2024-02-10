const getClient = require('../get-client');

const updateProductInfoById = async (tableName, dataArray) => {

    try {
        const client = await getClient();

        let updateDataQuery = `UPDATE ${tableName} SET`;

        dataArray.forEach(element => {
            const id = element.id;
            const newData = element.newData;
            const columns = Object.keys(newData);

            let columsForUpdate = ''
            columns.forEach((column, index) => {
                if (index !== columns.length - 1) {
                    columsForUpdate += ` ${column}=${typeof newData[column] === 'string' ? `\'${newData[column]}\'` : newData[column]}, `
                } else {
                    columsForUpdate += ` ${column}=${typeof newData[column] === 'string' ? `\'${newData[column]}\'` : newData[column]} `
                }
            })

            updateDataQuery += columsForUpdate;
            updateDataQuery += `WHERE id = ${id};`;

            console.log(updateDataQuery);

        });
        await client.query(updateDataQuery);
        client.end();
        console.log('UPDATED ELEMENT');
        return true;
    } catch (error) {
        console.error('CANNOT UPDATE THE ELEMENT', error);
        client.end();
        return false;
    }

};

module.exports = updateProductInfoById;