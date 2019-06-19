const ShoppingService = require('../src/shopping-list-service')
const knex = require('knex')


describe('shopping list service object', () => {
    let db;
    let testItems = [
        {name: 'First Test Item', price: 13.10, category: 'Main',              checked: false,  date_added: new Date('2029-01-22T16:28:32.615Z')},
        {name: 'Second Test Item', price: 4.99, category: 'Snack',                 checked: true,   date_added: new Date('2100-05-22T16:28:32.615Z')},
        {name: 'Third Test Item', price: 5.50, category: 'Snack',           checked: false,  date_added: new Date('1919-12-22T16:28:32.615Z')},
    ]

    before(() => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DB_URL,
        })
      })

    before(() => db('blogful_articles').truncate())

    afterEach(() => db('blogful_articles').truncate())

    after(() => db.destroy())

    context(`Given 'shopping_list' has data`, () => {
        beforeEach(() => {
           return db
             .into('shopping_list')
             .insert(testItems)
         })
         it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
            return ShoppingService.getAllItems(db)
               .then(actual => {
                   expect(actual).to.eql(testItems.map(item => ({
                     ...item,
                      date_published: new Date(article.date_published)
                   })))
                })
        })
       it(`getById() resolves an item by id from 'shopping_list' table`, () => {
         const thirdId = 3
         const thirdTestItem = testItems[thirdId - 1]
         return ShoppingService.getById(db, thirdId)
           .then(actual => {
             expect(actual).to.eql({
               id: thirdId,
               name: thirdTestItem.name,
               price: thirdTestItem.price,
               category: thirdTestItem.category,
               checked: thirdTestItem.checked,
               date_added: thirdTestItem.date_added,
             })
           })
       })
       it(`updateItem() updates an item from the 'shopping_list' table`, () => {
           const idOfItemToUpdate = 3
           const newItemData = {
            id: thirdId,
            name: 'updated name',
            price: 5,
            category: 'Snack',
            checked: false,
            date_added: new Date(),
           }
           return ShoppingService.updateItem(db, idOfItemToUpdate, newItemData)
             .then(() => ShoppingService.getById(db, idOfItemToUpdate))
             .then(item => {
               expect(item).to.eql({
                 id: idOfItemToUpdate,
                 ...newItemData,
               })
             })
         })

    })
   context(`Given 'shopping_list' has no data`, () => {
       it(`getAllItems() resolves an empty array`, () => {
         return ShoppingService.getAllItems(db)
           .then(actual => {
             expect(actual).to.eql([])
           })
       })
     })

   it(`insertItem() inserts a new item and resolves the new item with an 'id'`, () => {
    const newItem = {
        name: 'Test new name',
        price: 5,
        category: 'Main',
        checked: true,
        date_added: new Date('2020-01-01T00:00:00.000Z'),
      }
      return ShoppingService.insertItem(db, newArticle)
        .then(actual => {
            expect(actual).to.eql({
              id: 1,
              name: newItem.name,
              price: newItem.price,
              category: newItem.category,
              checked: newItem.checked,
              date_added: newItem.date_added,
            })
          })
   })
})
 