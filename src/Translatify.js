// Author: Celso Mireles
// Website: http://PochoLabs.com
// License: MIT License
// Github: https://github.com/PochoLabs/Translatify.js

(function(global, $) {

	var i18n = function(languages) {
        return new i18n.init(languages);
  };

//*********************
//
//  Declare plugin variables
//
//*********************

	// In the future, this will be the default selector
	var i18n_Class = '.i18n';

	// Where all the translation data files are stored
	var i18n_directory = '../i18n/';

	// Array of languages passed in to the plugin. Currently,
	// this can be anything as long as it matches the data
	// passed in.
	var languageList = [];

	// Initialize a data object where translation will get appended to.
	var data = {}



	i18n.prototype = {

		// This can be considered the 'default' method. Once the plugin has been
		// initialized, this translates the language.

		translate: function (language) {
			if (!$) {
				throw 'jQuery not loaded';
				}

			var libSelf = this;

			$('.i18n').each(function() {
					var self = $(this);
					var toSay = self.data('say');
					var translation = libSelf.data.language;

					$(this).html(libSelf.data[language][toSay]);
				});

			this.translateImages(language);

			return this;
		},

		// This method just translates the images. Also called by default in
		// the 'translate' method

		translateImages: function(language) {
			var libSelf = this;

			$('.img-i18n').each(function() {
				var self = $(this);
				var src = self.data('src');
				$(this).attr('src', libSelf.data[language][src]);
			});

			return this;
		},
		logLanguages: function() {
			if ( console ) {
				console.log('Languages: ' + this.data);
			}
			return this;
		},
		setLanguage: function (lang) {
			this.language = lang;
			this.translate(this.language);
			return this;
		}
	};

	i18n.init = function(data) {
		var self = this;
		self.data = data;
	};

	i18n.init.prototype = i18n.prototype;

	global.i18n = global._t = i18n;


}(window, jQuery));
