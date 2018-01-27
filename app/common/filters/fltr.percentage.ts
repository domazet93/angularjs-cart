export const Percentage = ($filter:any) => {
  return (input: number, decimals: number) => {
    return `${$filter("number")(input * 100, decimals)}%`;
  };
};

