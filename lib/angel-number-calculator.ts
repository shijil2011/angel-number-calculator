export interface AngelNumberInput {
  birthdate: string // DD/MM/YYYY or YYYY-MM-DD format
  fullName?: string
  time?: string // HH:MM format
  userSighting?: string // Free text of numbers they keep seeing
}

export interface AngelNumberCandidate {
  number: string
  confidence: number
  evidence: string[]
  meaning: {
    short: string
    expanded: string
    actions: string[]
    manifestation: string[]
  }
}

export interface AngelNumberResult {
  candidates: AngelNumberCandidate[]
  allEvidence: {
    lifePath: number
    nameExpression?: number
    digitFrequency: Record<string, number>
    sequences: string[]
    timePatterns: string[]
    userSightings: string[]
  }
}

// Pythagorean numerology mapping
const LETTER_VALUES: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
}

// Angel number meanings database
const ANGEL_NUMBER_MEANINGS: Record<string, AngelNumberCandidate["meaning"]> = {
  "111": {
    short: "New beginnings and manifestation power",
    expanded:
      "Angel number 111 is a powerful sign of new beginnings and manifestation. When you see this number, the universe is telling you that your thoughts are rapidly manifesting into reality. This is a time to be mindful of your thoughts and focus on what you truly want to create in your life. The number 1 represents leadership, independence, and new starts, and when it appears in triplicate, its energy is amplified. Your angels are encouraging you to step into your power and take the lead in creating the life you desire. This number often appears when you're on the verge of a significant breakthrough or when new opportunities are about to present themselves.",
    actions: [
      "Monitor your thoughts carefully",
      "Set clear intentions",
      "Take action on new opportunities",
      "Practice positive affirmations",
    ],
    manifestation: [
      "Visualize your goals daily",
      "Write down your intentions",
      "Use the 3-6-9 manifestation method",
      "Trust your intuition",
    ],
  },
  "222": {
    short: "Balance, cooperation, and trust in divine timing",
    expanded:
      "Angel number 222 is a message about balance, cooperation, and trusting in divine timing. This number appears when you need to have faith that everything is working out for your highest good, even if you can't see the full picture yet. The energy of 2 represents partnership, diplomacy, and harmony. When tripled, it emphasizes the importance of finding balance in all areas of your life - work and personal time, giving and receiving, speaking and listening. Your angels are reminding you that you don't have to do everything alone. Seek support from others and be open to collaboration. This number often appears during times of uncertainty, serving as a reminder to trust the process and have patience.",
    actions: [
      "Practice patience and trust",
      "Seek balance in all areas",
      "Collaborate with others",
      "Focus on relationships",
    ],
    manifestation: [
      "Meditate on balance",
      "Practice gratitude for partnerships",
      "Visualize harmonious outcomes",
      "Trust divine timing",
    ],
  },
  "333": {
    short: "Creativity, self-expression, and spiritual growth",
    expanded:
      "Angel number 333 is a powerful message about creativity, self-expression, and spiritual growth. This number indicates that the ascended masters are near you, offering their guidance and support. The number 3 represents creativity, communication, and joy, and when it appears three times, it's a strong encouragement to express yourself authentically. Your angels are telling you that now is the time to embrace your creative gifts and share them with the world. This number often appears when you're being called to step into a more spiritual role or when you need to pay attention to your inner wisdom. It's also a sign that your prayers have been heard and are being answered.",
    actions: [
      "Express yourself creatively",
      "Trust your inner wisdom",
      "Share your gifts with others",
      "Embrace spiritual practices",
    ],
    manifestation: [
      "Create art or write",
      "Speak your truth",
      "Connect with spiritual guides",
      "Practice creative visualization",
    ],
  },
  "444": {
    short: "Stability, hard work, and angelic protection",
    expanded:
      "Angel number 444 is a sign of stability, hard work, and strong angelic protection. This number appears when your angels want you to know that you are surrounded by love and guidance. The number 4 represents practicality, organization, and building solid foundations. When it appears four times, it emphasizes the importance of creating stability in your life through consistent effort and dedication. Your angels are encouraging you to continue working toward your goals, even if progress seems slow. This number is also a reminder that you have strong support from the spiritual realm. Trust that your hard work will pay off and that you're being guided toward success.",
    actions: [
      "Stay focused on your goals",
      "Build strong foundations",
      "Trust in divine protection",
      "Maintain consistent effort",
    ],
    manifestation: [
      "Create detailed action plans",
      "Visualize stable outcomes",
      "Practice grounding exercises",
      "Trust the process",
    ],
  },
  "555": {
    short: "Major life changes and personal freedom",
    expanded:
      "Angel number 555 is a powerful indicator of major life changes and personal freedom. This number appears when significant transformations are on the horizon. The number 5 represents adventure, freedom, and change, and when it appears in sequence, it amplifies the energy of transformation. Your angels are preparing you for important shifts that will lead to greater personal freedom and authentic living. While change can feel uncertain, this number is a reassurance that these changes are divinely guided and will ultimately benefit your highest good. Embrace the opportunities for growth and trust that you have the strength to navigate whatever comes your way.",
    actions: [
      "Embrace change with open arms",
      "Release what no longer serves",
      "Stay flexible and adaptable",
      "Trust your adventurous spirit",
    ],
    manifestation: [
      "Visualize positive changes",
      "Release resistance to transformation",
      "Set intentions for freedom",
      "Practice letting go rituals",
    ],
  },
  "1234": {
    short: "Progressive steps and systematic growth",
    expanded:
      "Angel number 1234 represents progressive steps and systematic growth toward your goals. This sequential number is a sign that you're on the right path and making steady progress. Each digit builds upon the previous one, symbolizing the natural progression of your spiritual and personal development. The number 1 represents new beginnings, 2 signifies balance and cooperation, 3 indicates creativity and self-expression, and 4 represents stability and hard work. Together, they create a powerful message about taking things one step at a time and trusting the process of gradual improvement. Your angels are encouraging you to continue moving forward with patience and determination.",
    actions: [
      "Take things step by step",
      "Trust the natural progression",
      "Stay organized and methodical",
      "Celebrate small victories",
    ],
    manifestation: [
      "Break goals into smaller steps",
      "Visualize progressive success",
      "Practice patience with the process",
      "Trust in systematic growth",
    ],
  },
}

