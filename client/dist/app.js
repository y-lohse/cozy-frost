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
												config.title = 'Cozy Archives';
												config.map([{
														route: [''],
														name: 'index',
														moduleId: 'index',
														nav: true,
														title: 'Cozy Archives'
												}, {
														route: ['/archive/:id'],
														name: 'archive',
														moduleId: 'archive',
														nav: true,
														title: 'Cozy Archives',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO0FBQy9CLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1Q7QUFDRixtQkFBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ1gsa0JBQUksRUFBRSxPQUFPO0FBQ2Isc0JBQVEsRUFBRSxPQUFPO0FBQ2pCLGlCQUFHLEVBQUUsSUFBSTtBQUNULG1CQUFLLEVBQUUsZUFBZTthQUN0QixFQUNFO0FBQ0YsbUJBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztBQUN2QixrQkFBSSxFQUFFLFNBQVM7QUFDZixzQkFBUSxFQUFFLFNBQVM7QUFDbkIsaUJBQUcsRUFBRSxJQUFJO0FBQ1QsbUJBQUssRUFBRSxlQUFlO0FBQ3RCLGtCQUFJLEVBQUUsR0FBRzthQUNULENBQ0MsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBdEJVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy50aXRsZSA9ICdDb3p5IEFyY2hpdmVzJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHtcblx0XHQgIHJvdXRlOiBbJyddLCBcblx0XHQgIG5hbWU6ICdpbmRleCcsICAgICBcblx0XHQgIG1vZHVsZUlkOiAnaW5kZXgnLCAgICAgIFxuXHRcdCAgbmF2OiB0cnVlLCBcblx0XHQgIHRpdGxlOiAnQ296eSBBcmNoaXZlcydcblx0ICB9LFxuICAgICAge1xuXHRcdCAgcm91dGU6IFsnL2FyY2hpdmUvOmlkJ10sXG5cdFx0ICBuYW1lOiAnYXJjaGl2ZScsXG5cdFx0ICBtb2R1bGVJZDogJ2FyY2hpdmUnLFxuXHRcdCAgbmF2OiB0cnVlLCBcblx0XHQgIHRpdGxlOiAnQ296eSBBcmNoaXZlcycsXG5cdFx0ICBocmVmOiAnYSdcblx0ICB9LFxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
