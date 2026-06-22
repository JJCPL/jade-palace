// DATA
const zodiacs = [
  {
    name: "Rat",
    icon: "images/zodiac-images/zodiac-animal-icons/rat.svg",
    symbol: "鼠",
    traits: "Quick-witted, resourceful, smart",

    defaultDescription:
      "Those born under the Rat sign are known for their intelligence, adaptability, and sharp instincts. Naturally observant and socially aware, Rats often thrive in fast-moving environments where quick thinking and creativity are valued.",

    elementDescriptions: {
      wood: "Wood Rats are thoughtful and cooperative individuals who value growth, learning, and meaningful relationships. Compared to other Rats, they are often more diplomatic and emotionally aware.",

      fire: "Fire Rats are energetic, charismatic, and fiercely ambitious. Their passion and confidence make them natural leaders, though their impulsive nature can occasionally lead them into restless pursuits.",

      earth:
        "Earth Rats are practical, grounded, and dependable. They tend to approach life carefully and methodically, preferring stability and long-term security over unnecessary risk.",

      metal:
        "Metal Rats are determined, resilient, and highly self-disciplined. Their strong will and sharp focus often help them achieve ambitious goals, though they can sometimes appear stubborn or guarded.",

      water:
        "Water Rats are intuitive, perceptive, and highly adaptable. They communicate with ease and often excel in social situations, using their emotional intelligence to navigate complex relationships.",
    },
    luckyNumbers: ["2", "3", "6"],
    compatibility: {
      romance: ["Dragon", "Monkey", "Ox"],

      friendship: ["Rabbit", "Pig", "Dog"],

      challenging: ["Horse", "Rooster", "Goat"],
    },
  },
  {
    name: "Ox",
    icon: "images/zodiac-images/zodiac-animal-icons/ox.svg",
    symbol: "牛",
    traits: "Strong, dependable, determined",
    defaultDescription:
      "Those born under the Ox sign are known for their discipline, patience, and reliability. Steady and hardworking by nature, Oxen value honesty, tradition, and persistence, often earning the trust and respect of those around them.",

    elementDescriptions: {
      wood: "Wood Oxen are cooperative, grounded, and compassionate. They combine the Ox's reliability with a more adaptable and thoughtful personality.",

      fire: "Fire Oxen are ambitious, confident, and highly driven. Their determination is intensified by passion and leadership, making them bold but sometimes stubborn.",

      earth:
        "Earth Oxen are practical, responsible, and deeply dependable. They value stability and tend to approach challenges with calm patience and wisdom.",

      metal:
        "Metal Oxen are resilient, disciplined, and strong-willed. Focused and uncompromising, they pursue their goals with remarkable persistence.",

      water:
        "Water Oxen are intuitive, patient, and diplomatic. More emotionally aware than other Oxen, they balance determination with sensitivity.",
    },
    luckyNumbers: ["1", "4", "9"],
    compatibility: {
      romance: ["Rat", "Snake", "Rooster"],
      friendship: ["Monkey", "Pig", "Dog"],
      challenging: ["Goat", "Horse", "Dragon"],
    },
  },
  {
    name: "Tiger",
    icon: "images/zodiac-images/zodiac-animal-icons/tiger.svg",
    symbol: "虎",
    traits: "Brave, competitive, unpredictable",
    defaultDescription:
      "Those born under the Tiger sign are known for their courage, charisma, and adventurous spirit. Natural leaders with strong emotions and fierce independence, Tigers often thrive when pursuing excitement, challenge, and personal freedom.",

    elementDescriptions: {
      wood: "Wood Tigers are open-minded, cooperative, and imaginative. They retain the Tiger's adventurous nature while being more sociable and compassionate.",

      fire: "Fire Tigers are energetic, fearless, and intensely passionate. Their confidence and ambition make them powerful personalities who naturally command attention.",

      earth:
        "Earth Tigers are practical, responsible, and level-headed. Compared to other Tigers, they are calmer and more strategic in their decision-making.",

      metal:
        "Metal Tigers are determined, competitive, and incredibly resilient. Strong-willed and ambitious, they rarely back down from challenges.",

      water:
        "Water Tigers are intuitive, thoughtful, and emotionally intelligent. Their softer communication style allows them to connect deeply with others.",
    },

    luckyNumbers: ["1", "3", "7"],

    compatibility: {
      romance: ["Horse", "Dog", "Pig"],
      friendship: ["Rabbit", "Dragon", "Monkey"],
      challenging: ["Snake", "Ox", "Rooster"],
    },
  },
  {
    name: "Rabbit",
    icon: "images/zodiac-images/zodiac-animal-icons/rabbit.svg",
    symbol: "兔",
    traits: "Gentle, quiet, elegant",
    defaultDescription:
      "Those born under the Rabbit sign are known for their calm nature, elegance, and emotional sensitivity. Rabbits often value peace and harmony, preferring thoughtful communication and meaningful relationships over conflict and chaos.",

    elementDescriptions: {
      wood: "Wood Rabbits are compassionate, sociable, and cooperative. Their gentle personality is balanced by creativity and a strong sense of empathy toward others.",

      fire: "Fire Rabbits are passionate, charismatic, and emotionally expressive. More confident than other Rabbits, they often thrive in social and artistic environments.",

      earth:
        "Earth Rabbits are practical, reliable, and grounded. Calm under pressure, they tend to approach life with patience and emotional maturity.",

      metal:
        "Metal Rabbits are refined, determined, and highly self-disciplined. They possess quiet confidence and often hold themselves to very high standards.",

      water:
        "Water Rabbits are intuitive, adaptable, and emotionally aware. Their natural diplomacy and sensitivity allow them to connect deeply with others.",
    },

    luckyNumbers: ["3", "4", "9"],

    compatibility: {
      romance: ["Goat", "Pig", "Dog"],
      friendship: ["Monkey", "Rat", "Horse"],
      challenging: ["Rooster", "Dragon", "Snake"],
    },
  },
  {
    name: "Dragon",
    icon: "images/zodiac-images/zodiac-animal-icons/dragon.svg",
    symbol: "龍",
    traits: "Confident, intelligent, ambitious",
    defaultDescription:
      "Those born under the Dragon sign are known for their confidence, ambition, and powerful presence. Dragons naturally attract attention and often pursue success with determination, charisma, and fearless energy.",

    elementDescriptions: {
      wood: "Wood Dragons are creative, visionary, and open-minded. Compared to other Dragons, they are more cooperative and balanced in leadership.",

      fire: "Fire Dragons are bold, passionate, and intensely energetic. Their charisma and confidence make them natural leaders who thrive under pressure.",

      earth:
        "Earth Dragons are disciplined, practical, and dependable. They combine ambition with patience, often making thoughtful long-term decisions.",

      metal:
        "Metal Dragons are determined, resilient, and fiercely independent. Strong-willed and competitive, they rarely settle for mediocrity.",

      water:
        "Water Dragons are perceptive, adaptable, and emotionally intelligent. Their calmer approach allows them to communicate more effectively than many Dragons.",
    },

    luckyNumbers: ["1", "6", "7"],

    compatibility: {
      romance: ["Rat", "Monkey", "Rooster"],
      friendship: ["Tiger", "Snake", "Horse"],
      challenging: ["Dog", "Rabbit", "Ox"],
    },
  },
  {
    name: "Snake",
    icon: "images/zodiac-images/zodiac-animal-icons/snake.svg",
    symbol: "蛇",
    traits: "Wise, intuitive, mysterious",
    defaultDescription:
      "Those born under the Snake sign are known for their intelligence, intuition, and calm composure. Deep thinkers by nature, Snakes often possess strong instincts and prefer careful observation over impulsive action.",

    elementDescriptions: {
      wood: "Wood Snakes are thoughtful, creative, and cooperative. Their calm intelligence is paired with a more flexible and understanding personality.",

      fire: "Fire Snakes are passionate, ambitious, and highly charismatic. Confident and driven, they often pursue success with intense focus and determination.",

      earth:
        "Earth Snakes are practical, patient, and disciplined. More grounded than other Snakes, they value stability and long-term security.",

      metal:
        "Metal Snakes are sharp-minded, resilient, and highly self-assured. Their strong intuition and determination make them difficult to influence.",

      water:
        "Water Snakes are intuitive, perceptive, and emotionally intelligent. They communicate with subtlety and often understand situations deeply before acting.",
    },

    luckyNumbers: ["2", "8", "9"],

    compatibility: {
      romance: ["Ox", "Rooster", "Monkey"],
      friendship: ["Dragon", "Rabbit", "Dog"],
      challenging: ["Tiger", "Pig", "Horse"],
    },
  },
  {
    name: "Horse",
    icon: "images/zodiac-images/zodiac-animal-icons/horse.svg",
    symbol: "馬",
    traits: "Energetic, independent, spirited",
    defaultDescription:
      "Those born under the Horse sign are known for their energy, confidence, and love of freedom. Horses are adventurous by nature and often thrive in fast-moving environments where independence and self-expression are valued.",

    elementDescriptions: {
      wood: "Wood Horses are sociable, optimistic, and cooperative. They balance the Horse's adventurous spirit with patience and emotional warmth.",

      fire: "Fire Horses are passionate, fearless, and highly energetic. Their strong charisma and confidence often place them naturally at the center of attention.",

      earth:
        "Earth Horses are grounded, responsible, and practical. More disciplined than other Horses, they pursue freedom while maintaining stability.",

      metal:
        "Metal Horses are determined, ambitious, and fiercely independent. Strong-willed and competitive, they often chase their goals relentlessly.",

      water:
        "Water Horses are intuitive, adaptable, and emotionally aware. They are more flexible in relationships and tend to communicate thoughtfully.",
    },

    luckyNumbers: ["2", "3", "7"],

    compatibility: {
      romance: ["Tiger", "Goat", "Dog"],
      friendship: ["Rabbit", "Dragon", "Pig"],
      challenging: ["Rat", "Ox", "Snake"],
    },
  },
  {
    name: "Goat",
    icon: "images/zodiac-images/zodiac-animal-icons/goat.svg",
    symbol: "羊",
    traits: "Calm, creative, kind",
    defaultDescription:
      "Those born under the Goat sign are known for their compassion, creativity, and gentle nature. Goats often value emotional connection, beauty, and harmony, preferring peaceful environments over conflict and pressure.",

    elementDescriptions: {
      wood: "Wood Goats are generous, cooperative, and emotionally warm. Their creativity is balanced by empathy and strong social awareness.",

      fire: "Fire Goats are passionate, expressive, and highly imaginative. Their emotional intensity often fuels artistic and creative pursuits.",

      earth:
        "Earth Goats are dependable, thoughtful, and grounded. Compared to other Goats, they are more practical and emotionally steady.",

      metal:
        "Metal Goats are disciplined, determined, and refined. Beneath their gentle appearance lies strong resilience and personal ambition.",

      water:
        "Water Goats are intuitive, compassionate, and emotionally perceptive. Their calm communication style helps them build deep relationships.",
    },

    luckyNumbers: ["2", "7", "9"],

    compatibility: {
      romance: ["Rabbit", "Horse", "Pig"],
      friendship: ["Dog", "Monkey", "Rat"],
      challenging: ["Ox", "Rat", "Tiger"],
    },
  },
  {
    name: "Monkey",
    icon: "images/zodiac-images/zodiac-animal-icons/monkey.svg",
    symbol: "猴",
    traits: "Clever, curious, playful",
    defaultDescription:
      "Those born under the Monkey sign are known for their intelligence, humour, and curiosity. Quick-thinking and adaptable, Monkeys often enjoy solving problems, exploring new ideas, and entertaining those around them.",

    elementDescriptions: {
      wood: "Wood Monkeys are cooperative, creative, and open-minded. Their playful intelligence is paired with greater emotional balance and patience.",

      fire: "Fire Monkeys are energetic, ambitious, and highly charismatic. Their confidence and enthusiasm often make them natural performers and leaders.",

      earth:
        "Earth Monkeys are practical, strategic, and dependable. More focused than other Monkeys, they approach challenges with careful planning.",

      metal:
        "Metal Monkeys are determined, competitive, and incredibly sharp-minded. Their ambition and confidence often push them toward success.",

      water:
        "Water Monkeys are intuitive, flexible, and socially intelligent. They communicate easily with others and adapt quickly to changing situations.",
    },

    luckyNumbers: ["4", "7", "9"],

    compatibility: {
      romance: ["Rat", "Dragon", "Snake"],
      friendship: ["Goat", "Rabbit", "Dog"],
      challenging: ["Tiger", "Pig", "Horse"],
    },
  },
  {
    name: "Rooster",
    icon: "images/zodiac-images/zodiac-animal-icons/rooster.svg",
    symbol: "雞",
    traits: "Observant, hardworking, confident",
    defaultDescription:
      "Those born under the Rooster sign are known for their confidence, precision, and strong work ethic. Roosters often value honesty, organisation, and self-discipline, striving to present themselves with pride and clarity.",

    elementDescriptions: {
      wood: "Wood Roosters are sociable, cooperative, and thoughtful. Their confidence is softened by empathy and strong communication skills.",

      fire: "Fire Roosters are passionate, ambitious, and highly expressive. Their bold personality and determination often inspire those around them.",

      earth:
        "Earth Roosters are practical, reliable, and disciplined. They prefer stability and tend to approach responsibilities carefully and methodically.",

      metal:
        "Metal Roosters are resilient, focused, and exceptionally determined. Their strong opinions and ambition make them natural perfectionists.",

      water:
        "Water Roosters are perceptive, adaptable, and diplomatic. Compared to other Roosters, they communicate more calmly and thoughtfully.",
    },

    luckyNumbers: ["5", "7", "8"],

    compatibility: {
      romance: ["Ox", "Dragon", "Snake"],
      friendship: ["Monkey", "Pig", "Rabbit"],
      challenging: ["Rabbit", "Dog", "Horse"],
    },
  },
  {
    name: "Dog",
    icon: "images/zodiac-images/zodiac-animal-icons/dog.svg",
    symbol: "狗",
    traits: "Loyal, honest, reliable",
    defaultDescription:
      "Those born under the Dog sign are known for their loyalty, honesty, and strong sense of justice. Dogs value trust and meaningful relationships, often protecting and supporting those they care about deeply.",

    elementDescriptions: {
      wood: "Wood Dogs are compassionate, patient, and cooperative. Their loyalty is strengthened by emotional warmth and strong communication skills.",

      fire: "Fire Dogs are courageous, passionate, and highly protective. Their strong beliefs and emotional intensity often make them dependable leaders.",

      earth:
        "Earth Dogs are practical, responsible, and emotionally steady. Calm and dependable, they often provide stability within relationships and friendships.",

      metal:
        "Metal Dogs are disciplined, determined, and deeply principled. Their resilience and honesty make them highly trustworthy individuals.",

      water:
        "Water Dogs are intuitive, understanding, and emotionally intelligent. They communicate thoughtfully and often build strong emotional connections.",
    },

    luckyNumbers: ["3", "4", "9"],

    compatibility: {
      romance: ["Tiger", "Rabbit", "Horse"],
      friendship: ["Pig", "Monkey", "Goat"],
      challenging: ["Dragon", "Rooster", "Ox"],
    },
  },
  {
    name: "Pig",
    icon: "images/zodiac-images/zodiac-animal-icons/pig.svg",
    symbol: "豬",
    traits: "Generous, diligent, compassionate",
    defaultDescription:
      "Those born under the Pig sign are known for their kindness, generosity, and sincere nature. Pigs often value honesty, comfort, and meaningful relationships, bringing warmth and positivity to those around them.",

    elementDescriptions: {
      wood: "Wood Pigs are compassionate, sociable, and emotionally generous. Their warm personality allows them to connect easily with others.",

      fire: "Fire Pigs are passionate, optimistic, and energetic. Their enthusiasm and confidence often make them uplifting and inspiring companions.",

      earth:
        "Earth Pigs are grounded, dependable, and practical. They value stability and tend to approach life with patience and sincerity.",

      metal:
        "Metal Pigs are determined, disciplined, and strong-willed. Beneath their calm nature lies impressive resilience and ambition.",

      water:
        "Water Pigs are intuitive, empathetic, and emotionally intelligent. Their gentle communication style helps create strong and lasting relationships.",
    },

    luckyNumbers: ["2", "5", "8"],

    compatibility: {
      romance: ["Rabbit", "Goat", "Tiger"],
      friendship: ["Dog", "Rooster", "Rat"],
      challenging: ["Snake", "Monkey", "Ox"],
    },
  },
];

