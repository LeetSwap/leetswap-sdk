import { FLEXUSD_ADDRESS, WCANTO_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'
import { TokenMap } from '../types/TokenMap'

export const FLEXUSD: TokenMap = {
  [ChainId.CANTO]: new Token(ChainId.CANTO, FLEXUSD_ADDRESS[ChainId.CANTO], 18, 'flexUSD', 'flexUSD'),
  [ChainId.CANTO_AMBER]: new Token(ChainId.CANTO_AMBER, FLEXUSD_ADDRESS[ChainId.CANTO_AMBER], 18, 'flexUSD', 'flexUSD')
}

export const WCANTO: TokenMap = {
  [ChainId.CANTO]: new Token(ChainId.CANTO, WCANTO_ADDRESS[ChainId.CANTO], 18, 'WCANTO', 'Wrapped BCH'),
  [ChainId.CANTO_AMBER]: new Token(ChainId.CANTO_AMBER, WCANTO_ADDRESS[ChainId.CANTO_AMBER], 18, 'WCANTO', 'Wrapped BCH')
}

export const WNATIVE: TokenMap = {
  [ChainId.CANTO]: WCANTO[ChainId.CANTO],
  [ChainId.CANTO_AMBER]: WCANTO[ChainId.CANTO_AMBER]
}
