import { startEndTime } from './startEndTime';

export const setItemsAtLocalStorage = (
  attemptValues: any,
  states: any,
  control: any,
  stats: any
) =>
  localStorage.setItem(
    'data',
    JSON.stringify({
      attemptValues,
      states,
      control,
      stats,
      time: { end: startEndTime().end },
    })
  );
