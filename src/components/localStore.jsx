let store;
try {
  store = JSON.parse(localStorage.store);
}
catch (e) {
  store = {};
}

store.save = () => localStorage.store = JSON.stringify(store);

export default store;