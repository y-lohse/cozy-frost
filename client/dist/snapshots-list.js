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
					this.href = '';

					this.SnapshotsDB = SnapshotsDB;
					this.href = window.location.href;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYXBzaG90cy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxhQUFhOzs7Ozs7Ozs4QkFKbEIsTUFBTTs7OEJBQ04sV0FBVzs7O0FBR04sZ0JBQWE7QUFJZCxhQUpDLGFBQWEsQ0FJYixXQUFXLEVBQUM7OztVQUh4QixTQUFTLEdBQUcsRUFBRTtVQUNkLElBQUksR0FBRyxFQUFFOztBQUdSLFNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFNBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDakM7O2lCQVBXLGFBQWE7O1lBUWxCLG1CQUFFO0FBQ1IsVUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO01BQzNDOzs7WUFDYSx3QkFBQyxRQUFRLEVBQUM7QUFDdkIsVUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7TUFDbEM7Ozt5QkFiVyxhQUFhO0FBQWIsaUJBQWEsR0FEekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJzbmFwc2hvdHMtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U25hcHNob3RzREJ9IGZyb20gJ1NuYXBzaG90c0RCJztcclxuXHJcbkBpbmplY3QoU25hcHNob3RzREIpXHJcbmV4cG9ydCBjbGFzcyBTbmFwc2hvdHNMaXN0e1xyXG5cdHNuYXBzaG90cyA9IFtdO1xyXG5cdGhyZWYgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IoU25hcHNob3RzREIpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQiA9IFNuYXBzaG90c0RCO1xyXG5cdFx0dGhpcy5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fVxyXG5cdGNyZWF0ZWQoKXtcclxuXHRcdHRoaXMuc25hcHNob3RzID0gdGhpcy5TbmFwc2hvdHNEQi5nZXRBbGwoKTtcclxuXHR9XHJcblx0cmVtb3ZlU25hcHNob3Qoc25hcHNob3Qpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQi5yZW1vdmUoc25hcHNob3QpO1xyXG5cdH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
