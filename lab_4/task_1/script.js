function generateTable(m, n) {
    const table = [];
  
    for (let i = 0; i < m; i++) {
      const row = [];
  
      for (let j = 0; j < n; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    const tableElement = document.createElement('table');
    document.body.appendChild(tableElement);
    
    for (const row of table) {
      const rowElement = document.createElement('tr');
      tableElement.appendChild(rowElement);
    
      for (const cell of row) {
        const cellElement = document.createElement('td');
        cellElement.textContent = cell;
        rowElement.appendChild(cellElement);
      }
    }

    return table;
  }

const m = 3;
const n = 2;

const table = generateTable(m, n);
console.log(table);
