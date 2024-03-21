import { cls } from './classNames'

describe('className', function () {
  test('return FIRST param only', () => {
    expect(cls('testClassName')).toBe('testClassName ')
  })

  test('return SECOND param only', () => {
    expect(cls('', { isBold: true }, [])).toBe(' isBold')
  })

  test('return THIRD param only', () => {
    expect(cls('', {}, ['testAdditional'])).toBe('  testAdditional')
  })

  test('check SECOND param', () => {
    expect(cls('testClassName', { isBold: true, isHovered: undefined }, [])).toBe('testClassName isBold')
  })
})
