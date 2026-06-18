import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline', // Automatically registers the PWA without breaking main.jsx imports
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-able-icon.png', 'screenshot-desktop.png', 'screenshot-mobile.png'],
      manifest: {
        id: '/', // Resolves App ID fallback identity warnings
        name: 'Zephania Owuor Portfolio',
        short_name: 'Zeph Portfolio',
        description: 'Full-Stack Developer Portfolio for Zephania Owuor',
        theme_color: '#111827', 
        background_color: '#111827',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', // Updated to match your actual file name perfectly
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-192x192.png', 
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'pwa-512x512.png', // Updated to match your actual file name perfectly
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshot-desktop.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Desktop Portfolio Interface'
          },
          {
            src: 'screenshot-mobile.png',
            sizes: '375x812',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Mobile Portfolio Interface'
          }
        ]
      }
    })
  ],
})