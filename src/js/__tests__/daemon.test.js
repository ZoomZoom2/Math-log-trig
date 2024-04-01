import Daemon from '../daemon';

test('Должна расчитать силу урона', () => {
  const demon = new Daemon();
  demon.attack = 100;
  demon.stoned = true;
  expect(demon.getAttack(3)).toBe(72);
});
