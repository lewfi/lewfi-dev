# lewfi.dev

Personal portfolio website

Built to showcase projects and link out to social profiles.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
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
│   ├── Hero.tsx        # name and title section
│   ├── Socials.tsx     # social links (LinkedIn, GitHub, Spotify, Resume)
│   └── Projects.tsx    # project cards grid
└── public/             # static assets
```

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

[lewfi.dev](https://lewfi.dev) — Up and running!
```

Once you've updated it, save and push it to GitHub:
```
git add README.md
git commit -m "Update README"
git push
