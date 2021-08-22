import * as fs from "fs";

export class MarkovChat {

    readonly order: number;

    readonly chatMsgInputPath: string;

    readonly ngrams: { [key:string]: string[] };

    readonly chatMsgs: string[];

    beginnings: string[];
    
    constructor(order: number, chatMsgInputPath: string, beginningWord: string) { 
        this.order = order;
        this.chatMsgInputPath = chatMsgInputPath;
        this.ngrams = {};
        this.beginnings = [];
        this.chatMsgs = fs.readFileSync(this.chatMsgInputPath).toString().split("\n");
        this.setupChatState(beginningWord);
    }

    setupChatState(beginningGram: string) : void {
        const filteredChatMsgs = this.chatMsgs.filter(msg => msg.includes(beginningGram));
        for (const line of filteredChatMsgs) {
            for (var i = 0; i <= line.length - this.order; i++) {
                var gram = line.substring(i, i + this.order);
                
                
                if (i == 0) {
                    this.beginnings.push(gram);
                }
    
                if (!this.ngrams[gram]) {
                    this.ngrams[gram] = [];
                }
                this.ngrams[gram].push(line.charAt(i + this.order));
            }
        }
    }

    public generateChatMsg() {
        let currentGram = this.randomStringFromArray(this.beginnings);
        let result = currentGram;
    
        for (var i = 0; i < 160; i++) { // hard limit for now
            const possibilities = this.ngrams[currentGram];
            if (!possibilities) {
                break;
            }
    
            const next = this.randomStringFromArray(possibilities);
            result += next;
            const len = result.length;
            currentGram = result.substring(len - this.order, len);
        }
        
        return result;
    }
    
    randomStringFromArray(array: string[]): string {
        return array[Math.floor((Math.random() * array.length))];
    }
}