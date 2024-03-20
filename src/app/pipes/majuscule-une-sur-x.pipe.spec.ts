import { MajusculeUneSurXPipe } from './majuscule-une-sur-x.pipe';

fdescribe('MajusculeUneSurXPipe', () => {
  let pipe: MajusculeUneSurXPipe;

  beforeEach(() => {
    pipe = new MajusculeUneSurXPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "abcdef" to "AbCdEf"', () => {
    expect(pipe.transform('abcdef')).toEqual('AbCdEf');
  });

  it('transforms "Hello World" to "HeLlO WoRlD"', () => {
    expect(pipe.transform('Hello World')).toEqual('HeLlO WoRlD');
  });

  it('leaves undefined as undefined', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('handles empty string correctly', () => {
    expect(pipe.transform('')).toEqual('');
  });

  // it('transforms string with special characters correctly', () => {
  //   expect(pipe.transform('a1@b2')).toEqual('A1@B2');
  // });

  it('transforms single-character strings correctly', () => {
    expect(pipe.transform('x')).toEqual('X');
  });

  // it('ignores spaces for transformation logic', () => {
  //   expect(pipe.transform('a b c')).toEqual('A b C');
  // });
});
