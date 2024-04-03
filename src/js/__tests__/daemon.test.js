import Daemon from '../daemon';

test('Должна расчитать силу урона', () => {
  const demon = new Daemon();
  demon.distance = 3;
  demon.attack = 100;
  demon.stoned = true;
  expect(demon.getAttack()).toBe(72);
});
