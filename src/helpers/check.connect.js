const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000

//count connectconnect
const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`Number of connections: ${numConnect}`)
}

const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        const maxConnection = numCores * 5

        console.log(`Active Connections: ${numConnection}`)
        console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`)
        if(numConnection > maxConnection) {
            console.log(`Overload: ${numConnection} connections`)
            //notify.send(...)
        }
    }, _SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}