const { deterministicPartitionKey } = require("./dpk");

describe('deterministicPartitionKey', () => {
  test('returns trivial partition key if event is undefined', () => {
    const trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey).toBe('0');
  });

  test('returns trivial partition key if event is null', () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe('0');
  });

  test('returns partition key if event has partitionKey property', () => {
    const event = { partitionKey: 'my-key' };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('my-key');
  });

  test('returns SHA3-512 hash of event JSON if event does not have partitionKey property', () => {
    const event = { foo: 'bar', test: 123 };
    const expected = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(expected);
  });

  test('returns SHA3-512 hash of trivial partition key if event is not an object', () => {
    const expected = crypto.createHash('sha3-512').update('0').digest('hex');
    const trivialKey = deterministicPartitionKey(123);
    expect(trivialKey).toBe(expected);
  });

  test('returns truncated SHA3-512 hash if candidate partition key is too long', () => {
    const longKey = 'a'.repeat(300);
    const expected = crypto.createHash('sha3-512').update(longKey).digest('hex').substr(0, 256);
    const trivialKey = deterministicPartitionKey({ testProperty: 'testValue', partitionKey: longKey });
    expect(trivialKey).toBe(expected);
  });
});