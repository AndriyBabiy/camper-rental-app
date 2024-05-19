export const theme = Object.freeze({
  colors: {
    accent: '#E44848',
    yellow: '#FFC531',
    white: '#ffffff',
    gray: '#f7f7f7',
    grayTag: '#F2F4F7',
    dark: '#101828',
    darkSecondary: '#475467',
    mainBackground: ['#fff'],
    tagBackground: ['linear-gradient(to bottom, #ffeed7, #ffd59e)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xlarge: '40px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
