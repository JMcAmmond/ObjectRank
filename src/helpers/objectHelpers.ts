const isObject = (obj: any) => {
  return obj === Object(obj);
};

export const objectByString = (obj: any, str: string): Object | null => {
  const s = str.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
  const a = s.split('.');
  let o = { ...obj };

  for (let i = 0, n = a.length; i < n; i += 1) {
    const k = a[i];
    if (isObject(o) && k in o) {
      o = o[k];
    } else {
      return null;
    }
  }

  return o;
};
