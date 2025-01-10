export const maskZipCode = (value: string): string =>
  value?.replace(/\D/g, "")?.replace(/^(\d{5})(\d)/, "$1-$2");

export const maskPhone = (value: string): string =>
  value
    ?.replace(/\D/g, "")
    ?.replace(/^(\d{2})(\d)/g, "($1) $2")
    ?.replace(/(\d)(\d{4})$/, "$1-$2");

export const isValidMail = (value: string): boolean =>
  !!value.match(
    /^([a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/
  );

export const isValidZipCode = (value: string): boolean =>
  !!value.match(/^\d{2}\d{3}[-]\d{3}$/gm);

export const isValidPhone = (value: string): boolean =>
  !!value.match(/\([1-9]\d\)\s9?\d{4}-\d{4}/g);
