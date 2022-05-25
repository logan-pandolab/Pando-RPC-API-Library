package org.pando.tx.types;

import java.math.BigInteger;
import org.ethereum.util.RLP;

public final class Coins {
    
    public BigInteger pandoWei;
    public BigInteger ptxWei;

    public Coins(BigInteger pandoWei, BigInteger ptxWei) {
        this.pandoWei = pandoWei;
        this.ptxWei = ptxWei;
    }

    public byte[] rlpEncode() {
        byte[] rlpEncoded = RLP.encodeList(
            RLP.encode(this.pandoWei),
            RLP.encode(this.ptxWei));
        return rlpEncoded;
    }
}
