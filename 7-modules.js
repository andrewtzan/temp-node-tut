//Commonjs, every file is a module(by default)
//Modules - Encapsulated Code(only share minimum)

// εδω τα προσθετουμε σε μεταβλητη και τα κολλαμε στο υπολοιπο project
const names = require('./3-names');
const sayHi = require('./4-utils');
const data = require('./5-alternative-flavor');


//ενας αλλος τροπος να συνδεουμε τα modules μεταξυ τους

require('./6-mind-grenade');


//καλουμε το module και μετα την μεταβλητη


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);