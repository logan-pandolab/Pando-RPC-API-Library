import Bytes from 'eth-lib/lib/bytes';
import BigNumber from 'bignumber.js';

export class Coins{
    constructor(pandoWei, ptxWei){
        this.pandoWei = pandoWei;
        this.ptxWei = ptxWei;
    }

    rlpInput(){

        let rlpInput = [
            (this.pandoWei.isEqualTo(new BigNumber(0))) ? Bytes.fromNat("0x0") : Bytes.fromNumber(this.pandoWei),
            (this.ptxWei.isEqualTo(new BigNumber(0))) ? Bytes.fromNat("0x0") : Bytes.fromNumber(this.ptxWei)
        ];

        return rlpInput;
    }
}