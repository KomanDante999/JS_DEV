
export async function exchangeDataFromServer(typeRequest, idClient, search) {
  // expected values typeRequest: 'getList', 'add', 'change', 'remove', 'search'
  const domen = `http://localhost:3000`;
  const uriClients = `/api/clients`
  const uriClient = `/api/client`
  let response = '';
  let data = '';
  switch (typeRequest) {
    case 'getList':
      response = await fetch(`http://localhost:3000/api/clients`)
      .then(res => res.json())

      break;

      default:
        break;
      }


      // const response = await fetch(`${urlServer}`, {
        //   method: 'GET',
        //   headers: {'Content-Type': 'application/json'}
        // })
        // .then(res => res.json())
        // .then(body => Object.assign(body));


  console.log('response',response);
  return response;
}



