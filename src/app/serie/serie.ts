export class Serie{
  id: number;
  name: string;
  channel: string;
  seasons: number;

  constructor(
      id: number, name: string,channel: string,seasons: number){
      this.id = id;
      this.channel = channel;
      this.seasons = seasons;

  }
}
