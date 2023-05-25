// fizzbuzz.test.js

const {fizzBuzz} = require('./fizzbuzz');

describe('FizzBuzz', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  // it('should log the correct sequence to the console', () => {
  //   fizzBuzz();

  //   expect(consoleLogSpy).toHaveBeenCalledTimes(100);
  //   expect(consoleLogSpy.mock.calls[0][0]).toBe('1');
  //   expect(consoleLogSpy.mock.calls[2][0]).toBe('Fizz');
  //   expect(consoleLogSpy.mock.calls[4][0]).toBe('Buzz');
  //   expect(consoleLogSpy.mock.calls[14][0]).toBe('FizzBuzz');
  // });

  it('should log "Fizz" for numbers divisible by 3', () => {
    fizzBuzz();

    expect(consoleLogSpy.mock.calls[2][0]).toBe('Fizz');
    expect(consoleLogSpy.mock.calls[5][0]).toBe('Fizz');
    expect(consoleLogSpy.mock.calls[98][0]).toBe('Fizz');
  });

  it('should log "Buzz" for numbers divisible by 5', () => {
    fizzBuzz();

    expect(consoleLogSpy.mock.calls[4][0]).toBe('Buzz');
    expect(consoleLogSpy.mock.calls[9][0]).toBe('Buzz');
    expect(consoleLogSpy.mock.calls[99][0]).toBe('Buzz');
  });

  it('should log "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    fizzBuzz();

    expect(consoleLogSpy.mock.calls[14][0]).toBe('FizzBuzz');
    expect(consoleLogSpy.mock.calls[29][0]).toBe('FizzBuzz');
    expect(consoleLogSpy.mock.calls[59][0]).toBe('FizzBuzz');
    expect(consoleLogSpy.mock.calls[89][0]).toBe('FizzBuzz');
  });
});