const zodiacElements = ["wood", "fire", "earth", "metal", "water"];

// LOGIC FUNCTIONS

const getZodiac = (year) => {
  const zodiacIndex = (((year - 1924) % 12) + 12) % 12;

  const elementIndex = Math.floor(((year - 1924) % 10) / 2);

  return {
    zodiac: zodiacs[zodiacIndex],

    element: zodiacElements[elementIndex],
  };
};

// VARIABLES THAT REFERENCE THE DOM

const wheel = document.getElementById("wheel");

const wheelSection = document.getElementById("z-wheel-section");

const input = document.querySelector(".zodiac-birthday-input");

const button = document.querySelector(".zodiac-reveal-btn");

const info = document.getElementById("info");

const compatibility = document.getElementById("compatibility");

const challenging = document.getElementById("challenging");

const wheelGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
wheelGroup.classList.add("zodiac-wheel-group");
wheel.appendChild(wheelGroup);

const placeholder = document.getElementById("placeholder");

const revealIcon = document.getElementById("reveal-icon");

// STATE VARIABLES

// Start of wheel always being "the rat"

let currentRotation = 0;
let currentIndex = 0;
let animationRotation = 0;

// CONSTANT VARIABLES

// controlling the degrees of the segments when they spin

const totalSegments = 12;
const anglePerSegment = 360 / totalSegments;
const getCoordinates = (angle, radius) => {
  const radians = ((angle - 90) * Math.PI) / 180;

  return {
    x: 250 + radius * Math.cos(radians),
    y: 250 + radius * Math.sin(radians),
  };
};

