System.register(['aurelia-framework', 'ArchivesDB'], function (_export) {
	'use strict';

	var inject, ArchivesDB, ArchivesList;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_ArchivesDB) {
			ArchivesDB = _ArchivesDB.ArchivesDB;
		}],
		execute: function () {
			ArchivesList = (function () {
				function ArchivesList(ArchivesDB) {
					_classCallCheck(this, _ArchivesList);

					this.archives = [];

					this.ArchivesDB = ArchivesDB;
				}

				_createClass(ArchivesList, [{
					key: 'created',
					value: function created() {
						this.archives = this.ArchivesDB.getArchives();
					}
				}, {
					key: 'removeArchive',
					value: function removeArchive(archive) {
						this.ArchivesDB.remove(archive);
					}
				}]);

				var _ArchivesList = ArchivesList;
				ArchivesList = inject(ArchivesDB)(ArchivesList) || ArchivesList;
				return ArchivesList;
			})();

			_export('ArchivesList', ArchivesList);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdmVzLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLFlBQVk7Ozs7Ozs7OzhCQUpqQixNQUFNOzs0QkFDTixVQUFVOzs7QUFHTCxlQUFZO0FBR2IsYUFIQyxZQUFZLENBR1osVUFBVSxFQUFDOzs7VUFGdkIsUUFBUSxHQUFHLEVBQUU7O0FBR1osU0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDN0I7O2lCQUxXLFlBQVk7O1lBTWpCLG1CQUFFO0FBQ1IsVUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO01BQzlDOzs7WUFDWSx1QkFBQyxPQUFPLEVBQUM7QUFDckIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDaEM7Ozt3QkFYVyxZQUFZO0FBQVosZ0JBQVksR0FEeEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFlBQVksS0FBWixZQUFZO1dBQVosWUFBWSIsImZpbGUiOiJhcmNoaXZlcy1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtBcmNoaXZlc0RCfSBmcm9tICdBcmNoaXZlc0RCJztcclxuXHJcbkBpbmplY3QoQXJjaGl2ZXNEQilcclxuZXhwb3J0IGNsYXNzIEFyY2hpdmVzTGlzdHtcclxuXHRhcmNoaXZlcyA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihBcmNoaXZlc0RCKXtcclxuXHRcdHRoaXMuQXJjaGl2ZXNEQiA9IEFyY2hpdmVzREI7XHJcblx0fVxyXG5cdGNyZWF0ZWQoKXtcclxuXHRcdHRoaXMuYXJjaGl2ZXMgPSB0aGlzLkFyY2hpdmVzREIuZ2V0QXJjaGl2ZXMoKTtcclxuXHR9XHJcblx0cmVtb3ZlQXJjaGl2ZShhcmNoaXZlKXtcclxuXHRcdHRoaXMuQXJjaGl2ZXNEQi5yZW1vdmUoYXJjaGl2ZSk7XHJcblx0fVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
