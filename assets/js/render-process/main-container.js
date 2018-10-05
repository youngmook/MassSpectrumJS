/*******************************************************************************
 * Mass Spectrum JS, a Mass Spectrum Viewer
 * @author Young-Mook Kang <ymkang@thylove.org>
 * @copyright 2018 Young-Mook Kang <ymkang@thylove.org>
 * @license http://www.opensource.org/licenses/ISC The ISC License
 * @repository https://github.com/youngmook/MassSpectrumJS
 * ****************************************************************************/

const theMainContainer = {
    id: 'msv_main_container',
    type: 'clean',
    css: "noselect",
    rows: [
        {
            template:'Main container Test'
        }
    ]
};


webix.ready(function () {
    webix.ui(theMainContainer);
});
