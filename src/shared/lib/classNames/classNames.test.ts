import { cls } from 'shared/lib/classNames/classNames'

describe('classNames with', () => {
  test('first arg', () => {
    expect(cls('className')).toBe("className ")
  })

  test('first and second args', () => {
    expect(cls('className', { selected: true })).toBe("className selected")
  })

  test('all args', () => {
    expect(cls('className', { selected: true }, ['class1', 'class2']))
      .toBe("className selected class1 class2")
  })

  test('all args - wrong order', () => {
    expect(cls('className', { selected: true }, ['class1', 'class2']))
      .not.toBe("className class1 selected class2")
  })
})
