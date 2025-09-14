import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "nowory-exchange",
    title: "Nowory Exchange",
    period: {
      start: "05.2025",
    },
    link: "https://nowory.com/",
    skills: [
      "React Native",
      "Expo",
      "Tamagui",
      "Cross-Platform Development",
      "UI/UX Design",
      "TypeScript",
      "Performance Optimization",
      "Responsive Design",
      "Theming & Styling",
      "State Management",
    ],
    description: `Nowory — A modern crypto exchange platform with real-time trading, secure wallets, and seamless multi-chain support.
- ⚡ Real-time market data & live trading powered by WebSockets
- 🔒 Secure user wallets with on-chain & off-chain transaction handling
- 🌐 Multi-chain support (Ethereum, BNB, Polygon, Taral)
- 📊 Advanced charts & analytics for traders
- 📱 Built with Expo React Native and Tamagui for cross-platform performance
`,
    logo: "https://nowory.com/assets/only-logo.svg",
    isExpanded: true,
  },
  {
    id: "tan-ico",
    title: "TAN ICO",
    period: {
      start: "01.2025",
    },
    link: "https://buy.tan.live/",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "shadcn/ui",
      "Web3",
      "EVM",
      "TAN",
    ],
    description: `TAN ICO — Token Sale Platform for the TAN Blockchain.
- 🔐 Secure token purchase with wallet integration
- ⚡ Real-time contribution tracking & live token metrics
- 🎨 Clean, responsive UI with light & dark theme support
- 🌍 Multi-chain wallet support (MetaMask, WalletConnect)
- 📄 Smart contract integration for transparent transactions
- 📊 Investor dashboard with purchase history & vesting details
- 🚀 Deployable as a Progressive Web App (PWA)

Platform Features:
- Automated token distribution post-purchase
- Admin panel for ICO management & analytics
- SEO-friendly with metadata, sitemap, and structured JSON-LD schema`,
    logo: "https://buy.tan.live/assets/logo/TAN.png",
  },
  {
    id: "testnet-tan",
    title: "TANSCAN - TESTNET",
    period: {
      start: "07.2024",
    },
    link: "https://testnet.tanscan.com/",
    skills: [
      "Company Project",
      "Blockscout Fork",
      "TypeScript",
      "React",
      "Elixir",
      "PostgreSQL",
      "Ecto",
      "Phoenix Framework",
      "Docker",
      "NGINX",
    ],
    logo: "https://nowory.com/assets/only-logo.svg",
  },
  {
    id: "tarality-exchange",
    title: "Tarality Exchange",
    period: {
      start: "04.2024",
    },
    link: "https://tarality.com/",
    skills: [
      "Company Project",
      "React.js",
      "MUI 5",
      "TypeScript",
      "WebSockets",
      "Secure Wallet Integration",
      "Multi-Chain Support",
      "Real-Time Trading",
      "Responsive Design",
      "Custom UI Components",
    ],
    description: `Tarality Exchange — Web-Based Multi-Chain Crypto Trading Platform.
- 📱 Web platform built with React.js and MUI 5 for fast, responsive user experience.
- 🔄 Real-time portfolio updates and trade execution using WebSockets.
- 🔐 Secure multi-chain wallet integration with transaction history & monitoring.
- 💹 Interactive charts, trend analysis, and performance metrics for informed trading`,
    logo: "https://tarality.com/favicon.ico",
  },
];
