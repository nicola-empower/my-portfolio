# Nicola Berry - Portfolio

<div align="center">
  <h3>Business Systems Analyst | Full Stack Developer</h3>
  <p><em>"Don't just do tasks; eliminate them."</em></p>
</div>

---
<img width="2832" height="1518" alt="image" src="https://github.com/user-attachments/assets/46c794b4-2a3c-4813-8ac9-70496ef06fa6" />


A modern, responsive personal portfolio website built with **Next.js 14**, showcasing my skills, experience, and custom-built projects. This site serves as a "Digital CV" and a demonstration of my ability to build premium, code-first solutions.

## 🚀 Tech Stack

*   **[Next.js 14](https://nextjs.org/)** - App Router & Server Components
*   **[TypeScript](https://www.typescriptlang.org/)** - Strict typing for robust architecture
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling with custom Glassmorphism tokens
*   **[Framer Motion](https://www.framer.com/motion/)** - Complex layout projections (3D Carousel, Shared Element Transitions)
*   **[React Icons](https://react-icons.github.io/react-icons/)** - Visual assets

## ✨ New Premium Attributes

### 1. The Glass Passport (Hero)
A custom-built "Identity Card" on the homepage that replaces standard text intros.
*   **Features:** Tilt-effect (3D mouse tracking), "Verified System" badge, and live tech-stack status indicators.
*   **Tech:** Framer Motion + CSS Backdrop Filter.

### 2. 3D Project Deck (Carousel)
Replaced the traditional "List View" with an immersive, app-like deck.
*   **Interaction:** Users "swipe" through projects. 
*   **Depth:** Cards fade into the background using Z-Index scaling and blur filters.
*   **Filtering:** "Highlights", "AI & GenAI", and "Dashboards" categories to manage the extensive project list (36+ items).

### 3. The Big Data Glitch (Contact)
A subtle, pulsing "Server Room" aesthetic on the Contact Page.
*   **Vibe:** Abstract gradient orbs mixed with SVG grids to imply high-tech data processing.

*   <img width="2812" height="1503" alt="image" src="https://github.com/user-attachments/assets/05f06c78-73a7-4259-83f2-c1c05507caea" />
<img width="2810" height="1513" alt="image" src="https://github.com/user-attachments/assets/4e8a75a6-f10c-436d-9c01-db7b726e85b7" />



## 📂 Project Structure

```bash
src/
├── app/
│   ├── experience/       # Timeline & Professional Journey
│   ├── projects/         # 3D Carousel Project Showcase
│   ├── contact/          # "Glitch" styled contact form
│   └── page.tsx          # Home (Glass Passport)
├── components/
│   ├── HeroGlassCard.tsx # 3D Tilt Card Component
│   ├── ProjectCarousel.tsx # Framer Motion Deck
│   ├── Navbar.tsx        # Navigation
│   └── ...
└── data/
    └── ...
```

## 🛠️ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/nicola-empower/my-portfolio.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

## 📄 License

(c) 2024-2025 Nicola Berry. All Rights Reserved.
