const express = require ("express")
const cors =  require ("cors")
const sequelize = require ("sequelize");
const client = require ("./db");
const router = express.Router();

const PORT = process.env.PORT || 8080;

const app = express();

var corOptions = {
    origin: 'https://localhost:8080'
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

client.connect((err) => {
    if (err) {
        console.error(`connection error`, err.stack)
    } else {
        console.log(`connected`)
    }
});


app.get('/', (req, res) => {
    res.json({ message: "hello from chukwunomso" })
});
const cartRoute = require('./routes/cartRoutes');
const couponRoute = require('./routes/couponRoutes');

app.use('/api/cart', cartRoute)
app.use('/api/coupon', couponRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  