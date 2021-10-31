const prefix = "alef";
const { localStorage } = window;

export const saveInStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
  } catch {}
};

export const getFromStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(`${prefix}_${key}`);

  if (value !== null) {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }
  return null;
};
