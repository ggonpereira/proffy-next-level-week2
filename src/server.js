// datas
const proffys = [
    { 
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c3d7d65&amp;v=4", 
        whatsapp: "189989124401", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Daniel Evaristo",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c3d7d65&amp;v=4", 
        whatsapp: "17996551203", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    { 
        name: "Gabriel Pereira",
        avatar: "https://avatars1.githubusercontent.com/u/50498997?s=460&u=ccb9a494761474a575f8ce10bc47badd3f0e2129&v=4", 
        whatsapp: "17996511203", 
        bio: "Viciado em ensinar. Melhor jogador de CS da minha casa, da um tiro de Deagle e grita: 'QUE OTA??'", 
        subject: "CS:GO",
        cost: "50",
        weekday: [3],
        time_from: [4000],
        time_to: [5000]
    }
]

const subjects = [ 
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Inglês",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]

// functions

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    // if have data
    const isNotEmpty = Object.keys(data).length != 0 // object to array, verify the lenght... if lenght = 0, array is empty
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        // add data to the proffys list
        proffys.push(data)

        return res.redirect("/study")
    }


    return res.render("give-classes.html", {subjects, weekdays})  
}

// server
const express = require('express')
const server = express()

// import and configure nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {   // src/views -> folder with all the html files
    express: server,
    noCache: true
})

// start and configuration of the server
server
// configure static files (css, scripts, images)
.use(express.static("public"))

// routes of the application
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// start the server
.listen(5500)
