let pattern = '';
let starCounts = [9, 17, 23, 27, 29, 29, 27, 23, 17, 9]; // Число зірочок в ряді

for (let i = 0; i < starCounts.length; i++) {
  for (let j = 0; j < starCounts[i]; j++) {
    pattern += '*';
  }
  pattern += '\n';
}

console.log(pattern);
