scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 . . 3 3 . . 3 . . . . 
    . . . . . 3 . 3 3 . 3 . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 . . 3 . . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(11)
