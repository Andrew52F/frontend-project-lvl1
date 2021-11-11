#!/usr/bin/env node

import { greetings, name } from './../src/cli.js';
import evenGame from './../src/games/even-game.js';

greetings();
evenGame(name);
