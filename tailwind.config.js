module.exports = {
  content: [ './src/**/*.{html,js}',
  './dist/**/*.{html,js}','./dist/index.html'],
  theme: {
    extend: {
      colors:{
        'primary' : '#367BF6',
        'secondary' : '##353A3F',
        'default' : '#6E757C',
        'green-text' : '#56A451',
        'text-p' : '#222529',
        'about' : '#F8F9FA',
        'footer' : '#f9f9f9'
        
      
      },
      backgroundImage: {
        'hero-image': "linear-gradient(89.76deg, #353A3F 34.79%, rgba(53, 58, 63, 0.17) 96.59%),url('/dist/hero.jpg')",
       
      },
      gridRowEnd: {
         '9' : '9',
        '10': '10',
        '11' : '11'
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': '80px 40px minmax(0, 300px) 40px minmax(0, 300px) 40px minmax(0, 300px) 40px minmax(0, 300px) 30px',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    container:{
      center:true,
      padding: '2rem',
      screens:{
        lg:'1124px',
        xl:'1124px',
        "2xl" : '1124px',
       
      }
    },
    fontFamily:{
      playfair:['Playfair Display', 'serif'],
      robot:['Roboto', "sans-serif"]
    }
  },
  plugins: [],
}
