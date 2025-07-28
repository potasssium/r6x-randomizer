# R6 Siege Randomizer

A React application that randomly selects Rainbow Six Siege operators, loadouts, and challenges for an enhanced gaming experience.

## Features

- **Random Operator Selection**: Get random attackers and defenders
- **Loadout Randomization**: Random weapons, sights, grips, barrels, and gadgets
- **Challenge Mode**: Additional restrictions and challenges for extra difficulty
- **Custom Playstyles**: Operator-specific playstyle overrides
- **Role-Specific Challenges**: Separate challenge pools for attackers and defenders

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment to GitHub Pages

### Prerequisites
- A GitHub account
- Your project pushed to a GitHub repository

### Steps

1. **Update the homepage URL** in `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

2. **Install gh-pages** (already done):
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click "Save"

5. **Wait for deployment** (usually takes a few minutes)

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 19.1.0
- CSS3 with Flexbox
- JavaScript ES6+
- GitHub Pages for hosting
