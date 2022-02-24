import { autocorrect } from './autoCorrect';

describe('autoCorrect function', () => {
  it('should work', () => {
    expect(autocorrect('We have sent the deliverables to you.')).toBe(
      'We have sent the deliverables to your client.'
    );

    expect(autocorrect('Our team is excited to finish this with you.')).toBe(
      'Our team is excited to finish this with your client.'
    );

    expect(autocorrect('Our team is excited to finish this with you.')).toBe(
      'Our team is excited to finish this with your client.'
    );

    expect(
      autocorrect('Our team is excited to finish this with youuuuu.')
    ).toBe('Our team is excited to finish this with your client.');

    expect(autocorrect('youtube')).toBe('youtube');

    expect(autocorrect('You should begin on Monday')).toBe(
      'your client should begin on Monday'
    );

    expect(
      autocorrect(
        'your client your client youville utube you youyouyou uuu raiyou united youuuu u you'
      )
    ).toBe(
      'your client your client youville utube your client youyouyou uuu raiyou united your client your client your client'
    );
  });
});
