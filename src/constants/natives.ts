import { Canto } from '../entities/Native'

import { ChainId } from '../enums'

export const NATIVE = {
  [ChainId.CANTO]: Canto.onChain(ChainId.CANTO),
  [ChainId.CANTO_AMBER]: Canto.onChain(ChainId.CANTO_AMBER)
}
