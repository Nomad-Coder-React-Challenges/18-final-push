import { MOBILE_SCREEN_SIZE } from '#constants';

export const breakpoints = {
  desktop: MOBILE_SCREEN_SIZE,
};

export const mq = (n: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[n]}px)`;
