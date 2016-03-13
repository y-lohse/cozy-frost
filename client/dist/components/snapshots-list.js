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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc25hcHNob3RzLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLGFBQWE7Ozs7Ozs7OzhCQUpsQixNQUFNOztzQ0FDTixXQUFXOzs7QUFHTixnQkFBYTtBQUlkLGFBSkMsYUFBYSxDQUliLFdBQVcsRUFBQzs7O1VBSHhCLFNBQVMsR0FBRyxFQUFFO1VBQ2QsSUFBSSxHQUFHLEVBQUU7O0FBR1IsU0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsU0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUNqQzs7aUJBUFcsYUFBYTs7WUFRbEIsbUJBQUU7QUFDUixVQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7TUFDM0M7OztZQUNhLHdCQUFDLFFBQVEsRUFBQztBQUN2QixVQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztNQUNsQzs7O3lCQWJXLGFBQWE7QUFBYixpQkFBYSxHQUR6QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc25hcHNob3RzLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1NuYXBzaG90c0RCfSBmcm9tICdzZXJ2aWNlcy9TbmFwc2hvdHNEQic7XHJcblxyXG5AaW5qZWN0KFNuYXBzaG90c0RCKVxyXG5leHBvcnQgY2xhc3MgU25hcHNob3RzTGlzdHtcclxuXHRzbmFwc2hvdHMgPSBbXTtcclxuXHRocmVmID0gJyc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFNuYXBzaG90c0RCKXtcclxuXHRcdHRoaXMuU25hcHNob3RzREIgPSBTbmFwc2hvdHNEQjtcclxuXHRcdHRoaXMuaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHRjcmVhdGVkKCl7XHJcblx0XHR0aGlzLnNuYXBzaG90cyA9IHRoaXMuU25hcHNob3RzREIuZ2V0QWxsKCk7XHJcblx0fVxyXG5cdHJlbW92ZVNuYXBzaG90KHNuYXBzaG90KXtcclxuXHRcdHRoaXMuU25hcHNob3RzREIucmVtb3ZlKHNuYXBzaG90KTtcclxuXHR9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
