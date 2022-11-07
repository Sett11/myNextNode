import express from 'express'
const app = express()
const port = 3000

const db = {
  courses: [
  {id:1,title:'Front-end'},
  {id:2,title:'Back-end'},
  {id:3,title:'TS'},
  {id:4,title:'Node JS'}]
}


app.get('/', (req, res) => {
  res.json({message: 'Hi, idiots...!'})
})

app.get('/courses', (req, res) => {
  const foundCourses = db.courses
  .filter(c=> c.title.indexOf(req.query.title as string) > -1)
    res.json(foundCourses)
})

app.get('/courses/:id', (req, res) => {
  const foundCourse = db.courses.find(c => c.id === +req.params.id)

    if(!foundCourse){
      res.sendStatus(404)
      return
    }
    res.json(foundCourse)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})