# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

No test suite is configured. The app auto-redirects `/` to `/en` on startup.

## Tech Stack

- **Next.js 15+ App Router** with TypeScript
- **Tailwind CSS** with a custom "Tech Teal" color palette (`primary.*` tokens in `tailwind.config.ts`)
- **Vercel AI SDK** + OpenAI (`gpt-3.5-turbo`) for the chatbot widget
- **SendGrid** for contact form email delivery
- **Zod** for form validation

## Architecture

### Routing & Locale

All pages live under `app/[locale]/`. The middleware (`middleware.ts`) intercepts every request and redirects bare paths to `/en` (default). Valid locales are `en` and `tr`, defined in `i18n/config.ts`.

Every page is a Server Component that calls `getDictionary(locale)` from `lib/i18n.ts` to load locale-specific content from `i18n/en.ts` or `i18n/tr.ts`.

### Adding a Page

1. Create `app/[locale]/your-page/page.tsx`
2. Use `getDictionary(locale)` and `isValidLanguage(params.locale)` for locale safety
3. Export `generateMetadata` for SEO
4. Add corresponding copy to both `i18n/en.ts` and `i18n/tr.ts`

### Internationalization

All user-facing strings are in `i18n/en.ts` and `i18n/tr.ts`. The two files must stay structurally identical. Access content via `dictionary.section.key`.

### Dynamic Solution Pages

`app/[locale]/solutions/[solution]/` renders detail pages for each solution slug (`financial`, `accounts-payable`, `legal`, `tourism`). Slug-specific content is keyed in the i18n files.

### API Routes

- `app/api/contact/route.ts` — Validates with Zod, sends email via SendGrid. Falls back to console logging if `SENDGRID_API_KEY` is not set.
- `app/api/chat/route.ts` — OpenAI chat completions. Maintains conversation history, bilingual system prompts.

### Client Components

Most components are Server Components. The exceptions that require `"use client"` are:
- `components/Chatbot.tsx` — AI chat widget (currently disabled; commented out in layout)
- `components/ContactForm.tsx` — Form state and submission
- `components/Navbar.tsx` — Mobile menu toggle
- `components/LanguageSwitcher.tsx` — Locale toggle

### Environment Variables

Required in `.env.local`:
```
OPENAI_API_KEY=
SENDGRID_API_KEY=
CONTACT_EMAIL_1=
CONTACT_EMAIL_2=
```

## Key Conventions

- **Color palette**: Use `primary-*`, `secondary-*`, and `accent-*` Tailwind tokens rather than raw hex values. The full palette is in `tailwind.config.ts`.
- **Typography**: Headlines use Manrope, body text uses Inter — loaded as CSS custom properties in `globals.css`.
- **Locale params**: Always guard with `isValidLanguage(params.locale) ? params.locale : 'en'` before passing to `getDictionary`.
- **New locale strings**: Add to both `i18n/en.ts` and `i18n/tr.ts` at the same path, keeping structure in sync.
