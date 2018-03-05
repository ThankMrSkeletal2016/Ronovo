var d4 = {
  sides: 4,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d6 = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d8 = {
  sides: 8,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d10 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d12 = {
  sides: 12,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var d20 = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var percent = {
  sides: 100,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

exports.run = (client, message, args) => {
     switch(args[0]) {
			case "d4":
				var result = d4.roll();
			break;
			case 'd6':
				var result = d6.roll();
			break;
			case 'd8':
				var result = d8.roll();
			break;
			case 'd10':
				var result = d10.roll();
			break;
			case 'd12':
				var result = d12.roll();
			break;
			case 'd20':
				var result = d20.roll();
			break;
			case 'percent':
				var result = percent.roll();
			break;
	 }
	var msg = "You rolled a " + result;
	message.channel.send(msg).catch(console.error);
}