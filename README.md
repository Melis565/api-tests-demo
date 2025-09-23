# API Testing Demo with JSONPlaceholder

This project demonstrates API testing using TypeScript, Jest, and Supertest with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API. It provides examples of how to write and run API tests against a public REST API.

## Technologies Used

- TypeScript
- Jest (Testing Framework)
- Supertest (HTTP assertions)
- JSONPlaceholder (Free fake REST API for testing)

## Project Structure

```
api-tests-demo/
├── tests/
│   └── health.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── .gitignore
```

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Melis565/api-tests-demo.git
   cd api-tests-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

## Test Examples

The project includes example tests that demonstrate:

- Making HTTP requests to JSONPlaceholder API
- Verifying response status codes
- Checking the existence of required properties in responses
- Using Jest assertions with Supertest

### Current Test Coverage

- `tests/posts.test.ts`: Tests the `/posts/1` endpoint from JSONPlaceholder
  - Verifies successful response (200 status code)
  - Checks for the existence of required properties (title, body)

## Running Tests in Watch Mode

To run tests in watch mode (tests will re-run when files change):

```bash
npm run test:watch
```

## Available Scripts

- `npm test`: Run all tests
- `npm run test:watch`: Run tests in watch mode
- `npm run build`: Build TypeScript files
- `npm run build:watch`: Build TypeScript files in watch mode

## API Documentation

This project tests against the JSONPlaceholder API. For more information about the available endpoints and their responses, visit:
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request