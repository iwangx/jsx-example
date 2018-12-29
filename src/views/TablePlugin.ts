export default (column: any, h: any) => {
  column = customs(column, h);
  return column;
};


const customs = (column: any, h: any) => {
  if ('render' in column) {
    const slot = column.render(h);

    const { render, ...left } = column;
    return {
      ...left,
      slot,
    };
  }
  return column;
};
