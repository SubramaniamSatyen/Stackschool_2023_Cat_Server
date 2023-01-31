/**** INIT SERVER ****/
const express = require('express');
const app = express();
app.use(express.json());

/**** DEPLOY SERVER ****/
const port = 8080;

app.listen(port);
console.log(`listening on http://localhost:${port}/`);
console.log("Press Ctrl-C to quit");


let petCount = 0;
let hunger = 10;
let thirst = 10;
let health = 100;
let eating = false;

/**** ROUTES ****/
app.get("/status", (request, response) => {
    const catData = 
    {
        "health": health,
        "hunger": hunger,
        "thirst": thirst,
        "action": "Meows and sits down, ready for more pets."
    };
    eating = false;

    response.send(catData);
})

app.post('/water', (request, response) => {
    let currAction = "Meows contently - its not thirsty.";

    if (thirst > 0){
        thirst += 1;
        currAction = "Meows and takes a cautious sip.";
    }
    eating = false;


    const catData = 
    {
        "health": health,
        "hunger": hunger,
        "thirst": thirst,
        "action": currAction
    };

    response.send(catData);
});

app.post('/feed', (request, response) => {
    let currAction = "Meows gratefully, and attacks the food.";

    if (eating){
        currAction = "Meows in confusion. It's already eating.";
    } else{
        eating = true;
        hunger += 40;
    }

    const catData = 
    {
        "health": health,
        "hunger": hunger,
        "thirst": thirst,
        "action": currAction
    };

    response.send(catData);
});

app.post('/pet', (request, response) => {
    let currAction = "Meows and sits down, ready for more pets.";

    if (eating){
        currAction = "Bites your hand. He wasn't done eating yet!";
    }
    petCount += 1;

    const catData = 
    {
        "health": health,
        "hunger": hunger,
        "thirst": thirst,
        "action": currAction
    };

    response.send(catData);
});

app.post('/meow', (request, response)  => {
    let currAction = "Meows back.";

    if (eating){
        currAction = "Looks up from food, confused.";
    }

    const catData = 
    {
        "health": health,
        "hunger": hunger,
        "thirst": thirst,
        "action": currAction
    };

    response.send(catData);
});