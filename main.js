const form = document.querySelector('form');
const nameInput = document.querySelector('#nameInput');
const sizeInput = document.querySelectorAll('input[type="radio"]');
const toppingsInput = document.querySelectorAll('input[type="checkbox"]');

const deliveryInput = document.querySelector('#deliveryInput');

const nameOutput = document.querySelector('#nameOutput');
const sizeOutput = document.querySelector('#pizzaPrice');
const toppingsOutput = document.querySelector('#toppingsPrice');
const deliveryOutput = document.querySelector('#deliveryPrice')
const totalPrice = document.querySelector('#totalPrice');

let functionCounter = 1;

const displayName = () => {
    nameOutput.textContent = nameInput.value;
};

nameInput.addEventListener('input', displayName);


const sizePrice = () => {
    sizeInput.forEach((size) => {
        size.addEventListener('change', (event) => {
            const price = event.target.value;

            sizeOutput.textContent = `${price} €`;

            calculateTotalPrice();

            functionCounter++;
        })
    });
};
sizePrice();

const toppingsPrice = () => {

    toppingsInput.forEach(topping => {
        topping.addEventListener('change', () => {
            const toppingsInputChecked = document.querySelectorAll('input[type="checkbox"]:checked');

            if (toppingsInputChecked.length > 4) {
                price = (toppingsInputChecked.length * (0.50).toFixed(2)) - 2;
            } else { price = 0 };

            toppingsOutput.textContent = `${price}€`;

            calculateTotalPrice();

            functionCounter++;
        })
    });
};
toppingsPrice();

const deliveryPrice = () => {
    deliveryInput.addEventListener('change', () => {

        if (deliveryInput.value === 'home') {
            price = 5;
        }

        else {
            price = 0;
        }

        deliveryOutput.textContent = `${price} €`;

        calculateTotalPrice();

        functionCounter++;
    });

};
deliveryPrice();


const calculateTotalPrice = () => {
    const sizePrice = parseFloat(sizeOutput.textContent);
    const toppingsPrice = parseFloat(toppingsOutput.textContent);
    const deliveryPrice = parseFloat(deliveryOutput.textContent);

    if (functionCounter >= 3) {
        totalPrice.textContent = `${(sizePrice + toppingsPrice + deliveryPrice).toFixed(2)} €`
    } else {
        totalPrice.textContent = `Calculating`;
    }

};

