const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url === '/') {
        res.end("Home Page")
    }
    else if (req.url === '/about') {
        res.end("About Page")
        // BLOCKING CODE!!!
        for (i = 0; i < 1000; i++) {
            for (j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
    }
    else {
        res.end("Error Page")
    }

})

server.listen(5000, () => {
    console.log("Server is listeneing on port 5000...")
})
