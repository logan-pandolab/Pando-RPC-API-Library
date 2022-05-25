import {Coins} from './coins';

export class TxOutput {
    constructor(address, pandoWei, ptxWei) {
        this.address = address;
        this.coins = new Coins(pandoWei, ptxWei);
    }

    rlpInput(){
        let rplInput = [
            this.address.toLowerCase(),
            this.coins.rlpInput()
        ];

        return rplInput;
    }
}