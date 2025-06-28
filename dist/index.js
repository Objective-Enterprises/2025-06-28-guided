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
        const rarity = this.isRare ? 'rare ' : '';
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
// Generic class for inventory
class Inventory {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Example items
const capOfWisdom = new MagicalItem('Cap of Wisdom', 'hat', 9001, true);
const beltOfStrength = new MagicalItem('Belt of Strength', 'belt', 9002, false);
// Create inventory and add items
const inventory = new Inventory([]);
inventory.add(capOfWisdom);
inventory.add(beltOfStrength);
// Display all item info
const items = inventory.getAll();
items.forEach(item => item.displayInfo());
// Compare power levels
const higherName = comparePower(capOfWisdom, beltOfStrength);
console.log('higherName:', higherName);
// Access property using keyof
