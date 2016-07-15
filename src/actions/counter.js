export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function onIncrement() {
  return {
    type: INCREMENT	
  };
}

export function onDecrement() {
  return {
    type: DECREMENT	
  };
}

export function onReset() {
  return {
    type: RESET	
  };
}