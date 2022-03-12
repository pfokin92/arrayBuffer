import ArrayBufferConverter from '../app';

test('Строка', () => {
  const result = ArrayBufferConverter.load('Hello');
  expect(result.byteLength).toEqual(10);
});

test('Объект в строке', () => {
  const array = ArrayBufferConverter.load('Hello');
  const result = ArrayBufferConverter.toString(array);
  expect(result).toEqual('Hello');
});
