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

					this.http.fetch('snapshots').then(function (response) {
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
						return this.http.fetch('snapshot', {
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

						this.http.fetch('snapshot/' + archive._id, {
							method: 'DELETE'
						}).then(function (response) {
							_this3.archives.splice(_this3.archives.indexOf(archive), 1);
						});
					}
				}, {
					key: 'get',
					value: function get(id) {
						return this.http.fetch('snapshot/' + id, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFyY2hpdmVzREIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3lCQUlhLFVBQVU7Ozs7Ozs7OzhCQUpmLE1BQU07O29DQUNOLFVBQVU7OztBQUdMLGFBQVU7QUFHWCxhQUhDLFVBQVUsQ0FHVixJQUFJLEVBQUM7Ozs7O1VBRmpCLFFBQVEsR0FBRyxFQUFFOztBQUdaLFNBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDeEIsWUFBTSxDQUNKLHdCQUF3QixFQUFFLENBQUM7TUFDN0IsQ0FBQyxDQUFDOztBQUVILFNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVqQixTQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FDM0IsSUFBSSxDQUFDLFVBQUEsUUFBUTthQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7TUFBQSxDQUFDLENBQ2pDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzNCLGFBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUM1QixDQUFDLENBQUM7TUFDSCxDQUFDLENBQUM7S0FDSDs7aUJBbEJXLFVBQVU7O1lBbUJYLHVCQUFFO0FBQ1osYUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO01BQ3JCOzs7WUFDRSxhQUFDLEdBQUcsRUFBQzs7O0FBQ1AsVUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixlQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2xDLGFBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEIsV0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDO09BQ0YsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7Y0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFO09BQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDaEIsY0FBSyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQzVCLENBQUMsQ0FBQztNQUNIOzs7WUFDSyxnQkFBQyxPQUFPLEVBQUM7OztBQUNkLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQzFDLGFBQU0sRUFBRSxRQUFRO09BQ2hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQUssUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN4RCxDQUFDLENBQUM7TUFDSDs7O1lBQ0UsYUFBQyxFQUFFLEVBQUM7QUFDTixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7QUFDeEMsYUFBTSxFQUFFLEtBQUs7T0FDYixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtjQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7T0FBQSxDQUFDLENBQUM7TUFDbkM7OztzQkFsRFcsVUFBVTtBQUFWLGNBQVUsR0FEdEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVSIsImZpbGUiOiJBcmNoaXZlc0RCLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBBcmNoaXZlc0RCe1xyXG5cdGFyY2hpdmVzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGh0dHApe1xyXG5cdFx0aHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuXHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cCA9IGh0dHA7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3RzJylcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKGFyY2hpdmVzID0+IHtcclxuXHRcdFx0YXJjaGl2ZXMuZm9yRWFjaChhcmNoaXZlID0+IHtcclxuXHRcdFx0XHR0aGlzLmFyY2hpdmVzLnB1c2goYXJjaGl2ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldEFyY2hpdmVzKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hcmNoaXZlcztcclxuXHR9XHJcblx0YWRkKHVybCl7XHJcblx0XHR2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmZldGNoKCdzbmFwc2hvdCcsIHtcclxuXHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdGhlYWRlcnM6IG15SGVhZGVycyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdHVybDogdXJsXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oYXJjaGl2ZSA9PiB7XHJcblx0XHRcdHRoaXMuYXJjaGl2ZXMucHVzaChhcmNoaXZlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW1vdmUoYXJjaGl2ZSl7XHJcblx0XHR0aGlzLmh0dHAuZmV0Y2goJ3NuYXBzaG90LycgKyBhcmNoaXZlLl9pZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLmFyY2hpdmVzLnNwbGljZSh0aGlzLmFyY2hpdmVzLmluZGV4T2YoYXJjaGl2ZSksIDEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldChpZCl7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmZldGNoKCdzbmFwc2hvdC8nICsgaWQsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
