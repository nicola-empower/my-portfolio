
# Nicola's Portfolio
=======

<img width="2821" height="1435" alt="image" src="https://github.com/user-attachments/assets/4e38ac7d-316d-4445-b001-3d741bba8e9f" />

A modern, responsive personal portfolio website built with Next.js, showcasing my skills, experience, and projects. Updated to September 2025.

## 🚀 Tech Stack

This project is built using the following technologies:

*   **[Next.js 14](https://nextjs.org/)** - App Router framework for React
*   **[TypeScript](https://www.typescriptlang.org/)** - Static typing for better code quality
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
*   **[Framer Motion](https://www.framer.com/motion/)** - Library for production-ready animations
*   **[React Icons](https://react-icons.github.io/react-icons/)** & **TagCanvas** - For 3D visualizations

## ✨ Key Features

*   **Interactive Skills Sphere**: A dynamic 3D-like tag cloud visualization of technical skills, populated by icons for a clean, visual aesthetic.
*   **Split-Screen Projects**: A "Sticky Live Preview" layout on desktop that allows users to view a live website frame while determining which project to explore.
*   **Comprehensive Experience Profile**: A detailed "Professional Journey" page featuring a career timeline, biographical overview, and "Superpowers" soft-skills grid.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices (with mobile-specific layout fallbacks).
*   **Smooth Animations**: Engaging page transitions and element reveals powered by Framer Motion.

## 🛠️ Getting Started

Follow these steps to run the project locally:

1.  **Prerequisites**: Ensure you have Node.js installed on your machine.

2.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio-final.git
    cd portfolio-final
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5.  **Open your browser**:
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/
│   ├── experience/       # Professional Profile & Timeline
│   ├── projects/         # Split-Screen Project Showcase
│   ├── skills/           # Skills visualization
│   └── page.tsx          # Home page
├── components/
│   ├── ProjectLivePreview.tsx  # Sticky iframe component
│   ├── SkillsSphere.tsx        # 3D Icon Cloud
│   ├── InfoCard.tsx            # Reusable grid card
│   └── ...
└── data/
    └── skills.ts         # Centralized skills & icons definition
```

## 📄 License

This project is open source and available under the information provided in the repository.
