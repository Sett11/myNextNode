"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json({ message: 'Hi, idiots...!' });
});
app.get('/users', (req, res) => {
    res.send({ messege: 'Hello User!.!.!' });
});
app.post('/users', (req, res) => {
    res.send('We created users!.!');
});
app.put('/users', (req, res) => {
    res.send('What the fack!?!');
});
app.post('/users/5', (req, res) => {
    res.send('What the fack!?! I`m users 5!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
