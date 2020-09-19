/* Rearrange the order by size */
let numArray = [12, 32, 545, 76, 23, 53, 121, 6, 65];
let NewArray = [];

function ArrayMin() {
    console.log(numArray)
    let times = numArray.length;
    for (let j = 0; j < times; j++) {
        let num = numArray[0];
        for (let i = 0; i < numArray.length - 1; i++) {
            if (num >= numArray[i + 1]) {
                num = numArray[i + 1]
            }
        }
        NewArray.push(num);
        for (let i = 0; i < numArray.length; i++) {
            if (num === numArray[i]) {
                numArray.splice(i, 1);
            }
        }
    }
    console.log(NewArray);
}



function ArrayTiles(tiles) {
    // let Ptiles = JSON.parse(Cookies.get("p1Tiles"));
    // console.log(Ptiles);
    let dots = [];
    let char = [];
    let bam = [];
    let wind = [];
    let dragon = [];
    let flower = [];
    let season = [];
    let time = tiles.length;
    for (let i = time - 1; i >= 0; i--) {
        if (tiles[i].symbol === "dots") {
            // console.log("1");
            dots.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "Bamboo") {
            // console.log("2");
            bam.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "Char") {
            // console.log("3");
            char.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "winds") {
            // console.log("4");
            wind.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "Flowers") {
            // console.log("5");
            flower.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "Seasons") {
            // console.log("6");
            season.push(tiles[i]);
            tiles.splice(i, 1)
        } else if (tiles[i].symbol === "Dragons") {
            // console.log("7");
            dragon.push(tiles[i]);
            tiles.splice(i, 1)
        }
    }
    let idots = tilesMin(dots);
    let ichar = tilesMin(char);
    let ibam = tilesMin(bam);
    let iwind = tilesMin(wind);
    let iflower = tilesMin(flower);
    let iseason = tilesMin(season);
    let idragon = tilesMin(dragon);
    let newArray = [];
    newArray = [...idots, ...ichar, ...ibam, ...iwind, ...idragon, ...iseason, ...iflower];
    // console.log(newArray);
    return newArray;
}


function tilesMin(array) {
    // console.log(array);
    let newgroup = [];
    let groupi = array.length;
    // console.log(groupi);
    for (let j = 0; j <= groupi; j++) {
        // console.log(groupi);
        // console.log(array.length);
        if (array.length > 0) {
            // console.log(j);
            let num = array[0].number;
            // console.log(num);
            for (let i = 1; i < array.length; i++) {
                // console.log(i);
                // console.log(array[i].number);
                if (num >= array[i].number) {
                    num = array[i].number
                        // console.log(num);
                }
            }
            // console.log(num);
            // console.log(array);
            for (let i = 0; i < array.length; i++) {
                // console.log(num);
                // console.log(array[i]);
                if (num === array[i].number) {
                    // console.log(num);
                    // console.log(array[i]);
                    newgroup.push(array[i]);
                    // console.log(newgroup);
                    array.splice(i, 1);
                    // console.log(array);
                }
            }
        } else {
            // console.log('1')
            // console.log(newgroup)
            return newgroup;
        }
    }
}