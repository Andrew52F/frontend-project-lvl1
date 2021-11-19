#!/usr/bin/env node

import gameRules from '../src/index.js';
import { rule, getQuestionsAndCorrects } from '../src/games/prime-game.js';

gameRules(rule, getQuestionsAndCorrects);
