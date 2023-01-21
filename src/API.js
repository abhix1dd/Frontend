import axios from 'axios'

async function hitAPI(url,method='GET', body = {}) {
    // Open a new connection, using the GET request on the URL endpoint
    url ='http://192.168.1.7:8000/blog' + url
    // let data = await fetch(url, {
    //     method: method, // *GET, POST, PUT, DELETE, etc.
    //     })
    let data = await axios.get(url)
      return data.data;
// Send reques
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
export async function getBlogList (apiUrl,method = 'GET',body = {}) {
    
    let data =  await hitAPI(apiUrl,method,body);
    console.log('response',data)

    // let data = ['Blog Post','Blog Post','Blog Post','Blog Post','Blog Post']
    return data;

}