/**
 * Mass Spectrum JS, a Mass Spectrum Viewer
 * @author Young-Mook Kang <ymkang@thylove.org>
 * @copyright 2018 Young-Mook Kang <ymkang@thylove.org>
 * @license http://www.opensource.org/licenses/ISC The ISC License
 * @repository https://github.com/youngmook/MassSpectrumJS
 */

if(isDesktopEnvironment()) {
    window.jQuery = require('jquery');
} else {
    let theHeadTag = document.getElementsByTagName("head")[0];
    let theJSTag = document.createElement('script');
    theJSTag.type = 'text/javascript';
    theJSTag.src = 'assets/lib/jquery/jquery-3.3.1.min.js';
    theHeadTag.appendChild(theJSTag);

    theJSTag = document.createElement('script');
    theJSTag.src = 'assets/lib/jquery/jquery-3.3.1.min.js';
    theHeadTag.appendChild(theJSTag);
}

function isDesktopEnvironment() {
    let isItDesktop = false;
    try{
        require('jquery');
        isItDesktop = true;
    }catch (e) {
        console.log('It is not desktop environment!');
    }
    return isItDesktop;
}

