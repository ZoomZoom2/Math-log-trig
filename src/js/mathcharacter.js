import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.stoned = false;
    this.attack = 100;
  }

  getAttack(distance) {
    if (distance === 0) return this.attack;

    let result = this.attack - (this.attack * (10 / 100) * (distance - 1));
    if (this.stoned) {
      result = Math.round(result - (Math.log2(distance) * 5));
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
