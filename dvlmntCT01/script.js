const a = document.getElementById('a'),
      b = document.getElementById('b'),
      output = document.getElementById('output');

function sum() {
   const sumvalue = Number(a.value) + Number(b.value);
   output.innerHTML = `${sumvalue}`
}