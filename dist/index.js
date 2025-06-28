"use strict";
// 2. Class implementing IMagicalItem
class MagicalItem {
    constructor(name, type, powerLevel, isRare) {
        this.name = name;
        this.type = type;
        this.powerLevel = powerLevel;
        this.isRare = isRare;
    }
    displayInfo() {
        const rarity = this.isRare && 'rare ';
        console.log(`${this.name} is a ${rarity}${this.type} with ${this.powerLevel} power`);
    }
}
// Function to compare power levels of two items
function comparePower(item1, item2) {
    if (item1.powerLevel > item2.powerLevel) {
        return item1.name;
    }
    return item2.name;
}
const capOfWisdom = new MagicalItem('Cap of Wisdom', 'hat', 9001, true);
const beltOfStrength = new MagicalItem('Belt of Strength', 'belt', 9002, false);
const higherName = comparePower(capOfWisdom, beltOfStrength);
console.log('higherName:', higherName);
// Generic class for inventory
// Example items
// Create inventory and add items
// Display all item info
// Compare power levels
// Access property using keyof
