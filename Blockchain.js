const Block = require('./block');

class Blockchain {
    constructor() {
        var dateobj = new Date();
        var timestamp = dateobj.toUTCString();

        this.blockchain = [];
        this.addBlock(new Block(0, 'Genesis', timestamp, 'Genesis Nonce', 'Genesis Hash', 'Genesis Previous_Hash'));
    }

    addBlock(block) {
        this.blockchain.push(block);
    }

    showBlockchain() {
        for (var i = 0; i < this.blockchain.length; i++) {
            console.log(this.blockchain[i]);
        }
    }

    showLatestBlock() {
        console.log(this.blockchain[this.blockchain.length-1]);
    }

    getNewestBlockFromBlockchain() {
        return this.blockchain[this.blockchain.length-1];
    }
}

module.exports = Blockchain;