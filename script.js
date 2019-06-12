const adjectives = [
  'Interactive',
  'AR',
  'VR',
  'multi-disciplinary',
  'creative',
  'historical',
  'flexible',
  'artistic',
  'sustainable',
  'collaborative',
  'unorthodox',
  'natural',
  'haptic',
  'epic',
  'playful',
  'unstable',
  'living',
  'radical',
  'typographic',
  'nostalgic',
  'synthetic',
  'emotional',
  'visual',
  'poetic',
  'animated',
  'mixed'
];

const categories = [
  'big data',
  'audio',
  'paper',
  'video',
  'distance',
  'tech',
  'smart',
  'water',
  'light',
  'art',
  'physical',
  'digital',
]

const nouns = [
  'machine',
  'exhibit',
  'website',
  'game',
  'music',
  'controller',
  'poster',
  'clock',
  'furniture',
  'app',
  'community',
  'vehicle',
  'narrative',
  'animation',
  'visualization',
  '3D model',
  'video',
  'environment',
  'playground',
  'robot',
  'interface',
  'fabric',
  'magnet',
  'textile',
  'tattoo',
  'installation',
];

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const firstNameSelect = document.querySelector('#first-name-select');
const lastNameSelect = document.querySelector('#last-name-select');
const monthSelect = document.querySelector('#month-select');
const form = document.querySelector('#form');
const resultNode = document.querySelector('#result');

alphabet.forEach((letter, i) => {
  const option = document.createElement('option');
  option.value = i;
  option.text = letter;
  firstNameSelect.appendChild(option);
  lastNameSelect.appendChild(option.cloneNode(true));
});

months.forEach((month, i) => {
  const option = document.createElement('option');
  option.value = i;
  option.text = month;
  monthSelect.appendChild(option);
});

form.onsubmit = event => {
  event.preventDefault();
  const adjective = adjectives[firstNameSelect.value];
  const category = categories[monthSelect.value];
  const noun = nouns[lastNameSelect.value];
  console.log({adjective, category, noun});
  resultNode.innerHTML = [adjective, category, noun].join('<br>');
  resultNode.scrollIntoView({behavior: 'smooth'});
}