// BUILDING THE WHEEL IN BROWSER with SVG

// Creating the circle with SVG

const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

circle.setAttribute("cx", "250");
circle.setAttribute("cy", "250");
circle.setAttribute("r", "200");

circle.classList.add("zodiac-wheel-circle");

wheelGroup.appendChild(circle);

// Loop to create 12 segments using SVG

for (let i = 0; i < totalSegments; i++) {
  const startAngle = i * anglePerSegment;

  const endAngle = startAngle + anglePerSegment;

  const start = getCoordinates(startAngle, 200);

  const end = getCoordinates(endAngle, 200);

  const segment = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );

  const segmentData = `
      M 250 250 
      L ${start.x} ${start.y}
      A 200 200 0 0 1 ${end.x} ${end.y}
      Z
    `;

  segment.setAttribute("d", segmentData);

  segment.setAttribute("fill", i % 2 === 0 ? "#d7bf6f" : "#e4cc7a");

  segment.classList.add("zodiac-segment");

  segment.dataset.index = i;

  wheelGroup.appendChild(segment);

  // CREATE THE LABELS ON EACH SEGMENT W/ SVG

  // Create SVG group for symbol and name

  const labelGroup = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g",
  );

  labelGroup.classList.add("wheel-label");

  labelGroup.dataset.index = i;

  const middleAngle = startAngle + anglePerSegment / 2;

  const labelPosition = getCoordinates(middleAngle, 138);

  labelGroup.setAttribute(
    "transform",
    `
      translate(${labelPosition.x}, ${labelPosition.y})
    `,
  );

  // Icons for the wheel 

  const animal = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );

  animal.setAttribute("href", zodiacs[i].icon);

  animal.classList.add("zodiac-wheel-icon");

  animal.setAttribute("x", "-12");
  animal.setAttribute("y", "18");

  animal.setAttribute("width", "24");
  animal.setAttribute("height", "24");

  animal.setAttribute("transform", `rotate(${middleAngle})`);

  // Create Symbol with SVG

  const symbol = document.createElementNS("http://www.w3.org/2000/svg", "text");

  symbol.classList.add("wheel-symbol");

  symbol.setAttribute("text-anchor", "middle");

  symbol.textContent = zodiacs[i].symbol;

  symbol.setAttribute("y", "-22");

  symbol.setAttribute("transform", `rotate(${middleAngle})`);

  // Create name of symbol with SVG
  const symbolName = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text",
  );

  symbolName.setAttribute("text-anchor", "middle");

  symbolName.textContent = zodiacs[i].name;

  symbolName.setAttribute("y", "2");

  symbolName.classList.add("wheel-name");

  symbolName.textContent = zodiacs[i].name;

  symbolName.setAttribute("transform", `rotate(${middleAngle})`);

  // Appending everything

  labelGroup.appendChild(symbol);

  labelGroup.appendChild(animal);

  labelGroup.appendChild(symbolName);

  wheelGroup.appendChild(labelGroup);
}

