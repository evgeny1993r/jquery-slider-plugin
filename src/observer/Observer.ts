type Data = {
  type: string,
  value: string | number | boolean,
};

class Observer {
  private observers: ((data: Data) => void)[];
  constructor() {
    this.observers = [];
  }

  public subscribe(fn: (data: Data) => void): void {
    this.observers.push(fn);
  }

  public broadcast(data: Data) {
    if (this.observers.length !== 0) {
      this.observers.forEach((subscriber) => subscriber(data));
    }
  }
}

export {
  Observer,
};
