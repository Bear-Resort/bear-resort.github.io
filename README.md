# Opportunities Branch README

This branch (`codex/hackathon`) adds a redesigned Opportunities page for Bear Resort.

## What was added

- Flip-card hackathon section (hover to flip, click to visit)
- Minimal calendar under hackathons
- Data-driven important dates (including `Resort Gathering`)
- Updated hackathon opportunities (Deloitte challenge, MorganHacks, and Devpost picks)

## Main files

- `opportunities/index.md` - page layout, styling, flip cards, and calendar script
- `_data/opportunities.yml` - hackathons, tools, and `calendar_events` data

## Run locally

This repository uses **Jekyll** with Bundler for local development.

From the repository root:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

- `http://localhost:4000`

If Bundler is not installed:

```bash
gem install bundler
```

Useful options:

- Live reload: `bundle exec jekyll serve --livereload`
- Different port: `bundle exec jekyll serve --port 4001`

Notes:

- `package.json` is only used for formatting (Prettier), not for serving the site.
- Optional formatting commands:
  - `npm install`
  - `npm run format:check`

## How to update content

Edit `_data/opportunities.yml`:

- Add or edit a hackathon under `hackathons`
- Add important dates under `calendar_events`
- Add tool recommendations under `tools`

The page reads from this file automatically.

## Branch preview

If GitHub Pages is set to `codex/hackathon`, open:

- `https://bear-resort.github.io/opportunities/`

## Notes

- No changes were made to `main`.
- This README is branch-specific for the hackathon/opportunities work.
