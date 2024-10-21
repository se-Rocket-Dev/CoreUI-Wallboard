const wbconfig = {
    development: {
        hosturl  : 'https://lab-parse-server.se-rmutl.net/api',
        wsurl    : 'wss://lab-parse-server.se-rmutl.net',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    },
    production: {
        hosturl  : 'https://localhost:8502/api',
        wsurl    : 'wss://localhost:8502',
        masterKey     : 'wallboardapi',
        clientKey     : 'wallboardapi',
        javascriptKey : 'wallboardapi',
        appId : "wallboardapi"
    }
};
export default wbconfig;