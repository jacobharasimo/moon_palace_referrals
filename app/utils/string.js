export const toProperCase = str =>
  str.replace(/(^|\s)\S/g, function(t) {
    return t.toUpperCase();
  });
