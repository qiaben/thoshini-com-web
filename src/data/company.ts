export const company = {
  legalName: 'Thoshini LLC',
  brand: 'Thoshini',
  product: 'Thoshini AI Box',
  email: 'info@thoshini.com',
  domain: 'thoshini.com',
  address: ['1309 Coffeen Avenue, STE 1200', 'Sheridan, WY 82801', 'United States'],
  stateOfIncorporation: 'Wyoming',
};

// Pricing and specs shown on the site. Change them here; every page reads from this file.
export const box = {
  price: '$1,500',
  priceNote: 'Introductory price per box, setup included. Final price is confirmed in a written quote.',
  module: 'NVIDIA Jetson Orin Nano 8GB (Super mode)',
  aiPerformance: 'Up to 67 TOPS',
  memory: '8 GB LPDDR5, shared by CPU and GPU',
  storage: '1 TB NVMe SSD',
  power: 'About 7–25 W, external power adapter',
  network: 'Gigabit Ethernet, Wi-Fi',
  enclosure: 'Aluminum case, fan cooled',
  users: 'Best for 1–3 people using it at the same time',
};

export type Model = {size: string; examples: string; speed: string; bestFor: string};

export const models: Model[] = [
  {size: 'Small (3–4B)', examples: 'Phi-4 mini, Llama 3.2 3B, Qwen 3–4B', speed: 'Fast', bestFor: 'Everyday default: drafting, summaries, document Q&A'},
  {size: 'Medium (7–8B)', examples: 'Llama 3.1 8B, Qwen2.5 7B, DeepSeek-R1 distill 7B', speed: 'About 12–21 tokens (word pieces) per second', bestFor: 'Higher-quality answers when speed matters less'},
  {size: 'Vision', examples: 'SmolVLM 2B and similar', speed: 'Moderate', bestFor: 'Questions about photos, scans and forms'},
  {size: 'Speech', examples: 'Whisper (speech-to-text), Piper (text-to-speech)', speed: 'Real time', bestFor: 'Dictation and voice assistant'},
];
