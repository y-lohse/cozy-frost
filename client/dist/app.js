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
														route: ['/snapshot/:id'],
														name: 'snapshot',
														moduleId: 'snapshot',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1Q7QUFDRixtQkFBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ1gsa0JBQUksRUFBRSxPQUFPO0FBQ2Isc0JBQVEsRUFBRSxPQUFPO0FBQ2pCLGlCQUFHLEVBQUUsSUFBSTtBQUNULG1CQUFLLEVBQUUsT0FBTzthQUNkLEVBQ0U7QUFDRixtQkFBSyxFQUFFLENBQUMsZUFBZSxDQUFDO0FBQ3hCLGtCQUFJLEVBQUUsVUFBVTtBQUNoQixzQkFBUSxFQUFFLFVBQVU7QUFDcEIsaUJBQUcsRUFBRSxJQUFJO0FBQ1QsbUJBQUssRUFBRSxPQUFPO0FBQ2Qsa0JBQUksRUFBRSxHQUFHO2FBQ1QsQ0FDQyxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUF0QlUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdGcm9zdCc7XHJcbiAgICBjb25maWcubWFwKFtcclxuICAgICAge1xyXG5cdFx0ICByb3V0ZTogWycnXSwgXHJcblx0XHQgIG5hbWU6ICdpbmRleCcsICAgICBcclxuXHRcdCAgbW9kdWxlSWQ6ICdpbmRleCcsICAgICAgXHJcblx0XHQgIG5hdjogdHJ1ZSwgXHJcblx0XHQgIHRpdGxlOiAnRnJvc3QnXHJcblx0ICB9LFxyXG4gICAgICB7XHJcblx0XHQgIHJvdXRlOiBbJy9zbmFwc2hvdC86aWQnXSxcclxuXHRcdCAgbmFtZTogJ3NuYXBzaG90JyxcclxuXHRcdCAgbW9kdWxlSWQ6ICdzbmFwc2hvdCcsXHJcblx0XHQgIG5hdjogdHJ1ZSwgXHJcblx0XHQgIHRpdGxlOiAnRnJvc3QnLFxyXG5cdFx0ICBocmVmOiAnYSdcclxuXHQgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
