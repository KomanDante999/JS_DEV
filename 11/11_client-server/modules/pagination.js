export const listPagination = [
  {
    name: 'prev',
    status: 'disabled',
    value: -1,
    text: '&laquo;',
  },
  {
    name: 'first',
    status: 'disabled',
    value: 1,
    text: 1,
  },
  {
    name: 'spase',
    status: 'disabled',
    value: 0,
    text: '...',
  },
  {
    name: 'left',
    status: 'active',
    value: 1,
    text: 1,
  },
  {
    name: 'middle',
    status: 'free',
    value: 2,
    text: 2,
  },
  {
    name: 'rigt',
    status: 'free',
    value: 3,
    text: 3,
  },
  {
    name: 'spase',
    status: 'disabled',
    value: 0,
    text: '...',
  },
  {
    name: 'last',
    status: 'free',
    value: 10,
    text: 10,
  },
  {
    name: 'next',
    status: 'free',
    value: 1,
    text: '&raquo;',
  },
]

export function createPagination(arrayPropertys) {
  const nav = document.createElement('nav');
  nav.ariaLevel = 'навигация по страницам блога';
  const ul = document.createElement('ul');
  ul.classList.add('pagination', 'justify-content-center');
  for (const objProp of arrayPropertys) {
    const li = document.createElement('li');
    li.classList.add('page-item', 'js-paginator-item');
    li.classList.add(`${objProp.status}`);
    li.id = `paginator-item-${objProp.name}`
    const btn = document.createElement('button');
    btn.classList.add('page-link', 'js-paginator-btn');
    btn.name = `${objProp.name}`;
    const content = document.createElement('span');
    content.innerHTML = `${objProp.text}`;
    content.setAttribute('aria-hidden', 'true')

    btn.append(content);
    li.append(btn);
    ul.append(li);
    nav.append(ul);
  }
  return nav;
}

export function updatePagination(arrayPropertys) {
  // update status items
  const items = document.querySelectorAll('.js-paginator-item');
  for (const objProp of arrayPropertys) {
    for (const item of items) {
      if (item.id.includes(`${objProp.name}`)) {
        item.classList.remove('free', 'disabled', 'active');
        item.classList.add(`${objProp.status}`);
      }
    }
  }
  // update status buttons
  const buttons = document.querySelectorAll('.js-paginator-btn');
  for (const objProp of arrayPropertys) {
    for (const button of buttons) {
      if (button.name.includes(`${objProp.name}`)) {
        button.firstChild.innerHTML = `${objProp.text}`;
      }
    }
  }
}

// get current page
export function updateListPagination(btnName, arrayPropertys) {
  // currenPage
  let currenPage;
  for (const objProp of arrayPropertys) {
    if (objProp.status === 'active') {
      currenPage = objProp.value;
    }
  }
  // newCurrenPage
  let newCurrenPage;
  for (const objProp of arrayPropertys) {
    if (objProp.name === btnName) {
      newCurrenPage = objProp.value;
    }
  }
  console.log('currenPage',currenPage);
  console.log('newCurrenPage',newCurrenPage);
}

