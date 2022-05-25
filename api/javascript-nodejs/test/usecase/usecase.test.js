import AccountApi from '../../src/wallet/account/accountapi'
import QueryApi from '../../src/node/queryapi'
import { printToConsole } from '../testhelpers'

jest.setTimeout(15000)

const pandoRpcPort = 16888
const pandoCliRpcPort = 16889
const queryApi = new QueryApi(`http://localhost:${pandoRpcPort}/rpc`)
const accountApi = new AccountApi(`http://localhost:${pandoCliRpcPort}/rpc`)

it('Get Balance of all accounts', async () => {
  let accounts = await accountApi.ListKeys()

  let { addresses } = accounts

  printToConsole(addresses)

  for (const address of addresses) {
    try {
      const account = await queryApi.GetAccount(address)
      console.warn(`${address} | pando: ${account.coins.pandowei} | ptx: ${account.coins.ptxwei}`)
    } catch (error) {
      console.error(error)
    }
  }
})
