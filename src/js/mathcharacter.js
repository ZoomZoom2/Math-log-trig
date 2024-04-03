import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stoned = false;
    this.attack = 100;
  }

  getAttack() {
    if (this.distance === 0) return this.attack;

    let result = this.attack - (this.attack * (10 / 100) * (this.distance - 1));
    if (this.stoned) {
      result = Math.round(result - (Math.log2(this.distance) * 5));
    }
    return Math.max(0, result);
  }

  setAttack(value) {
    this.attack = value;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(value) {
    this.stoned = value;
  }
}
