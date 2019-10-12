export default class Beer {

    static verse(verse: number) {
        if (verse === 0) return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
        if (verse === 1) return `${verse} bottle of beer on the wall, ${verse} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
        if (verse === 2) return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottle of beer on the wall.\n`;
        return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`;
    }

    static sing(ceil: number = 99, floor: number = 0) {
        let song = "";
        for (let i = ceil; i >= floor; i--) {
            song += (i === floor) ? `${this.verse(i)}` : `${this.verse(i)}\n`;
        }
        return song;
    }
}
