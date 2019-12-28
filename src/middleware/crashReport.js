const crashReport = store => next => action => {
  try {
    return next(action);
  } catch (error) {
    console.error("Caught an exception!", error);
  }
};

export default crashReport;
