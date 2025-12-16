import express from "express";

const viewsRouer = express.Router();

viewsRouer.get("/", (req, res) => {
    res.render("index", {title:"Chat con Websocket"});
})

export default viewsRouer