// Create the inner yin-yang center circle

const centerCircle = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "circle",
);

centerCircle.classList.add("zodiac-center-circle");

centerCircle.setAttribute("cx", "250");
centerCircle.setAttribute("cy", "250");
centerCircle.setAttribute("r", "52");

wheelGroup.appendChild(centerCircle);

const yinYang = document.createElementNS("http://www.w3.org/2000/svg", "image");
yinYang.setAttribute("href", "images/accessory-images/yin-yang.svg");

yinYang.classList.add("zodiac-yin-yang");
yinYang.setAttribute("x", "200");
yinYang.setAttribute("y", "200");
yinYang.setAttribute("width", "100");
yinYang.setAttribute("height", "100");

wheelGroup.appendChild(yinYang);

// VARIABLES REFERENCING THE DOM AFTER ELEMENT IS MADE

// constant that was made from loop above.

const segments = document.querySelectorAll(".zodiac-segment");

const labels = document.querySelectorAll(".wheel-label");

// CORE FUNCTIONS

// Active highlighted segment function

const updateActiveSegment = (index) => {
  segments.forEach((segment) => {
    segment.classList.remove("active");
  });

  labels.forEach((label) => {
    label.classList.remove("active");
  });

  segments[index].classList.add("active");
  labels[index].classList.add("active");
};

