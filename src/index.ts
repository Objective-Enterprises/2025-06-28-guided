// 1. Interface for Magical Item
interface IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean
}

// 2. Class implementing IMagicalItem
class MagicalItem implements IMagicalItem {
  name: string
  type: string
  powerLevel: number
  isRare: boolean

  constructor (
    name: string,
    type: string,
    powerLevel: number,
    isRare: boolean
  ) {
    this.name = name
    this.type = type
    this.powerLevel = powerLevel
    this.isRare = isRare
  }

  displayInfo () {
    const rarity = this.isRare ? 'rare ' : ''
    console.log(`${this.name} is a ${rarity}${this.type} with ${this.powerLevel} power`)
  }
}

// Function to compare power levels of two items
function comparePower (item1: IMagicalItem, item2: IMagicalItem) {
  if (item1.powerLevel > item2.powerLevel) {
    return item1.name
  }
  return item2.name
}

// Generic class for inventory
class Inventory <T extends { name: string }> {
  private items: T[]

  constructor (items: T[]) {
    this.items = items
  }

  add (item: T) {
    this.items.push(item)
  }

  getAll () {
    return this.items
  }

  getNames () {
    return this.items.map(item => item.name)
    // ['Cap of Wisdom', 'Belt of Strength']
  }

  getProperty (item: T, key: keyof T) {
    return item[key]
  }
}
interface SodaCan {
  amount: number
  full: number
}
interface CatTreats {
  name: string
  full: number
}
const treatInventory = new Inventory<CatTreats>([])
treatInventory.add({ name: 'Meaty Bites', full: 0.8 })
treatInventory.add({ name: 'Party Mix', full: 1 })

// Example items
const capOfWisdom = new MagicalItem('Cap of Wisdom', 'hat', 9001, true)
const beltOfStrength = new MagicalItem(
  'Belt of Strength',
  'belt',
  9002,
  false
)

// Create inventory and add items
const magicInventory = new Inventory<MagicalItem>([])
magicInventory.add(capOfWisdom)
magicInventory.add(beltOfStrength)
// magicInventory.add({ name: 'Meaty Bites', full: 0.8 })
console.log(magicInventory.getProperty(capOfWisdom, 'name'))

// // Display all item info
// const items = inventory.getAll()
// items.forEach(item => item.displayInfo())

// // Compare power levels
// const higherName = comparePower(capOfWisdom, beltOfStrength)
// console.log('higherName:', higherName)

// // Access property using keyof




// function describe <T, K extends keyof T> (item: T, key: K) {
//   const value = item[key]
//   console.log(`The ${String(key)} is ${value}`)
// }

// describe({ position: 100, speed: 50 }, 'speed')
// describe({ name: 'Meaty bites', full: 0.8 }, 'name')

// // This should fail
// describe({ name: 'Meaty bites', full: 0.8 }, 'abc')