/*
 * Copyright (C) 2015, Rui Carlos Gonçalves (rcgoncalves.pt@gmail.com)
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License as published by the Free Software Foundation; either version 2 of the License,
 * or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even
 * the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with this program; if not,
 * write to the Free Software Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 *
 */

// Generates a random integer between 0 and max-1.
// Params:
//   max maximum allowed number.
function getRandom(max) {
    return Math.floor(Math.random() * max);
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