let videos = require.context("../media/videos", true)
let images = require.context("../media/photos/projects", true)
let icons = require.context("../media/icons", true)

const projectData = [
    {
        name: "Good Work",
        type: "project",
        card: images("./good_work_card.jpg"),
        video: videos("./good_work_demo.mp4"),
        blurb: "Goal Tracking with Partner Aaccountability for Reducing Stress and Anxiety",
        description: "Good Work is a web application designed to help reduce stress and anxiety through goal tracking and partner accountability. Built with a Ruby on Rails back end and React/Redux front end, Good Work allows users to create and manage goals while connecting them with a partner for every step of their journey. Any time a goal, list, or task is completed, the app sends out an email congratulating the user and alerting their repsective partner of their accomplishment!",
        frontRepo: {
            link: "https://github.com/Bcdirito/good_work_front",
            icon: icons("./react_icon.png"),
            language: "React"
        },
        backRepo: {
            link: "https://github.com/Bcdirito/good_work_back",
            icon: icons("./rails_icon.png"),
            language: "Ruby on Rails" 
        },
        deployment: {}
    },
    {
        name: "Virtual Met",
        type: "project",
        card: images("./virtual_met_card.jpg"),
        video: videos("./virtual_met_demo.mp4"),
        blurb: "Take digital tours of the Met 5th Ave Museum",
        description: "Virtual Met is a web application allowing users to take procured tours of the prestigious Met 5th Ave Museum. Having been constructed with a JavaScript front end, a Ruby on Rails back end, and integrating the Met Collection API, visiters may view various works of up to 6 different departments - accompanied by a thematic playist) - and learn as much as they want from the Met Museum's website and archives!",
        frontRepo: {
            link: "https://github.com/Bcdirito/virtual_met_front",
            icon: icons("./javascript_icon.png"),
            language: "JavaScript"
        },
        backRepo: {
            link: "https://github.com/Bcdirito/virtual_met_back",
            icon: icons("./rails_icon.png"),
            language: "Ruby on Rails"
        },
        deployment: {
            link: "https://virtual-met-front.herokuapp.com",
            icon: icons("./met_icon.png"),
            language: "Heroku"
        }
    },
    {
        name: "myBrews",
        type: "project",
        card: images("./myBrews_card.jpg"),
        video: videos("./myBrews_demo.mp4"),
        blurb: "A CLI Companion App for Coffee Lovers",
        description: "myBrews is a CLI application for the coffee addict in all of us. Utilizing Ruby and the ActiveRecord gem, it allows users to track coffees they've consumed, rate them, make notes, and even get randomized selections utilizing Ruby's Faker Gem. If you like coffee, this app is for you!",
        frontRepo: {},
        backRepo: {
            link: "https://github.com/Bcdirito/myBrews",
            icon: icons("./ruby_icon.png"),
            language: "Ruby"
        },
        deployment: {}
    }
]

module.exports = projectData