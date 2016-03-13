System.register(['aurelia-framework', 'SnapshotsDB'], function (_export) {
	'use strict';

	var inject, SnapshotsDB, Snapshot;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_SnapshotsDB) {
			SnapshotsDB = _SnapshotsDB.SnapshotsDB;
		}],
		execute: function () {
			Snapshot = (function () {
				function Snapshot(SnapshotsDB) {
					_classCallCheck(this, _Snapshot);

					this.src = '';

					this.SnapshotsDB = SnapshotsDB;
				}

				_createClass(Snapshot, [{
					key: 'activate',
					value: function activate(params) {
						var _this = this;

						this.SnapshotsDB.get(params.id).then(function (response) {
							_this.src = response.url;
						});
					}
				}]);

				var _Snapshot = Snapshot;
				Snapshot = inject(SnapshotsDB)(Snapshot) || Snapshot;
				return Snapshot;
			})();

			_export('Snapshot', Snapshot);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3NuYXBzaG90LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxRQUFROzs7Ozs7Ozs4QkFKYixNQUFNOzs4QkFDTixXQUFXOzs7QUFHTixXQUFRO0FBR1QsYUFIQyxRQUFRLENBR1IsV0FBVyxFQUFDOzs7VUFGeEIsR0FBRyxHQUFHLEVBQUU7O0FBR1AsU0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDL0I7O2lCQUxXLFFBQVE7O1lBTVosa0JBQUMsTUFBTSxFQUFDOzs7QUFDZixVQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQzlCLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixhQUFLLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO09BQ3hCLENBQUMsQ0FBQTtNQUNGOzs7b0JBWFcsUUFBUTtBQUFSLFlBQVEsR0FEcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLFFBQVEsS0FBUixRQUFRO1dBQVIsUUFBUSIsImZpbGUiOiJ2aWV3cy9zbmFwc2hvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U25hcHNob3RzREJ9IGZyb20gJ1NuYXBzaG90c0RCJztcclxuXHJcbkBpbmplY3QoU25hcHNob3RzREIpXHJcbmV4cG9ydCBjbGFzcyBTbmFwc2hvdHtcclxuXHRzcmMgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IoU25hcHNob3RzREIpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQiA9IFNuYXBzaG90c0RCO1xyXG5cdH1cclxuXHRhY3RpdmF0ZShwYXJhbXMpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQi5nZXQocGFyYW1zLmlkKVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLnNyYyA9IHJlc3BvbnNlLnVybDtcclxuXHRcdH0pXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