function reduceToSingleDigit(num: number): number {
  // Preserve master numbers 11, 22, 33
  if (num === 11 || num === 22 || num === 33) return num

  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number.parseInt(digit), 0)
    if (num === 11 || num === 22 || num === 33) return num
  }
  return num
}

function calculateLifePath(birthdate: string): number {
  let day: number, month: number, year: number

  if (birthdate.includes("-")) {
    // YYYY-MM-DD format from HTML date input
    const [yearStr, monthStr, dayStr] = birthdate.split("-").map(Number)
    day = dayStr
    month = monthStr
    year = yearStr
  } else {
    // DD/MM/YYYY format
    const [dayStr, monthStr, yearStr] = birthdate.split("/").map(Number)
    day = dayStr
    month = monthStr
    year = yearStr
  }

  // Sum all digits
  const allDigits = `${day.toString().padStart(2, "0")}${month.toString().padStart(2, "0")}${year}`
  const sum = allDigits.split("").reduce((total, digit) => total + Number.parseInt(digit), 0)

  return reduceToSingleDigit(sum)
}

function calculateNameExpression(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, "")
  const sum = cleanName.split("").reduce((total, letter) => total + (LETTER_VALUES[letter] || 0), 0)
  return reduceToSingleDigit(sum)
}

function analyzeDigitFrequency(birthdate: string): Record<string, number> {
  let day: string, month: string, year: string

  if (birthdate.includes("-")) {
    // YYYY-MM-DD format from HTML date input
    const [yearStr, monthStr, dayStr] = birthdate.split("-")
    day = dayStr
    month = monthStr
    year = yearStr
  } else {
    // DD/MM/YYYY format
    const [dayStr, monthStr, yearStr] = birthdate.split("/")
    day = dayStr
    month = monthStr
    year = yearStr
  }

  const concatenated = `${day.padStart(2, "0")}${month.padStart(2, "0")}${year}`

  const frequency: Record<string, number> = {}
  for (const digit of concatenated) {
    frequency[digit] = (frequency[digit] || 0) + 1
  }

  return frequency
}

function findSequences(birthdate: string): string[] {
  let day: string, month: string, year: string

  if (birthdate.includes("-")) {
    // YYYY-MM-DD format from HTML date input
    const [yearStr, monthStr, dayStr] = birthdate.split("-")
    day = dayStr
    month = monthStr
    year = yearStr
  } else {
    // DD/MM/YYYY format
    const [dayStr, monthStr, yearStr] = birthdate.split("/")
    day = dayStr
    month = monthStr
    year = yearStr
  }

  const concatenated = `${day.padStart(2, "0")}${month.padStart(2, "0")}${year}`

  const sequences: string[] = []

  // Look for ascending sequences of 3+ digits
  for (let i = 0; i < concatenated.length - 2; i++) {
    let sequence = concatenated[i]
    let currentNum = Number.parseInt(concatenated[i])

    for (let j = i + 1; j < concatenated.length; j++) {
      const nextNum = Number.parseInt(concatenated[j])
      if (nextNum === currentNum + 1) {
        sequence += concatenated[j]
        currentNum = nextNum
      } else {
        break
      }
    }

    if (sequence.length >= 3) {
      sequences.push(sequence)
    }
  }

  return sequences
}

