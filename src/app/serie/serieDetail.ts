
import { Serie } from "./serie"

export class SerieDetail extends Serie{

  poster: string
  description: string
  webpage: string

  constructor(id: number, name: string,channel: string,seasons: number, poster: string, description: string, webpage:string){
    super(id,name,channel,seasons);
    this.poster = poster
    this.description = description
    this.webpage = webpage


  }



}
