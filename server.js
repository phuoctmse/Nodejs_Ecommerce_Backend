const app = require("./src/app");

const PORT = 3055

const server = app.listen(PORT, () => {
    console.log(`start server on port ${PORT}`)
})

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed')
        //notify.send( ping ...)
        
    })
})