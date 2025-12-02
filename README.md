# Azary'el Flame — Package (Expo-managed)

Contents:
- Expo project (React Native) with web/PWA support
- `codex.md` (the Codex)
- `codex.pdf` (attempted PDF version; if absent see notes)
- `README.md` (this file)

## Quick start (recommended)
1. Install Node.js (≥16) and npm.
2. Install Expo CLI:
   ```
   npm install -g expo-cli
   ```
3. From project root:
   ```
   npm install
   expo start
   ```
4. For Android APK:
   - Option A (EAS / Expo Application Services): follow Expo docs to build a signed APK/AAB.
   - Option B (build locally): `expo prebuild` then open the generated android project in Android Studio and build.

## If you want a quick APK from the web build
1. Run `expo build:web` to produce a web build.
2. Upload the `/web-build` folder to an APK wrapper service (or use an automated builder) to generate a web-wrapped APK.

## Notes about Codex PDF
A `codex.md` is included. A PDF was attempted; if `codex.pdf` is not present, convert the markdown to PDF locally:
```
npm install -g markdown-pdf
markdown-pdf codex.md -o codex.pdf
```

## Developer notes
- This is an initial skeleton tailored for your "Azary'el Flame: Light of the Chosen" project.
- Replace placeholder assets in `/assets`.
- Expand screens in `App.js` into separate components and navigation (React Navigation recommended).
