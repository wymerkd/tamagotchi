export class Tamagotchi {
  constructor(name) {
    this.name = name,
    this.foodLevel = 10
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 5000);
  }

  feed() {
    this.foodLevel = 10;
  }
}
