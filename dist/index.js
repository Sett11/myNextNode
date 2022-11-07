"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const db = {
    courses: [
        { id: 1, title: 'Front-end' },
        { id: 2, title: 'Back-end' },
        { id: 3, title: 'TS' },
        { id: 4, title: 'Node JS' }
    ]
};
app.get('/', (req, res) => {
    res.json({ message: 'Hi, idiots...!' });
});
app.get('/courses', (req, res) => {
    const foundCourses = db.courses
        .filter(c => c.title.indexOf(req.query.title) > -1);
    res.json(foundCourses);
});
app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => c.id === +req.params.id);
    if (!foundCourse) {
        res.sendStatus(404);
        return;
    }
    res.json(foundCourse);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
