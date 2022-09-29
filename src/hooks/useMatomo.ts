import { init, push } from "@socialgouv/matomo-next";
import { SyntheticEvent, useEffect } from "react";

const url = process.env.MATOMO_URL;
const siteId = process.env.MATOMO_SITE_ID;

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

type TrackerFunction = (
  id: string,
  handler: (event: SyntheticEvent, ...args: any[]) => void,
  options?: TrackerFunctionOptions
) => typeof handler;

export const track: TrackerFunction =
  (id, handler, options) =>
  (event, ...args: any[]) => {
    register(options?.tracker, id, ...args);
    handler(event, ...args);
  };
