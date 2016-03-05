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
							return response.json();
						}).then(function (archive) {
							_this2.archives.push(archive);
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
				}, {
					key: 'get',
					value: function get(id) {
						return this.http.fetch('archive/' + id, {
							method: 'GET'
						}).then(function (response) {
							return response.json();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyY2hpdmVzREIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLFVBQVU7Ozs7Ozs7OzhCQUpmLE1BQU07O29DQUNOLFVBQVU7OztBQUdMLGFBQVU7QUFHWCxhQUhDLFVBQVUsQ0FHVixJQUFJLEVBQUM7Ozs7O1VBRmpCLFFBQVEsR0FBRyxFQUFFOztBQUdaLFNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDeEIsWUFBTSxDQUNKLHdCQUF3QixFQUFFLENBQUM7TUFDN0IsQ0FBQyxDQUFDOztBQUVILFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixTQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FDMUIsSUFBSSxDQUFDLFVBQUEsUUFBUTthQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7TUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzNCLGFBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUM1QixDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7S0FDSDs7aUJBbEJXLFVBQVU7O1lBbUJYLHVCQUFFO0FBQ1osYUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO01BQ3JCOzs7WUFDRSxhQUFDLEdBQUcsRUFBQzs7O0FBQ1AsVUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixlQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ2pDLGFBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEIsV0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDO09BQ0YsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7Y0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFO09BQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDaEIsY0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQzVCLENBQUMsQ0FBQztNQUNIOzs7WUFDSyxnQkFBQyxPQUFPLEVBQUM7OztBQUNkLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3pDLGFBQU0sRUFBRSxRQUFRO09BQ2hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN4RCxDQUFDLENBQUM7TUFDSDs7O1lBQ0UsYUFBQyxFQUFFLEVBQUM7QUFDTixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUU7QUFDdkMsYUFBTSxFQUFFLEtBQUs7T0FDYixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtjQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7T0FBQSxDQUFDLENBQUM7TUFDbkM7OztzQkFsRFcsVUFBVTtBQUFWLGNBQVUsR0FEdEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVSIsImZpbGUiOiJBcmNoaXZlc0RCLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBBcmNoaXZlc0RCe1xyXG5cdGFyY2hpdmVzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGh0dHApe1xyXG5cdFx0aHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuXHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cCA9IGh0dHA7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cC5mZXRjaCgnYXJjaGl2ZXMnKVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oYXJjaGl2ZXMgPT4ge1xyXG5cdFx0XHRhcmNoaXZlcy5mb3JFYWNoKGFyY2hpdmUgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXJjaGl2ZXMucHVzaChhcmNoaXZlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0QXJjaGl2ZXMoKXtcclxuXHRcdHJldHVybiB0aGlzLmFyY2hpdmVzO1xyXG5cdH1cclxuXHRhZGQodXJsKXtcclxuXHRcdHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdFx0bXlIZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJ2FyY2hpdmUnLCB7XHJcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHR1cmw6IHVybFxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKGFyY2hpdmUgPT4ge1xyXG5cdFx0XHR0aGlzLmFyY2hpdmVzLnB1c2goYXJjaGl2ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlKGFyY2hpdmUpe1xyXG5cdFx0dGhpcy5odHRwLmZldGNoKCdhcmNoaXZlLycgKyBhcmNoaXZlLl9pZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLmFyY2hpdmVzLnNwbGljZSh0aGlzLmFyY2hpdmVzLmluZGV4T2YoYXJjaGl2ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldChpZCl7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmZldGNoKCdhcmNoaXZlLycgKyBpZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
