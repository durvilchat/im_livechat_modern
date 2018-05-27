odoo.define('im_modern.thread', function (require) {
    "use strict";
    var core = require('web.core');
    var session = require('web.session');
    var im_livechat = require('im_livechat.im_livechat');
    var _t = core._t;
    var QWeb = core.qweb;

    im_livechat.LivechatButton.include({
        load_qweb_template: function () {
            var xml_files = ['/mail/static/src/xml/chat_window.xml',
                '/im_livechat_modern/static/src/xml/thread.xml',
                '/im_livechat/static/src/xml/im_livechat.xml'];
            var defs = _.map(xml_files, function (tmpl) {
                return session.rpc('/web/proxy/load', {path: tmpl}).then(function (xml) {
                    QWeb.add_template(xml);
                });
            });
            return $.when.apply($, defs);
        }
    })
});
