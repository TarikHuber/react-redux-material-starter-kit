import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import custom1 from './custom1';

const themes= [
  {
    id: 'light',
	source: lightBaseTheme,
  },
  {
    id: 'dark',
	source: darkBaseTheme,
  },
   {
    id: 'custom1',
	source: custom1,
  },
];

export default themes;