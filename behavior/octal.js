'use strict';
const octalExample = 012;

/**
 * Without strict mode: 10 (JS converts to octal)
 * In strict mode: throw a SyntaxError: Octal literals are not allowed in strict mode.
 */
console.log(octalExample);