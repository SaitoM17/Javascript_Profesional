interface Observer{
    update: (data: any) => void
}

interface Subject{
    subscribe:(observer: Observer) => void
    unsubscribe:(observer: Observer) => void 
}

class BitcoinPrice implements Subject{
    observer: Observer[] = [];

    constructor(){
        const el:HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }

    subscribe (observer: Observer){
        this.observer.push(observer)
    }
    
    unsubscribe(observer: Observer) {
        const index = this.observer.findIndex(obs =>{
            return obs === observer
        })
        this.observer.splice(index,1);
    }
    notify(data: any){
        this.observer.forEach(observer => observer.update(data))
    }
}


class PriceDisplay implements Observer{ 
    private el: HTMLElement;

    constructor(){
        this.el = document.querySelector('#price');
    }
    update(data: any){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(
    () => value.unsubscribe(display),
    5000
)
