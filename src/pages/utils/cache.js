let cache = {};

const get = (key) => {
  return cache[key];
};

const set = (key, value) => {
  cache[key] = value;
};

const remove = (key) => {
  delete cache[key];
};

const clear = () => {
  cache = {};
};

export { get, set, remove, clear , cache};