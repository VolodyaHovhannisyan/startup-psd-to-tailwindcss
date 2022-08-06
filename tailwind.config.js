module.exports = {
  content: ['./*.html'],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'homesection': "url('/assets/bg-home-section.png')",
        'member_1': "url('/assets/member_1.png')",
        'member_2': "url('/assets/member_2.png')",
        'member_3': "url('/assets/member_3.png')",
        'member_4': "url('/assets/member_4.png')",
        'next': "url('/assets/next_icon.png')",
        'prev': "url('/assets/prev_icon.png')",
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'robotoslab': ['"Roboto Slab"', 'serif']
    }
  }
}
