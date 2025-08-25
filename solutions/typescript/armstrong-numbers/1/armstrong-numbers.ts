export function isArmstrongNumber(number: number): boolean {
  const numStr = String(number);
  const numLength = numStr.length;
  let sum: number = 0;  

  for (let i = 0; i < numLength; i++) {
    const digit = numStr[i];
    sum += Number(digit) ** numLength;
  }
  return sum == number;
}
