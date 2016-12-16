const getDB = (env) => {
  switch (env) {
    case 'staging':
      return {
        url: 'ws://192.168.11.36:3000/websocket' // Websocket URL for your app. For a meteor app use `wss://my-app.meteor.com/websocket`
      }
    default:
      return {
        url: 'ws://192.168.11.40:3000/websocket' // Websocket URL for your app. For a meteor app use `wss://my-app.meteor.com/websocket`
      }
  }
};

let opts = {
  env: 'dev', // ['dev', 'staging', 'prod']
  // codePushDeploymentKey: '',
  ddpConfig: {
    maintainCollections : true,
  }
}

Object.assign(opts.ddpConfig, getDB(opts.env));

export default opts;
