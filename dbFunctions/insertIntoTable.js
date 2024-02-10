const getClient = require('../get-client');

const insertIntoTable = async (tableName, dataArray) => {

    try {
        const colNames = Object.keys(dataArray[0]).join(',');
        const client = await getClient();
        let insertIntoTableQuery = '';

        dataArray.forEach(element => {
            const values = Object.values(element).map(el => {
                if(typeof el === 'string') {
                    return `\'${el}\'`;
                } else {
                    return el;
                }
            }).join(',')
            console.log(values);
            insertIntoTableQuery += `INSERT INTO ${tableName} (${colNames}) VALUES(${values});`;    
        });

        console.log(insertIntoTableQuery);

        const res = await client.query(insertIntoTableQuery);
        console.log(`INSERTED into table.`);
        await client.end();
        return true;
    } catch (error) {
        console.error('CANNOT INSERT INTO TABLE', error);
        return false;
    }
};

module.exports = insertIntoTable;