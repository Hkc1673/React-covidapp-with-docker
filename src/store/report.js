import Request from "./request";

export const covidFetch = async (country, from, to) => {
  return Request(
    `https://api.covid19api.com/country/${country}/status/confirmed/live?from=${from}&to=${to}`
  ).then((result) => {
    return result;
  });
};

export const countryNames = async () => {
  return Request("https://api.covid19api.com/summary").then((result) => {
    return result;
  });
};
