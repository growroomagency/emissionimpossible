// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'GrowRoom - EMISSION:IMPOSSIBLE',
      htmlAttrs: {
        'lang': 'en',
      },
      link: [
        { rel: 'icon', sizes: '32x32', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-32x32.png' },
        { rel: 'icon', sizes: '192x192', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-192x192.png' },
        { rel: 'apple-touch-icon', href: 'https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-180x180.png' },
        { rel: 'preload', as: 'image', href: '/assets/bg-desktop.webp' },
        { rel: 'preload', as: 'image', href: '/assets/bg-mobile.webp' },
        { rel: 'preload', as: 'image', href: '/assets/bg-mobile.webp' },
        { rel: 'preload', as: 'image', href: '/assets/logo.png' },
        
        { rel: 'preload', as: 'image', href: '/assets/companies/B_Lab_logo.svg' },
        { rel: 'preload', as: 'image', href: '/assets/companies/United_Nations_Climate_Change_Conference_logo.svg' },

        { rel: 'preload', as: 'image', href: '/assets/companies/big/BP_Helios_logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/coca-cola-logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/Fussy_Black_Logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/GrowRoomGR-Logo-Only.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/Patagonia_(Unternehmen)_logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/Schneider_Electric_2008.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/shell-2020.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/big/Tony_s_Chocolonely_Logo_NL.png' },

        { rel: 'preload', as: 'image', href: '/assets/companies/small/BP_Helios_logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/coca-cola-logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/Fussy_Black_Logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/GrowRoomGR-Logo-Only.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/Patagonia_(Unternehmen)_logo.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/Schneider_Electric_2008.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/shell-2020.png' },
        { rel: 'preload', as: 'image', href: '/assets/companies/small/Tony_s_Chocolonely_Logo_NL.png' },
      ],
      meta: [
        { name: 'msapplication-TileImage', content: `https://growroom.agency/wp-content/uploads/2025/06/cropped-favicon-96x96-1-270x270.png` }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  css: [
    './assets/main.css',
  ],
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/supabase'],
  googleFonts: {
    display: 'block',
    families: {
      Poppins: {
        wght: [400, 700, 800]
      },
      Agdasima: true
    }
  },
  supabase: {
    redirect: false,
    redirectOptions: undefined
  },
  postcss: {
    plugins: {
      autoprefixer: {}
    },
  }
})