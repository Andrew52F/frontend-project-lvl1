#!/usr/bin/env node

import gameRules from '../src/index.js';
import { rule, questions, corrects } from '../src/games/even-game.js';

gameRules(questions, corrects, rule);
