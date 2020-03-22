/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];


function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
const container = document.getElementById('table-container');

for (let i = 0; i < data.length; i++) {
  const row = document.createElement('tr');
  container.appendChild(row);
  const tabelElement = document.getElementsByTagName('tr')[i + 1];
  const rowData = data[i];
  const values = [];
  for (const prop in rowData) {
    const val = rowData[prop];
    values.push(val);
  }
  setAttributes(tabelElement, {
    'data-id': values[0], 'data-title': values[1], 'data-imdb': values[2], 'data-year': values[3],
  });
  for (let j = 0; j < values.length; j++) {
    const cell = document.createElement('td');
    tabelElement.appendChild(cell);
    const newRowEl = tabelElement.getElementsByTagName('td')[j];
    newRowEl.textContent = values[j];
  }
  const newRowElColl = tabelElement.getElementsByTagName('td');
  const newValue = values[2].toLocaleString('en-EN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  newRowElColl[2].textContent = `imdb: ${newValue}`;
  newRowElColl[3].textContent = `(${values[3]})`;
}


const trColl = document.getElementsByTagName('tr');
const trArray = [...trColl];
trArray.splice(0, 1);


const iteration = [];
let i = 0;
const thElement = document.getElementsByTagName('th');
const strElement = document.createElement('img');
strElement.src = 'https://cdn.icon-icons.com/icons2/933/PNG/512/switch-vertical-orientation-arrows_icon-icons.com_72530.png';
strElement.width = 10;

function nextSort() {
  if (iteration.length === 0 || iteration.length === 8) {
    thElement[0].appendChild(strElement);
    iteration.length === 0;
    trArray.sort((a, b) => a.dataset.id - b.dataset.id);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 1) {
    trArray.sort((a, b) => b.dataset.id - a.dataset.id);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 2) {
    thElement[0].removeChild(strElement);
    thElement[1].appendChild(strElement);
    trArray.sort((a, b) => {
      if (a.dataset.title < b.dataset.title) {
        return 1;
      }
      if (a.dataset.title > b.dataset.title) {
        return -1;
      }
      return 0;
    });

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 3) {
    trArray.sort((a, b) => {
      if (a.dataset.title > b.dataset.title) {
        return 1;
      }
      if (a.dataset.title < b.dataset.title) {
        return -1;
      }
      return 0;
    });

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 4) {
    thElement[1].removeChild(strElement);
    thElement[2].appendChild(strElement);
    trArray.sort((a, b) => a.dataset.imdb - b.dataset.imdb);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 5) {
    trArray.sort((a, b) => b.dataset.imdb - a.dataset.imdb);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 6) {
    thElement[2].removeChild(strElement);
    thElement[3].appendChild(strElement);
    trArray.sort((a, b) => a.dataset.year - b.dataset.year);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);
  } else if (iteration.length === 7) {
    trArray.sort((a, b) => b.dataset.year - a.dataset.year);

    for (i = 0; i < trArray.length; i++) {
      container.appendChild(trArray[i]);
    }
    iteration.push(1);npx
    thElement[3].removeChild(strElement);
  }
}


setInterval(nextSort, 2000);
