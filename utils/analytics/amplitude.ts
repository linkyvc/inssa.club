import { AnalyticsEvent } from './events';

const AMPLITUDE_API_KEY = '51c303b8d2b9818ff183aa831672ce93';

export async function getAmplitude() {
  if (window !== undefined) {
    const amplitude = await import('amplitude-js');
    return amplitude.getInstance();
  }
  return undefined;
}

export async function initialize() {
  const amplitude = await getAmplitude();
  amplitude?.init(AMPLITUDE_API_KEY);
}

export async function logEvent<TName extends keyof AnalyticsEvent>(
  name: TName,
  ...[propertiesWithoutReferrer]: undefined extends AnalyticsEvent[TName]
    ? []
    : [AnalyticsEvent[TName]]
) {
  const properties = {
    referrer: document.referrer || undefined,
    ...propertiesWithoutReferrer,
  };
  if (properties !== undefined) {
    console.log('[Analytics]', name, properties);
  } else {
    console.log('[Analytics]', name);
  }
  const amplitude = await getAmplitude();
  amplitude?.logEvent(name, properties);
}
