const domain = /localhost/.test(window.location.hostname) ? 'http://localhost:1337' : 'https://api-kitchen-hub.zigmundsunoo.com'

const endpoint = {
  domain : domain,
  login: domain+'/auth/local',
  recipes: domain+'/recipes'
}


export default endpoint;