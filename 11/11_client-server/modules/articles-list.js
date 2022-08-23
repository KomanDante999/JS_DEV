export function createArticleList(data) {
  const ul = document.createElement('ul');
  ul.classList('list-group')
  for (const item of data) {
    const li = document.createElement('li');
    li.classList('list-group-item', 'list-group-item-action')
    const linkArticle = document.createElement('a');

    li.append(linkArticle);
    ul.append(li);
  }
  return ul
}
