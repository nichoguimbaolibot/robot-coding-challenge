export const isCardinalPositionEast = (position: number) =>
  position === 90 || position === -270;

export const isCardinalPositionSouth = (position: number) =>
  position === 180 || position === -180;

export const isCardinalPositionWest = (position: number) =>
  position === 270 || position === -90;

export const isCardinalPositionNorth = (position: number) =>
  position === 0 || position === 1 || position === -1;
