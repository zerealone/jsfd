const _unctions = [
  '$interactionAuthorID',
  /**
   * @$authorID
   * This gets the id of the interaction author.
   */
  '$messageID',
  /**
   * @$messageID
   * This gets the id of the message (the interaction).
   */
  '$botID',
  /**
   * @$botID
   * This gets the id of the bot you are connected to.
   */
  '$channelID',
  /**
   * @$channelID
   * This gets the id of the channel the interaction sent in.
   */
  '$guildID',
  /**
   * @$guildID
   * This gets the guild id of where are the interaction is used.
   */
  '$interactionName',
  /**
   * @$interactionName
   * This gets the interaction name used.
   */
  '$avatarUrl',
  /**
   * @$avatarUrl
   * This gets the full url of the interaction author avatar.
   */
  '$year',
  /**
   * @$year
   * This gets the current year. Returns as int.
   */
  '$month',
  /**
   * @$month
   * This gets the current month number. Returns as int.
   */
  '$fullDate',
  /**
   * @$fullDate
   * This gets the full date. Returns in str.
   */
  '$time',
  /**
   * @$time
   * This gets the current time. Returns in str.
   */
  '$memberGuildIcon',
  /**
   * @$memberGuildIcon
   * This gets the icon of the author of the interaction in the guild (the custom avatar), if he have one.
   * If the author does not have one, it will return the normal avatar of the user.
   */
  '$uptime',
  /**
   * @$uptime
   * This gets the uptime from where the server started.
   * Returns in int.
   */
  '$guildName'
  /**
   * @$guildName
   * This gets the name of the guild. Does not support custom guild id.
   */
]

module.exports = {
  functions: _unctions,
  message: function message(_) { //this gets the var to use in the functions
    _.code = function code($) { //this gets and converts the code
      let c = $; //the char to check is a dollar ('$'). if there is one, that means a function is next to it.
      _unctions.forEach(func => { //this checks the functions, and run it for each one of them
        let rep = func //the something that will return
        if (c.includes(func)) { //if the code includes a function
          switch (func) { //replace it with the normal discord.js function
            case "$interactionAuthorID":
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
              break;
            case "$avatarUrl":
              rep = _.user.avatarURL()
              break;
            case "$year":
              let date_ob = new Date(); //this gets the date like in normal js
              rep = date_ob.getFullYear();
              break;
            case "$month":
              rep = ("0" + (date_ob.getMonth() + 1)).slice(-2);
              break;
            case "$fullDate":
              rep = ("0" + date_ob.getDate()).slice(-2);
              break;
            case "$time":
              let hours = date_ob.getHours();
              let minutes = date_ob.getMinutes();
              rep = hours + ":" + minutes;
              break;
            case "$memberGuildIcon":
              rep = _.member.displayAvatarURL();
              break;
            case "$uptime":
              function format(seconds){
                function pad(s){ //important function to convert the uptime number into a real time
                  return (s < 10 ? '0' : '') + s;
                }
                var hours = Math.floor(seconds / (60*60));
                var minutes = Math.floor(seconds % (60*60) / 60);
                var seconds = Math.floor(seconds % 60);
              
                return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
              }
              var uptime = process.uptime();
              rep = format(uptime);
              break;
            case "$guildName":
              rep = _.guild.name;
          }
        }
        c = c.split(func).join(rep)
      })
      return c
    }
    return _
  }
}
