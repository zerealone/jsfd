const _unctions = [
  '$authorID',
  '$messageID',
  '$botID',
  '$channelID',
  '$guildID',
  '$interactionName'
]

module.exports = {
  functions: _unctions,
  message: function message(_) {
    _.code = function code($) {
      let c = $;
      _unctions.forEach(func => {
        let rep = func
        if (c.includes(func)) {
          switch (func) {
            case "$authorID":
              rep = _.user.id
              break;
            case "$messageID":
              rep = _.id
              break;
            case "$botID":
              rep = _.client.user.id
              break;
            case "$channelID":
              rep = _.channel.id
              break;
            case "$guildID":
              rep = _.guild.id
              break;
            case "$interactionName":
              rep = _.commandName
          }
        }
        c = c.split(func).join(rep)
      })
      return c
    }
    return _
  }
}