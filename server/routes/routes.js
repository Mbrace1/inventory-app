const express = require('express')
const itemsRouter = express.Router()
const { Item } = require('../models/items');
const app = express();
const { seed } = require('../models/seed.js');
const cors = require("cors");

//Allow CORS requests
app.use(cors());
// parsing middleware for form input data & json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/**
 * We need to be able to fetch all the items from the database. 
 */
//  let buildDB = async () => {
//     await seed()
// }
// buildDB();
app.get("/items", async (req, res) => {
    const allItems = await Item.findAll({});
    console.log(allItems);
    res.send(allItems)
});
app.get("/items/:itemid", async (req, res) => {
    const oneItem = await Item.findOne({ where: { id: req.params.itemid } });
    console.log(oneItem);
    res.send(oneItem)
});

app.post("/items", async (req, res) => {
    Item.create(req.body)
    res.send(req.body)
})



app.put("/items", async (req, res) => {
    await Item.update(req.body, { where: { id: req.params.id } })
    res.sendStatus(200)
})

app.listen(3001, async () => {
    await seed()
    console.log("Server is up and listening at http://localhost:3001")
});

