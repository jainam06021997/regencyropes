const http = async (path, args) => {
    try {
      // const url = 'http://localhost:3001' + path; // local
      const url = 'http://regencyropes.in/admin' + path; // live
      const headers= {
        'Content-type': 'application/json',
      };
      const requestArgs = { ...args, headers };
      const request = new Request(url, requestArgs);
      const response = await fetch(request);
      return response.json();
    } catch (err) {
      return err;
    }
  };
  
  const get = async (path, args = { method: 'GET' }) => {
    return http(path, args);
  };
  
  const post = async (path, body, args = { method: 'POST', body: JSON.stringify(body) }) => {
    return http(path, args);
  };
  
  const put = async (path, body, args = { method: 'PUT', body: JSON.stringify(body) }) => {
    return http(path, args);
  };
  
  const del = async (path, args = { method: 'DELETE' }) => {
    return http(path, args);
  };
  
  export default {
    get,
    post,
    put,
    del,
  };
  