// Reveal results function

const showRevealState = () => {
  placeholder.classList.add("hide");
  revealIcon.classList.add("show");
  info.classList.add("show");
  compatibility.classList.add("show");
};

// Wheel spinning when a segment is clicked

const spinFromSegmentClick = (index) => {
  segments.forEach((segment) => {
    segment.classList.remove("active");
  });

  labels.forEach((label) => {
    label.classList.remove("active");
  });

  const angle = -(index * anglePerSegment + anglePerSegment / 2);

  currentRotation = angle;

  currentIndex = index;

  wheelGroup.style.transition = "transform 0.6s ease";

  wheelGroup.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    updateActiveSegment(index);
    updateInfoCard(zodiacs[index]);
    showRevealState();
  }, 600);
};

// Wheel spinning from DOB reveal

const spinFromBirthday = (index, element) => {
  segments.forEach((segment) => {
    segment.classList.remove("active");
  });

  labels.forEach((label) => {
    label.classList.remove("active");
  });

  const angle = -(index * anglePerSegment + anglePerSegment / 2);

  const spins = 3 * 360;

  animationRotation = animationRotation + spins + (angle - currentRotation);

  currentRotation = angle;

  currentIndex = index;

  wheelGroup.style.transition =
    "transform 2.2s cubic-bezier(0.15, 0.9, 0.2, 1)";

  wheelGroup.style.transform = `rotate(${animationRotation}deg)`;

  setTimeout(() => {
    updateActiveSegment(index);
    updateInfoCard(zodiacs[index], element);
    showRevealState();
  }, 2200);
};

