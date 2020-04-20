/** returns a randomly selected item from array of items */
function choice(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

/** removes the first matching item from items, 
 * if item exists, and returns it. 
 * Otherwise returns undefined. */
function remove(items, item) {
  let foundIndex = items.indexOf(item);

  if (foundIndex >= 0 ) {
    return items.splice(foundIndex, 1)[0];
  }
}

export { choice, remove };