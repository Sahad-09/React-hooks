import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import syntaxImportMeta from '@vitejs/plugin-syntax-import-meta';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), syntaxImportMeta()]
})

