// ==UserScript==
// @name JourneyTimelineCleanup
// @namespace http://tampermonkey.net/
// @version 0.2
// @description Remove upsell modal and ad from Journey timeline
// @author Dillon Streator
// @license MIT
// @match https://journey.cloud/timeline
// @grant none
// ==/UserScript==

(function($) {

    var checkExistModal = setInterval(function() {
        if ($('#upsellModal').length) {
            document.getElementById('upsellModal').remove()
            clearInterval(checkExistModal);
        }
    }, 100);

    (function() {
        var style_rules = [];

        style_rules.push(".card.timelinex-card.share.share-other.col2.entry { width: 100% !important }");
        style_rules.push(".day.m-t-25 { max-width: none !important }");
        style_rules.push(".card.timelinex-card.status2.col2 { display: none !important }");
        style_rules.push(".card.timelinex-card.status4.col2 { display: none !important }");

        var style = '<style type="text/css">' + style_rules.join("\n") + "</style>";
        $("head").append(style);
    })();

})($);