#!/usr/bin/env node
import { entryTest } from './main'

const inputWord = process.argv[2] || "what";
console.log("input: " + inputWord);
entryTest(inputWord);