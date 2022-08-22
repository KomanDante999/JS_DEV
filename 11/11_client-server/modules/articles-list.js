export function createArticleList(data) {
  const ul = document.createElement('ul');

  for (const item of data) {
    const li = document.createElement('li');
    const linkArticle = document.createElement('a');

    li.append(linkArticle);
    ul.append(li);
  }
  return ul
}
