/*******************************************************************************
 * Mass Spectrum JS, a Mass Spectrum Viewer
 * @author Young-Mook Kang <ymkang@thylove.org>
 * @copyright 2018 Young-Mook Kang <ymkang@thylove.org>
 * @license http://www.opensource.org/licenses/ISC The ISC License
 * @repository https://github.com/youngmook/MassSpectrumJS
 * ****************************************************************************/

const theMainMenuData = [
    {id: "mass_spectrum_viewer_main_menu", icon: "bar-chart", value: "MS Spectra Viewer", $css: "main_menu"},
    {id: "about_main_menu", icon: "info-circle", value: "About", $css: "main_menu"},
];

const theFooter = {
    type: 'clean',
    css: 'dark_bg',
    rows: [
        {
            height: 35,
            css: 'copyright-notice',
            template: "© Copyright 2018 <a href='https://www.thylove.org/youngmook' target='_blank'>Y.-M. Kang</a> All rights reserved.</a>"
        }
    ]
};

const theMainToolbar = {
    view: "toolbar",
    padding: 3,
    elements: [
        {view: "label", label: "<b>[ Mass Spectrum Viewer ]</b>",},
    ]
};

let theMainMenu = {
    view: "sidebar",
    id: 'main_menu_sidebar',
    css: 'main_menu_sidebar',
    width: 225,
    titleHeight: 75,
    collapsedWidth: 55,
    data: theMainMenuData,
    on: {
        onAfterSelect: function (id) {
            hideAll();
            if (id == "mass_spectrum_viewer_main_menu") {
                $$('mass_spectrum_viewer_main_container').show()
            } else {
                $$('spinner_in_progress').show();
            }
        }
    },
    template: function (obj, common) {
        if (common.collapsed)
            return common.icon(obj, common);
        else {
            return common.arrow(obj, common) + common.icon(obj, common) + "<div style='display:inline-block; position:relative; bottom:6px; left:5px;'><span>" + obj.value + "</span></div>";
        }
    },
};

let theContentBody = {
    rows: [
        theReportContainer,
        {
            id: 'spinner_in_progress',
            type: 'clean',
            rows: [
                {},
                {
                    type: 'clean',
                    cols: [
                        {},
                        {
                            width: 100,
                            template: '<div class="spinner" style="border: none;"><div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div></div>'
                        },
                        {},
                    ]
                },
                {}
            ]
        },
        theFooter,
    ]
};


const theMainContainer = {
    id: 'msv_main_container',
    type: 'clean',
    css: "noselect",
    rows: [
        theMainToolbar,
        {
            cols: [
                {
                    rows: [
                        {
                            id: 'main_menu_toggle_button',
                            view: "form",
                            height: 48,
                            padding: 0,
                            margin: 0,
                            css: 'main_menu_toggle_button',
                            cols: [
                                {
                                    view: "button",
                                    type: "icon",
                                    icon: "bars",
                                    inputWidth: 37,
                                    align: "right",
                                    css: "main_menu",
                                }
                            ]
                        },
                        theMainMenu,
                    ]
                },
                theContentBody,
            ]
        },

    ]
};

webix.ready(function () {
    webix.ui(theMainContainer);
});


webix.ready(function () {
    $$('spinner_in_progress').hide();

    jQuery(document).ready(function ($) {
        $(".main_menu_toggle_button").click(function () {
            $$("main_menu_sidebar").toggle();
        });
    });
});

function hideAll() {
    $$('spinner_in_progress').hide();
    $$('mass_spectrum_viewer_main_container').hide();
}