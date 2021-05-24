import {strict as assert} from 'assert'
import { greeting } from './index.js'

let res = greeting();
assert.deepEqual('public-repo', res);
