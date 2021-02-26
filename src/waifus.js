const fetch = require('node-fetch');
const url = require('url');
const { protocol, host } = require('./api');
const Waifu = require('./waifu');

async function Waifus(search){
    return fetch(
        url.format({
            protocol,
            host,
            pathname: 'api/waifu',
            query: {
                search
            },
        })
    )
    .then(res => res.json())
    .then(res => res.map(w => new Waifu(w)));
}

module.exports = Waifus;
