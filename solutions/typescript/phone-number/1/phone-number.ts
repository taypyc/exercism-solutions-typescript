export function clean(rawInput: string): string {  
  if (/[a-z]/i.test(rawInput)) {
    throw new Error('Letters not permitted')
  }
  
  if (/[^0-9\s().+-]/.test(rawInput)) {
    throw new Error('Punctuations not permitted')
  }

  const digits = rawInput.replace(/\D/g, '')

  if (digits.length < 10) {
    throw new Error('Incorrect number of digits')
  }

  if (digits.length > 11) {
    throw new Error('More than 11 digits')
  }

  let normalized = digits

  if (digits.length === 11) {
    if (digits[0] !== '1') {
      throw new Error('11 digits must start with 1')
    }
    normalized = digits.slice(1)
  }

  // Validate NANP rules
  const area = normalized.slice(0, 3)
  const exchange = normalized.slice(3, 6)

  if (area[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }
  if (area[0] === '1') {
    throw new Error('Area code cannot start with one')
  }
  if (exchange[0] === '0') {
    throw new Error('Exchange code cannot start with zero')
  }
  if (exchange[0] === '1') {
    throw new Error('Exchange code cannot start with one')
  }

  return normalized
}
