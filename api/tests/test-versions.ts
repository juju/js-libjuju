import { cachedAPIResponse, jujuUpdateAvailable } from "../versions";

describe("versions", () => {
  // mock fetch: https://juju.is/latest.json
  const mockFetch = jest.fn();
  mockFetch.mockReturnValue({
    json: () => ({
      dashboard: "2.8.1",
      juju: ["2.8.1", "2.8.0", "2.7.9"],
    }),
  });
  global.fetch = mockFetch;
  it("should return true if the Juju controller version is old", async () => {
    expect(await jujuUpdateAvailable("2.7.8")).toBe(true);
  });
  it("should return false if the Juju controller version is new", async () => {
    expect(await jujuUpdateAvailable("2.8.1")).toBe(false);
  });
  it("should return true if the Juju dashboard version is old", async () => {
    expect(await jujuUpdateAvailable("2.2.0")).toBe(true);
  });
  it("should return false if the Juju dashboard version is new", async () => {
    expect(await jujuUpdateAvailable("2.8.1")).toBe(false);
  });
  it("should use TTL to cache the response", async () => {
    await jujuUpdateAvailable("2.7.8");
    await jujuUpdateAvailable("2.7.8");
    expect(mockFetch).toHaveBeenCalledTimes(1);
    // invalidate the cache
    cachedAPIResponse?.fetchedAt.setTime(0);
    await jujuUpdateAvailable("2.7.8");
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});
