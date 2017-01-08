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
		return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12];
	},

	levelTwo: function() {
		return [1, 3, 5, 7, 9, 5, 11, 13, 11, 5, 3, 5, 7, 9, 5, 11, 13, 11];
	},

	levelThree: function() {
		return [9, 8, 5, 9, 9, 12, 12, 5, 5, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	}
}