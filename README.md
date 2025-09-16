# Vibe Solar Company Website

A production-ready, accessible Next.js 14 website for a commercial solar company showcasing "vibe coding" principles.

## 🚀 Features

- **Next.js 14** with App Router and React 18
- **TypeScript** for type safety
- **Tailwind CSS** with custom solar theme
- **shadcn/ui** components with Radix primitives
- **Accessibility** (WCAG 2.2 AA compliant)
- **Dark/Light theme** support
- **Interactive Savings Calculator** with pure functions and tests
- **Contact form** with server actions and database integration
- **Prisma** with SQLite (easily switchable to PostgreSQL)
- **Comprehensive testing** with Vitest, RTL, and accessibility tests
- **CI/CD** with GitHub Actions

## 🛠️ Tech Stack

### Core
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

### UI & Accessibility
- shadcn/ui (Radix primitives)
- Lucide React icons
- next-themes for theme management
- Custom accessible components

### Database & Data
- Prisma ORM
- SQLite (development) / PostgreSQL (production)
- Repository pattern for data access

### Testing
- Vitest for unit tests
- React Testing Library
- @axe-core/react for accessibility testing
- Jest DOM matchers

### Development
- ESLint with jsx-a11y rules
- Prettier for code formatting
- Husky for git hooks
- lint-staged for pre-commit checks

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── contact/                 # Contact form page
│   ├── savings-calculator/      # Interactive calculator
│   ├── landmark/                # Why Solar Now page
│   ├── industries/              # Industries served
│   ├── products-and-services/   # Products & services
│   ├── project-portfolio/       # Project showcase
│   └── incentives-and-financing/ # Incentives & financing
├── components/
│   ├── design-system/           # Reusable UI components
│   ├── navigation/              # Header, footer, breadcrumbs
│   ├── theme-provider.tsx       # Theme context
│   └── skip-link.tsx           # Accessibility skip link
├── lib/
│   ├── calculator/              # Solar calculator logic
│   │   ├── config.ts           # Calculator configuration
│   │   ├── types.ts            # TypeScript types
│   │   ├── solar.ts            # Pure calculation functions
│   │   └── __tests__/          # Calculator unit tests
│   ├── data/contacts/           # Contact form data layer
│   │   ├── types.ts            # Contact types
│   │   ├── ContactRepository.ts # Repository interface
│   │   ├── PrismaContactRepository.ts # Prisma implementation
│   │   ├── MemoryContactRepository.ts # In-memory implementation
│   │   └── index.ts            # Repository factory
│   ├── actions/                 # Server actions
│   │   └── contact.ts          # Contact form submission
│   └── utils.ts                # Utility functions
└── test/                        # Test setup and utilities
    └── setup.ts                # Test configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe-coding-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧮 Savings Calculator

The interactive savings calculator is a core feature that allows users to estimate their solar savings potential.

### Features
- **Input validation** with real-time feedback
- **Multiple financing options** (Cash, Loan, PPA)
- **Battery storage** integration
- **Environmental impact** calculations
- **Accessible UI** with proper ARIA labels
- **Pure functions** with comprehensive unit tests

### Calculator Functions
Located in `src/lib/calculator/solar.ts`:
- `calculateSystemSize()` - Calculate system size based on usage
- `calculateSolarSavings()` - Main calculation function
- `calculateCO2Offset()` - Environmental impact
- `validateCalculatorInputs()` - Input validation

### Testing
```bash
# Run calculator tests
npm run test src/lib/calculator

# Run with coverage
npm run test:coverage
```

## 🗄️ Database Setup

### SQLite (Default)
The project uses SQLite by default for development:

```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma studio  # Optional: Open database GUI
```

### Switching to PostgreSQL

1. **Update environment variables**
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/solar_company"
   ```

2. **Update Prisma schema**
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. **Run migrations**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

### Repository Pattern

The project uses a repository pattern for data access:

```typescript
// Get repository (automatically chooses Prisma or Memory)
const repository = getContactRepository()

// Create contact submission
await repository.create({
  fullName: "John Doe",
  email: "john@example.com",
  topic: "PROPOSAL",
  message: "Interested in solar",
  consent: true
})
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run accessibility tests
npm run test -- --run src/test/accessibility.test.tsx
```

### Test Structure
- **Unit tests** for calculator functions
- **Integration tests** for contact form
- **Accessibility tests** using axe-core
- **Component tests** with React Testing Library

## ♿ Accessibility

This website is built with accessibility as a core principle, following WCAG 2.2 AA guidelines.

### Key Features
- **Skip links** for keyboard navigation
- **Semantic HTML** with proper landmarks
- **ARIA labels** and descriptions
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** AA compliance
- **Focus management** and visible focus indicators

### Accessibility Testing
```bash
# Run accessibility tests
npm run test -- --run src/test/accessibility.test.tsx
```

### Manual Testing Checklist
- [ ] Skip link works and is visible on focus
- [ ] All interactive elements are keyboard accessible
- [ ] Form labels are properly associated
- [ ] Color contrast meets AA standards
- [ ] Screen reader announces content correctly
- [ ] Focus indicators are visible
- [ ] No critical axe violations

## 🎨 Design System

### Components
All components are built with accessibility in mind:

- **Button** - Multiple variants with proper focus states
- **Input** - Error states and helper text
- **Card** - Semantic structure
- **Dialog** - Modal with proper focus management
- **Tabs** - Keyboard navigation
- **Accordion** - Expandable content
- **Breadcrumbs** - Navigation context

### Theme
- **Solar theme** with green energy colors
- **Dark/light mode** support
- **Consistent spacing** and typography
- **Responsive design** for all screen sizes

## 🚀 Deployment

### Build for Production

```bash
# Type check
npm run typecheck

# Lint code
npm run lint

# Run tests
npm run test

# Build application
npm run build

# Start production server
npm run start
```

### Environment Variables

Production environment variables:
```env
DATABASE_URL="postgresql://username:password@host:port/database"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://yourdomain.com"
```

### CI/CD

The project includes GitHub Actions workflow for:
- Type checking
- Linting
- Testing
- Building
- Accessibility audits
- Security audits

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `start` | Start production server |
| `typecheck` | Run TypeScript type checking |
| `lint` | Run ESLint |
| `format` | Format code with Prettier |
| `test` | Run tests with Vitest |
| `test:ui` | Run tests with UI |
| `test:coverage` | Run tests with coverage |
| `prepare` | Install Husky git hooks |
| `prisma:generate` | Generate Prisma client |
| `prisma:migrate` | Run database migrations |
| `prisma:studio` | Open Prisma Studio |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Ensure accessibility compliance
- Use conventional commit messages
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact: info@vibesolar.com
- Documentation: [Project Wiki](link-to-wiki)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Prisma](https://www.prisma.io/) for database management
- [Vitest](https://vitest.dev/) for fast testing

---

Built with ❤️ and ☀️ by the Vibe Solar team