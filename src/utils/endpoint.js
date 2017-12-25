const endpoint = /localhost/.test(window.location.hostname) ? 'http://localhost:3000/api/recipes' : 'https://open.zigmundsunoo.com/api/recipes';

export default endpoint;