export function recite(startVerse: number, endVerse: number): string {
  const ordinals = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'ninth',
    'tenth',
    'eleventh',
    'twelfth',
  ];

  const gifts = [
    "a Partridge in a Pear Tree",
    "two Turtle Doves",
    "three French Hens",
    "four Calling Birds",
    "five Gold Rings",
    "six Geese-a-Laying",
    "seven Swans-a-Swimming",
    "eight Maids-a-Milking",
    "nine Ladies Dancing",
    "ten Lords-a-Leaping",
    "eleven Pipers Piping",
    "twelve Drummers Drumming"
  ];

  const verses: string[] = [];   

  for (let day = startVerse; day <= endVerse; day++) {    
    const intro = `On the ${ordinals[day-1]} day of Christmas my true love gave to me: `;

    const lines: string[] = [];  
    
    for (let i = day - 1; i >= 0; i--) {
      if (i === 0 && day !== 1) {
        lines.push("and " + gifts[0]);
      } else {
        lines.push(gifts[i]);
      }
    }

    const verse = intro + lines.join(", ") + ".\n";
    verses.push(verse);
  }
  
  return verses.join(""); 
}

