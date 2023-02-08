import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytywanie obrazków

loadSprite("kartka","kartka.png")

loadSprite("gwiazda","gwiazda.png")

loadSound("muzyka","muzyka.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(0,0)
])

onUpdate(()=>{

    if(gwiazda.pos.x < 600) gwiazda.pos.x=gwiazda.pos.x+1
})

onKeyPress("space", ()=>{
    play("muzyka")
})