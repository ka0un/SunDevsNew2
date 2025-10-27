# Beautiful Shadcn UI Landing Page

A modern, responsive landing page template built with Next.js, Tailwind CSS, and Shadcn UI, and Shadcn UI Blocks.

## Demo

[Live Demo](https://shadcn-ui-landing-page.vercel.app/)

## Preview

![Preview](./public/page-preview.png)

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🎯 Built with Next.js 15
- 💅 Styled with Tailwind CSS [`3.4`](https://github.com/akash3444/shadcn-ui-landing-page/tree/tailwind-v3) & [`4.0`](https://github.com/akash3444/shadcn-ui-landing-page)
- 🧩 Built with [Shadcn UI](https://ui.shadcn.com) and [Shadcn UI Blocks](https://shadcnui-blocks.com)
- 🌙 Dark mode support

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/akash3444/shadcn-ui-landing-page.git
cd shadcn-ui-landing-page
```

2. To use Tailwind CSS v3.4:

- Switch to the `tailwind-v3` branch:

```bash
git checkout `tailwind-v3`
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Template route (/template)

- A full copy of the landing page exists at `/template` for reference while you customize the root page.
- Files live under `app/template/` and include a dedicated `layout.tsx`, `page.tsx`, and duplicated section components in `app/template/components/`.
- The navbar and a theme toggle are also duplicated under `app/template/components/navbar/` and `app/template/components/theme-toggle.tsx` so the template is decoupled from root components.
- The template navbar links point to anchors on the template page and "Home" points to `/template`.

You can freely modify either the root landing (`/`) or the template (`/template`) without interfering with each other.

## Customization

1. Replace the placeholder images with your own content.
2. Modify the text and styles in the components to match your brand and messaging.
3. Add your own features and sections as needed.

## Why this template?

This project is a base template for a landing page. It is built with Next.js, Tailwind CSS, Shadcn UI, and Shadcn UI Blocks. It is a great starting point for a landing page. You can customized the content and media files as per your needs. It is not intended to be a complete solution for a landing page. It is intended to be a starting point for a landing page.

## Contributing

If you have any suggestions or improvements, please create an issue or submit a pull request.
