#!/usr/bin/env node

import gameRules from '../src/index.js';
import { rule, getQuestionsAndCorrects } from '../src/games/progression-game.js';

gameRules(rule, getQuestionsAndCorrects);
