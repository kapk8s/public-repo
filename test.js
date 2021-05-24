import {strict as assert} from 'assert'
import { exec } from 'child_process'
import { greeting } from './index.js'

let res = greeting();
assert.deepEqual('public-repo', res);


exec('ls');

for (let i = 0; i < 100; i++) {
    console.log('iteration: ', i);
}
