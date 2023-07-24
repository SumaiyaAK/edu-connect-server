const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const AllCollege = require('./ApiData/AllCollege.json')

app.use(cors());

app.get('/', (req, res)=> {
    res.send('EduConnect is running')
})

app.get('/AllCollege', (req, res) =>{
    res.send(AllCollege)
})

app.listen(port, () => {
    console.log(`EduConnect API is running on port: ${port}`)
})