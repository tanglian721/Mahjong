let amount = 144;
let selectTile;
let userTiles = [];
let p1Tiles = [];
let p2Tiles = [];
let p3Tiles = [];
let leftTiles = tiles;
console.log(tiles.length)


function deal(user) {
    console.log(user);
    let i = Math.round(Math.random() * (amount - 1));
    // let i = number + 1;
    selectTile = leftTiles[i];
    console.log(i);

    user.push(selectTile);
    leftTiles.splice(i, 1);
    amount--;
}

function Deal() {
    console.log("1");
    deal(p1Tiles);
    deal(p2Tiles);
    deal(p3Tiles);
    deal(userTiles);
    showTiles(p1Tiles, "com1Tiles");
    showTiles(p2Tiles, "com2Tiles");
    showTiles(p3Tiles, "com3Tiles");
    showTiles(userTiles, "userTiles");
    console.log(p1Tiles);
    p1Tiles = ArrayTiles(p1Tiles);
    p2Tiles = ArrayTiles(p2Tiles);
    p3Tiles = ArrayTiles(p3Tiles);
    p1Tiles = ArrayTiles(p1Tiles);
    console.log(p1Tiles);
    // Cookies.set("p1Tiles", p1Tiles);
    setTimeout(() => {
        showTiles(p1Tiles, "com1Tiles");
        showTiles(p2Tiles, "com2Tiles");
        showTiles(p3Tiles, "com3Tiles");
        showTiles(userTiles, "userTiles");
    }, 1000);
}

function DealAll() {
    for (let j = 0; j < 13; j++) {
        deal(userTiles);
        deal(p1Tiles);
        deal(p2Tiles);
        deal(p3Tiles);

    }

    // console.log(p1Tiles);
    showTiles(p1Tiles, "com1Tiles");
    showTiles(p2Tiles, "com2Tiles");
    showTiles(p3Tiles, "com3Tiles");
    showTiles(userTiles, "userTiles");
    p1Tiles = ArrayTiles(p1Tiles);
    p2Tiles = ArrayTiles(p2Tiles);
    p3Tiles = ArrayTiles(p3Tiles);
    userTiles = ArrayTiles(userTiles);
    // Cookies.set("p1Tiles", p1Tiles);
    setTimeout(() => {
        showTiles(p1Tiles, "com1Tiles");
        showTiles(p2Tiles, "com2Tiles");
        showTiles(p3Tiles, "com3Tiles");
        showTiles(userTiles, "userTiles");
    }, 1000);
}

document.getElementById('dealAll').addEventListener('click', DealAll);
document.getElementById('dealone').addEventListener('click', Deal);

function showTiles(user, id) {
    document.getElementById(id).innerHTML = "";
    for (let i = 0; i < user.length; i++) {
        let tilesArea = document.getElementById(id);
        let tile = document.createElement('div');
        tilesArea.append(tile);
        let tileSign = document.createElement('h4');
        tile.append(tileSign);
        tileSign.innerHTML = user[i].show;
    }
}