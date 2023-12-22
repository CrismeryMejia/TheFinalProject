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

app.get("/instructors", (req , res)=>{
    const q = "SELECT * FROM instructor"
    db.query(q,(err, data)=> {
      if (err) return res.json(err)
      return res.json(data)
    })
  })

  