export default {
  coverageProvider: "v8",
  extensionsToTreatAsEsm: [".ts"],
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/api/tests/**/test-*.[jt]s"],
  transform: {
    "^.+\\.[jt]s$": ["ts-jest", { useESM: true }],
  },
};
