const getClient = require('../get-client');

const createTable = async (tableName, settings) => {
    try {
        const client = await getClient();
        let createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (`;

        const colNames = Object.keys(settings);
        colNames.forEach((column, index) => {
            let additionalProps = `${settings[column].includes('numeric') ? ' INT' : ''}${settings[column].includes('autoID') ? ' BIGSERIAL' : ''}${settings[column].includes('text') ? ' VARCHAR(120)' : ''}${settings[column].includes('unic') ? ' PRIMARY KEY' : ''}${settings[column].includes('non-empty') ? ' NOT NULL' : ''}`;

            if (colNames.length - 1 === index) {
                createTableQuery += `${column} ${additionalProps});`
            } else {
                createTableQuery += `${column} ${additionalProps},`            }
        })

        const res = await client.query(createTableQuery);
        console.log(`Created table.`);
        await client.end();
        return true;
    } catch (error) {
        console.error('CANNOT CREATE A NEW TABLE', error);
        return false;
    }
};

module.exports = createTable;