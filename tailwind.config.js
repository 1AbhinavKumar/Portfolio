/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // this is how we use the extra font by giving the signature name as variable to call. font-signature 
    fontFamily : {
      signature : ["Great Vibes"],
    }
  },
  plugins: [],
}

