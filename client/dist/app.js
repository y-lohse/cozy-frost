System.register([], function (_export) {
		'use strict';

		var App;

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		return {
				setters: [],
				execute: function () {
						App = (function () {
								function App() {
										_classCallCheck(this, App);
								}

								_createClass(App, [{
										key: 'configureRouter',
										value: function configureRouter(config, router) {
												config.title = 'Frost';
												config.map([{
														route: [''],
														name: 'index',
														moduleId: 'views/index',
														nav: true,
														title: 'Frost'
												}, {
														route: ['/snapshot/:id'],
														name: 'snapshot',
														moduleId: 'views/snapshot',
														nav: true,
														title: 'Frost',
														href: 'a'
												}]);

												this.router = router;
										}
								}]);

								return App;
						})();

						_export('App', App);
				}
		};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1Q7QUFDRixtQkFBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ1gsa0JBQUksRUFBRSxPQUFPO0FBQ2Isc0JBQVEsRUFBRSxhQUFhO0FBQ3ZCLGlCQUFHLEVBQUUsSUFBSTtBQUNULG1CQUFLLEVBQUUsT0FBTzthQUNkLEVBQ0U7QUFDRixtQkFBSyxFQUFFLENBQUMsZUFBZSxDQUFDO0FBQ3hCLGtCQUFJLEVBQUUsVUFBVTtBQUNoQixzQkFBUSxFQUFFLGdCQUFnQjtBQUMxQixpQkFBRyxFQUFFLElBQUk7QUFDVCxtQkFBSyxFQUFFLE9BQU87QUFDZCxrQkFBSSxFQUFFLEdBQUc7YUFDVCxDQUNDLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQXRCVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ0Zyb3N0JztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7XHJcblx0XHQgIHJvdXRlOiBbJyddLCBcclxuXHRcdCAgbmFtZTogJ2luZGV4JywgICAgIFxyXG5cdFx0ICBtb2R1bGVJZDogJ3ZpZXdzL2luZGV4JywgICAgICBcclxuXHRcdCAgbmF2OiB0cnVlLCBcclxuXHRcdCAgdGl0bGU6ICdGcm9zdCdcclxuXHQgIH0sXHJcbiAgICAgIHtcclxuXHRcdCAgcm91dGU6IFsnL3NuYXBzaG90LzppZCddLFxyXG5cdFx0ICBuYW1lOiAnc25hcHNob3QnLFxyXG5cdFx0ICBtb2R1bGVJZDogJ3ZpZXdzL3NuYXBzaG90JyxcclxuXHRcdCAgbmF2OiB0cnVlLCBcclxuXHRcdCAgdGl0bGU6ICdGcm9zdCcsXHJcblx0XHQgIGhyZWY6ICdhJ1xyXG5cdCAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
