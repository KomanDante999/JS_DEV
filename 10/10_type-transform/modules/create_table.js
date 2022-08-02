function createRow(objStudent, index, targetNode) {
  const rowBody = document.createElement('tr');
  const cellBody0 = document.createElement('th')
  cellBody0.scope = 'row';
  cellBody0.textContent = index;
  const cellBody1 = document.createElement('td')
  cellBody1.textContent = objStudent.fullName;
  const cellBody2 = document.createElement('td')
  cellBody2.textContent = objStudent.faculty;
  const cellBody3 = document.createElement('td')
  cellBody3.textContent = objStudent.birthDateAge;
  const cellBody4 = document.createElement('td')
  cellBody4.textContent = objStudent.yearsStudy;
  rowBody.append(
    cellBody0,
    cellBody1,
    cellBody2,
    cellBody3,
    cellBody4,
  );
  targetNode.append(rowBody);
}

export function creatTable(array) {
  const table = document.createElement('table');
  table.id = 'js-table-students';
  table.classList.add('table', 'table-striped', 'table-success');
  const head = document.createElement('thead');
  const rowHead = document.createElement('tr');
  rowHead.classList.add('table-primary');
  const cellHead0 = document.createElement('th');
  cellHead0.scope = 'col';
  cellHead0.textContent = '№';
  const cellHead1 = document.createElement('th');
  cellHead1.scope = 'col';
  cellHead1.textContent = 'ФИО студента';
  const cellHead2 = document.createElement('th');
  cellHead2.scope = 'col';
  cellHead2.textContent = 'Факультет';
  const cellHead3 = document.createElement('th');
  cellHead3.scope = 'col';
  cellHead3.textContent = 'Дата рождения (возраст)';
  const cellHead4 = document.createElement('th');
  cellHead4.scope = 'col';
  cellHead4.textContent = 'Годы обучения (номер курса)';
  rowHead.append(cellHead0, cellHead1, cellHead2, cellHead3, cellHead4);
  head.append(rowHead);

  const body = document.createElement('tbody');
  let index = 0;
  for (const objStudent of array) {
    createRow(objStudent, index + 1, body);
    index++;
  }

  table.append(head, body);
  return {
    table,

  }
}

export function initNewTable(arrayStudents, idContainer, idTable) {
  const tableNew = creatTable(arrayStudents);
  const container = document.getElementById(idContainer);
  const tableOld = document.getElementById(idTable);
  if (tableOld) {
    container.removeChild(tableOld);
  }
  container.append(tableNew.table);

}






