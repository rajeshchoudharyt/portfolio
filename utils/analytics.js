/*

import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
        private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY?.replace(
            /\\n/gm,
            "\n"
        ),
        client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    },
});

async function runReport() {
    const [response] = await analyticsDataClient.runRealtimeReport({
        property: `properties/${process.env.NEXT_PUBLIC_PROPERTY_ID}`,
        dateRanges: [
            {
                startDate: "2024-07-26",
                endDate: "today",
            },
        ],
        dimensions: [
            {
                name: "city",
            },
        ],
        metrics: [
            {
                name: "activeUsers",
            },
        ],
    });

    console.log(response);
}

runReport();

*/
