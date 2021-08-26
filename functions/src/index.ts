import * as functions from "firebase-functions";
import AnalyticsScript from "./analytics";

export const dailyAnalytics = functions
  .region("asia-northeast1")
  .pubsub.schedule("59 23 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(AnalyticsScript);
