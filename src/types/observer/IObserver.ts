interface IObserver {
  subscribe(fn: Function): void,
  broadcast(data: { type: string, value: number | string | boolean }): void
}

export {
  IObserver,
};
