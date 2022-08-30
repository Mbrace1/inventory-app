const { itemsData } = require('../seedData');
const { Item } = require('./items')
const { db } = require('../db')

//changes force to false, to not drop tables each refresh, 
// can cause error, only if User.count() == 0 run script if not

async function seed() {

    await db.sync({ force: true })

    await Promise.all(itemsData.map(val => Item.create(val)))

    console.log('Database seeded...')

}

module.exports = { seed }


