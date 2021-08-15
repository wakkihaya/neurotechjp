import { google } from "googleapis";
import { GA_VIEW_ID } from "../config/env-config";

//TODO: ENVをCloud function configに設定

const getAnalyticsData = async (request: any) => {
  const client = await google.auth.getClient({
    keyFile: "./ga-key.json",
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

const AnalyticsScript = async () => {
  //PV Daily
  const pageViewReq = {
    viewId: GA_VIEW_ID,
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
    viewId: GA_VIEW_ID,
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
};

AnalyticsScript();

export default AnalyticsScript;
