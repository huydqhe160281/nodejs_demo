export const Add = (a, b) => a + b;

export const Sub = (a, b) => a - b;

export const ShowData = (data) => {
  data.map((d) => {
    if (Object.keys(d).length > 0) {
      console.log(d?.id, d?.name, d?.age, d?.address);
    } else console.log("No data");
  });
  console.table(data);
};
