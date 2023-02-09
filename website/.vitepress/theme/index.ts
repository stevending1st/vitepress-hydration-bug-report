import DefaultTheme from 'vitepress/theme';

import 'uno.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('TestInfo', TestInfo);
  },
};
