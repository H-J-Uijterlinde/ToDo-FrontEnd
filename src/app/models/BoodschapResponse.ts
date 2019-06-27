import {Boodschap} from './Boodschap';

export interface BoodschapResponse {
  _embedded: {
    ToDos: Boodschap[]
  };
  _links: {
    self: {
      href: string
    }
  };
}
