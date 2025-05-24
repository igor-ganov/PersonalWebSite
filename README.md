# PersonalWebSite

## Description

This project is a personal website built using the static site generator [11ty (Eleventy)](https://www.11ty.dev/) with support for React/TSX components. The project leverages modern technologies for styling (SCSS) and building (TypeScript, SASS).

## Tech Stack

- **11ty (Eleventy):** Static site generator, used to build pages from templates and components.
- **React + TypeScript (TSX):** Pages and components are implemented in React with TypeScript for type safety and flexibility.
- **SCSS (SASS):** SCSS preprocessor is used for organizing and authoring styles.
- **Node.js:** Used for running build scripts and the local development server.

## Project Structure

```
PersonalWebSite/
├── dist/                 # Compiled and built files (output directory)
├── src/                  # Source code
│   ├── index.11ty.tsx    # Main page in TSX
│   ├── home/             # Additional pages/sections
│   ├── _includes/        # Templates (Nunjucks, layouts)
│   └── ...
├── eleventy.config.mjs   # 11ty config, React/TSX integration, path settings
├── package.json          # Dependencies and npm scripts
├── tsconfig*.json        # TypeScript configuration
├── README.md             # Project description
```

## Key Files and Directories

- `src/index.11ty.tsx`, `src/home/home.11ty.tsx`: Website pages written in React/TSX.
- `src/_includes/layout/main.njk`: Main layout template for pages.
- `src/*.scss`, `src/home/*.scss`: Styles for pages and components.
- `eleventy.config.mjs`: Eleventy configuration, including TSX support and directory settings.

## Build and Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```
   This will compile TypeScript, SCSS, and build the site with Eleventy.

3. **Start the local server:**
   ```bash
   npm start
   ```
   After starting, the site will be available at `http://localhost:8080` (or another port specified by Eleventy).

## package.json Scripts

- `build:ts` — Compile TypeScript (`tsc -p tsconfig.ts.json`)
- `build:scss` — Compile SCSS (`sass src:dist --no-source-map`)
- `build` — Full build: TypeScript + SCSS + Eleventy
- `start` — Build and start Eleventy local server

## Development

- To add new pages, create files with the `.11ty.tsx` extension in the `src` folder.
- To modify the layout, edit `src/_includes/layout/main.njk`.
- Place styles for pages in the corresponding `.scss` files.

## License

ISC
