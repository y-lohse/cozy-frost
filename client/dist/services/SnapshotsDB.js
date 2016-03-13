System.register(['aurelia-framework', 'aurelia-fetch-client'], function (_export) {
	'use strict';

	var inject, HttpClient, SnapshotsDB;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			inject = _aureliaFramework.inject;
		}, function (_aureliaFetchClient) {
			HttpClient = _aureliaFetchClient.HttpClient;
		}],
		execute: function () {
			SnapshotsDB = (function () {
				function SnapshotsDB(http) {
					var _this = this;

					_classCallCheck(this, _SnapshotsDB);

					this.snapshots = [];

					http.configure(function (config) {
						config.useStandardConfiguration();
					});

					this.http = http;

					this.http.fetch('snapshots').then(function (response) {
						return response.json();
					}).then(function (snapshots) {
						snapshots.forEach(function (snapshot) {
							_this.snapshots.push(snapshot);
						});
					});
				}

				_createClass(SnapshotsDB, [{
					key: 'getAll',
					value: function getAll() {
						return this.snapshots;
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
						}).then(function (snapshot) {
							_this2.snapshots.push(snapshot);
						});
					}
				}, {
					key: 'remove',
					value: function remove(snapshot) {
						var _this3 = this;

						this.http.fetch('snapshot/' + snapshot._id, {
							method: 'DELETE'
						}).then(function (response) {
							_this3.snapshots.splice(_this3.snapshots.indexOf(snapshot), 1);
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

				var _SnapshotsDB = SnapshotsDB;
				SnapshotsDB = inject(HttpClient)(SnapshotsDB) || SnapshotsDB;
				return SnapshotsDB;
			})();

			_export('SnapshotsDB', SnapshotsDB);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NuYXBzaG90c0RCLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5QkFJYSxXQUFXOzs7Ozs7Ozs4QkFKaEIsTUFBTTs7b0NBQ04sVUFBVTs7O0FBR0wsY0FBVztBQUdaLGFBSEMsV0FBVyxDQUdYLElBQUksRUFBQzs7Ozs7VUFGakIsU0FBUyxHQUFHLEVBQUU7O0FBR2IsU0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN4QixZQUFNLENBQ0osd0JBQXdCLEVBQUUsQ0FBQztNQUM3QixDQUFDLENBQUM7O0FBRUgsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWpCLFNBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzQixJQUFJLENBQUMsVUFBQSxRQUFRO2FBQUksUUFBUSxDQUFDLElBQUksRUFBRTtNQUFBLENBQUMsQ0FDakMsSUFBSSxDQUFDLFVBQUEsU0FBUyxFQUFJO0FBQ2xCLGVBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDN0IsYUFBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzlCLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztLQUNIOztpQkFsQlcsV0FBVzs7WUFtQmpCLGtCQUFFO0FBQ1AsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDO01BQ3RCOzs7WUFDRSxhQUFDLEdBQUcsRUFBQzs7O0FBQ1AsVUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixlQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2xDLGFBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEIsV0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDO09BQ0YsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7Y0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFO09BQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzlCLENBQUMsQ0FBQztNQUNIOzs7WUFDSyxnQkFBQyxRQUFRLEVBQUM7OztBQUNmLFVBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO0FBQzNDLGFBQU0sRUFBRSxRQUFRO09BQ2hCLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUMzRCxDQUFDLENBQUM7TUFDSDs7O1lBQ0UsYUFBQyxFQUFFLEVBQUM7QUFDTixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7QUFDeEMsYUFBTSxFQUFFLEtBQUs7T0FDYixDQUFDLENBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtjQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7T0FBQSxDQUFDLENBQUM7TUFDbkM7Ozt1QkFsRFcsV0FBVztBQUFYLGVBQVcsR0FEdkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9TbmFwc2hvdHNEQi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgU25hcHNob3RzREJ7XHJcblx0c25hcHNob3RzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKGh0dHApe1xyXG5cdFx0aHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuXHRcdFx0Y29uZmlnXHJcblx0XHRcdFx0LnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cCA9IGh0dHA7XHJcblx0XHRcclxuXHRcdHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3RzJylcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKHNuYXBzaG90cyA9PiB7XHJcblx0XHRcdHNuYXBzaG90cy5mb3JFYWNoKHNuYXBzaG90ID0+IHtcclxuXHRcdFx0XHR0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXBzaG90KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0Z2V0QWxsKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5zbmFwc2hvdHM7XHJcblx0fVxyXG5cdGFkZCh1cmwpe1xyXG5cdFx0dmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHRteUhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3QnLCB7XHJcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxyXG5cdFx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXHJcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHR1cmw6IHVybFxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKHNuYXBzaG90ID0+IHtcclxuXHRcdFx0dGhpcy5zbmFwc2hvdHMucHVzaChzbmFwc2hvdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVtb3ZlKHNuYXBzaG90KXtcclxuXHRcdHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3QvJyArIHNuYXBzaG90Ll9pZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHR0aGlzLnNuYXBzaG90cy5zcGxpY2UodGhpcy5zbmFwc2hvdHMuaW5kZXhPZihzbmFwc2hvdCksIDEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGdldChpZCl7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmZldGNoKCdzbmFwc2hvdC8nICsgaWQsIHtcclxuXHRcdFx0bWV0aG9kOiAnR0VUJ1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
