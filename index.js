//initialize socket io client
var io = require('socket.io-client');

//Connect ke alamat server
//Jika server berada di laptop lain,
    //ganti 'http://localhost:3000/' dengan ipv4 server (misal : 'http://{ipv4}:{port}/')
var socket = io.connect('http://localhost:3000/', {reconnect: true}); 

//import model
const BlockChain = require('./Blockchain.js');
const Block = require('./Block.js');

//initialize model
const blockchain = new BlockChain();

socket.on('connect', function() { 
    console.log('connected to server');
    socket.on('clientEvent', function (data) {

        var block = new Block(data.index, data.data, data.timestamp, data.nonce, data.hash, data.previous_hash);
        var previous_block = blockchain.getNewestBlockFromBlockchain();

        if (block.index == 3) {
            block.index = 8;
        }

        if (block.validateBlock(block, previous_block) != 0) {
            console.log('Error code : ' + block.validateBlock(block, previous_block));
        } else {
            blockchain.addBlock(block);
            blockchain.showLatestBlock();
        }
    }); 
});