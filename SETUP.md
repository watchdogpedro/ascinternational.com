# ASC International Project Setup Complete

This document contains setup information and helpful shortcuts for the ASC International website project.

## Project Information

- **Project Name:** ASC International Website
- **Repository:** https://github.com/watchdogpedro/asc-international
- **Local Path:** `/Users/pauldenman/asc-international`
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Setup Date:** January 26, 2026

## What's Included

### Project Structure
```
asc-international/
├── .vscode/              # VS Code workspace settings
├── public/               # Static assets (images, fonts)
├── src/
│   ├── app/             # Next.js app router (pages, layouts)
│   ├── components/      # Reusable React components
│   ├── lib/             # Utility functions and helpers
│   ├── styles/          # Global styles (globals.css)
│   └── types/           # TypeScript type definitions
├── .env.local.example   # Environment variables template
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier code formatting config
├── CONTRIBUTING.md      # Contribution guidelines
├── README.md            # Project documentation
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

### Development Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Check TypeScript types
npm run type-check

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check
```

## Useful Aliases & Shortcuts

Add these to your shell profile (`~/.zshrc` or `~/.bashrc`):

```bash
# Navigate to ASC project
alias asc='cd /Users/pauldenman/asc-international'

# Quick dev server start
alias asc-dev='cd /Users/pauldenman/asc-international && npm run dev'

# Quick build
alias asc-build='cd /Users/pauldenman/asc-international && npm run build'

# Git shortcuts for ASC
alias asc-status='cd /Users/pauldenman/asc-international && git status'
alias asc-pull='cd /Users/pauldenman/asc-international && git pull'
alias asc-push='cd /Users/pauldenman/asc-international && git push'
```

To add these aliases:
```bash
# Open your shell config
code ~/.zshrc  # or ~/.bashrc

# Add the aliases above, then reload
source ~/.zshrc
```

## Git Workflow

### Branch Strategy
- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes
- `docs/*` - Documentation updates

### Standard Workflow
```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Make changes, then stage and commit
git add .
git commit -m "feat: description of your changes"

# Push to GitHub
git push origin feature/your-feature-name

# Create pull request on GitHub
gh pr create --title "Your Feature Title" --body "Description"
```

### Commit Message Convention
```
type: brief description

Optional longer explanation

Types: feat, fix, docs, style, refactor, test, chore
```

## Environment Setup

1. Copy the environment example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your environment variables to `.env.local`

3. Never commit `.env.local` (it's in .gitignore)

## VS Code Setup

The project includes VS Code workspace settings that:
- Format code on save with Prettier
- Auto-fix ESLint issues on save
- Exclude build folders from search
- Configure TypeScript properly

Recommended extensions (will be suggested when you open the project):
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript

## Next Steps

1. **Review the README.md** for full project documentation
2. **Run `npm run dev`** to start the development server
3. **Open http://localhost:3000** to see the site
4. **Create feature branches** for any new work
5. **Follow the Git workflow** in CONTRIBUTING.md

## Resources

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- TypeScript Documentation: https://www.typescriptlang.org/docs
- GitHub Repository: https://github.com/watchdogpedro/asc-international

## Support

For questions or issues:
1. Check the documentation files (README, CONTRIBUTING)
2. Review Next.js documentation
3. Contact the development team

---

**Project successfully set up and ready for development!**
