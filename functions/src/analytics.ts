import { google } from "googleapis";
import { SLACK_WEB_HOOK, GA_VIEW_ID } from "../config/env-config";
import { IncomingWebhook } from "@slack/webhook";
import * as functions from "firebase-functions";

const getAnalyticsData = async (request: any) => {
  const client = await google.auth.getClient({
    keyFile: "../ga-key.json",
    scopes: "https://www.googleapis.com/auth/analytics.readonly",
  });

  const analyticsreporting = await google.analyticsreporting({
    version: "v4",
    auth: client,
  });

  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [request],
    },
  });
  return res.data;
};

const extractFeaturesFromJson = (targetJson: any) => {
  if (!targetJson) return;
  const targetReports = targetJson.reports;
  if (targetReports?.length === 0 || !targetReports) return;
  const targetRows = targetReports[0].data?.rows;

  return targetRows;
};

const sendDataToSlack = async (text: any) => {
  const slackWebHook = functions.config().gcp?.slack_web_hook || SLACK_WEB_HOOK;
  const webhook = new IncomingWebhook(slackWebHook);

  try {
    await webhook.send({ text: text });
  } catch (e) {
    console.log(e);
  }
};

const AnalyticsScript = async () => {
  const gaViewId = functions.config().gcp?.ga_view_id || GA_VIEW_ID;

  //PV Daily
  const pageViewReq = {
    viewId: gaViewId,
    dateRanges: [
      {
        startDate: "yesterday",
        endDate: "today",
      },
    ],
    metrics: [{ expression: "ga:pageviews" }],
  };
  const pageViewRes = await getAnalyticsData(pageViewReq);
  const pageViewRows = extractFeaturesFromJson(pageViewRes);

  if (!pageViewRows || pageViewRows.length === 0) return;
  const pageViewValue = pageViewRows[0].metrics[0].values[0];

  //DAU
  const userNumReq = {
    viewId: gaViewId,
    dateRanges: [
      {
        startDate: "yesterday",
        endDate: "today",
      },
    ],
    metrics: [{ expression: "ga:users" }],
    dimensions: [{ name: "ga:userType" }],
  };
  const userNumRes = await getAnalyticsData(userNumReq);
  const userNumRows = extractFeaturesFromJson(userNumRes);
  if (!pageViewRows || pageViewRows.length === 0) return;
  const newUserNumValue = userNumRows[0].metrics[0].values[0];
  const returnUserNumValue = userNumRows[1].metrics[0].values[0];

  const slackText =
    "PV yesterday:  " +
    pageViewValue +
    "\n" +
    "New User yesterday: " +
    newUserNumValue +
    "\n" +
    "Return User yesterday: " +
    returnUserNumValue;

  await sendDataToSlack(slackText);
};
AnalyticsScript();

export default AnalyticsScript;
