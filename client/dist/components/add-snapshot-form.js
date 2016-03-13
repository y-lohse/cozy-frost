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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkLXNuYXBzaG90LWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBCQUlhLGVBQWU7Ozs7Ozs7OzhCQUpwQixNQUFNOzs4QkFDTixXQUFXOzs7QUFHTixrQkFBZTtBQUlmLGFBSkEsZUFBZSxDQUlkLFdBQVcsRUFBQzs7O1VBSHpCLEdBQUcsR0FBRyxFQUFFO1VBQ1IsSUFBSSxHQUFHLEVBQUU7O0FBR1IsU0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsU0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUNqQzs7aUJBUFcsZUFBZTs7WUFRckIsa0JBQUU7QUFDUCxVQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsVUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7TUFDZDs7OzJCQVhXLGVBQWU7QUFBZixtQkFBZSxHQUQzQixNQUFNLENBQUMsV0FBVyxDQUFDLENBQ1AsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvYWRkLXNuYXBzaG90LWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1NuYXBzaG90c0RCfSBmcm9tICdTbmFwc2hvdHNEQic7XHJcblxyXG5AaW5qZWN0KFNuYXBzaG90c0RCKVxyXG5leHBvcnQgY2xhc3MgQWRkU25hcHNob3RGb3Jte1xyXG5cdHVybCA9ICcnO1xyXG5cdGhyZWYgPSAnJztcclxuIFxyXG4gXHRjb25zdHJ1Y3RvcihTbmFwc2hvdHNEQil7XHJcblx0XHR0aGlzLlNuYXBzaG90c0RCID0gU25hcHNob3RzREI7XHJcblx0XHR0aGlzLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuXHR9XHJcblx0c3VibWl0KCl7XHJcblx0XHR0aGlzLlNuYXBzaG90c0RCLmFkZCh0aGlzLnVybCk7XHJcblx0XHR0aGlzLnVybCA9ICcnO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
