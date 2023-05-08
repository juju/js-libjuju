import {
  cachedAPIResponse,
  jujuUpdateAvailable,
  dashboardUpdateAvailable,
} from "../versions";

describe("versions", () => {
  let fetchSpy: jest.SpyInstance;

  beforeAll(() => {
    fetchSpy = jest.spyOn(global, "fetch");
  });

  beforeEach(() => {
    // invalidate the cache
    cachedAPIResponse?.fetchedAt.setTime(0);
    // mock fetch: https://juju.is/latest.json
    fetchSpy.mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({
            dashboard: "2.8.1",
            juju: ["2.8.1", "2.8.0", "2.7.9"],
          }),
        })
      ) as jest.Mock
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should return true if the Juju controller version is old", async () => {
    expect(await jujuUpdateAvailable("2.7.8")).toBe(true);
  });

  it("should return false if the Juju controller version is new", async () => {
    expect(await jujuUpdateAvailable("2.8.1")).toBe(false);
  });

  it("should return true if the Juju dashboard version is old", async () => {
    expect(await dashboardUpdateAvailable("2.2.0")).toBe(true);
  });

  it("should return false if the Juju dashboard version is new", async () => {
    expect(await dashboardUpdateAvailable("2.8.1")).toBe(false);
  });

  it("handles no juju version response", async () => {
    fetchSpy.mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({}),
        })
      ) as jest.Mock
    );
    expect(await jujuUpdateAvailable("2.8.1")).toBeNull();
  });

  it("handles no dashboard version response", async () => {
    fetchSpy.mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => ({}),
        })
      ) as jest.Mock
    );
    expect(await dashboardUpdateAvailable("2.2.0")).toBeNull();
  });

  it("should use TTL to cache the response", async () => {
    await jujuUpdateAvailable("2.7.8");
    await jujuUpdateAvailable("2.7.8");
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    // invalidate the cache
    cachedAPIResponse?.fetchedAt.setTime(0);
    await jujuUpdateAvailable("2.7.8");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });
});
