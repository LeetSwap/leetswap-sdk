import { Canto } from './Canto'

describe('Canto', () => {
  it('static constructor uses cache', () => {
    expect(Canto.onChain(10000) === Canto.onChain(10000)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Canto.onChain(10000) !== Canto.onChain(10001)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Canto.onChain(10000).equals(Canto.onChain(10001))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Canto.onChain(10000).equals(Canto.onChain(10000))).toEqual(true)
  })
})
