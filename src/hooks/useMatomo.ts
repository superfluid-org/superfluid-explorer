import { init, push } from "@socialgouv/matomo-next";
import { SyntheticEvent, useEffect } from "react";

const url = process.env.NEXT_PUBLIC_MATOMO_URL;
const siteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

type MatomoTracker =
  | "trackEvent"
  | "trackPageView"
  | "trackSiteSearch"
  | "trackLink"
  | "trackAllContentImpressions"
  | "trackVisibleContentImpressions"
  | "trackContentImpressionsWithinNode"
  | "trackContentInteractionNode"
  | "trackContentImpression"
  | "trackContentInteraction"
  | "trackGoal";

export const register = (
  type: MatomoTracker = "trackEvent",
  id: string,
  ...args: any[]
) => {
  push([type, id, ...args]);
};

export const useMatomo = () => {
  useEffect(() => {
    if (url && siteId) {
      init({ url, siteId });
    }
  }, []);
};

type TrackerFunctionOptions = {
  tracker: MatomoTracker;
};

type TrackerId = "network-tab-change";

type TrackerFunction = (
  id: TrackerId,
  handler: (event: SyntheticEvent, ...args: any[]) => void,
  options?: TrackerFunctionOptions
) => typeof handler;

export const track: TrackerFunction =
  (id, handler, options) =>
  (event, ...args: any[]) => {
    register(options?.tracker, id, ...args);
    handler(event, ...args);
  };
