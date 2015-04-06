(function() {
	function Slideshow(element) {
		this.el = document.querySelector(element);
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector(".comment-wrapper");
			this.slides = this.el.querySelectorAll(".comment");
			this.previous = this.el.querySelector(".control-arrows__item--left");
			this.next = this.el.querySelector(".control-arrows__item--right");
			this.index = 0;
			this.total = this.slides.length;
			this.actions();
		},
		_slideTo: function(slide) {
			var currentSlide = this.slides[slide];
			this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
		},
		actions: function() {
			var self = this;
			self.next.addEventListener("click", function() {
				if (self.index < 2) self.index++;
				self._slideTo(self.index);
			}, false);
			self.previous.addEventListener("click", function() {
				if (self.index > 0) self.index--;
				self._slideTo(self.index);
			}, false);
		}
	};
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow(".slider-comments");
	});
})();
