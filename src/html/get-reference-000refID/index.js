var arc = require('@smallwins/arc-prototype')
var render = require('@smallwins/arc-www-md')

function index(req, res) {
  res({
    html: render(`reference-${req.params.refID}`)
  })
}

exports.handler = arc.html.get(index)
