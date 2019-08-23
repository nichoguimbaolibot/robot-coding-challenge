export const isCardinalDirectionEast = (position: number) =>
  position === 90 || position === -270;

export const isCardinalDirectionSouth = (position: number) =>
  position === 180 || position === -180;

export const isCardinalDirectionWest = (position: number) =>
  position === 270 || position === -90;

export const isCardinalDirectionNorth = (position: number) =>
  position === 0 || position === 1 || position === -1;
