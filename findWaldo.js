// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Waldo") {
      found(names[i],i);   // execute callback
    }
  }
};

const actionWhenFound = function(name, index) {
  console.log(`Found ${name} at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
