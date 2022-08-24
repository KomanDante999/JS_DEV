export function createPage(dataPage) {
  const wrap = document.createElement('div');
  const title = document.createElement('h1');
  title.classList.add('h1');
  title.textContent = `${dataPage.data.title}`
  const body = document.createElement('p');
  body.textContent = `${dataPage.data.body}`

  wrap.append(title, body);
  return wrap;
}

