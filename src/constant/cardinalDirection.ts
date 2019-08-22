export const NORTH = 'North';
export const EAST = 'East';
export const SOUTH = 'South';
export const WEST = 'West';

export const CARDINAL_DIRECTION = [
  {
    id: 1,
    direction: 0,
    position: NORTH,
  },
  {
    id: 2,
    direction: 90,
    position: EAST,
  },
  {
    id: 3,
    direction: 180,
    position: SOUTH,
  },
  {
    id: 4,
    direction: 270,
    position: WEST,
  },
];

export interface ICardinalDirection {
  direction?: number;
  id?: number;
  position?: string;
}
