let images = require.context("../media/photos/publications")

const publicationData = [
    {
        name: "Kindling the Fire",
        image: images("./kindling_photo.jpg"),
        card: images("./kindling_card.jpeg"),
        blurb: "Staying Inspired during the Job Search Marathon"
    },
    {
        name: "Call Me 'The Exterminator'",
        image: images("./exterminator_photo.jpg"),
        card: images("./exterminator_card.jpg"),
        blurb: "Becoming the Champion Debugger"
    }
]

export default publicationData