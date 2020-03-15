import client from '@/services/client'

const PATH = '/apps/orders/search/findByCustomerId';
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LWZyb250ZWRAbXJqZWZmYXBwLmNvbSIsInJvbGVzIjpbIlJPTEVfQ1VTVE9NRVIiXSwibmFtZSI6IkNhcmxvcyIsImlzcyI6ImJhY2tlbmQubXJqZWZmYXBwLm5ldCIsImlkIjoiMjk3NGQ4NGEtZDBhZS00MTQwLWJlZjktNjRjYWE0NmNmMDFhIiwiZnVsbG5hbWUiOiJDYXJsb3MgSGVybsOhbmRleiIsInR5cGUiOiJjdXN0b21lciIsImV4cCI6MTU4NDc5MTIwOCwiaWF0IjoxNTg0MTg2NDA4LCJqdGkiOiI4ODQxOTRlNC1iOWYyLTQxNmEtYWFiMy02MTY4NDdkOTc2YTUiLCJlbWFpbCI6InRlc3QtZnJvbnRlZEBtcmplZmZhcHAuY29tIn0.8kvrTI9ojm5Tr5HbBshQmUXtVoI-Q0fPYj1vUvOONpTTcpznFcRT3qHNVyNlbbyM3zsNiNsa1KHEo_wM98DfBA';

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