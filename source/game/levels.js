var levels = {
	getLevelLayout: function(number) {
		switch(number) {
			case 1:
				return this.levelOne();
				break;
			case 2:
				return this.levelTwo();
				break;
			case 3:
				return this.levelThree();
				break;
		}
	},

	levelOne: function() {
		return [12, 10, 11, 10, 9, 10, 8, 13, 9];
	},

	levelTwo: function() {
		return [1, 3, 5, 7, 9, 5, 9, 9, 11, 13, 11, 9];
	},

	levelThree: function() {
		return [9, 8, 5, 3, 2, 1, 9, 9, 12, 12, 5, 5];
	}
}