const server = require("./app");

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
     res.render("index");
});

server.listen(port, () => {
     console.log(`Server On!`);
})