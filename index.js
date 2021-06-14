//const gifts = ["teddy bear", "drone", "doll"];
//
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//    return gifts;
//}
//
//wrapGifts(gifts);
const names = ["Lisa", "Kaitlyn", "Jan"]
const event = ["Surprise"]

function writeCards(names, event) {
    let newArray = []
    for (let i =0; i< names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}

function countDown(n){
let countDown = n;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}