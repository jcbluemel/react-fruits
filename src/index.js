import fruits from './foods';
import { choice, remove } from './helpers';


const randoFruito = choice(fruits);
console.log(`I’d like one ${randoFruito}, please.`);
console.log(`Here you go: ${randoFruito}`);
console.log("Delicious! May I have another?");
remove(fruits, randoFruito);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
