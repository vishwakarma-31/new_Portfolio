# 🚀 Next.js Portfolio

A modern, customizable developer portfolio built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- Responsive and accessible design
- Project showcase with live links and GitHub
- Contact form powered by EmailJS
- Dark mode support
- SEO and social sharing optimized
- Easy content customization

## 🖼️ Demo

[Live Demo](https://your-portfolio.com)

![Portfolio Screenshot](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [EmailJS](https://www.emailjs.com/) (for contact form)
- [Jest](https://jestjs.io/) (for testing)
- [GitHub Actions](https://github.com/features/actions) (CI/CD)

## 🚦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/vishwakarma-31/new_Portfolio.git
cd new_Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

See `.env.example` for reference.

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🖌️ Customization

- Edit your project info in `data/projects.ts`.
- Update bio, skills, and contact details in relevant components.
- Change layout or styles via Tailwind classes in components.
- Replace demo images/links with your real content.
- Update SEO metadata in `app/layout.tsx`.

## ♿ Accessibility

This project follows accessibility best practices:
- Semantic HTML elements
- Sufficient color contrast
- Keyboard navigable
- Alt text for images

## ✅ Testing

Basic tests are included with Jest and React Testing Library:

```bash
npm test
```

## ☁️ Deployment

You can deploy to [Vercel](https://vercel.com/) or any platform that supports Next.js.

## 🧑‍💻 Contributing

Contributions and suggestions are welcome! Please open an issue or PR.

## 📝 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.