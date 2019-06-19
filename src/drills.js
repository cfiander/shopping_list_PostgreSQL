require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

// function getAllTextItems(searchTerm) {
//     knexInstance
//     .select('name', 'price', 'checked', 'category')
//     .from('shopping_list')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result => {
//         console.log(result)
//     })
// }

// getAllTextItems('Steak');

// function getAllItemsPaginated(page) {
//     const productsPerPage = 10
//     const offset = productsPerPage * (page - 1)
//     knexInstance
//     .select('name', 'price', 'checked', 'category')
//     .from('shopping_list')
//     .limit(productsPerPage)
//     .offset(offset)
//     .then(result => {
//         console.log(result)
//     })
// }

// getAllItemsPaginated(2);

// function getItemsAfterDate(daysAgo) {
//     knexInstance
//     .select('name', 'price', 'category')
//       .count('date_added AS added')
//       .where(
//         'date_added',
//         '<',
//         knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//       )
//       .from('shopping_list')
//       .groupBy('name', 'price', 'category')
//       .orderBy([
//         { column: 'added', order: 'ASC' },
//       ])
//       .then(result => {
//         console.log(result)
//       })
//     }


// getItemsAfterDate('4 days')

function getTotalCost() {
    knexInstance
      .select('category')
      .sum('price AS Total Price')
      .from('shopping_list')
      .groupBy('category')
      .orderBy([
        { column: 'category', order: 'ASC'},
      ])
      .then(result => console.log(result))
  }
  getTotalCost();