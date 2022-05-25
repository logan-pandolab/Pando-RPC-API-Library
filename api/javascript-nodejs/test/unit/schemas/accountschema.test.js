import { coinsSchema, sendPrerequistSchema } from '../../../src/wallet/schemas/accountschemas'
import { morphism } from 'morphism'

const response = {
  jsonrpc: '2.0',
  id: 1,
  result: {
    sequence: '1',
    coins: {
      pandowei: '994999990000000000000000000',
      ptxwei: '4999999979999999000000000000'
    },
    reserved_funds: [],
    last_updated_block_height: '0',
    root: '0x0000000000000000000000000000000000000000000000000000000000000000',
    code: '0x0000000000000000000000000000000000000000000000000000000000000000'
  }
}
it('map to account coins', () => {
  let result = morphism(coinsSchema, response.result)
  let { pandowei, ptxwei } = result

  expect(pandowei.toNumber()).toBe(994999990000000000000000000)
  expect(ptxwei.toNumber()).toBe(4999999979999999000000000000)
})

it('map to account sequence and coins', () => {
  let result = morphism(sendPrerequistSchema, response.result)
  let { sequence, pandowei, ptxwei } = result

  expect(sequence.toNumber()).toBe(1)
  expect(pandowei.toNumber()).toBe(994999990000000000000000000)
  expect(ptxwei.toNumber()).toBe(4999999979999999000000000000)
})
