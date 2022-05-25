package org.pando.tx;

import java.math.BigInteger;

import org.spongycastle.util.encoders.Hex;
import org.pando.tx.types.SendTx;

public final class TxAssembler {

    public static SendTx assembleSendTx(String senderAddr, String receiverAddr, 
        BigInteger pandoWei, BigInteger ptxWei, BigInteger feeInPTXWei, long senderSequence) {
        SendTx sendTx = new SendTx(Hex.decode(senderAddr), Hex.decode(receiverAddr), pandoWei, ptxWei, feeInPTXWei, senderSequence);
        return sendTx;
    }

}