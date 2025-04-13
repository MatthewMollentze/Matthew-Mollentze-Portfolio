# Matthew Mollentze - Portfolio

My personal portfolio website built with Next.js, showcasing my professional experience, projects, and skills.

[![Deployment Status](https://github.com/MatthewMollentze/Matthew-Mollentze-Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/MatthewMollentze/Matthew-Mollentze-Portfolio/actions/workflows/deploy.yml)

## Purpose

A comprehensive portfolio to showcase my professional journey with:

- **Experience timeline** - Work history at Betway Africa, GLOVent Solutions, Pattern Matched Technologies, and more
- **Projects showcase** - Featured work including Betway Pay To Card, Obsidian™ User Portal, and various mobile applications
- **Skills overview** - Technical expertise across Vue.js, React, TypeScript, AWS, and more
- **Downloadable Resume** - Professionally formatted PDF resume
- **Contact form** - Built with EmailJS for direct communication

## Tech Stack

- **Framework**: Next.js 13.5.4 with React 18
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: Built-in React hooks
- **PDF Generation**: @react-pdf/renderer
- **Deployment**: Vercel with GitHub Actions CI/CD
- **Package Management**: Yarn 4.9.0 (Berry)
- **Node Version**: Managed with Volta (v22.14.0)

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/MatthewMollentze/Matthew-Mollentze-Portfolio.git
cd Matthew-Mollentze-Portfolio
```

2. Make sure you have Volta installed for Node version management:
```bash
# Install Volta if you don't have it
curl https://get.volta.sh | bash

# Volta will automatically use the correct Node version from package.json
```

3. Install dependencies using Yarn 4:
```bash
yarn install
```

4. Run the development server:
```bash
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## Code Structure

- `/app` - Next.js App Router pages and layout components
- `/components` - Reusable UI components, including shadcn/ui elements
- `/content/sections` - Structured content in markdown and JSON format
- `/lib` - Utility functions, data definitions, and site configuration
- `/public` - Static assets including images, fonts, and videos

## Customization

The portfolio content is stored in:

- `/lib/data.ts` - Experience, education, and certification information
- `/content/sections` - Content for various site sections including About and Hero content

## Deployment

This portfolio is deployed on Vercel with GitHub Actions for CI/CD:

1. Push changes to the `main` branch
2. GitHub Actions automatically runs checks
3. Vercel deploys the updated site

## Development Tools

- Uses ESLint for code quality
- TypeScript for type safety
- Tailwind for responsive design
- Volta for consistent Node.js version management
- Yarn 4 (Berry) for modern package management

## Contact

Feel free to reach out via the contact form on the site or connect with me on [LinkedIn](https://www.linkedin.com/in/matthew-mollentze/).
