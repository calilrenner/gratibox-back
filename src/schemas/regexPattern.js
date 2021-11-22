export const regexPattern = (pattern) => {
  const regex = {
    name: /^[A-Za-z][A-Za-z\'\\.\-]+([\ A-Za-z][A-Za-z\'\\.\-]+)*$/,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/,
    password:
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&_^()])[A-Za-z\d@$!%*?&_^()]{8,}/,
    zipCode: /^[0-9]{5}-[0-9]{3}$/,
  };
  return regex[pattern];
};
