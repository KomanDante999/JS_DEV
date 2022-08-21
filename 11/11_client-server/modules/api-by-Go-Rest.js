export function createUrlRequest(currentPage = 1) {
  const protocol = 'https://';
  const domen = 'gorest.co.in/';
  const uri = 'public-api/posts'
  let page = ''
  if (currentPage > 1) {
    page = `?page=${currentPage}`
  }
  console.log(`${protocol}${domen}${uri}${page}`);
  return `${protocol}${domen}${uri}${page}`
}

