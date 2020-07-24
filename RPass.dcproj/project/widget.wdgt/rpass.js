/*
 * This file is part of RPass.
 *
 * RPass is free software: you can redistribute it and/or modify it under the terms of the GNU
 * General Public License as published by the Free Software Foundation, either version 2 of the
 * License, or (at your option) any later version.
 *
 * RPass is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with RPass.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

// Generates a random integer between 0 and max-1.
// Params:
//   max maximum allowed number.
function getRandom(max) {
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
}

// Generates a random password.
// Params:
//   size determines the size of the password.
//   symbols determines whether non-alphanumeric characters are allowed.
function getNewPassword(size, symbols) {
    var ab = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(symbols) {
        ab = ab + '~!@#$%&*()_-+={}[]\\|:;"\'<>,.?/';
    }
    var abSize = ab.length;
    
    var password = '';
    for(var i = 0; i < size; i++) {
        password += ab.charAt(getRandom(abSize));
    }

    return password;
}
