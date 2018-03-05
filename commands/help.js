exports.run = (client, message, args) => {
var help = "Ronovo Command List\n";
var line = "-------------------\n";
var color = "color : Simple Embed Test\n"
var kick = "kick : kicks players (not operational)\n"
var ping = "ping : returns pong\n"
var reload = "reload [command] : refreshes changes done to command\n"
var roll = "roll [dice_type] : gives a dice roll of sent type.\n"
var diceType = "Dice Types: \n"
var d4 = "d4\n"
var d6 = "d6\n"
var d8 = "d8\n"
var d10 = "d10\n"
var d12 = "d12\n"
var d20 = "d20\n"
var dp = "percent\n"
var string = help + line + color + kick + ping + reload + roll;
var string = string + line + diceType + line + d4 + d6 + d8 + d10 + d12 + d20 + dp;
message.channel.send({embed: {
  color: 3447003,
  description: string
}});
}