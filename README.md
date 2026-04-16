# lewfi.dev

Personal portfolio website for me.

Built to showcase projects, skills, and experience, with links to social profiles.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Vercel](https://vercel.com/) — deployment and hosting

## Project Structure
```
lewfi-dev/
├── app/
│   ├── page.tsx        # main page, assembles all components
│   ├── layout.tsx      # global layout, fonts, metadata
│   └── globals.css     # global styles and Tailwind import
├── components/
│   ├── Navbar.tsx      # sticky navbar with smooth scroll navigation
│   ├── Hero.tsx        # name, title, bio, and social links
│   ├── About.tsx       # about me section and skills grid
│   ├── Projects.tsx    # project cards with live screenshots
│   ├── Experience.tsx  # work experience timeline
│   └── Socials.tsx     # social links (LinkedIn, GitHub, Spotify, Resume)
└── public/             # static assets
```

## Features

- Snap-proximity scroll with smooth section navigation
- Sticky navbar with client-side smooth scrolling
- Responsive design for desktop and mobile
- Live project screenshots via Microlink API
- Custom domain with SSL via Vercel

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/lewfi/lewfi-dev.git
cd lewfi-dev
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Live Site

[lewfi.dev](https://lewfi.dev)
