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
														moduleId: 'index',
														nav: true,
														title: 'Frost'
												}, {
														route: ['/archive/:id'],
														name: 'archive',
														moduleId: 'archive',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1Q7QUFDRixtQkFBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ1gsa0JBQUksRUFBRSxPQUFPO0FBQ2Isc0JBQVEsRUFBRSxPQUFPO0FBQ2pCLGlCQUFHLEVBQUUsSUFBSTtBQUNULG1CQUFLLEVBQUUsT0FBTzthQUNkLEVBQ0U7QUFDRixtQkFBSyxFQUFFLENBQUMsY0FBYyxDQUFDO0FBQ3ZCLGtCQUFJLEVBQUUsU0FBUztBQUNmLHNCQUFRLEVBQUUsU0FBUztBQUNuQixpQkFBRyxFQUFFLElBQUk7QUFDVCxtQkFBSyxFQUFFLE9BQU87QUFDZCxrQkFBSSxFQUFFLEdBQUc7YUFDVCxDQUNDLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQXRCVSxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnRnJvc3QnO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge1xuXHRcdCAgcm91dGU6IFsnJ10sIFxuXHRcdCAgbmFtZTogJ2luZGV4JywgICAgIFxuXHRcdCAgbW9kdWxlSWQ6ICdpbmRleCcsICAgICAgXG5cdFx0ICBuYXY6IHRydWUsIFxuXHRcdCAgdGl0bGU6ICdGcm9zdCdcblx0ICB9LFxuICAgICAge1xuXHRcdCAgcm91dGU6IFsnL2FyY2hpdmUvOmlkJ10sXG5cdFx0ICBuYW1lOiAnYXJjaGl2ZScsXG5cdFx0ICBtb2R1bGVJZDogJ2FyY2hpdmUnLFxuXHRcdCAgbmF2OiB0cnVlLCBcblx0XHQgIHRpdGxlOiAnRnJvc3QnLFxuXHRcdCAgaHJlZjogJ2EnXG5cdCAgfSxcbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
