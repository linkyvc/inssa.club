import { isBrowser } from '../browser';
import { AnalyticsEvent } from './events';

const AMPLITUDE_API_KEY = '51c303b8d2b9818ff183aa831672ce93';

export async function getAmplitude() {
  if (isBrowser) {
    const amplitude = await import('amplitude-js');
    return amplitude.getInstance();
  }
  return undefined;
}

export async function initialize() {
  const amplitude = await getAmplitude();
  amplitude?.init(AMPLITUDE_API_KEY);
  amplitude?.setUserProperties({
    is_debug: process.env.NODE_ENV !== 'production',
  });
}

export async function logEvent<TName extends keyof AnalyticsEvent>(
  name: TName,
  properties: AnalyticsEvent[TName] = undefined,
) {
  const eventProperties = {
    referrer: document.referrer || undefined,
    ...properties,
  };
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Analytics]', name, eventProperties);
  }
  const amplitude = await getAmplitude();
  amplitude?.logEvent(name, eventProperties);
}
