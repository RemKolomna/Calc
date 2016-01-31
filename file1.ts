export class Calc {
    x: number;
    y: number;

    Sum(): string {
        return "" + (this.x + this.y);
    }
    Mul(): string {
        return "" + (this.x * this.y);
    }
    Diff(): string {
        return "" + (this.x - this.y);
    }
    Div(): string {
        return "" + (this.x / this.y);
    }
    constructor(x: HTMLInputElement, y: HTMLInputElement) {
        this.x = + x.value;
        this.y = + y.value;
    }
}