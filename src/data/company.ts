export const company = {
  legalName: 'Thoshini LLC',
  brand: 'Thoshini',
  product: 'Thoshini AI Box',
  email: 'info@thoshini.com',
  domain: 'thoshini.com',
  address: ['1309 Coffeen Avenue, STE 1200', 'Sheridan, WY 82801', 'United States'],
  stateOfIncorporation: 'Wyoming',
};

export const priceNote = 'Setup included. Final price is confirmed in a written quote.';

// The AI Box lineup. Prices, specs and models shown on every page come from here.
export type Tier = {
  id: 'basic' | 'pro' | 'max' | 'ultra';
  name: string;
  tagline: string;
  price: string; // shown as-is; '' means "price on request"
  chip: string;
  ai: string;
  memory: string;
  storage: string;
  power: string;
  users: string;
  largestModel: string;
  models: string[];
  bestFor: string;
  buildToOrder?: boolean;
};

export const tiers: Tier[] = [
  {
    id: 'basic',
    name: 'AI Box',
    tagline: 'Private AI for a small office.',
    price: '$1,500',
    chip: 'NVIDIA Jetson Orin Nano 8GB',
    ai: 'Up to 67 TOPS',
    memory: '8 GB',
    storage: '1 TB SSD',
    power: '7–25 W',
    users: '1–3 at a time',
    largestModel: 'Up to ~8B parameters',
    models: ['Llama 3.2 3B', 'Phi-4 mini', 'Qwen 3–4B', 'Llama 3.1 8B', 'Qwen2.5 7B', 'DeepSeek-R1 distill 7B'],
    bestFor: 'Document Q&A, drafting and summaries for a few people.',
  },
  {
    id: 'pro',
    name: 'AI Box Pro',
    tagline: 'Smarter answers for a busy office.',
    price: '$2,499',
    chip: 'NVIDIA Jetson Orin NX 16GB',
    ai: 'Up to 157 TOPS',
    memory: '16 GB',
    storage: '1 TB SSD',
    power: '10–40 W',
    users: '3–5 at a time',
    largestModel: 'Up to ~14B parameters',
    models: ['Everything in AI Box', 'Gemma 2 9B', 'Mistral Nemo 12B', 'Phi-4 14B', 'Qwen2.5 14B', 'DeepSeek-R1 distill 14B'],
    bestFor: 'Better quality answers and more people at once.',
  },
  {
    id: 'max',
    name: 'AI Box Max',
    tagline: 'Near cloud-class models, on site.',
    price: '',
    chip: 'NVIDIA Jetson AGX Orin 64GB',
    ai: 'Up to 275 TOPS',
    memory: '64 GB',
    storage: '1 TB SSD',
    power: '15–60 W',
    users: '5–10 at a time',
    largestModel: 'Up to ~34B parameters',
    models: ['Everything in Pro', 'Gemma 27–31B', 'Qwen 32B', 'DeepSeek-R1 distill 32B'],
    bestFor: 'Clinics and firms that want stronger reasoning offline.',
    buildToOrder: true,
  },
  {
    id: 'ultra',
    name: 'AI Box Ultra',
    tagline: 'The most capable box we build.',
    price: '',
    chip: 'NVIDIA Jetson AGX Thor',
    ai: 'Up to 2,070 FP4 TFLOPS',
    memory: '128 GB',
    storage: '1 TB SSD',
    power: 'Highest',
    users: '10+ at a time',
    largestModel: '70B-class and large mixture-of-experts models',
    models: ['Everything in Max', 'Qwen3 30B-A3B', 'Qwen 3.5 35B-A3B', 'gpt-oss-20B', 'Llama 3.3 70B'],
    bestFor: 'Many users and the highest quality you can run offline.',
    buildToOrder: true,
  },
];

// Which model families run well on which tier (shown as a comparison grid).
export type ModelRow = {family: string; examples: string; fit: Record<Tier['id'], 'yes' | 'slow' | 'no'>};

export const modelMatrix: ModelRow[] = [
  {family: 'Small 1–4B', examples: 'Llama 3.2 3B, Phi-4 mini, Qwen 3–4B', fit: {basic: 'yes', pro: 'yes', max: 'yes', ultra: 'yes'}},
  {family: 'Medium 7–8B', examples: 'Llama 3.1 8B, Qwen2.5 7B, DeepSeek-R1 distill 7B', fit: {basic: 'yes', pro: 'yes', max: 'yes', ultra: 'yes'}},
  {family: 'Large 9–14B', examples: 'Gemma 2 9B, Mistral Nemo 12B, Phi-4 14B, Qwen2.5 14B', fit: {basic: 'no', pro: 'yes', max: 'yes', ultra: 'yes'}},
  {family: 'Extra large 27–35B', examples: 'Gemma 27–31B, Qwen 32B, Qwen 3.5 35B-A3B', fit: {basic: 'no', pro: 'no', max: 'yes', ultra: 'yes'}},
  {family: '70B class', examples: 'Llama 3.3 70B', fit: {basic: 'no', pro: 'no', max: 'slow', ultra: 'slow'}},
  {family: 'Vision', examples: 'SmolVLM, Qwen-VL', fit: {basic: 'yes', pro: 'yes', max: 'yes', ultra: 'yes'}},
  {family: 'Speech', examples: 'Whisper (speech-to-text), Piper (text-to-speech)', fit: {basic: 'yes', pro: 'yes', max: 'yes', ultra: 'yes'}},
];

export const fitLabel = {yes: 'Runs well', slow: 'Runs, slowly', no: 'Not supported'} as const;
