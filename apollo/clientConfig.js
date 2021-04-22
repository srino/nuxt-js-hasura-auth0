import { InMemoryCache } from 'apollo-cache-inmemory'
export default function(context) {
  return {
    httpLinkOptions: {
      uri: 'https://hasurasetups.herokuapp.com/v1/graphql',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'ws://hasurasetups.herokuapp.com/v1/graphql',
    context
  }
}
