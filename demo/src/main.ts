import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';

import { NgbdModuleNgFactory } from '../../aot/demo/src/app/app.module.ngfactory';

// depending on the env mode, enable prod mode or add debugging modules
enableProdMode();

platformBrowser().bootstrapModuleFactory(NgbdModuleNgFactory);
