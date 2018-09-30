const domain = /localhost/.test(window.location.hostname)
  ? 'http://localhost:1337'
  : 'https://api-kitchen-hub.zigmundsunoo.com'

export const endpoint = {
  domain : domain,
  login: domain+'/auth/local',
  user: domain+'/user',
  recipe: domain+'/recipe'
}

export const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}