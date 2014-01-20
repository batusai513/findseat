(function($){
	'use strict';
	window.Dropdown = window.Dropdown || function(options){
		var dropdowns = [];
		var addDropdown = function(dropdown){
			dropdowns.push(dropdown);
		};

		var clickHandler = function(e){
			var dropdown = this.$dropdown,
			stateOne = this.options.dataState[0];
			//stateTwo = this.options.dataState[1];
			this.toggleDropdown();
			$(document)[dropdown.is('[data-state="' + stateOne + '"]') ? 'on' : 'off']('click.Dropdown', $.proxy(outsideClick, this));
			if(e){e.preventDefault();}
			return false;
		};
		
		var openDropdown = function(){
			this.$dropdown[0].setAttribute('data-state', this.options.dataState[0]);
			this.$dropdown.parent()[0].setAttribute('data-state', this.options.dataState[0]);
			this.isOpen = true;
		};
		
		var closeDropdown = function(){
			this.$dropdown[0].setAttribute('data-state', this.options.dataState[1]);
			this.$dropdown.parent()[0].setAttribute('data-state', this.options.dataState[1]);
			this.isOpen = false;
		};

		var toggleDropdown = function(){
			return !this.isOpen ? this.openDropdown() : this.closeDropdown();
		};

		// var closeAll = function(){
		// 	var dropdowns = this.dropdowns,
		// 	i = dropdowns.length,
		// 	dropdown;
		// 	for(i; i--; ){
		// 		dropdown = dropdowns[i];
		// 		dropdown.closeDropdown();
		// 	}
		// };

		var outsideClick = function(e){
			var $el = $(e.target);
			if($el.closest(this.$dropdown).length !== 0 && !$el.is(this.$el)){return;}
			clickHandler.call(this);
		};

		this.init = function(){
			addDropdown(this);
			this.options = options;
			this.isOpen = false;
			this.$el = $(options.el);
			this.$dropdown = $(options.dropdown);
			this.$el.on('click', clickHandler.bind(this));
			this.dropdowns = dropdowns;
		};

		this.openDropdown = function(){
			openDropdown.call(this);
		};

		this.closeDropdown = function(){
			closeDropdown.call(this);
		};

		this.toggleDropdown = function(){
			toggleDropdown.call(this);
		};

		this.init();
	};
})(jQuery);