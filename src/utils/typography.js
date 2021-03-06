import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Cera-Bold',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Cera-Light', 'serif'],
  overrideStyles: () => ({
    html: {
      overflowY: 'initial',
    },
    button: {
      fontFamily: [
        'Cera-Bold',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
    nav: {
      fontFamily: [
        'Cera-Bold',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  }),
})

export default typography
