class Observer {
  private observers: Function[];
  constructor() {
    this.observers = [];
  }

  public subscribe(fn: Function): void {
    this.observers.push(fn);
  }

  public broadcast(data: { type: string, value: number | string | boolean }) {
    if (this.observers.length !== 0) {
      this.observers.forEach((subscriber) => subscriber(data));
    }
  }
}

export {
  Observer,
};
