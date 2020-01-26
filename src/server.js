const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const http = require("http");
const cors = require('cors');
const {setupWebSocket} = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://warleyhenrique:warleyhenrique@cluster0-nf5ir.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(8081);