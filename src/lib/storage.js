/* global localStorage */

import EventEmitter from 'eventemitter2';

export class Storage extends EventEmitter {
  set(key, value) {
    const flatValue = typeof value === 'object' ? JSON.stringify(value) : value;

    console.log('STORGE: SET', { key, value, flatValue });

    localStorage.setItem(key, flatValue);

    this.emit('change', { key, value });
    this.emit(`${key}_changed`, value);
  }

  get(key) {
    const storedValue = localStorage.getItem(key);

    try {
      return JSON.parse(storedValue);
    } catch (e) {
      return storedValue;
    }
  }

  getOr(key, other) {
    const storedValue = localStorage.getItem(key);

    if (!storedValue) return other;

    try {
      return JSON.parse(storedValue);
    } catch (e) {
      return storedValue;
    }
  }

  remove(key) {
    localStorage.removeItem(key);

    this.emit('remove', key);
    this.emit(`${key}_removed`);
  }

  clear() {
    localStorage.clear();

    this.emit('clear');
  }
}

export const storage = new Storage();
