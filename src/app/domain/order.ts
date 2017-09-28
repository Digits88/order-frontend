export class Order {
    
    public constructor(
        public id: number = 1, 
        public description: string = '', 
        private priceInCents: number = 0, 
        public isComplete: boolean = false) {
    }
  
    public getCost(): number {
        
        if (this.priceInCents === 0) {
            return 0.0;
        }
        else {
            return this.priceInCents / 100.0;
        }
    }
  
    public getCostString(): string {
        return `\$${this.getCost().toFixed(2)}`;
    }
}
