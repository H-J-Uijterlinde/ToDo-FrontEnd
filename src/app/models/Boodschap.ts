export interface Boodschap {
  id: number;
  title: string;
  completed: boolean;
  _links: {
    self: {href: string};
  };
}
