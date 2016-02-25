System.register(['aurelia-framework', 'ArchivesDB'], function (_export) {
	'use strict';

	var inject, ArchivesDB, Archives;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_ArchivesDB) {
			ArchivesDB = _ArchivesDB.ArchivesDB;
		}],
		execute: function () {
			Archives = (function () {
				function Archives(ArchivesDB) {
					_classCallCheck(this, _Archives);

					this.archives = [];

					this.ArchivesDB = ArchivesDB;
				}

				_createClass(Archives, [{
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

				var _Archives = Archives;
				Archives = inject(ArchivesDB)(Archives) || Archives;
				return Archives;
			})();

			_export('Archives', Archives);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5QkFJYSxRQUFROzs7Ozs7Ozs4QkFKYixNQUFNOzs0QkFDTixVQUFVOzs7QUFHTCxXQUFRO0FBR1QsYUFIQyxRQUFRLENBR1IsVUFBVSxFQUFDOzs7VUFGdkIsUUFBUSxHQUFHLEVBQUU7O0FBR1osU0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDN0I7O2lCQUxXLFFBQVE7O1lBTWIsbUJBQUU7QUFDUixVQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7TUFDOUM7OztZQUNZLHVCQUFDLE9BQU8sRUFBQztBQUNyQixVQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztNQUNoQzs7O29CQVhXLFFBQVE7QUFBUixZQUFRLEdBRHBCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixRQUFRLEtBQVIsUUFBUTtXQUFSLFFBQVEiLCJmaWxlIjoiYXJjaGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtBcmNoaXZlc0RCfSBmcm9tICdBcmNoaXZlc0RCJztcblxuQGluamVjdChBcmNoaXZlc0RCKVxuZXhwb3J0IGNsYXNzIEFyY2hpdmVze1xuXHRhcmNoaXZlcyA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKEFyY2hpdmVzREIpe1xuXHRcdHRoaXMuQXJjaGl2ZXNEQiA9IEFyY2hpdmVzREI7XG5cdH1cblx0Y3JlYXRlZCgpe1xuXHRcdHRoaXMuYXJjaGl2ZXMgPSB0aGlzLkFyY2hpdmVzREIuZ2V0QXJjaGl2ZXMoKTtcblx0fVxuXHRyZW1vdmVBcmNoaXZlKGFyY2hpdmUpe1xuXHRcdHRoaXMuQXJjaGl2ZXNEQi5yZW1vdmUoYXJjaGl2ZSk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
