System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
	'use strict';

	var inject, HttpClient, ArchivesDB;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaFetchClient) {
			HttpClient = _aureliaFetchClient.HttpClient;
		}],
		execute: function () {
			ArchivesDB = (function () {
				function ArchivesDB(http) {
					var _this = this;

					_classCallCheck(this, _ArchivesDB);

					this.archives = [];

					http.configure(function (config) {
						config.useStandardConfiguration();
					});

					this.http = http;

					this.http.fetch('archives').then(function (response) {
						return response.json();
					}).then(function (archives) {
						archives.forEach(function (archive) {
							_this.archives.push(archive);
						});
					});
				}

				_createClass(ArchivesDB, [{
					key: 'getArchives',
					value: function getArchives() {
						return this.archives;
					}
				}, {
					key: 'add',
					value: function add(url) {
						var _this2 = this;

						var myHeaders = new Headers();
						myHeaders.append('Content-Type', 'application/json');
						return this.http.fetch('archive', {
							method: 'post',
							headers: myHeaders,
							body: JSON.stringify({
								url: url
							})
						}).then(function (response) {
							_this2.archives.push({ _id: 1, url: url });
						});
					}
				}, {
					key: 'remove',
					value: function remove(archive) {
						var _this3 = this;

						this.http.fetch('archive/' + archive._id, {
							method: 'DELETE'
						}).then(function (response) {
							_this3.archives.splice(_this3.archives.indexOf(archive), 1);
						});
					}
				}]);

				var _ArchivesDB = ArchivesDB;
				ArchivesDB = inject(HttpClient)(ArchivesDB) || ArchivesDB;
				return ArchivesDB;
			})();

			_export('ArchivesDB', ArchivesDB);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyY2hpdmVzREIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLFVBQVU7Ozs7Ozs7OzhCQUpmLE1BQU07O29DQUNOLFVBQVU7OztBQUdMLGFBQVU7QUFHWCxhQUhDLFVBQVUsQ0FHVixJQUFJLEVBQUM7Ozs7O1VBRmpCLFFBQVEsR0FBRyxFQUFFOztBQUdaLFNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDeEIsWUFBTSxDQUNKLHdCQUF3QixFQUFFLENBQUM7TUFDN0IsQ0FBQyxDQUFDOztBQUVILFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixTQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FDMUIsSUFBSSxDQUFDLFVBQUEsUUFBUTthQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7TUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzNCLGFBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUM1QixDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7S0FDSDs7aUJBbEJXLFVBQVU7O1lBbUJYLHVCQUFFO0FBQ1osYUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO01BQ3JCOzs7WUFDRSxhQUFDLEdBQUcsRUFBQzs7O0FBQ1AsVUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixlQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ2pDLGFBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEIsV0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDO09BQ0YsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO09BQ3ZDLENBQUMsQ0FBQztNQUNIOzs7WUFDSyxnQkFBQyxPQUFPLEVBQUM7OztBQUNkLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3pDLGFBQU0sRUFBRSxRQUFRO09BQ2hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN4RCxDQUFDLENBQUM7TUFDSDs7O3NCQTNDVyxVQUFVO0FBQVYsY0FBVSxHQUR0QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVIiwiZmlsZSI6IkFyY2hpdmVzREIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIEFyY2hpdmVzREJ7XHJcblx0YXJjaGl2ZXMgPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoaHR0cCl7XHJcblx0XHRodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG5cdFx0XHRjb25maWdcclxuXHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5odHRwID0gaHR0cDtcclxuXHRcdFxyXG5cdFx0dGhpcy5odHRwLmZldGNoKCdhcmNoaXZlcycpXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihhcmNoaXZlcyA9PiB7XHJcblx0XHRcdGFyY2hpdmVzLmZvckVhY2goYXJjaGl2ZSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hcmNoaXZlcy5wdXNoKGFyY2hpdmUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRBcmNoaXZlcygpe1xyXG5cdFx0cmV0dXJuIHRoaXMuYXJjaGl2ZXM7XHJcblx0fVxyXG5cdGFkZCh1cmwpe1xyXG5cdFx0dmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnYXJjaGl2ZScsIHtcclxuXHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdGhlYWRlcnM6IG15SGVhZGVycyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdHVybDogdXJsXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLmFyY2hpdmVzLnB1c2goe19pZDogMSwgdXJsOiB1cmx9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW1vdmUoYXJjaGl2ZSl7XHJcblx0XHR0aGlzLmh0dHAuZmV0Y2goJ2FyY2hpdmUvJyArIGFyY2hpdmUuX2lkLCB7XHJcblx0XHRcdG1ldGhvZDogJ0RFTEVURSdcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdHRoaXMuYXJjaGl2ZXMuc3BsaWNlKHRoaXMuYXJjaGl2ZXMuaW5kZXhPZihhcmNoaXZlKSwgMSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
