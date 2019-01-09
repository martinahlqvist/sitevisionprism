(function () {
    'use strict';

    var router = require('router'),
        appData = require('appData'),
        endecUtil = require('EndecUtil');

    router.get('/', function (req, res) {
        var data = {
            currentLanguage: appData.get('currentLanguage'),
            currentCode: appData.get('currentCode'),
            selectedLanguage: "",
            selectedCode: ""
        };

        data.selectedLanguage = "language-" + data.currentLanguage;
        data.selectedCode = endecUtil.escapeXML(data.currentCode);

        res.render('/', data);
    });
}());