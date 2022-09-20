export default class Settings {
  constructor() {
    this.userSettings = new Map();
    this.defaultSettings = new Map([
      ['theme', { value: 'dark', other: ['dark', 'normal', 'hard', 'nightmare'] }],
      ['music', { value: 'trance', other: ['trance', 'pop', 'rock', 'chillout', 'off'] }],
      ['difficulty', { value: 'easy', other: ['easy', 'normal', 'hard', 'nightmare'] }],
    ]);
  }

  setSettings(key, value) {
    if ([...this.defaultSettings.keys()].includes(key)
            && this.defaultSettings.get(key).other.includes(value)) {
      this.userSettings.set(key, value);
    } else {
      throw new Error(`Такая настройка(${key}) или её значение(${value}) отсутствует`);
    }
  }

  getSettings() {
    return new Map([...this.defaultSettings].map((item) => {
      const value = this.userSettings.get(item[0]) || item[1].value;
      return [item[0], value];
    }));
  }
}
