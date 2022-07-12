/**
 * export default ********************************************************
 * if we want to export something, we write export.
 * if we want to that what we are exporting is default, we will use keyword default and that means if we just import something from that file it will always be out default export
 * export default person -> import person from './person.js' || import prs from './person'
 * so, we can import that "default export" and named it as we want - the name doesn't matter as we market that as deafault for that file.
 *
 * ********************************************************
 * when we don't use the dafault keyword while importing that, we need to use the curly braces to explicitly target specific things from that file. These are so-called named exports because we import the stuff by its name
 * export const clean = () => {.........}    ->      import {clean} from './utility.js';
 * export const baseData = 10       ->          import {baseData} from './utility,js';
 * export const baseData = 10       ->          import {baseData as db} from './utility,js';
 *
 * ********************************************************
 * if you have multiple name exports in a file, you can import everything with this * special character and then assign an alias and name it.
 * import * as howEver from './something.js'        ->       so we will have js object which exposes all constats and whatever you export in the other file as properties
 */
