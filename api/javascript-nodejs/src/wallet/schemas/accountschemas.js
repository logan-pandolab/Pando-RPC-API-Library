import BigNumber from 'bignumber.js'

export const coinsSchema = {
  pandowei: { path: 'coins.pandowei', fn: x => { return new BigNumber(x) } },
  ptxwei: { path: 'coins.ptxwei', fn: x => { return new BigNumber(x) } }
}

export const sendPrerequistSchema = {
  sequence: { path: 'sequence', fn: x => { return new BigNumber(x) } },
  pandowei: { path: 'coins.pandowei', fn: x => { return new BigNumber(x) } },
  ptxwei: { path: 'coins.ptxwei', fn: x => { return new BigNumber(x) } }
}
