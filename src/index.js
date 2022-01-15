const server = require("./app");

const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
     res.render("home_page");
});

const stock_routes = require('./routes/stock');
server.use("/stock", stock_routes);

const fii_routes = require('./routes/fii');
server.use("/fii", fii_routes);

const crypto_routes = require('./routes/crypto');
server.use("/crypto", crypto_routes);

const fund_routes = require('./routes/fund');
server.use("/fund", fund_routes);

const emergency_reserve_routes = require('./routes/emergency_reserve');
server.use("/emergency_reserve", emergency_reserve_routes);
server.listen(port, () => {
     console.log(`Server On!`);
})
