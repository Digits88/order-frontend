import { Href } from './href';

class OrderLinks {
    self: Href;
    update: Href;
    delete: Href;
}

export class Order {

    id: number; 
    description: string;
    private costInCents: number; 
    private complete: boolean;
    _links: OrderLinks;
  
    get isComplete(): boolean {
        return this.complete;
    }
  
    get cost(): number {
        
        if (this.costInCents === 0) {
            return 0.0;
        }
        else {
            return this.costInCents / 100.0;
        }
    }
  
    get costString(): string {
        return `\$${this.cost.toFixed(2)}`;
    }
}
