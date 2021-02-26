class Waifu {
    bought:Number
    description:String
    imageLarge:String
    imageMedium:String
    imageRaw:String
    imageSource:String
    longName:String
    name:String
    source:String
    tier:Number
}
type API = {
    protocol:String
    host:String
}

export const Waifu:Waifu
export function waifus(search:String):Promise<Array<Waifu>>
export const api:API
