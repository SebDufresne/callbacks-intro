// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (names[index] === "Waldo") {
      found(names[index],index);   // execute callback
    }
  });
};

const actionWhenFound = function(name, index) {
  console.log(`Found ${name} at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);