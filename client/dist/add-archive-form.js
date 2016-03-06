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
						this.url = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hcmNoaXZlLWZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLGNBQWM7Ozs7Ozs7OzhCQUpuQixNQUFNOzs0QkFDTixVQUFVOzs7QUFHTCxpQkFBYztBQUdkLGFBSEEsY0FBYyxDQUdiLFVBQVUsRUFBQzs7O1VBRnhCLEdBQUcsR0FBRyxFQUFFOztBQUdQLFNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzdCOztpQkFMVyxjQUFjOztZQU1wQixrQkFBRTtBQUNQLFVBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixVQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztNQUNkOzs7MEJBVFcsY0FBYztBQUFkLGtCQUFjLEdBRDFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixjQUFjLEtBQWQsY0FBYztXQUFkLGNBQWMiLCJmaWxlIjoiYWRkLWFyY2hpdmUtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7QXJjaGl2ZXNEQn0gZnJvbSAnQXJjaGl2ZXNEQic7XHJcblxyXG5AaW5qZWN0KEFyY2hpdmVzREIpXHJcbmV4cG9ydCBjbGFzcyBBZGRBcmNoaXZlRm9ybXtcclxuXHR1cmwgPSAnJztcclxuIFxyXG4gXHRjb25zdHJ1Y3RvcihBcmNoaXZlc0RCKXtcclxuXHRcdHRoaXMuQXJjaGl2ZXNEQiA9IEFyY2hpdmVzREI7XHJcblx0fVxyXG5cdHN1Ym1pdCgpe1xyXG5cdFx0dGhpcy5BcmNoaXZlc0RCLmFkZCh0aGlzLnVybCk7XHJcblx0XHR0aGlzLnVybCA9ICcnO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
