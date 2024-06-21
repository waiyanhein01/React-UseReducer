{
  /*
  Action
    *type
    *payload
  */
}
const Reducer = (store, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (store += action.payload);
      } else {
        return (store += 1);
      }
      break;
    }

    case "decrease": {
      if (store > 0) {
        return (store -= 1);
      } else {
        return store;
      }
      break;
    }

    case "addWithPayload": {
      return (store += action.payload);
      break;
    }

    default: {
      return store;
    }
  }
  return;
};

export default Reducer;
