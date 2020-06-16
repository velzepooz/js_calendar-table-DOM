'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${daysOfWeek.map(day => `
          <th>${day}</th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  const date = new Date(year, month - 1);
  const daysInMonth = new Date(year, month, 0).getDate();

  let startDayNumber = date.getDay();

  if (startDayNumber === 0) {
    startDayNumber = 7;
  }

  const calendarDates = [...Array(daysInMonth + 1).keys()];

  calendarDates.splice(0, 1);

  const tbody = document.getElementsByTagName('tbody')[0];

  let counter = 0;

  const daysInWeek = 7;
  const numberOfWeeks = Math.ceil((daysInMonth + startDayNumber) / 7);

  for (let i = 0; i < numberOfWeeks; i++) {
    const week = tbody.insertRow();

    for (let j = 0; j < daysInWeek; j++) {
      const day = week.insertCell();

      if (counter !== calendarDates.length) {
        if (tbody.childElementCount === 1) {
          if (week.childElementCount >= startDayNumber) {
            day.innerHTML = `${calendarDates[counter++]}`;
          }
        } else {
          day.innerHTML = `${calendarDates[counter++]}`;
        }
      }
    }
  }
}

calendarTable(2019, 10, calendar);
