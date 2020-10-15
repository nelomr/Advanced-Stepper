import client from '@/services/client'

const PATH = '/apps/orders/search/findByCustomerId';
const FALLBACK = 'https://run.mocky.io/v3/4617c559-e166-46e5-a1c0-fc677621e4c0';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiTmVsbyJ9.tnKYkQnGm4Uke__oUoGHPb2h7g8Rl_Sx4UHJkRzn0GHR1laJziKNclId6e9caLYxuENvGj4wVCs2Ow2EJK-YiQ';

function getProducts () {

  return client.get(PATH, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
  })
    .then(res => {
      return res.data.products._embedded.products;
    })
    .catch(error => {
      throw error
    })
}

export default getProducts