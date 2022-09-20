import { expect, test } from '@jest/globals';
import Settings from '../Settings';

test('should set a custom setting', () => {
  const settings = new Settings();
  settings.setSettings('theme', 'normal');
  expect(settings.userSettings.has('theme')).toBe(true);
  expect(settings.userSettings.get('theme')).toBe('normal');
});

test('should fail due to an error', () => {
  const settings = new Settings();
  const f = () => settings.setSettings('error', 'normal');
  expect(f).toThrowError('Такая настройка(error) или её значение(normal) отсутствует');
});

test('should fail due to an error', () => {
  const settings = new Settings();
  const f = () => settings.setSettings('theme', 'error');
  expect(f).toThrowError('Такая настройка(theme) или её значение(error) отсутствует');
});

test('should return the Map with the correct elements', () => {
  const settings = new Settings();
  const result = settings.getSettings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(result).toEqual(expected);
});

test('should return the Map with the correct elements after setting the custom settings', () => {
  const settings = new Settings();
  settings.setSettings('theme', 'normal');
  const result = settings.getSettings();
  const expected = new Map([
    ['theme', 'normal'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(result).toEqual(expected);
});
