export function compute(left: string, right: string): number {
  // Check if strings have equal length
    if (left.length !== right.length) {
        throw new Error('DNA strands must be of equal length.');
    }
    
    let distance = 0;
    
    // Compare each character position
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            distance++;
        }
    } 
    
    return distance;
}