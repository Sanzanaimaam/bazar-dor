 <div align="center">

<img src="assets/banner (1).svg" alt="Bazar Dor — Know the market price. Shop smarter, every day." width="100%"/>

![Status](https://img.shields.io/badge/STATUS-ACTIVE-0F6A36?style=for-the-badge&labelColor=0B5429)
![Version](https://img.shields.io/badge/VERSION-1.0.0-F6E81E?style=for-the-badge&labelColor=0B5429)
![PRs](https://img.shields.io/badge/PRs-WELCOME-F6E81E?style=for-the-badge&labelColor=0F6A36)

### 🌿 Your daily guide to fair market prices 🌿

[🌐 **Live Website**](https://bazar-dor-ten-theta.vercel.app) • [💻 **GitHub Repository**](https://github.com/Sanzanaimaam/bazar-dor)

<img src="assets/divider.svg" alt="" width="100%"/>

</div>


## About Bazar Dor

**Bazar Dor (বাজার দর)** is a daily market price platform designed to help users explore products, browse categories, and stay informed about market prices.

The platform provides a simple and user-friendly experience for discovering everyday products and their prices.

> 🟡 **Our Mission:** Make market price information simple and accessible to everyone.

## Features

- 🥬 **Product Listing:** Browse available products and their prices.
- 🔍 **Category Browsing:** Explore products by category.
- 📦 **Product Details:** View detailed information about individual products.
- 🔐 **User Authentication:** Register and sign in using email and password.
- 🌐 **Social Authentication:** Sign in using Google and GitHub.
- 👤 **User Profile:** Access user profile information.
- 📱 **Responsive Design:** User-friendly interface across different screen sizes.
- 🔔 **Toast Notifications:** Receive feedback through toast messages.


## Technology Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Better Auth](https://img.shields.io/badge/Better_Auth-Authentication-0F6A36?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)

</div>

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js 18 or later
- npm
- Git
- MongoDB Atlas account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Sanzanaimaam/bazar-dor.git
```

**2. Navigate to the project folder**

```bash
cd bazar-dor
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the project root directory and add the required environment variables.

**5. Run the development server**

```bash
npm run dev
```

**6. Open the application**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The project uses the following environment variables. Add their values to your local `.env.local` file.

| Variable | Description |
|---|---|
| `BETTER_AUTH_SECRET` | Secret used by Better Auth |
| `BETTER_AUTH_URL` | Base URL of the application |
| `MONGODB_URL` | MongoDB Atlas connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret |

> ⚠️ Never commit `.env.local` or expose your secret values publicly.

## Project Structure

```text
bazar-dor/
├── assets/                 # README graphics and SVG assets
├── public/                 # Static images and public assets
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── api/            # API routes
│   │   ├── category/       # Category pages
│   │   ├── product/        # Product pages
│   │   ├── sign_up/        # Sign-up page
│   │   ├── sing_in/        # Sign-in page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components
│   └── lib/                # Authentication and utility configuration
├── .env.local              # Local environment variables (not committed)
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Future Improvements

- [ ] 🌿 Price trend visualization
- [ ] 🟡 Price alerts and notifications
- [ ] 🟡 More advanced product filtering
- [ ] 🟡 Improved multilingual experience
- [ ] 🟡 Additional market information


## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add amazing feature"
   ```

4. Push your branch:

   ```bash
   git push origin feature/amazing-feature
   ```

5. Open a Pull Request.


## License

This project is developed for educational and learning purposes.

## Contact

**Project:** Bazar Dor

**Live Website:** https://bazar-dor-ten-theta.vercel.app

**GitHub:** https://github.com/Sanzanaimaam/bazar-dor

<div align="center">


### 💚 Made with care for every market-goer 💛

**⭐ If you like Bazar Dor, give the repository a star! ⭐**

</div>
