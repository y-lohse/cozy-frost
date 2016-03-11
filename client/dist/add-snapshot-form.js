System.register(['aurelia-framework', 'SnapshotsDB'], function (_export) {
	'use strict';

	var inject, SnapshotsDB, AddSnapshotForm;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_SnapshotsDB) {
			SnapshotsDB = _SnapshotsDB.SnapshotsDB;
		}],
		execute: function () {
			AddSnapshotForm = (function () {
				function AddSnapshotForm(SnapshotsDB) {
					_classCallCheck(this, _AddSnapshotForm);

					this.url = '';
					this.href = '';

					this.SnapshotsDB = SnapshotsDB;
					this.href = window.location.href;
				}

				_createClass(AddSnapshotForm, [{
					key: 'submit',
					value: function submit() {
						this.SnapshotsDB.add(this.url);
						this.url = '';
					}
				}]);

				var _AddSnapshotForm = AddSnapshotForm;
				AddSnapshotForm = inject(SnapshotsDB)(AddSnapshotForm) || AddSnapshotForm;
				return AddSnapshotForm;
			})();

			_export('AddSnapshotForm', AddSnapshotForm);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zbmFwc2hvdC1mb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFJYSxlQUFlOzs7Ozs7Ozs4QkFKcEIsTUFBTTs7OEJBQ04sV0FBVzs7O0FBR04sa0JBQWU7QUFJZixhQUpBLGVBQWUsQ0FJZCxXQUFXLEVBQUM7OztVQUh6QixHQUFHLEdBQUcsRUFBRTtVQUNSLElBQUksR0FBRyxFQUFFOztBQUdSLFNBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQy9CLFNBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDakM7O2lCQVBXLGVBQWU7O1lBUXJCLGtCQUFFO0FBQ1AsVUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO01BQ2Q7OzsyQkFYVyxlQUFlO0FBQWYsbUJBQWUsR0FEM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNQLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZSIsImZpbGUiOiJhZGQtc25hcHNob3QtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7U25hcHNob3RzREJ9IGZyb20gJ1NuYXBzaG90c0RCJztcclxuXHJcbkBpbmplY3QoU25hcHNob3RzREIpXHJcbmV4cG9ydCBjbGFzcyBBZGRTbmFwc2hvdEZvcm17XHJcblx0dXJsID0gJyc7XHJcblx0aHJlZiA9ICcnO1xyXG4gXHJcbiBcdGNvbnN0cnVjdG9yKFNuYXBzaG90c0RCKXtcclxuXHRcdHRoaXMuU25hcHNob3RzREIgPSBTbmFwc2hvdHNEQjtcclxuXHRcdHRoaXMuaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdH1cclxuXHRzdWJtaXQoKXtcclxuXHRcdHRoaXMuU25hcHNob3RzREIuYWRkKHRoaXMudXJsKTtcclxuXHRcdHRoaXMudXJsID0gJyc7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
