1º 

npm install tailwindcss @tailwindcss/vite


2º 

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

3º

@import "tailwindcss";