export default {
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/api/tests/**/test-*.[jt]s"],
  transform: {
    "^.+\\.[jt]s$": "ts-jest",
  },
};
