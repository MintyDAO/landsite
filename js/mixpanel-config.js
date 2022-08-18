$(document).ready(function ($) {
    const MIX_PANEL_USER_TRACKER_PROJECT_TOKEN = '5db0be9bb18c43c8548382ec35decdf7';
    (function (f, b) {
        if (!b.__SV) {
            var e, g, i, h; window.mixpanel = b; b._i = []; b.init = function (e, f, c) {
                function g(a, d) { var b = d.split("."); 2 == b.length && (a = a[b[0]], d = b[1]); a[d] = function () { a.push([d].concat(Array.prototype.slice.call(arguments, 0))) } } var a = b; "undefined" !== typeof c ? a = b[c] = [] : c = "mixpanel"; a.people = a.people || []; a.toString = function (a) { var d = "mixpanel"; "mixpanel" !== c && (d += "." + c); a || (d += " (stub)"); return d }; a.people.toString = function () { return a.toString(1) + ".people (stub)" }; i = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                for (h = 0; h < i.length; h++)g(a, i[h]); var j = "set set_once union unset remove delete".split(" "); a.get_group = function () { function b(c) { d[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); a.push([e, call2]) } } for (var d = {}, e = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++)b(j[c]); return d }; b._i.push([e, f, c])
            }; b.__SV = 1.2; e = f.createElement("script"); e.type = "text/javascript"; e.async = !0; e.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
                MIXPANEL_CUSTOM_LIB_URL : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"; g = f.getElementsByTagName("script")[0]; g.parentNode.insertBefore(e, g)
        }
    })(document, window.mixpanel || []);
    mixpanel.init(MIX_PANEL_USER_TRACKER_PROJECT_TOKEN, { batch_requests: true });
    (function (c, a) {
        if (!a.__SV) {
            var b = window; try { var d, m, j, k = b.location, f = k.hash; d = function (a, b) { return (m = a.match(RegExp(b + "=([^&]*)"))) ? m[1] : null }; f && d(f, "state") && (j = JSON.parse(decodeURIComponent(d(f, "state"))), "mpeditor" === j.action && (b.sessionStorage.setItem("_mpcehash", f), history.replaceState(j.desiredHash || "", c.title, k.pathname + k.search))) } catch (n) { } var l, h; window.mixpanel = a; a._i = []; a.init = function (b, d, g) {
                function c(b, i) {
                    var a = i.split("."); 2 == a.length && (b = b[a[0]], i = a[1]); b[i] = function () {
                        b.push([i].concat(Array.prototype.slice.call(arguments,
                            0)))
                    }
                } var e = a; "undefined" !== typeof g ? e = a[g] = [] : g = "mixpanel"; e.people = e.people || []; e.toString = function (b) { var a = "mixpanel"; "mixpanel" !== g && (a += "." + g); b || (a += " (stub)"); return a }; e.people.toString = function () { return e.toString(1) + ".people (stub)" }; l = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                for (h = 0; h < l.length; h++)c(e, l[h]); var f = "set set_once union unset remove delete".split(" "); e.get_group = function () { function a(c) { b[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); e.push([d, call2]) } } for (var b = {}, d = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < f.length; c++)a(f[c]); return b }; a._i.push([b, d, g])
            }; a.__SV = 1.2; b = c.createElement("script"); b.type = "text/javascript"; b.async = !0; b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ?
                MIXPANEL_CUSTOM_LIB_URL : "file:" === c.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"; d = c.getElementsByTagName("script")[0]; d.parentNode.insertBefore(b, d)
        }
    })(document, window.mixpanel || []);
    mixpanel.init(MIX_PANEL_USER_TRACKER_PROJECT_TOKEN);
    saveDataInMixpanel();

    $('#outer-wrapper a').click(function () {
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("User Clicked on ", getCickedButtonValue);
        mixpanel.track("Clkd" + getCickedButtonValue, {
            "referrer": document.referrer
        });
    });

    $('#exampleModal a').click(function () {
        // event.preventDefault();
        var getCickedButtonValue = $(this).attr('value');
        // console.log("User Clicked on ", getCickedButtonValue);
        mixpanel.track("Clkd" + getCickedButtonValue, {
            "referrer": document.referrer
        });
    });

});

function saveDataInMixpanel() {
    mixpanel.track(
        "User Come to view our Website",
        { "referrer": document.referrer }
    );
}
