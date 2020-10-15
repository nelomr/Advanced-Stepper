import client from '@/services/client'

const PATH = '/apps/orders/search/findByCustomerId';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiTmVsbyJ9.tnKYkQnGm4Uke__oUoGHPb2h7g8Rl_Sx4UHJkRzn0GHR1laJziKNclId6e9caLYxuENvGj4wVCs2Ow2EJK-YiQ';

function getOrders () {

  return client.get(PATH, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
  })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      throw error
    })
}

export default getOrders