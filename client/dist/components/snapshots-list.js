System.register(['aurelia-framework', 'services/SnapshotsDB'], function (_export) {
	'use strict';

	var inject, SnapshotsDB, SnapshotsList;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_servicesSnapshotsDB) {
			SnapshotsDB = _servicesSnapshotsDB.SnapshotsDB;
		}],
		execute: function () {
			SnapshotsList = (function () {
				function SnapshotsList(SnapshotsDB) {
					_classCallCheck(this, _SnapshotsList);

					this.snapshots = [];
					this.loaded = false;
					this.href = '';

					this.SnapshotsDB = SnapshotsDB;
					this.href = window.location.href;
				}

				_createClass(SnapshotsList, [{
					key: 'created',
					value: function created() {
						this.snapshots = this.SnapshotsDB.getAll();
						this.loaded = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc25hcHNob3RzLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLGFBQWE7Ozs7Ozs7OzhCQUpsQixNQUFNOztzQ0FDTixXQUFXOzs7QUFHTixnQkFBYTtBQUtkLGFBTEMsYUFBYSxDQUtiLFdBQVcsRUFBQzs7O1VBSnhCLFNBQVMsR0FBRyxFQUFFO1VBQ2QsTUFBTSxHQUFHLEtBQUs7VUFDZCxJQUFJLEdBQUcsRUFBRTs7QUFHUixTQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixTQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQ2pDOztpQkFSVyxhQUFhOztZQVNsQixtQkFBRTtBQUNSLFVBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQyxVQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztNQUNuQjs7O1lBQ2Esd0JBQUMsUUFBUSxFQUFDO0FBQ3ZCLFVBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ2xDOzs7eUJBZlcsYUFBYTtBQUFiLGlCQUFhLEdBRHpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxhQUFhLEtBQWIsYUFBYTtXQUFiLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9zbmFwc2hvdHMtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U25hcHNob3RzREJ9IGZyb20gJ3NlcnZpY2VzL1NuYXBzaG90c0RCJztcclxuXHJcbkBpbmplY3QoU25hcHNob3RzREIpXHJcbmV4cG9ydCBjbGFzcyBTbmFwc2hvdHNMaXN0e1xyXG5cdHNuYXBzaG90cyA9IFtdO1xyXG5cdGxvYWRlZCA9IGZhbHNlO1xyXG5cdGhyZWYgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IoU25hcHNob3RzREIpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQiA9IFNuYXBzaG90c0RCO1xyXG5cdFx0dGhpcy5ocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0fVxyXG5cdGNyZWF0ZWQoKXtcclxuXHRcdHRoaXMuc25hcHNob3RzID0gdGhpcy5TbmFwc2hvdHNEQi5nZXRBbGwoKTtcclxuXHRcdHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHR9XHJcblx0cmVtb3ZlU25hcHNob3Qoc25hcHNob3Qpe1xyXG5cdFx0dGhpcy5TbmFwc2hvdHNEQi5yZW1vdmUoc25hcHNob3QpO1xyXG5cdH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
