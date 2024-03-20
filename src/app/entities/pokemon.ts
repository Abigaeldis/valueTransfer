export class Pokemon {
  public id?: number;
  public name?: string;
  public type?: string[];
  public artworkUrl?: string;
  public cries?: {
    latest: string;
    legacy: string;
  };
}
