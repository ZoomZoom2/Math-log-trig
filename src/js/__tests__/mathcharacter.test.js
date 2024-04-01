import MathCharacter from '../mathcharacter';

test('Должна проверить дистанцию на равенство 0', () => {
  const mathChar = new MathCharacter();
  mathChar.attack = 100;
  expect(mathChar.getAttack(0)).toBe(100);
});

test('Должна проверить влияние дурмана на силу урона', () => {
  const mathChar = new MathCharacter();
  mathChar.attack = 100;
  mathChar.stoned = false;
  expect(mathChar.getAttack(2)).toBe(90);
});

test('Уровень атаки должен быть >= 0', () => {
  const mathChar = new MathCharacter();
  mathChar.attack = 3;
  mathChar.stoned = true;
  expect(mathChar.getAttack(3)).toBe(0);
});

test('Должна установить значение атаки', () => {
  const mathChar = new MathCharacter();
  mathChar.setAttack(75);
  expect(mathChar.getAttack(0)).toBe(75);
});

test('Должна вернуть значение влияния дурмана', () => {
  const mathChar = new MathCharacter();
  mathChar.setStoned(false);
  expect(mathChar.getStoned()).toBe(false);
});

test('Должна установить влияние дурмана', () => {
  const mathChar = new MathCharacter();
  mathChar.setStoned(true);
  expect(mathChar.stoned).toBe(true);
});
