export const SET_FILTERNAV_OPEN = 'SET_FILTERNAV_OPEN';

export function setFilterNavOpen(open) {
  return {
    type: SET_FILTERNAV_OPEN,
    open: open,
  };
}
