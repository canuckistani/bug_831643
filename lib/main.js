var cm = require('context-menu'),
    data = require('self').data;

var item = cm.Item({
    label: "Bug 831643",
    image: data.url('bug.png'),
    context: [
        cm.SelectorContext('a')
    ],
    contentScript: 'self.on("click", function (node, data) {' +
                 '  self.postMessage(node.href);' +
                 '});',
    onMessage: function(message) {
        console.log('clicked: '+message);
    }
});
