// SETTING UP CANVAS
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// x, y start, and then the amount of fill
c.fillRect(0, 0, canvas.width, canvas.height );

// CREATING PLAYER AND ENEMY
const gravity = 0.7;
const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "img/background.png",
    //scale: 2
})

const shop = new Sprite({
    position: {
        x: 620,
        y: 128
    },
    imageSrc: "img/shop.png",
    scale: 2.75,
    framesMax: 6
})

const player = new Fighter({
   position: {x: 0, y: 0},
   velocity: {x:0, y: 0},
   offset: {x:0, y:0},
   imageSrc: "player/Idle.png",
   framesMax: 8,
   scale: 2.4,
   offset:{
    x: 215,
    y: 140
   },
   sprites:{
    idle: {
        imageSrc: "player/Idle.png",
        framesMax: 8
    },

    run:{
        imageSrc: 'player/Run.png',
        framesMax: 8
    },
    jump:{
        imageSrc: 'player/Jump.png',
        framesMax: 2
    },
    fall:{
        imageSrc: 'player/Fall.png',
        framesMax: 2
    },
    attack1:{
        imageSrc: 'player/Attack1.png',
        framesMax: 6
    },

    hit:{
        imageSrc: 'player/Hit.png',
        framesMax: 4
    },

    death: {
        imageSrc: 'player/Death.png',
        framesMax: 6
    }

   },

   attackBox:{
    offset:{
        x: 100,
        y: 50
    },
    width: 140,
    height: 50
   }

});

const enemy = new Fighter({
    position: {x: 400, y: 100},
    velocity: {x:0, y:0},
    color: "blue",
    imageSrc: "enemy/Idle.png",
   framesMax: 4,
   scale: 2.4,
   offset:{
    x: 215,
    y: 157
   },
   sprites:{
    idle: {
        imageSrc: "enemy/Idle.png",
        framesMax: 4
    },

    run:{
        imageSrc: 'enemy/Run.png',
        framesMax: 8
    },
    jump:{
        imageSrc: 'enemy/Jump.png',
        framesMax: 2
    },
    fall:{
        imageSrc: 'enemy/Fall.png',
        framesMax: 2
    },
    attack1:{
        imageSrc: 'enemy/Attack1.png',
        framesMax: 4
    },
    hit: {
        imageSrc: 'enemy/Hit.png',
        framesMax: 3
    },

    death: {
        imageSrc: 'enemy/Death.png',
        framesMax: 7
    }

   },

   attackBox:{
    offset:{
        x: -175,
        y: 50
    },
    width: 140,
    height: 50
   }
 
})

const keys = {
    a:{pressed: false},
    d:{pressed: false},
    
    ArrowRight:{pressed: false},
    ArrowLeft:{pressed:false}
}

countDown();

function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    shop.update();

    player.update();
    enemy.update();

    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // player movement
    if(keys.a.pressed && player.lastKey == 'a'){
        player.velocity.x = -5;
        player.switchSprite("run");
        // prevents going off screen (left)
        if(player.position.x == 0){
            player.velocity.x = 0;
        }
    }else if(keys.d.pressed && player.lastKey == 'd'){
        player.velocity.x = 5;
        player.switchSprite("run");
        // prevents going off the screen (right)
        if(player.position.x == canvas.width - 34){
            player.velocity.x = 0;
        }
    }else{
        player.switchSprite("idle");
    }

    // player jumping
    if(player.velocity.y < 0){
        player.switchSprite("jump");
    }else if(player.velocity.y > 0){
        player.switchSprite("fall");
    }
    //console.log(player.position.y);
    
    // enemy movement
    if(keys.ArrowLeft.pressed && enemy.lastKey == 'ArrowLeft'){
        enemy.velocity.x = -5;
        enemy.switchSprite("run");
        // prevents going off screen (left)
        if(enemy.position.x == 0){
            enemy.velocity.x = 0;
        }
    }else if(keys.ArrowRight.pressed && enemy.lastKey == 'ArrowRight'){
        enemy.velocity.x = 5;
        enemy.switchSprite("run");
        // prevents going off screen (right)
        if(enemy.position.x == canvas.width - 34){
            enemy.velocity.x = 0;
        }
    }else{
        enemy.switchSprite("idle");
    }

    // enemy jumping
    if(enemy.velocity.y < 0){
        enemy.switchSprite("jump");
    }else if(enemy.velocity.y > 0){
        enemy.switchSprite("fall");
    }

    // detect for collision
    if(
        rectangularCollision({rectangle1: player, rectangle2: enemy}) 
        && player.isAttacking
        && player.framesCurrent == 4){
            enemy.takeHit();
            document.querySelector("#enemyHealth").style.width = enemy.health + '%';
            //console.log("attack hit");
    }

    // if player misses
    if(player.isAttacking && player.framesCurrent == 4){
        player.isAttacking = false;
    }


    if(rectangularCollision({rectangle1: enemy, rectangle2: player}) 
        && enemy.isAttacking
        && enemy.framesCurrent == 2){
        player.takeHit();
        document.querySelector("#playerHealth").style.width = player.health + '%';
        console.log(player.health);
        //console.log("enemy attack hit");
    }

    // if enemy misses
    if(enemy.isAttacking && enemy.framesCurrent == 2){
        enemy.isAttacking = false;
    }

    // end game based on health
    if(enemy.health <= 0 || player.health <= 0){
        determineWinner({player, enemy, timerId});
    }
}

animate();

window.addEventListener("keydown", (event) =>{

    if(!player.dead){
        switch(event.key){
            case 'd':
                keys.d.pressed = true;
                player.lastKey = 'd';
                break;
    
            case 'a':
                keys.a.pressed = true;
                player.lastKey = 'a';
                break;
    
            case 'w':
                player.velocity.y = -20;
                break;
    
            case ' ':
                player.attack();
                break;
        }
    }
    
    //console.log(event.key);
   
    if(!enemy.dead){
        switch(event.key){
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                enemy.lastKey = 'ArrowRight';
                break;
    
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                enemy.lastKey = 'ArrowLeft';
                break;
    
            case 'ArrowUp':
                enemy.velocity.y = -20;
                break;
            case 'ArrowDown':
                enemy.attack();
        }
    }
    //console.log(event.key);
})

window.addEventListener("keyup", (event) =>{
    switch(event.key){
        case 'd':
            keys.d.pressed = false;
            break;

        case 'a':
            keys.a.pressed = false;
            break;
    }

    // ENEMY KEYS
    switch(event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
    }
    //console.log(event.key);
})