System.register(['aurelia-framework', 'SnapshotsDB'], function (_export) {
	'use strict';

	var inject, SnapshotsDB, SnapshotsList;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_SnapshotsDB) {
			SnapshotsDB = _SnapshotsDB.SnapshotsDB;
		}],
		execute: function () {
			SnapshotsList = (function () {
				function SnapshotsList(SnapshotsDB) {
					_classCallCheck(this, _SnapshotsList);

					this.snapshots = [];

					this.SnapshotsDB = SnapshotsDB;
				}

				_createClass(SnapshotsList, [{
					key: 'created',
					value: function created() {
						this.snapshots = this.SnapshotsDB.getAll();
					}
				}, {
					key: 'removeSnapshot',
					value: function removeSnapshot(snapshot) {
						this.SnapshotsDB.remove(snapshot);
					}
				}]);

				var _SnapshotsList = SnapshotsList;
				SnapshotsList = inject(SnapshotsDB)(SnapshotsList) || SnapshotsList;
				return SnapshotsList;
			})();

			_export('SnapshotsList', SnapshotsList);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYXBzaG90cy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxhQUFhOzs7Ozs7Ozs4QkFKbEIsTUFBTTs7OEJBQ04sV0FBVzs7O0FBR04sZ0JBQWE7QUFHZCxhQUhDLGFBQWEsQ0FHYixXQUFXLEVBQUM7OztVQUZ4QixTQUFTLEdBQUcsRUFBRTs7QUFHYixTQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUMvQjs7aUJBTFcsYUFBYTs7WUFNbEIsbUJBQUU7QUFDUixVQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7TUFDM0M7OztZQUNhLHdCQUFDLFFBQVEsRUFBQztBQUN2QixVQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztNQUNsQzs7O3lCQVhXLGFBQWE7QUFBYixpQkFBYSxHQUR6QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6InNuYXBzaG90cy1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtTbmFwc2hvdHNEQn0gZnJvbSAnU25hcHNob3RzREInO1xyXG5cclxuQGluamVjdChTbmFwc2hvdHNEQilcclxuZXhwb3J0IGNsYXNzIFNuYXBzaG90c0xpc3R7XHJcblx0c25hcHNob3RzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKFNuYXBzaG90c0RCKXtcclxuXHRcdHRoaXMuU25hcHNob3RzREIgPSBTbmFwc2hvdHNEQjtcclxuXHR9XHJcblx0Y3JlYXRlZCgpe1xyXG5cdFx0dGhpcy5zbmFwc2hvdHMgPSB0aGlzLlNuYXBzaG90c0RCLmdldEFsbCgpO1xyXG5cdH1cclxuXHRyZW1vdmVTbmFwc2hvdChzbmFwc2hvdCl7XHJcblx0XHR0aGlzLlNuYXBzaG90c0RCLnJlbW92ZShzbmFwc2hvdCk7XHJcblx0fVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
