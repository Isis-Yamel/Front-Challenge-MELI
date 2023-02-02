module.exports = {
  "transform": {},
  "preset": "ts-jest",
  "testEnvironment": "node",
  "coverageDirectory": "coverage",
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "modulePathIgnorePatterns": [
    "dist",
    "node_modules",
    "coverage"
  ],
  "testMatch": [
    "**/?(*.)+(spec).(js|ts|tsx)"
  ],
  "bail": 1,
  "clearMocks": true,
  "coverageReporters": [
    "lcov",
    "html",
    "text"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
}
  