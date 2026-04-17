# 🤝 KeenKeeper

> **Your personal shelf of meaningful connections.**  
> Browse, tend, and nurture the relationships that matter most.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-keen--keeper--alpha--woad.vercel.app-blue?style=for-the-badge&logo=vercel)](https://keen-keeper-alpha-woad.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 📖 Overview

**KeenKeeper** is a personal relationship manager (PRM) that helps you stay intentionally connected with the people who matter most in your life. Unlike social media, which passively shows you who's active, KeenKeeper puts *you* in control — setting your own contact goals, tracking interaction history, and getting notified when a friendship needs attention.

Think of it as a CRM, but for your personal life.

---

## ✨ Features

### 🏠 Friends Dashboard
- View all your tracked friends in a clean card-based layout
- See **last contact date** at a glance for each friend
- Color-coded **status badges** — `On-Track`, `Almost Due`, and `Overdue` — so you always know who needs attention
- Tag friends by context (e.g. `college`, `work`, `family`, `gaming`) and relationship type (e.g. `close friend`, `business`, `cousin`)

### 👤 Friend Detail Page
- Per-friend profile with photo, bio, and relationship notes
- Track **days since last contact** vs. your personal **contact goal**
- Set and edit a **Relationship Goal** (e.g. *Connect every 30 days*)
- Log quick interactions via **Call**, **Text**, or **Video** buttons
- Set preferred contact method (e.g. email, phone)
- **Snooze**, **Archive**, or **Delete** a friend from your list

### 📅 Timeline
- A chronological log of all your interactions across all friends
- Filter by interaction type: `Call`, `Text`, or `Video`
- Sort by **Newest** or **Oldest**

### 📊 Stats (Friendship Analytics)
- Visual analytics dashboard for your relationship activity
- Breakdown of interactions **by type**: Video, Text, Call
- Track your overall engagement trends over time

### 📈 At-a-Glance Summary (Homepage)
- **Total friends** tracked
- **On Track** count
- **Need Attention** count
- **Interactions This Month**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language |  JavaScript |
| Styling | Tailwind CSS & Daisy UI |
| Image Optimization | Next.js `<Image>` component |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/keen-keeper.git
cd keen-keeper

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
keen-keeper/
├── app/
│   ├── page.tsx                  # Home — Friends Dashboard
│   ├── Timeline/
│   │   └── page.tsx              # Interaction Timeline
│   ├── stats/
│   │   └── page.tsx              # Friendship Analytics
│   └── FriendsDetails/
│       └── [id]/
│           └── page.tsx          # Individual Friend Detail Page
├── components/                   # Reusable UI components
├── public/                       # Static assets (logo, social icons)
└── ...
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Friends grid with status indicators |
| Timeline | `/Timeline` | Chronological interaction log |
| Stats | `/stats` | Friendship analytics charts |
| Friend Detail | `/FriendsDetails/[id]` | Profile, goals & interaction logger |

---

## 🗺️ Roadmap

- [ ] User authentication & persistent storage
- [ ] Push/email reminders for overdue connections
- [ ] Import contacts from phone or social accounts
- [ ] Notes and memory log per friend
- [ ] Mobile app (React Native)
- [ ] Shared relationship goals with a friend

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/YOUR_USERNAME/keen-keeper/issues).

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Connect

[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=flat&logo=facebook&logoColor=white)](https://www.facebook.com/gr.rabby.599952)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/gulam-robbani)

---

<p align="center">© 2026 KeenKeeper. All rights reserved.</p>
