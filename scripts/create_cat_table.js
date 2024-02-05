const model = require('../database/index.js')

const createCatTable = async () => {
    // SQL query to create a table
    const queryText = `CREATE TABLE cats (
        id SERIAL PRIMARY KEY,
        image_url TEXT,
        breed TEXT,
        name TEXT,
        age TEXT,
        location TEXT,
        status TEXT,
        information TEXT
    )`
  
    try {
      // Connect to the database and execute the query
      const res = await model.pool.query(queryText);
      console.log('Table is successfully created');
    } catch (err) {
      console.error(err);
    } finally {
      // Close the pool connection
      await model.pool.end();
    }
  };
  
  // Call the function to create the table
  createCatTable();