function analyzeTimePatterns(time?: string): string[] {
  if (!time) return []

  const patterns: string[] = []
  const cleanTime = time.replace(":", "")

  // Check for repeating digits
  const digits = cleanTime.split("")
  const uniqueDigits = [...new Set(digits)]

  for (const digit of uniqueDigits) {
    const count = digits.filter((d) => d === digit).length
    if (count >= 2) {
      patterns.push(digit.repeat(count))
    }
  }

  // Check for mirror times (like 12:21)
  if (cleanTime.length === 4) {
    if (cleanTime[0] === cleanTime[3] && cleanTime[1] === cleanTime[2]) {
      patterns.push(cleanTime)
    }
  }

  return patterns
}

function parseUserSightings(sighting?: string): string[] {
  if (!sighting) return []

  // Extract numbers from the text
  const numbers = sighting.match(/\d+/g) || []
  return numbers.filter((num) => num.length >= 2) // Only sequences of 2+ digits
}

export function calculateAngelNumbers(input: AngelNumberInput): AngelNumberResult {
  const candidates: AngelNumberCandidate[] = []
  const evidence = {
    lifePath: calculateLifePath(input.birthdate),
    nameExpression: input.fullName ? calculateNameExpression(input.fullName) : undefined,
    digitFrequency: analyzeDigitFrequency(input.birthdate),
    sequences: findSequences(input.birthdate),
    timePatterns: analyzeTimePatterns(input.time),
    userSightings: parseUserSightings(input.userSighting),
  }

  // Generate candidates with confidence scoring
  const candidateMap = new Map<string, { confidence: number; evidenceList: string[] }>()

  // 1. Life path derived candidates
  const lifePath = evidence.lifePath
  const lifePathTriple = lifePath.toString().repeat(3)
  addCandidate(candidateMap, lifePathTriple, 15, "Life path number")

  if ([11, 22, 33].includes(lifePath)) {
    addCandidate(candidateMap, lifePath.toString(), 20, "Master number from life path")
  }

  // 2. Name expression candidates
  if (evidence.nameExpression) {
    const nameTriple = evidence.nameExpression.toString().repeat(3)
    addCandidate(candidateMap, nameTriple, 10, "Name expression number")
  }

  // 3. Digit frequency candidates
  Object.entries(evidence.digitFrequency).forEach(([digit, count]) => {
    if (count >= 2) {
      const repeated = digit.repeat(count)
      addCandidate(candidateMap, repeated, count >= 3 ? 30 : 20, `Birthdate digit pattern (${count}x ${digit})`)
    }
  })

  // 4. Sequence candidates
  evidence.sequences.forEach((sequence) => {
    addCandidate(candidateMap, sequence, 20, `Ascending sequence in birthdate`)
  })

  // 5. Time pattern candidates
  evidence.timePatterns.forEach((pattern) => {
    addCandidate(candidateMap, pattern, 30, `Time pattern match`)
  })

  // 6. User sighting candidates (highest priority)
  evidence.userSightings.forEach((sighting) => {
    addCandidate(candidateMap, sighting, 40, `User reported sighting`)
  })

  // Convert to candidates array and sort by confidence
  candidateMap.forEach((data, number) => {
    const meaning = ANGEL_NUMBER_MEANINGS[number] || getDefaultMeaning(number)
    candidates.push({
      number,
      confidence: Math.min(data.confidence, 100),
      evidence: data.evidenceList,
      meaning,
    })
  })

  // Sort by confidence and take top 3
  candidates.sort((a, b) => b.confidence - a.confidence)

  // If no strong candidates, add life path fallback
  if (candidates.length === 0) {
    const fallback = lifePath.toString().repeat(3)
    candidates.push({
      number: fallback,
      confidence: 50,
      evidence: ["Fallback: Life path derived"],
      meaning: ANGEL_NUMBER_MEANINGS[fallback] || getDefaultMeaning(fallback),
    })
  }

  return {
    candidates: candidates.slice(0, 3),
    allEvidence: evidence,
  }
}

function addCandidate(
  map: Map<string, { confidence: number; evidenceList: string[] }>,
  number: string,
  points: number,
  evidence: string,
) {
  const existing = map.get(number)
  if (existing) {
    existing.confidence += points
    existing.evidenceList.push(evidence)
  } else {
    map.set(number, { confidence: points, evidenceList: [evidence] })
  }
}

function getDefaultMeaning(number: string): AngelNumberCandidate["meaning"] {
  return {
    short: `Spiritual significance of ${number}`,
    expanded: `The angel number ${number} carries unique spiritual significance for you. This number has appeared in your life as a sign from your angels and the universe. Pay attention to when and where you see this number, as it may contain important guidance for your current life situation. Each number carries its own vibrational energy and meaning, and your personal connection to ${number} suggests it has special relevance to your spiritual journey.`,
    actions: [
      "Pay attention to when you see this number",
      "Meditate on its meaning for you",
      "Keep a journal of sightings",
      "Trust your intuition about its significance",
    ],
    manifestation: [
      "Visualize this number during meditation",
      "Use it as a focal point for intentions",
      "Notice patterns in your life when it appears",
      "Trust the guidance it brings",
    ],
  }
}
