import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            colors: {
              primary: '#FF6B00',  
              secondary: '#1F1F1F',
              accent: '#FFC300',   
              muted: '#F5F5F5',    
              danger: '#FF3D00',   
              success: '#00C853',  
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            }
          },
        },
        plugins: [],
      },
    })
  ],
})
