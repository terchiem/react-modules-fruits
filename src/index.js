import { choice, remove } from "./helpers";
import foods from "./foods";

const randomFruit = choice(foods);

console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?")

remove(foods, randomFruit);

console.log(`I’m sorry, we’re all out. We have ${foods} left.`)