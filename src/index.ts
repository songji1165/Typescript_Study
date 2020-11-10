import * as CryptoJs from "crypto-js";

class Block {
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string): string => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index:number,
        hash:string,
        previousHash:string,
        data:string,
        timestamp:number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;

    }
}

// Block.calculateBlockHash();

const genesisBlock: Block = new Block(0, "20202020", "", "hi", 1234)

let blockChain: Block[] = [genesisBlock];

const getBlockChain = ():Block[] =>blockChain;
const getLatestBlock = ():Block => blockChain[blockChain.length-1];
const getNewTimestamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previosBlock:Block = getLatestBlock();
    const newIndex:number = previosBlock.index-1;
    const newTimestamp: number = getNewTimestamp();
    const newHash:string = Block.calculateBlockHash(
        newIndex,
        previosBlock.hash,
        newTimestamp,
        data
    );
    const newBlock: Block = new Block(
        newIndex,
        newHash,
        previosBlock.hash,
        data,
        newTimestamp
    )

    return newBlock;

}

console.log("blockChain:  ",blockChain);
console.log(createNewBlock("hi"), createNewBlock("bye"));
export {};
