# ASC International Website

Global supplier of quality inspection and measurement systems for electronics manufacturing.

## About ASC International

ASC International has been providing cutting-edge inspection and measurement solutions since 1992. With over 32 years of experience and more than 1,000 satisfied customers worldwide, we are a trusted partner for quality and yield improvement in electronics manufacturing.

### Products & Services

- **3D Solder Paste Inspection (SPI)** - Inline and offline systems
- **2D-3D Automated Optical Inspection (AOI)** - Advanced inspection systems
- **Conformal Coating Inspection** - Measurement and verification systems
- **Digital Video Inspection** - High-resolution inspection solutions
- **3D Industrial Metrology** - Laser scanning systems
- **Integrated Jetting Valves** - Solder paste and adhesive dispensing

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/asc-international.git
   cd asc-international
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.local.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
asc-international/
├── public/              # Static assets
│   ├── images/         # Image files
│   └── fonts/          # Font files
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   ├── lib/            # Utility functions and helpers
│   ├── styles/         # Global styles
│   └── types/          # TypeScript type definitions
├── .env.local.example  # Environment variables template
└── README.md           # This file
```

## Development Workflow

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

Proprietary - ASC International. All rights reserved.
