const model = require('../database/index.js')
const catData = require('./catData.js');

// Function to reset the 'cats' table and insert new data
async function resetAndInsertCats() {
  try {
    // Start a transaction
    await model.pool.query('BEGIN'); 

    // Insert cat data
    const insertQuery = 'INSERT INTO cats(image_url, breed, name, age, location, status, information) VALUES($1, $2, $3, $4, $5, $6, $7)';
    for (const cat of catData.catExampleData) {
      await model.pool.query(insertQuery, [cat.imageURL, cat.breed, cat.name, cat.age, cat.location, cat.status, cat.information]);
    }

    await model.pool.query('COMMIT'); // Commit the transaction
  } catch (err) {
    await model.pool.query('ROLLBACK'); // Rollback the transaction in case of an error
    console.log(err);
  }
}

resetAndInsertCats();
