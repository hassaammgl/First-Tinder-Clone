import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'


// App config
const app = express()
const port = 3001 || process.env.PORT;
const connection_url = `mongodb://127.0.0.1:27017/Tinder`

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conected to DB');
}).catch((err) => {
    console.log(err);
})

// Making Schemas for data storage
const card_Schema = mongoose.Schema({
    name: String,
    imgUrl: String
});

const Cards = new mongoose.model("Tinder", card_Schema);

// Api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello World!')
});

// making api for creating product
app.post('/tinder/card', async (req, res) => {

    const dbCard = await Cards.create(req.body);

    res.status(201).json({
        success: true,
        dbCard
    })

})

// making api for reading product

app.get('/tinder/card', async (req, res) => {

    const cardItem = await Cards.find();
    res.status(200).json({
        success: true,
        cardItem
    })
})


// listeners
app.listen(port, () => {
    console.log(`Server  is listening on  http://localhost:${port}`);
});

