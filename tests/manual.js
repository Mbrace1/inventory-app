const { seed } = require('../server/models/seed')

async function test() {
    await seed()
    console.log('Test finished')
}

test()
