const { Pool } = require('pg')

// Create a new pool instance to manage your connections
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false
  // }
})


// Function to get all cats from the database
const getAllCats = async () =>  {
  const { rows } = await pool.query('SELECT * FROM cats')
  return rows
}

// Function to add a new cat to the database
const addCat = async (cat) => {
  const { imageURL, breed, name, age, location, status, information } = cat
  const { rows } = await pool.query(
    'INSERT INTO cats(image_url, breed, name, age, location, status, information) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [imageURL, breed, name, age, location, status, information]
  )

  return rows[0];
};

module.exports = {
  getAllCats,
  addCat,
  pool
}
