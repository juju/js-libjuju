export const parseVersion = (version: string): number[] =>
  version.split(".").map((v) => parseInt(v));

const versionGreaterThan = (v1: string, v2: string): boolean => {
  const v1Parts = parseVersion(v1);
  const v2Parts = parseVersion(v2);
  for (let i = 0; i < v1Parts.length; i++) {
    const v1Part = v1Parts[i];
    const v2Part = v2Parts[i];
    if (v1Part > v2Part) {
      return true;
    } else if (v1Part < v2Part) {
      return false;
    }
  }
  return false;
};

const sortVersions = (versions: string[]): string[] =>
  versions.sort((v1, v2) => {
    if (versionGreaterThan(v1, v2)) {
      return -1;
    } else if (versionGreaterThan(v2, v1)) {
      return 1;
    }
    return 0;
  });

type APIPayload = {
  dashboard: string;
  juju: string[];
};
/**
 * Avoid making multiple requests to the API by caching the response.
 */
let cachedAPIResponse: APIPayload | null = null;

/**
 * Fetch the latest Juju versions from the API.
 */
const fetchVersions = async () => {
  if (cachedAPIResponse) return cachedAPIResponse;
  const response = await fetch("https://juju.is/latest.json");
  const data = await response.json();
  cachedAPIResponse = { ...data, juju: sortVersions(data.juju) };
  return data;
};

/**
 * Check the Juju controller version against the latest available
 * version (ignores the patch version).
 * @param jujuVersion The version of the Juju controller to check
 * @returns
 */
export const jujuUpdateAvailable = async (jujuVersion: string) => {
  const jujuVersions = (cachedAPIResponse || (await fetchVersions())).juju;
  const latestAvailableVersion = jujuVersions.slice(-1)[0];
  return versionGreaterThan(latestAvailableVersion, jujuVersion);
};

/**
 * Check the Juju dashboard version against the latest available
 * version (ignore the patch version).
 * @param dashboardVersion The version of the Juju dashboard to check
 * @returns
 */
export const dashboardUpdateAvailable = async (dashboardVersion: string) => {
  const latestDashboardVersion = (cachedAPIResponse || (await fetchVersions()))
    .dashboard;
  return versionGreaterThan(latestDashboardVersion, dashboardVersion);
};
