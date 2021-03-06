import {NgbdCarouselBasic} from './basic/carousel-basic';
import {NgbdCarouselConfig} from './config/carousel-config';

export const DEMO_DIRECTIVES = [NgbdCarouselBasic, NgbdCarouselConfig];

export const DEMO_SNIPPETS = {
  basic: {
    code: require('!!prismjs?lang=typescript!./basic/carousel-basic'),
    markup: require('!!prismjs?lang=markup!./basic/carousel-basic.html')
  },
  config: {
    code: require('!!prismjs?lang=typescript!./config/carousel-config'),
    markup: require('!!prismjs?lang=markup!./config/carousel-config.html')
  }
};
