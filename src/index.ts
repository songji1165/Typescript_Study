class Block {
    public index:number;
    public hash:string;
    public previousHash:string;
    public data:string;
    public timestamp:number;

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

const genesisBlock: Block = new Block(0, "20202020", "", "hi", 1234)

let blockChains: [Block] = [genesisBlock];

console.log(blockChains)
export {};
