function stadus_bar () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite3)
}
function clone_trooper () {
    mySprite2 = sprites.create(img`
        . . . . f f f f f . . . 
        . . f f 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 8 8 8 8 8 8 8 f 
        f 1 1 1 1 1 8 1 1 1 1 f 
        f 1 1 1 1 8 1 1 1 1 f f 
        f f 1 1 8 1 1 1 1 1 f f 
        . f 1 8 1 1 1 1 1 f f . 
        . f f 1 1 1 1 1 1 f . . 
        . . f 1 1 f f f f f f . 
        . . f 1 1 1 f 1 1 f . . 
        . . f 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `, SpriteKind.Player)
    mySprite2.setPosition(10, 71)
    controller.moveSprite(mySprite2)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 200, 0)
})
function storm_trooper () {
    mySprite3 = sprites.create(img`
        . . . f f f f f . . . . 
        . . f 1 1 1 1 1 f f . . 
        . f 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 f 
        f 2 2 2 2 2 2 2 1 1 1 f 
        f 1 1 1 1 2 1 1 1 1 1 f 
        f f 1 1 1 1 2 1 1 1 1 f 
        f f 1 1 1 1 1 2 1 1 f f 
        . f f 1 1 1 1 1 2 1 f . 
        . . f 1 1 1 1 1 1 f f . 
        . f f f f f f 1 1 f . . 
        . . f 1 1 f 1 1 1 f . . 
        . . f 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `, SpriteKind.Food)
    mySprite3.setPosition(141, randint(0, scene.screenHeight()))
    mySprite3.follow(mySprite2, 25)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
function clone_name (what_is_your_clone_name: string) {
    mySprite = game.askForString(what_is_your_clone_name)
    return what_is_your_clone_name
}
let mySprite = ""
let myDart: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let statusbar: StatusBarSprite = null
clone_trooper()
storm_trooper()
stadus_bar()
