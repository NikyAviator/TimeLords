let store;
try {
  store = JSON.parse(localStorage.store);
}
catch (e) {
  store = {};
}

store.clear = () => localStorage.store = localStorage.clear();
store.save = () => localStorage.store = JSON.stringify(store);

store.initHistory = () => {
  if (!store.history) {
    store.history.lastVisited = {}
    store.save()
  }
}

export default store;