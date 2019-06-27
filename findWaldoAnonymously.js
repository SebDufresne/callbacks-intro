// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Waldo") {
      return found(names[i],i);   // execute callback
    }
  }
};

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], (name,index) => `Found ${name} at index ${index}!`));