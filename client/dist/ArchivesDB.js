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
						config.useStandardConfiguration().withBaseUrl('/');
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
						myHeaders.append('COntent-Type', 'application/json');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyY2hpdmVzREIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLFVBQVU7Ozs7Ozs7OzhCQUpmLE1BQU07O29DQUNOLFVBQVU7OztBQUdMLGFBQVU7QUFHWCxhQUhDLFVBQVUsQ0FHVixJQUFJLEVBQUM7Ozs7O1VBRmpCLFFBQVEsR0FBRyxFQUFFOztBQUdaLFNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDeEIsWUFBTSxDQUNKLHdCQUF3QixFQUFFLENBQzFCLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNuQixDQUFDLENBQUM7O0FBRUgsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWpCLFNBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUMxQixJQUFJLENBQUMsVUFBQSxRQUFRO2FBQUksUUFBUSxDQUFDLElBQUksRUFBRTtNQUFBLENBQUMsQ0FDakMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2pCLGNBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDM0IsYUFBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQzVCLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztLQUNIOztpQkFuQlcsVUFBVTs7WUFvQlgsdUJBQUU7QUFDWixhQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7TUFDckI7OztZQUNFLGFBQUMsR0FBRyxFQUFDOzs7QUFDUCxVQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQzlCLGVBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDckQsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDakMsYUFBTSxFQUFFLE1BQU07QUFDZCxjQUFPLEVBQUUsU0FBUztBQUNsQixXQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNwQixXQUFHLEVBQUUsR0FBRztRQUNSLENBQUM7T0FDRixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2pCLGNBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7T0FDdkMsQ0FBQyxDQUFDO01BQ0g7OztZQUNLLGdCQUFDLE9BQU8sRUFBQzs7O0FBQ2QsVUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDekMsYUFBTSxFQUFFLFFBQVE7T0FDaEIsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ3hELENBQUMsQ0FBQztNQUNIOzs7c0JBNUNXLFVBQVU7QUFBVixjQUFVLEdBRHRCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVUiLCJmaWxlIjoiQXJjaGl2ZXNEQi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgQXJjaGl2ZXNEQntcclxuXHRhcmNoaXZlcyA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihodHRwKXtcclxuXHRcdGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XHJcblx0XHRcdGNvbmZpZ1xyXG5cdFx0XHRcdC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG5cdFx0XHRcdC53aXRoQmFzZVVybCgnLycpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cCA9IGh0dHA7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cC5mZXRjaCgnYXJjaGl2ZXMnKVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oYXJjaGl2ZXMgPT4ge1xyXG5cdFx0XHRhcmNoaXZlcy5mb3JFYWNoKGFyY2hpdmUgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXJjaGl2ZXMucHVzaChhcmNoaXZlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0QXJjaGl2ZXMoKXtcclxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmVzO1xyXG5cdH1cclxuXHRhZGQodXJsKXtcclxuXHRcdHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0bXlIZWFkZXJzLmFwcGVuZCgnQ09udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJ2FyY2hpdmUnLCB7XHJcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHR1cmw6IHVybFxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0dGhpcy5hcmNoaXZlcy5wdXNoKHtfaWQ6IDEsIHVybDogdXJsfSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlKGFyY2hpdmUpe1xyXG5cdFx0dGhpcy5odHRwLmZldGNoKCdhcmNoaXZlLycgKyBhcmNoaXZlLl9pZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLmFyY2hpdmVzLnNwbGljZSh0aGlzLmFyY2hpdmVzLmluZGV4T2YoYXJjaGl2ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
