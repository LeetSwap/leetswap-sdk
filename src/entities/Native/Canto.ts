import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WCANTO } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Canto extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'CANTO', 'Canto')
  }

  public get wrapped(): Token {
    const weth9 = WCANTO[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: Canto } = {}

  public static onChain(chainId: number): Canto {
    return this._cache[chainId] ?? (this._cache[chainId] = new Canto(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
