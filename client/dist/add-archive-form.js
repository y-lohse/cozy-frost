System.register(['aurelia-framework', 'ArchivesDB'], function (_export) {
	'use strict';

	var inject, ArchivesDB, AddArchiveForm;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_ArchivesDB) {
			ArchivesDB = _ArchivesDB.ArchivesDB;
		}],
		execute: function () {
			AddArchiveForm = (function () {
				function AddArchiveForm(ArchivesDB) {
					_classCallCheck(this, _AddArchiveForm);

					this.url = '';

					this.ArchivesDB = ArchivesDB;
				}

				_createClass(AddArchiveForm, [{
					key: 'submit',
					value: function submit() {
						this.ArchivesDB.add(this.url);
					}
				}]);

				var _AddArchiveForm = AddArchiveForm;
				AddArchiveForm = inject(ArchivesDB)(AddArchiveForm) || AddArchiveForm;
				return AddArchiveForm;
			})();

			_export('AddArchiveForm', AddArchiveForm);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hcmNoaXZlLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLGNBQWM7Ozs7Ozs7OzhCQUpuQixNQUFNOzs0QkFDTixVQUFVOzs7QUFHTCxpQkFBYztBQUdkLGFBSEEsY0FBYyxDQUdiLFVBQVUsRUFBQzs7O1VBRnhCLEdBQUcsR0FBRyxFQUFFOztBQUdQLFNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzdCOztpQkFMVyxjQUFjOztZQU1wQixrQkFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUM5Qjs7OzBCQVJXLGNBQWM7QUFBZCxrQkFBYyxHQUQxQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6ImFkZC1hcmNoaXZlLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0FyY2hpdmVzREJ9IGZyb20gJ0FyY2hpdmVzREInO1xyXG5cclxuQGluamVjdChBcmNoaXZlc0RCKVxyXG5leHBvcnQgY2xhc3MgQWRkQXJjaGl2ZUZvcm17XHJcblx0dXJsID0gJyc7XHJcbiBcclxuIFx0Y29uc3RydWN0b3IoQXJjaGl2ZXNEQil7XHJcblx0XHR0aGlzLkFyY2hpdmVzREIgPSBBcmNoaXZlc0RCO1xyXG5cdH1cclxuXHRzdWJtaXQoKXtcclxuXHRcdHRoaXMuQXJjaGl2ZXNEQi5hZGQodGhpcy51cmwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
