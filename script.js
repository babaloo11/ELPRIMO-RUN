const WIDTH = 480;
const HEIGHT = 360;

let draw = SVG("game").size(WIDTH, HEIGHT);
let background = draw.image("ARENA.jpg", WIDTH, HEIGHT);
let ELPRIMO = draw.image("ELPRIMO.png", 80, 80).move(0, 230);
let WALL = draw.image("WALL.png", 60, 60).move(400, 230);
let TEXT = draw.text("SCORE ").move(240, 30).font({ size: 40 }).fill("WHITE");

let isJump = false;
let changeY = 0;
let POINT = draw.image("POINT.webp", 40, 40).move(400, 100);
let SCORE = 0;

function update() {
    if (isJump) {
        ELPRIMO.dy(changeY);
        changeY += 0.5;
        if (ELPRIMO.y() >= 230) {
            isJump = false;
        }
    }

    WALL.dx(-4);
    if (WALL.x() < -50) {
        WALL.x(WIDTH)
    }
    document.addEventListener("mousedown", function (event) {
        if (isJump == false) {
            changeY = -14;
            isJump = true;
        }
    });


    let collision = ELPRIMO.x() + ELPRIMO.width() > WALL.x() &&
        WALL.x() + WALL.width() > ELPRIMO.x() &&
        ELPRIMO.y() + ELPRIMO.height() > WALL.y();

    if (collision) {
        background.load("gmo.png")
        clearInterval(update_id);
    }
    POINT.dx(-3);
    if (POINT.x() < -50) {
        POINT.x(WIDTH)
    }
    let collision2 = ELPRIMO.x() + ELPRIMO.width() > POINT.x() &&
        POINT.x() + POINT.width() > ELPRIMO.x() &&
        ELPRIMO.y() < POINT.y();
    if (collision2) {
        SCORE += 1
        TEXT.text("" + SCORE);
    };













}
let update_id = setInterval(update, 10);



