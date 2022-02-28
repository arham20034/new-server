import express from 'express'
const app = express()

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Best Of Luck Anas Bhai Allah Kamiyab Kare')
})
app.get('/food', (req, res) => {
    res.send('Eat Food')
})

app.get('/water', (req, res) => {
    res.send('Drink Water')
})


app.listen(PORT, () => {
    console.log(`Hello server is listening at http://localhost:${PORT}`)
})
