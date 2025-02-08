const add = (a: number, b: number): string => {
    const result = a + b;
    return result.toString();
  };
  
  const findMax = (numbers: number[]): string => {
    const max = Math.max(...numbers);
    return max.toString();
  };
  
  const result = add(1, 2) + 0;
  console.log(result, "type of result:", typeof result);
  
  const numbers = [1, 2, 3, 4, 5];
  const maxNumber = findMax(numbers);
  console.log("Max number:", maxNumber);