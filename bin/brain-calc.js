#!/usr/bin/env node

import gameRules from '../src/index.js';
import { rule, getQuestionsAndCorrects } from '../src/games/calc-game.js';

gameRules(rule, getQuestionsAndCorrects);