// Wheel spinning from drag using mouse or finger

const spinFromDrag = (index) => {};

// Wheel to snap to the nearest segment after drag interaction

// Adding info and animal icon to the results section underneath wheel

const updateInfoCard = (zodiac, element) => {
  revealIcon.innerHTML = `
    <img src="${zodiac.icon}" alt="${zodiac.name}">
  `;

  const description = element
    ? zodiac.elementDescriptions[element]
    : zodiac.defaultDescription;

  const elementLabel = element ? `${element} element` : "Traditional Zodiac";

  info.innerHTML = `

    <div class="zodiac-card-header">

      <span class="zodiac-element">${elementLabel}</span>

      <h2>${zodiac.symbol} ${zodiac.name}</h2>

    </div>

    <p class="zodiac-traits">
      ${zodiac.traits}
    </p>

    <p class="zodiac-description">
      ${description}
    </p>

    <div class="zodiac-meta">

    <span>Lucky Numbers: 
      ${zodiac.luckyNumbers.join(" • ")}
    </span>

    </div>
  `;

  compatibility.innerHTML = `

    <h2>Compatibility</h2>

    <p class="compatibility-intro">
      Certain signs naturally complement one another, forming strong relationships and lifelong friendships, while others may require greater patience and understanding to truly connect.
    </p>

    <div class="compatibility-grid">

      <div class="compatibility-column">
        <h4>Romantic Matches</h4>
        <p>${zodiac.compatibility.romance.join("<br>")}</p>
      </div>

      <div class="compatibility-column">
        <h4>Friendship Matches</h4>
        <p>${zodiac.compatibility.friendship.join("<br>")}</p>
      </div>

      <div class="compatibility-column">
        <h4>Challenging Matches</h4>
        <p>${zodiac.compatibility.challenging.join("<br>")}</p>
      </div>
    </div>
  `;
};

// EVENT LISTENERS

// event listener for clicking each segment

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    const index = Number(segment.dataset.index);

    spinFromSegmentClick(index);
  });
});

// event listener for rotating wheel on reveal button click

button.addEventListener("click", () => {
  button.classList.add("zodiac-pulse");

  setTimeout(() => {
    button.classList.remove("zodiac-pulse");
  }, 350);

  if (!input.value) return;

  const year = new Date(input.value).getFullYear();

  const result = getZodiac(year);

  const zodiac = result.zodiac;

  const element = result.element;

  const index = zodiacs.indexOf(zodiac);

  setTimeout(() => {
    wheelSection.scrollIntoView({
      behavior: "smooth",
    });
  }, 700);

  setTimeout(() => {
    spinFromBirthday(index, element);
  }, 1500);
});
