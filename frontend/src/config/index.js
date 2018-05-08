const proxy_domain = 'api/'
const prefix = 'api/'
const getUri = (type,key ) =>
{
    return proxy_domain + prefix + constant[type][key]
}
const constant = {
  client: {
    request: 'client-api/client/request'
  },
  api: {
    resource: 'api/'
  },
  project: {
    user_project: 'user-project'
  },
  module: {
    resource: 'module'
  },
  doc: {
    generate: 'doc/generate',
    resource: 'document',
    markdown: 'doc/markdown'
  },
  project_host: {
    resource: 'project-host/'
  },
  host:{
    resource: 'host/'
  },
  user: {
    info: 'user-info'
  }
}

const client =  {
  grant_type: 'password',
  id: 2,
  secret: 'zJ2CaOV4otIbAXig6GLoIlTZ7Y7mnM1PEga74W0Z'
}

export {client, getUri}