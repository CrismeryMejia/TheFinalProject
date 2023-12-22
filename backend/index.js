import express from 'express'


const app = express();
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:'root',
  database:'cmpsci'
})


app.get("/", (req, res)=> {
  res.json("hello this is the backend")
})

