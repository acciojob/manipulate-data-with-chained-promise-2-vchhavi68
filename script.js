//your JS code here. If required.function manipulateArray() {
  const output = document.getElementById("output");

Promise.resolve([1, 2, 3, 4])

  
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = arr.filter(num => num % 2 === 0);
        output.textContent = evens.join(",");
        resolve(evens);
      }, 1000);
    });
  })

  .then((evens) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evens.map(num => num * 2);
        output.textContent = doubled.join(",");
        resolve(doubled);
      }, 2000);
    });
  });
