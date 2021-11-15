#!/usr/bin/env node

import { greetings, name } from '../src/cli.js';
import gameRules from '../src/index.js';
import { rule, questions, corrects } from '../src/games/even-game.js';

greetings();
gameRules(questions, corrects, rule, name);
