import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {    
         primary: "#be00ec",       
         secondary: "#007399",        
         accent: "#00fd58",        
         neutral: "#152c1e",       
         "base-100": "#f1fcff",        
         info: "#005ce3",       
         success: "#00c7a8",     
         warning: "#ffaa00",        
         error: "#be0b33",
         body: {
          "background-color": "#e3e6e6"
         }
        },
      },
    ],
  },
}
export default config
