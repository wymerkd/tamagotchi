export class Tamagotchi {
  constructor(name) {
    this.name = name,
    this.foodLevel = 10
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  areYouStarving() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel = 10;
  }
}
