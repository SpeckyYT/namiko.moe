const { format } = require('url');
const { protocol, host } = require('./api');

function formatURL(pathname){
    return format({
        protocol,
        host,
        pathname,
    })
}

class Waifu {
    constructor(waifuData){
        if(!waifuData || typeof waifuData != 'object') waifuData = {}

        for(const [key,value] of Object.entries(waifuData))
            this[key] = value;
        const images = [
            'imageLarge',
            'imageMedium',
            'imageRaw',
        ];
        for(const image of images)
            if(this[image]) this[image] = formatURL(this[image]);
    }
}

module.exports = Waifu;
