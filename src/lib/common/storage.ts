export function setItem<T>(key: string, value: T) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, String(value));
  }
}

export function getItem(key: string) {
  const value = localStorage.getItem(key);

  if (value != null) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}

export function removeItem(key: string) {
  localStorage.removeItem(key);
}

export function clearAll() {
  localStorage.clear();
}
