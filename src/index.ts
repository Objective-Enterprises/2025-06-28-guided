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
    const rarity = this.isRare && 'rare '
    console.log(`${this.name} is a ${rarity}${this.type} with ${this.powerLevel} power`)
  }
}

const test = new MagicalItem('Cap of Wisdom', 'hat', 9001, true)
test.displayInfo()


// Function to compare power levels of two items


// Generic class for inventory


// Example items


// Create inventory and add items

// Display all item info


// Compare power levels


// Access property using keyof

