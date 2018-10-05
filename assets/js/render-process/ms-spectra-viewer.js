/*******************************************************************************
 * Mass Spectrum JS, a Mass Spectrum Viewer
 * @author Young-Mook Kang <ymkang@thylove.org>
 * @copyright 2018 Young-Mook Kang <ymkang@thylove.org>
 * @license http://www.opensource.org/licenses/ISC The ISC License
 * @repository https://github.com/youngmook/MassSpectrumJS
 * ****************************************************************************/

const theReportContainer = {
    id: 'mass_spectrum_viewer_main_container',
    view: "form",
    elements: [
        {
            type: 'form',
            margin: 0,
            padding: 0,
            rows: [
                {
                    height: 55,
                    cols: [
                        {
                            view: "button",
                            type: "iconButtonTop",
                            width: 100,
                            icon: "plus",
                            css: 'button_raised',
                            label: 'Add',
                            click: function () {
                            },
                        },
                        {
                            view: "button", type: "iconButtonTop",
                            width: 100,
                            icon: "minus",
                            css: 'button_danger  button_raised',
                            label: 'Delete',
                            click: function () {
                            }
                        },
                        {},
                    ]
                }
            ]
        },
    ],
    scroll: "y",
};
