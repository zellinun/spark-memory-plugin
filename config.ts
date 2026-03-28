export interface SparkMemoryConfig {
  apiKey: string;
  orgId: string;
  apiUrl: string;
  autoCapture: boolean;
  autoRecall: boolean;
}

export const DEFAULT_API_URL = 'https://zellin.ai/api';

export function parseConfig(raw: Record<string, unknown>): SparkMemoryConfig {
  return {
    apiKey: raw.apiKey as string,
    orgId: raw.orgId as string,
    apiUrl: (raw.apiUrl as string) || DEFAULT_API_URL,
    autoCapture: raw.autoCapture !== false, // default true
    autoRecall: raw.autoRecall !== false,   // default true
  };
}
