//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load() {
    dashcode.setupParts();
    loadPreferences();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove() {
    // Remove any preferences as needed
    widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("size"));
    widget.setPreferenceForKey(null, dashcode.createInstancePreferenceKey("symbols"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide() {
    // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show() {}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync() {
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event) {
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
    
    savePreferences();
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event) {
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}


// ========================================================================================
// preferences
var prefs = {}

// Generates a new random password in the password text field.
// It automatically select the generated password.
//
// event: onClick event from the new button
function newPassword(event) {
    var tf = document.getElementById('password');
    tf.value = getNewPassword(prefs.size, prefs.symbols);
    tf.focus();
    tf.select();
}

// Saves preferences to a file.
//
// event: onClick event from the done button
function savePreferences() {
    widget.setPreferenceForKey(prefs.size, 'size');
    widget.setPreferenceForKey(prefs.symbols, 'symbols');
}

/*
 * Copyright (C) 2015-2017, Rui Carlos Gonçalves (rcgoncalves.pt@gmail.com)
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

// Loads preferences from file.
function loadPreferences() {
    prefs.size = parseInt(widget.preferenceForKey('size'));
    prefs.symbols = Boolean(widget.preferenceForKey('symbols'));
    if(prefs.size == NaN) {
        prefs.size = 16;
    }
    document.getElementById('size-input').value = prefs.size;
    document.getElementById('symbols-input').checked = prefs.symbols;
}

// Saves the size in preferences variable.
//
// event: onChange event from the size-input text field
// event: onKeyUp from the size-input text field
function saveSize(event) {
    prefs.size = parseInt(document.getElementById('size-input').value, 10);
}

// Saves the symbols in preferences variable.
//
// event: onChange event from the symbols-input checkbox
function saveSymbols(event) {
    prefs.symbols = document.getElementById('symbols-input').checked;
}

// Opens the widget webpage.
//
// event: onClick from the credits text
function openWebpage(event) {
    widget.openURL('https://rcgoncalves.pt/project/rpass/');
}
