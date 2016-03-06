System.register(['moment'], function (_export) {
	'use strict';

	var moment, DateFormatValueConverter;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_moment) {
			moment = _moment['default'];
		}],
		execute: function () {
			DateFormatValueConverter = (function () {
				function DateFormatValueConverter() {
					_classCallCheck(this, DateFormatValueConverter);
				}

				_createClass(DateFormatValueConverter, [{
					key: 'toView',
					value: function toView(value) {
						return moment(value).fromNow();
					}
				}]);

				return DateFormatValueConverter;
			})();

			_export('DateFormatValueConverter', DateFormatValueConverter);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzthQUVhLHdCQUF3Qjs7Ozs7Ozs7Ozs7QUFBeEIsMkJBQXdCO2FBQXhCLHdCQUF3QjsyQkFBeEIsd0JBQXdCOzs7aUJBQXhCLHdCQUF3Qjs7WUFDOUIsZ0JBQUMsS0FBSyxFQUFFO0FBQ2IsYUFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7TUFDL0I7OztXQUhXLHdCQUF3QiIsImZpbGUiOiJkYXRlLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0VmFsdWVDb252ZXJ0ZXIge1xyXG5cdHRvVmlldyh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIG1vbWVudCh2YWx1ZSkuZnJvbU5vdygpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
