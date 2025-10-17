// Cubox Saver for PopClip
// Version: 5.4
// Fix: Added network entitlement to resolve "Using XMLHttpRequest requires the 'network' entitlement" error
// Support both old (/c/api/save_url) and new (/c/api/save/) API formats
// Compatible with cubox.pro and cubox.cc domains
// Based on PopClip official documentation: https://www.popclip.app/dev/js-actions
// Script entry point at top level - PopClip wraps this in an async function

// Input validation
if (!popclip.input.text || popclip.input.text.trim() === '') {
    popclip.showText('❌ No text selected');
    return;
}

// Get API configuration from options
if (!popclip.options.apiUrl || popclip.options.apiUrl.trim() === '') {
    popclip.showText('⚠️ Please set Cubox API URL in settings');
    return;
}

var url = popclip.options.apiUrl.trim();
var text = popclip.input.text.trim();

// Basic URL validation - support both old and new API formats
if (url.indexOf('cubox.pro') === -1 && url.indexOf('cubox.cc') === -1) {
    popclip.showText('⚠️ Invalid Cubox API URL');
    return;
}

// Validate API path format
var isOldFormat = url.indexOf('/c/api/save_url') !== -1;
var isNewFormat = url.indexOf('/c/api/save/') !== -1;
if (!isOldFormat && !isNewFormat) {
    popclip.showText('⚠️ Invalid API URL format');
    return;
}

// Show progress
popclip.showText('📋 Saving to Cubox...');

// Prepare data
var title = text.length > 50 ? text.substring(0, 47) + '...' : text;
var folder = popclip.options.defaultFolder || '';
var tag = popclip.options.defaultTag || 'PopClip';

var data = {
    type: 'memo',
    content: text,
    title: title,
    description: 'Saved from PopClip',
    tags: tag ? [tag] : []
};

if (folder) {
    data.folder = folder;
}

// Make request
try {
    var request = new XMLHttpRequest();
    request.open('POST', url, true); // Use async request
    request.setRequestHeader('Content-Type', 'application/json');
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            var status = request.status;
            if (status >= 200 && status < 300) {
                popclip.showText('✅ Saved to Cubox!');
            } else if (status === 401 || status === 403) {
                popclip.showText('❌ Authentication failed');
            } else if (status === 0) {
                popclip.showText('❌ Network connection failed');
            } else {
                popclip.showText('❌ Save failed (' + status + ')');
            }
        }
    };
    
    request.onerror = function() {
        popclip.showText('❌ Network error');
    };
    
    request.send(JSON.stringify(data));
} catch (error) {
    popclip.showText('❌ Request failed: ' + error.message);
}