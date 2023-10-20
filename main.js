console.clear();
const input = ' qwertyuiopasdfghjklzxcvbnm'
const N = input.split('');

const bits = []

const HInicial = Math.log2(N.length);
console.log('ENTROPIA INICIAL', HInicial);

let NActual = N

bits.forEach((bit) => {
    console.log('BIT', bit);
    NActual = bit === 0 ? NActual.slice(0, NActual.length / 2) : NActual.slice(NActual.length / 2)
});

console.log(NActual);