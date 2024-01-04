import { init, push } from '@socialgouv/matomo-next'
import { SyntheticEvent, useEffect, useRef } from 'react'

const url = process.env.NEXT_PUBLIC_MATOMO_URL
const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

type MatomoTracker =
  | 'trackEvent'
  | 'trackPageView'
  | 'trackSiteSearch'
  | 'trackLink'
  | 'trackAllContentImpressions'
  | 'trackVisibleContentImpressions'
  | 'trackContentImpressionsWithinNode'
  | 'trackContentInteractionNode'
  | 'trackContentImpression'
  | 'trackContentInteraction'
  | 'trackGoal'

export const register = (
  type: MatomoTracker = 'trackEvent',
  id: TrackerId,
  ...args: any[]
) => {
  push([type, id, ...args])
}

export const useMatomo = () => {
  // Keeps Matomo from initializing multiple times in devMode.
  const initialized = useRef(false)

  useEffect(() => {
    if (url && siteId && !initialized.current) {
      init({ url, siteId })
      initialized.current = true
    }
  }, [])
}

type TrackerFunctionOptions = {
  tracker: MatomoTracker
}

type TrackerId = 'network-tab-change'

type TrackerFunction = (
  id: TrackerId,
  handler: (event: SyntheticEvent, ...args: any[]) => void,
  options?: TrackerFunctionOptions
) => typeof handler

export const track: TrackerFunction =
  (id, handler, options) =>
  (event, ...args: any[]) => {
    register(options?.tracker, id, ...args)
    handler(event, ...args)
  }
