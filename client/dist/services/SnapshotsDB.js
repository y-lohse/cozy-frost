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
							if (!snapshot.processed) _this2.observeSnapshotUntilProcessed(snapshot);
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
				}, {
					key: 'getOne',
					value: function getOne(id) {
						return this.http.fetch('snapshots/' + id, {
							method: 'GET'
						}).then(function (response) {
							return response.json();
						});
					}
				}, {
					key: 'observeSnapshotUntilProcessed',
					value: function observeSnapshotUntilProcessed(snapshot) {
						var _this4 = this;

						setTimeout(function () {
							_this4.getOne(snapshot._id).then(function (response) {
								if (!response.processed) _this4.observeSnapshotUntilProcessed(snapshot);else {
									_this4.snapshots.splice(_this4.snapshots.indexOf(snapshot), 1, response);
								}
							});
						}, 1000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1NuYXBzaG90c0RCLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt5QkFJYSxXQUFXOzs7Ozs7Ozs4QkFKaEIsTUFBTTs7b0NBQ04sVUFBVTs7O0FBR0wsY0FBVztBQUdaLGFBSEMsV0FBVyxDQUdYLElBQUksRUFBQzs7Ozs7VUFGakIsU0FBUyxHQUFHLEVBQUU7O0FBR2IsU0FBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN4QixZQUFNLENBQ0osd0JBQXdCLEVBQUUsQ0FBQztNQUM3QixDQUFDLENBQUM7O0FBRUgsU0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWpCLFNBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMzQixJQUFJLENBQUMsVUFBQSxRQUFRO2FBQUksUUFBUSxDQUFDLElBQUksRUFBRTtNQUFBLENBQUMsQ0FDakMsSUFBSSxDQUFDLFVBQUEsU0FBUyxFQUFJO0FBQ2xCLGVBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDN0IsYUFBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzlCLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztLQUNIOztpQkFsQlcsV0FBVzs7WUFtQmpCLGtCQUFFO0FBQ1AsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDO01BQ3RCOzs7WUFDRSxhQUFDLEdBQUcsRUFBQzs7O0FBQ1AsVUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM5QixlQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3JELGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2xDLGFBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTyxFQUFFLFNBQVM7QUFDbEIsV0FBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDcEIsV0FBRyxFQUFFLEdBQUc7UUFDUixDQUFDO09BQ0YsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7Y0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFO09BQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDakIsY0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlCLFdBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLE9BQUssNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDdEUsQ0FBQyxDQUFDO01BQ0g7OztZQUNLLGdCQUFDLFFBQVEsRUFBQzs7O0FBQ2YsVUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDM0MsYUFBTSxFQUFFLFFBQVE7T0FDaEIsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNqQixjQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQzNELENBQUMsQ0FBQztNQUNIOzs7WUFDRSxhQUFDLEVBQUUsRUFBQztBQUNOLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRTtBQUN4QyxhQUFNLEVBQUUsS0FBSztPQUNiLENBQUMsQ0FDRCxJQUFJLENBQUMsVUFBQSxRQUFRO2NBQUksUUFBUSxDQUFDLElBQUksRUFBRTtPQUFBLENBQUMsQ0FBQztNQUNuQzs7O1lBQ0ssZ0JBQUMsRUFBRSxFQUFDO0FBQ1QsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxFQUFFO0FBQ3pDLGFBQU0sRUFBRSxLQUFLO09BQ2IsQ0FBQyxDQUNELElBQUksQ0FBQyxVQUFBLFFBQVE7Y0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFO09BQUEsQ0FBQyxDQUFDO01BQ25DOzs7WUFDNEIsdUNBQUMsUUFBUSxFQUFDOzs7QUFDdEMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCLGNBQUssTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDMUMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBSyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUNsRTtBQUNILGdCQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNyRTtRQUNELENBQUMsQ0FBQztPQUNILEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDVDs7O3VCQW5FVyxXQUFXO0FBQVgsZUFBVyxHQUR2QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sV0FBVyxLQUFYLFdBQVc7V0FBWCxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL1NuYXBzaG90c0RCLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBTbmFwc2hvdHNEQntcclxuXHRzbmFwc2hvdHMgPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoaHR0cCl7XHJcblx0XHRodHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xyXG5cdFx0XHRjb25maWdcclxuXHRcdFx0XHQudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhpcy5odHRwID0gaHR0cDtcclxuXHRcdFxyXG5cdFx0dGhpcy5odHRwLmZldGNoKCdzbmFwc2hvdHMnKVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oc25hcHNob3RzID0+IHtcclxuXHRcdFx0c25hcHNob3RzLmZvckVhY2goc25hcHNob3QgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc25hcHNob3RzLnB1c2goc25hcHNob3QpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXRBbGwoKXtcclxuXHRcdHJldHVybiB0aGlzLnNuYXBzaG90cztcclxuXHR9XHJcblx0YWRkKHVybCl7XHJcblx0XHR2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHRcdG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLmZldGNoKCdzbmFwc2hvdCcsIHtcclxuXHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdGhlYWRlcnM6IG15SGVhZGVycyxcclxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG5cdFx0XHRcdHVybDogdXJsXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4oc25hcHNob3QgPT4ge1xyXG5cdFx0XHR0aGlzLnNuYXBzaG90cy5wdXNoKHNuYXBzaG90KTtcclxuXHRcdFx0aWYgKCFzbmFwc2hvdC5wcm9jZXNzZWQpIHRoaXMub2JzZXJ2ZVNuYXBzaG90VW50aWxQcm9jZXNzZWQoc25hcHNob3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbW92ZShzbmFwc2hvdCl7XHJcblx0XHR0aGlzLmh0dHAuZmV0Y2goJ3NuYXBzaG90LycgKyBzbmFwc2hvdC5faWQsIHtcclxuXHRcdFx0bWV0aG9kOiAnREVMRVRFJ1xyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0dGhpcy5zbmFwc2hvdHMuc3BsaWNlKHRoaXMuc25hcHNob3RzLmluZGV4T2Yoc25hcHNob3QpLCAxKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRnZXQoaWQpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3QvJyArIGlkLCB7XHJcblx0XHRcdG1ldGhvZDogJ0dFVCdcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG5cdH1cclxuXHRnZXRPbmUoaWQpe1xyXG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgnc25hcHNob3RzLycgKyBpZCwge1xyXG5cdFx0XHRtZXRob2Q6ICdHRVQnXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuXHR9XHJcblx0b2JzZXJ2ZVNuYXBzaG90VW50aWxQcm9jZXNzZWQoc25hcHNob3Qpe1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuZ2V0T25lKHNuYXBzaG90Ll9pZCkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5wcm9jZXNzZWQpIHRoaXMub2JzZXJ2ZVNuYXBzaG90VW50aWxQcm9jZXNzZWQoc25hcHNob3QpO1xyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLnNuYXBzaG90cy5zcGxpY2UodGhpcy5zbmFwc2hvdHMuaW5kZXhPZihzbmFwc2hvdCksIDEsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMTAwMCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
