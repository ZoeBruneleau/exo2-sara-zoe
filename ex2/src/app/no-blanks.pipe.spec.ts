import { NoBlanksPipe } from './no-blanks.pipe';

describe('NoBlanksPipe', () => {
  it('create an instance', () => {
    const pipe = new NoBlanksPipe();
    expect(pipe).toBeTruthy();
  });
});
