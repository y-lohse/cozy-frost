System.register(['aurelia-framework', 'ArchivesDB'], function (_export) {
	'use strict';

	var inject, ArchivesDB, Archive;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_ArchivesDB) {
			ArchivesDB = _ArchivesDB.ArchivesDB;
		}],
		execute: function () {
			Archive = (function () {
				function Archive(ArchivesDB) {
					_classCallCheck(this, _Archive);

					this.src = '';

					this.ArchivesDB = ArchivesDB;
				}

				_createClass(Archive, [{
					key: 'activate',
					value: function activate(params) {
						var _this = this;

						this.ArchivesDB.get(params.id).then(function (response) {
							_this.src = response.url;
						});
					}
				}]);

				var _Archive = Archive;
				Archive = inject(ArchivesDB)(Archive) || Archive;
				return Archive;
			})();

			_export('Archive', Archive);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyY2hpdmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLE9BQU87Ozs7Ozs7OzhCQUpaLE1BQU07OzRCQUNOLFVBQVU7OztBQUdMLFVBQU87QUFHUixhQUhDLE9BQU8sQ0FHUCxVQUFVLEVBQUM7OztVQUZ2QixHQUFHLEdBQUcsRUFBRTs7QUFHUCxTQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM3Qjs7aUJBTFcsT0FBTzs7WUFNWCxrQkFBQyxNQUFNLEVBQUM7OztBQUNmLFVBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FDN0IsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2pCLGFBQUssR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7T0FDeEIsQ0FBQyxDQUFBO01BQ0Y7OzttQkFYVyxPQUFPO0FBQVAsV0FBTyxHQURuQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sT0FBTyxLQUFQLE9BQU87V0FBUCxPQUFPIiwiZmlsZSI6ImFyY2hpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0FyY2hpdmVzREJ9IGZyb20gJ0FyY2hpdmVzREInO1xyXG5cclxuQGluamVjdChBcmNoaXZlc0RCKVxyXG5leHBvcnQgY2xhc3MgQXJjaGl2ZXtcclxuXHRzcmMgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IoQXJjaGl2ZXNEQil7XHJcblx0XHR0aGlzLkFyY2hpdmVzREIgPSBBcmNoaXZlc0RCO1xyXG5cdH1cclxuXHRhY3RpdmF0ZShwYXJhbXMpe1xyXG5cdFx0dGhpcy5BcmNoaXZlc0RCLmdldChwYXJhbXMuaWQpXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHRoaXMuc3JjID0gcmVzcG9uc2UudXJsO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
