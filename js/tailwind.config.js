    tailwind.config = {
      theme: {
        extend: {
          colors: {
          //  color start
          'navBar': '#FFDCD8',
           hoverC:'#FF5538',
           navMenu:'rgb(57, 53, 53)'
          //  color end
          },
           //  background
           backgroundImage: {
            'bannerBg': "url('./images/banner.png')",
            'projectBg': "url('./images/project.jpg')",
          },
         //  container
          maxWidth: {
        'allContainer': '1170px',
      },
        // allgooglefont
       googlefont:{
        open:['Open Sans'],
        paprika:['Paprika'],
       },

        }
      }
    }