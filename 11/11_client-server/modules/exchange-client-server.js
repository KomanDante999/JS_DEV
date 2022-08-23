
export async function loadDataFromServer(urlServer) {
  const response = await fetch(`${urlServer}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(body => Object.assign(body));

  return response;
}

export function getIdPageFromUrl() {
  const pageId = new URLSearchParams(document.location.search).get("post");

  return pageId;
}

export function loadDataPageFromServer(pageUrlServer, pageId) {
  const pageData = fetch(`${pageUrlServer}${pageId}`)
  .then(res => res.json())
  .then(body => Object.assign(body.data));

  return pageData;
}

export function loadCommentsPageFromServer(commentsUrlServer, pageId) {
  const pageComments = fetch(`${commentsUrlServer}${pageId}`)
  .then(res => res.json())
  .then(body => Object.assign(body.data));

  return pageComments;
}
