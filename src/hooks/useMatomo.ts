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

const registerEvent = (
  type: MatomoTracker = "trackEvent",
  eventName: string,
  ...args: any[]
) => {
  push([type, eventName, ...args]);
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
  eventName: string,
  handler: (event: SyntheticEvent, ...args: any[]) => void,
  options?: TrackerFunctionOptions
) => typeof handler;

export const track: TrackerFunction =
  (eventName, handler, options) =>
  (event, ...args: any[]) => {
    registerEvent(options?.tracker, eventName, ...args);
    handler(event, ...args);
  };
