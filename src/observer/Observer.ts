class Observer<T> {
  private observers: ((data: T) => void)[];
  constructor() {
    this.observers = [];
  }

  public subscribe(fn: (data: T) => void): void {
    this.observers.push(fn);
  }

  public broadcast(data: T) {
    if (this.observers.length !== 0) {
      this.observers.forEach((subscriber) => subscriber(data));
    }
  }
}

export {
  Observer,
};
