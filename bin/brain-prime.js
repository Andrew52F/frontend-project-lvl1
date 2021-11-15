#!/usr/bin/env node

import { greetings, name } from './../src/cli.js';
import gameRules from './../index.js';
import { rule, questions, corrects } from './../src/games/prime-game.js';
greetings();
gameRules(questions, corrects, rule, name);
