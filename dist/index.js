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
    getNames() {
        return this.items.map(item => item.name);
        // ['Cap of Wisdom', 'Belt of Strength']
    }
    getProperty(item, key) {
        return item[key];
    }
}
const treatInventory = new Inventory([]);
treatInventory.add({ name: 'Meaty Bites', full: 0.8 });
treatInventory.add({ name: 'Party Mix', full: 1 });
// Example items
const capOfWisdom = new MagicalItem('Cap of Wisdom', 'hat', 9001, true);
const beltOfStrength = new MagicalItem('Belt of Strength', 'belt', 9002, false);
// Create inventory and add items
const magicInventory = new Inventory([]);
magicInventory.add(capOfWisdom);
magicInventory.add(beltOfStrength);
// magicInventory.add({ name: 'Meaty Bites', full: 0.8 })
console.log(magicInventory.getProperty(capOfWisdom, 'name'));
// // Display all item info
// const items = inventory.getAll()
// items.forEach(item => item.displayInfo())
// // Compare power levels
// const higherName = comparePower(capOfWisdom, beltOfStrength)
// console.log('higherName:', higherName)
// // Access property using keyof
function describe(item, key, other, otherValue) {
    const value = item[key];
    console.log('item:', item);
    console.log('other:', other);
    console.log(`The ${String(key)} is ${value}, but the other ${String(key)} was ${otherValue}`);
}
const boat = { position: 100, speed: 50 };
const plane = { position: 0, speed: 1000, wings: 2 };
describe(boat, 'speed', plane, 1000);
