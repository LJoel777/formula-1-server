# This is a Demo React App called Formula 1

It is a simple server that serves the list of Formula 1 drivers and implements a simple API to represent the overtake of the driver.

## Scripts

1. **Build:**

   - Command: `npx tsc`
   - Description: Transpiles TypeScript code into JavaScript and generates output in the `dist` directory.

2. **Start:**

   - Command: `node dist/server.js`
   - Description: Starts the Node.js application in production mode.

3. **Dev:**
   - Command: `concurrently "npx tsc --watch" "nodemon -q dist/server.js"`
   - Description: For development, watches TypeScript files for changes, recompiles, and restarts the server.

## Usage

1. Install project dependencies:

- `npm install`

2. Run scripts:

- Build: `npm run build`
- Start (production): `npm start`
- Development: `npm run dev`
