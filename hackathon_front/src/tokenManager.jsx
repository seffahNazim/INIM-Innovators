let handleToken = null;

export const setHandleToken = (callback) => {
  handleToken = callback;
};

export const updateToken = (newToken) => {
  if (handleToken) {
    handleToken(newToken);
  }
};
