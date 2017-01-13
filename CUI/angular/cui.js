"use strict";
(function($, angular) {
angular.module("cui", []).run(["$templateCache", function($templateCache) {$templateCache.put("cui/angular/directives/templates/accordion-section.html","<section class=\"cui-accordion__section\">\r\n    <header class=\"cui-accordion__title\">\r\n        <a href ng-click=\"toggle()\" class=\"cui-accordion__toggle\" ng-transclude=\"title\"></a>\r\n    </header>\r\n    <div class=\"cui-accordion__content\" ng-class=\"{\'is-shown\':shown}\" ng-transclude=\"content\"></div>\r\n</section>");
$templateCache.put("cui/angular/directives/templates/accordion.html","<div class=\"cui-accordion\" ng-transclude></div>");
$templateCache.put("cui/angular/directives/templates/checkboxes.html","<ul class=\"o-list o-list--{{::orientation}}\">\r\n    <li ng-repeat=\"option in options\" class=\"o-list__item\">\r\n        <label class=\"cui-label\">\r\n            <input ng-model=\"$parent.value[option.value]\" ng-change=\"change()\" ng-disabled=\"disabled\" value=\"{{::getOptionValue(option)}}\" class=\"cui-checkbox\" type=\"checkbox\" /><i></i>\r\n            <span>{{::getOptionLabel(option)}}</span>\r\n        </label>\r\n    </li>\r\n</ul>");
$templateCache.put("cui/angular/directives/templates/datatable.html","<table class=\"cui-data-table\" ng-class=\"{\'is-resorting\':flags.resorting}\">\r\n    <thead>\r\n        <tr class=\"cui-data-table__head-row\">\r\n            <th ng-if=\"flags.selectable\" class=\"cui-data-table__head-cell\">\r\n                <label class=\"cui-label\">\r\n                    <input type=\"checkbox\" cui-checkbox ng-model=\"flags.selectAll\" ng-change=\"selectAllChange()\" indeterminate=\"flags.indeterminate\" />\r\n                    <span class=\"u-a11y\">all</span>\r\n                </label>\r\n            </th>\r\n            <th ng-repeat=\"column in columns | filter:columnsFilter\"\r\n                ng-attr-tabindex=\"{{getSortTabindex(column)}}\"\r\n                ng-click=\"headCellClick(column)\"\r\n                class=\"cui-data-table__head-cell\"\r\n                ng-class=\"getSortClasses(column)\">{{ displayLabel(column) }}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr ng-repeat=\"row in rows\" class=\"cui-data-table__row\" ng-dblclick=\"dblclick({row:row})\">\r\n            <td ng-if=\"flags.selectable\" class=\"cui-data-table__cell\">\r\n                <label class=\"cui-label\">\r\n                    <input type=\"checkbox\" cui-checkbox ng-model=\"row.selected\" />\r\n                    <span class=\"u-a11y\">select</span>\r\n                </label>\r\n            </td>\r\n            <td ng-repeat=\"column in columns | filter:columnsFilter\" class=\"cui-data-table__cell\">\r\n                <cui-data-table-content />\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>");
$templateCache.put("cui/angular/directives/templates/formfield.html","<div class=\"cui-form-field\" ng-class=\"getLayoutClasses(layout)\">\r\n    <div class=\"cui-form-field__label-box\">\r\n        <label ng-transclude=\"label\" class=\"cui-form-field__label cui-label\" ng-class=\"{\'cui-label--mandatory\':mandatory}\"></label>\r\n    </div>\r\n    <div ng-transclude=\"control\" class=\"cui-form-field__control-box\"></div>\r\n    <div ng-transclude=\"hint\" class=\"cui-form-field__hint-box\"></div>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/pagination.html","<div class=\"cui-pagination\">\r\n    <button ng-click=\"request({number:data.currentPage - 1})\" ng-disabled=\"isFirst()\" class=\"cui-pagination__prev\"><span class=\"cui-pagination__label\">{{ prevLabel }}</span></button>\r\n    <span class=\"cui-pagination__numbers\">{{ data.resultsFrom }}&ndash;{{ data.resultsTo }} <em>{{ ofLabel }}</em> {{ data.numberOfResults }}</span>\r\n    <button ng-click=\"request({number:data.currentPage + 1})\" ng-disabled=\"isLast()\" class=\"cui-pagination__next\"><span class=\"cui-pagination__label\">{{ nextLabel }}</span></button>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/paymentschedule.html","<div class=\"cui-payment-schedule\">\r\n    <span ng-if=\"frequency\" class=\"cui-payment-schedule__frequency\">{{frequency}}</span>\r\n    <ol class=\"cui-payment-schedule__list\">\r\n        <li ng-repeat=\"payment in list\" class=\"cui-payment-schedule__item\"\r\n            ng-class=\"{\'cui-payment-schedule__item--headline\':(payment.headline)}\">\r\n            <span class=\"cui-payment-schedule__count\">{{::payment.count}}</span>\r\n            <span class=\"cui-payment-schedule__value\">{{::payment.value | currency}}</span>\r\n        </li>\r\n    </ol>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/popover.html","<div class=\"cui-popover\" aria-hidden=\"true\">\r\n    <div class=\"cui-popover__layout\">\r\n        <div class=\"cui-popover__content\" ng-transclude></div>\r\n    </div>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/radios.html","<ul class=\"o-list o-list--{{::orientation}}\">\r\n    <li ng-repeat=\"option in options\" class=\"o-list__item\">\r\n        <label class=\"cui-label\">\r\n            <input ng-model=\"$parent.value\" ng-change=\"change()\" ng-disabled=\"disabled\" ng-required=\"isRequired()\" value=\"{{::getOptionValue(option)}}\" class=\"cui-radio\" type=\"radio\" /><i></i>\r\n            <span>{{::getOptionLabel(option)}}</span>\r\n        </label>\r\n    </li>\r\n</ul>");
$templateCache.put("cui/angular/directives/templates/spinner.html","<div class=\"cui-spinner\" ng-class=\"{\'is-spinning\':trigger}\">\r\n    <svg class=\"cui-spinner__drawing\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <circle class=\"cui-spinner__circle\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\r\n    </svg>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/steps.html","<ol class=\"cui-steps\">\r\n    <li ng-repeat=\"step in steps\" class=\"cui-steps__item\" ng-class=\"{\'cui-steps__item--done\':isDone(step),\'cui-steps__item--current\':isCurrent(step)}\" translate>{{ translations + \'.\' + step }}</li>\r\n</ol>");
$templateCache.put("cui/angular/directives/templates/switcher.html","<ul class=\"cui-switcher cui-switcher--{{::format}}\">\r\n    <li ng-repeat=\"option in options\" class=\"cui-switcher__item\"><label class=\"cui-switcher__label\"><input ng-model=\"$parent.value\" ng-change=\"change()\" ng-disabled=\"disabled\" value=\"{{::getOptionValue(option)}}\" class=\"cui-switcher__input\" type=\"radio\" /><i class=\"cui-switcher__text\">{{::getOptionLabel(option)}}</i></label>\r\n</ul>");
$templateCache.put("cui/angular/directives/templates/tabbed-part.html","<div class=\"cui-tabbed__part\" ng-class=\"{\'is-active\':isActive()}\" ng-hide=\"hide\" ng-transclude></div>");
$templateCache.put("cui/angular/directives/templates/tabbed.html","<div class=\"cui-tabbed\">\r\n    <ul class=\"cui-tabbed__tabs\">\r\n        <li ng-repeat=\"part in parts | filter:isHidden\" class=\"cui-tabbed__tab\">\r\n            <a href ng-click=\"activate(part.name)\" data-hook=\"tabbed.{{part.name}}.tab\" class=\"cui-tabbed__anchor {{part.anchorClass}}\" ng-class=\"{\'is-active\':isActive(part.name)}\">{{part.label}}</a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"cui-tabbed__content\" ng-transclude></div>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/toast.html","<div class=\"cui-toast cui-toast--{{::severity || \'info\'}}\" ng-class=\"{\'is-shown\':trigger}\">\r\n    <div class=\"cui-toast__inner\">\r\n        <div class=\"cui-toast__message\" ng-transclude></div>\r\n        <div ng-if=\"hasAction()\" class=\"cui-toast__action\">\r\n            <button ng-click=\"doAction()\" type=\"button\" class=\"cui-button cui-button--compact\">{{::actionLabel}}</button>\r\n        </div>\r\n    </div>\r\n</div>");
$templateCache.put("cui/angular/directives/templates/waiting.html","<div class=\"cui-waiting\" ng-class=\"{\'is-shown\':isShown()}\">\r\n    <div class=\"cui-waiting__layout\">\r\n        <div ng-if=\"isWaiting()\" class=\"cui-waiting__content\">\r\n            <cui-spinner trigger=\"isShown()\" type=\"inline\"></cui-spinner>\r\n            <span ng-transclude=\"waiting\"></span>\r\n        </div>\r\n        <div ng-if=\"isDone()\" class=\"cui-waiting__content\">\r\n            <i class=\"material-icons o-color-proceed\" aria-hidden=\"true\">&#xE877;</i>\r\n            <span ng-transclude=\"done\"></span>\r\n        </div>\r\n        <div ng-if=\"isFailed()\" class=\"cui-waiting__content\">\r\n            <i class=\"material-icons o-color-retreat\" aria-hidden=\"true\">&#xE000;</i>\r\n            <span ng-transclude=\"failed\"></span>\r\n        </div>\r\n    </div>\r\n</div>");}]);
"use strict";

angular.module("cui").directive("cuiAccordion", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        templateUrl: "cui/angular/directives/templates/accordion.html",
        scope: {}
    };
}).directive("cuiAccordionSection", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/accordion-section.html",
        transclude: {
            title: "sectionTitle",
            content: "sectionContent"
        },
        scope: {
            shown: "<?"
        },
        controller: ["$scope", function ($scope) {
            angular.extend($scope, {
                toggle: toggle
            });

            function toggle() {
                $scope.shown = !$scope.shown;
            }
        }]
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93biIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJleHRlbmQiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxjQUFoQyxFQUFnRCxZQUFXO0FBQ3ZELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLG9CQUFZLElBSFQ7QUFJSEMscUJBQWEsaURBSlY7QUFLSEMsZUFBTztBQUxKLEtBQVA7QUFPSCxDQVJELEVBUUdMLFNBUkgsQ0FRYSxxQkFSYixFQVFvQyxZQUFXO0FBQzNDLFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hFLHFCQUFhLHlEQUhWO0FBSUhELG9CQUFZO0FBQ1JHLG1CQUFPLGNBREM7QUFFUkMscUJBQVM7QUFGRCxTQUpUO0FBUUhGLGVBQU87QUFDSEcsbUJBQU87QUFESixTQVJKO0FBV0hDLG9CQUFZLENBQUMsUUFBRCxFQUFXLFVBQVNDLE1BQVQsRUFBaUI7QUFDcENaLG9CQUFRYSxNQUFSLENBQWVELE1BQWYsRUFBdUI7QUFDbkJFO0FBRG1CLGFBQXZCOztBQUlBLHFCQUFTQSxNQUFULEdBQWtCO0FBQ2RGLHVCQUFPRixLQUFQLEdBQWUsQ0FBQ0UsT0FBT0YsS0FBdkI7QUFDSDtBQUNKLFNBUlc7QUFYVCxLQUFQO0FBcUJILENBOUJEIiwiZmlsZSI6ImFjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aUFjY29yZGlvblwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjdWkvYW5ndWxhci9kaXJlY3RpdmVzL3RlbXBsYXRlcy9hY2NvcmRpb24uaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlOiB7fVxyXG4gICAgfTtcclxufSkuZGlyZWN0aXZlKFwiY3VpQWNjb3JkaW9uU2VjdGlvblwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvYWNjb3JkaW9uLXNlY3Rpb24uaHRtbFwiLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwic2VjdGlvblRpdGxlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwic2VjdGlvbkNvbnRlbnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgc2hvd246IFwiPD9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zaG93biA9ICEkc2NvcGUuc2hvd247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

angular.module("cui").directive("cuiCheckbox", function () {
    return {
        restrict: "A",
        scope: {
            indeterminate: "=?"
        },
        compile: function compile() {
            return {
                post: function post(scope, elem) {
                    elem.addClass("cui-checkbox").after("<i></i> ");

                    scope.$watch("indeterminate", function (newValue) {
                        elem.prop("indeterminate", !!newValue);
                    });
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInNjb3BlIiwiaW5kZXRlcm1pbmF0ZSIsImNvbXBpbGUiLCJwb3N0IiwiZWxlbSIsImFkZENsYXNzIiwiYWZ0ZXIiLCIkd2F0Y2giLCJuZXdWYWx1ZSIsInByb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxhQUFoQyxFQUErQyxZQUFXO0FBQ3RELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxlQUFPO0FBQ0hDLDJCQUFlO0FBRFosU0FGSjtBQUtIQyxpQkFBUyxtQkFBVztBQUNoQixtQkFBTztBQUNIQyxzQkFBTSxjQUFTSCxLQUFULEVBQWdCSSxJQUFoQixFQUFzQjtBQUN4QkEseUJBQUtDLFFBQUwsQ0FBYyxjQUFkLEVBQThCQyxLQUE5QixDQUFvQyxVQUFwQzs7QUFFQU4sMEJBQU1PLE1BQU4sQ0FBYSxlQUFiLEVBQThCLFVBQVNDLFFBQVQsRUFBbUI7QUFDN0NKLDZCQUFLSyxJQUFMLENBQVUsZUFBVixFQUEyQixDQUFDLENBQUNELFFBQTdCO0FBQ0gscUJBRkQ7QUFHSDtBQVBFLGFBQVA7QUFTSDtBQWZFLEtBQVA7QUFpQkgsQ0FsQkQiLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImN1aVwiKS5kaXJlY3RpdmUoXCJjdWlDaGVja2JveFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IFwiPT9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0OiBmdW5jdGlvbihzY29wZSwgZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJjdWktY2hlY2tib3hcIikuYWZ0ZXIoXCI8aT48L2k+IFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwiaW5kZXRlcm1pbmF0ZVwiLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnByb3AoXCJpbmRldGVybWluYXRlXCIsICEhbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

angular.module("cui").directive("cuiCheckboxes", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/checkboxes.html",
        scope: {
            changeExpression: "&change",
            value: "=property",
            options: "=",
            disabled: "=",
            orientation: "@",
            translations: "@"
        },
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            if (!$scope.value) {
                $scope.value = {};
            }

            function getLabelConventionally(option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.label;
                }
                return option;
            }

            function getLabelTranslation(option) {
                return $scope.translations + "." + getLabelConventionally(option);
            }

            $scope.getOptionLabel = function (option) {
                return $scope.translations ? getLabelTranslation(option) : getLabelConventionally(option);
            };

            $scope.getOptionValue = function (option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.value;
                }
                return option;
            };

            $scope.change = function () {
                $timeout(function () {
                    $scope.changeExpression();
                });
            };
        }],
        compile: function compile(telem, tattrs) {
            if (tattrs.translations) {
                telem.find(".cui-checkbox").nextAll("span").attr("translate", "");
            }

            return {
                pre: function pre(scope, elem) {
                    // ie will try to honour the `disabled` attribute even though it's not on
                    // a focusable form element, with hilarious results, so we pull it off
                    elem.removeAttr("disabled");
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94ZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJjaGFuZ2VFeHByZXNzaW9uIiwidmFsdWUiLCJvcHRpb25zIiwiZGlzYWJsZWQiLCJvcmllbnRhdGlvbiIsInRyYW5zbGF0aW9ucyIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkdGltZW91dCIsImdldExhYmVsQ29udmVudGlvbmFsbHkiLCJvcHRpb24iLCJsYWJlbCIsImdldExhYmVsVHJhbnNsYXRpb24iLCJnZXRPcHRpb25MYWJlbCIsImdldE9wdGlvblZhbHVlIiwiY2hhbmdlIiwiY29tcGlsZSIsInRlbGVtIiwidGF0dHJzIiwiZmluZCIsIm5leHRBbGwiLCJhdHRyIiwicHJlIiwiZWxlbSIsInJlbW92ZUF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLEtBQWYsRUFBc0JDLFNBQXRCLENBQWdDLGVBQWhDLEVBQWlELFlBQVc7QUFDeEQsV0FBTztBQUNIQyxrQkFBVSxHQURQO0FBRUhDLGlCQUFTLElBRk47QUFHSEMscUJBQWEsa0RBSFY7QUFJSEMsZUFBTztBQUNIQyw4QkFBa0IsU0FEZjtBQUVIQyxtQkFBTyxXQUZKO0FBR0hDLHFCQUFTLEdBSE47QUFJSEMsc0JBQVUsR0FKUDtBQUtIQyx5QkFBYSxHQUxWO0FBTUhDLDBCQUFjO0FBTlgsU0FKSjtBQVlIQyxvQkFBWSxDQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLFVBQVNDLE1BQVQsRUFBaUJDLFFBQWpCLEVBQTJCO0FBQzFELGdCQUFJLENBQUNELE9BQU9OLEtBQVosRUFBbUI7QUFDZk0sdUJBQU9OLEtBQVAsR0FBZSxFQUFmO0FBQ0g7O0FBRUQscUJBQVNRLHNCQUFULENBQWdDQyxNQUFoQyxFQUF3QztBQUNwQyxvQkFBSSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzVCLDJCQUFPQSxPQUFPQyxLQUFkO0FBQ0g7QUFDRCx1QkFBT0QsTUFBUDtBQUNIOztBQUVELHFCQUFTRSxtQkFBVCxDQUE2QkYsTUFBN0IsRUFBcUM7QUFDakMsdUJBQU9ILE9BQU9GLFlBQVAsR0FBc0IsR0FBdEIsR0FBNEJJLHVCQUF1QkMsTUFBdkIsQ0FBbkM7QUFDSDs7QUFFREgsbUJBQU9NLGNBQVAsR0FBd0IsVUFBU0gsTUFBVCxFQUFpQjtBQUNyQyx1QkFBT0gsT0FBT0YsWUFBUCxHQUFzQk8sb0JBQW9CRixNQUFwQixDQUF0QixHQUFvREQsdUJBQXVCQyxNQUF2QixDQUEzRDtBQUNILGFBRkQ7O0FBSUFILG1CQUFPTyxjQUFQLEdBQXdCLFVBQVNKLE1BQVQsRUFBaUI7QUFDckMsb0JBQUksUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQztBQUM1QiwyQkFBT0EsT0FBT1QsS0FBZDtBQUNIO0FBQ0QsdUJBQU9TLE1BQVA7QUFDSCxhQUxEOztBQU9BSCxtQkFBT1EsTUFBUCxHQUFnQixZQUFXO0FBQ3ZCUCx5QkFBUyxZQUFXO0FBQ2hCRCwyQkFBT1AsZ0JBQVA7QUFDSCxpQkFGRDtBQUdILGFBSkQ7QUFLSCxTQWhDVyxDQVpUO0FBNkNIZ0IsaUJBQVMsaUJBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQzdCLGdCQUFJQSxPQUFPYixZQUFYLEVBQXlCO0FBQ3JCWSxzQkFBTUUsSUFBTixDQUFXLGVBQVgsRUFBNEJDLE9BQTVCLENBQW9DLE1BQXBDLEVBQTRDQyxJQUE1QyxDQUFpRCxXQUFqRCxFQUE4RCxFQUE5RDtBQUNIOztBQUVELG1CQUFPO0FBQ0hDLHFCQUFLLGFBQVN2QixLQUFULEVBQWdCd0IsSUFBaEIsRUFBc0I7QUFDdkI7QUFDQTtBQUNBQSx5QkFBS0MsVUFBTCxDQUFnQixVQUFoQjtBQUNIO0FBTEUsYUFBUDtBQU9IO0FBekRFLEtBQVA7QUEyREgsQ0E1REQiLCJmaWxlIjoiY2hlY2tib3hlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aUNoZWNrYm94ZXNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImN1aS9hbmd1bGFyL2RpcmVjdGl2ZXMvdGVtcGxhdGVzL2NoZWNrYm94ZXMuaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUV4cHJlc3Npb246IFwiJmNoYW5nZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCI9cHJvcGVydHlcIixcclxuICAgICAgICAgICAgb3B0aW9uczogXCI9XCIsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBcIj1cIixcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiQFwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IFwiQFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sbGVyOiBbXCIkc2NvcGVcIiwgXCIkdGltZW91dFwiLCBmdW5jdGlvbigkc2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGlmICghJHNjb3BlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudmFsdWUgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TGFiZWxDb252ZW50aW9uYWxseShvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbi5sYWJlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExhYmVsVHJhbnNsYXRpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnRyYW5zbGF0aW9ucyArIFwiLlwiICsgZ2V0TGFiZWxDb252ZW50aW9uYWxseShvcHRpb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0T3B0aW9uTGFiZWwgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUudHJhbnNsYXRpb25zID8gZ2V0TGFiZWxUcmFuc2xhdGlvbihvcHRpb24pIDogZ2V0TGFiZWxDb252ZW50aW9uYWxseShvcHRpb24pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNoYW5nZUV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRlbGVtLCB0YXR0cnMpIHtcclxuICAgICAgICAgICAgaWYgKHRhdHRycy50cmFuc2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRlbGVtLmZpbmQoXCIuY3VpLWNoZWNrYm94XCIpLm5leHRBbGwoXCJzcGFuXCIpLmF0dHIoXCJ0cmFuc2xhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwcmU6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWUgd2lsbCB0cnkgdG8gaG9ub3VyIHRoZSBgZGlzYWJsZWRgIGF0dHJpYnV0ZSBldmVuIHRob3VnaCBpdCdzIG5vdCBvblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZm9jdXNhYmxlIGZvcm0gZWxlbWVudCwgd2l0aCBoaWxhcmlvdXMgcmVzdWx0cywgc28gd2UgcHVsbCBpdCBvZmZcclxuICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHIoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuIl19

"use strict";

angular.module("cui").directive("cuiDataTable", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/datatable.html",
        scope: {
            columns: "=",
            columnsFilterExpression: "&columnsFilter",
            translations: "@",
            rowClass: "@",
            rows: "=",
            dblclick: "&",
            sortable: "&"
        },
        controller: ["$scope", "$filter", function ($scope, $filter) {
            angular.extend($scope, {
                columnsFilter: columnsFilter,
                getSortTabindex: getSortTabindex,
                getSortClasses: getSortClasses,
                displayLabel: displayLabel,
                displayValue: displayValue,
                initSelectAll: initSelectAll,
                initSortable: initSortable,
                selectAllChange: selectAllChange,
                headCellClick: headCellClick,
                flags: {
                    sortable: false,
                    resorting: false,
                    selectable: false,
                    selectAll: false,
                    indeterminate: false
                }
            });

            function canSort(column) {
                return $scope.flags.sortable && !!column.label && !column.dontSort;
            }

            function headCellClick(column) {
                if (!canSort(column)) {
                    return;
                }

                // clear any sorting stuff on other columns
                $scope.columns.filter(function (item) {
                    return item !== column;
                }).forEach(function (item) {
                    return delete item.sort;
                });

                // set the sort property to the right one for this column
                column.sort = column.sort === "ASC" ? "DESC" : "ASC";

                // dispatch the callback
                // display the table with a "sorting" state until the promise resolves
                $scope.flags.resorting = true;
                $scope.sortable({
                    column: column.value,
                    direction: column.sort
                }).then(function () {
                    $scope.flags.resorting = false;
                }).catch(function () {
                    $scope.flags.resorting = false;
                });
            }

            function initSortable() {
                $scope.flags.sortable = true;
            }

            function initSelectAll() {
                $scope.flags.selectable = true;
                $scope.$watch("rows", rowDataChange, true);
            }

            function rowDataChange() {
                if (!someSelected()) {
                    $scope.flags.selectAll = false;
                    $scope.flags.indeterminate = false;
                    return;
                }

                if (!allSelected()) {
                    $scope.flags.selectAll = false;
                    $scope.flags.indeterminate = true;
                    return;
                }

                $scope.flags.selectAll = true;
                $scope.flags.indeterminate = false;
            }

            function someSelected() {
                if ($scope.rows && $scope.rows.length) {
                    return $scope.rows.some(function (row) {
                        return row.selected === true;
                    });
                }
                return false;
            }

            function allSelected() {
                if ($scope.rows && $scope.rows.length) {
                    return $scope.rows.every(function (row) {
                        return row.selected === true;
                    });
                }
                return false;
            }

            function selectAllChange() {
                if ($scope.rows && $scope.rows.length) {
                    $scope.rows.forEach(function (row) {
                        row.selected = $scope.flags.selectAll;
                    });
                }
            }

            function columnsFilter(column) {
                var filterFunction = $scope.columnsFilterExpression();
                if (typeof filterFunction === "function") {
                    return filterFunction(column);
                }
                return true;
            }

            function displayLabel(column) {
                if (!column.label) {
                    return "";
                } else if ($scope.translations) {
                    return $scope.translations + "." + column.label;
                }
                return column.label;
            }

            function displayValue(column, row) {
                if (column.filter) {
                    return $filter(column.filter)(row[column.value], column.modifier);
                }
                return row[column.value];
            }

            function getSortTabindex(column) {
                if (!canSort(column)) {
                    return undefined; // eslint-disable-line no-undefined
                }

                return "0";
            }

            function getSortClasses(column) {
                if (!canSort(column)) {
                    return null;
                }

                var modifiers = ["sortable"];
                if (column.sort === "ASC") {
                    modifiers.push("sorted-asc");
                } else if (column.sort === "DESC") {
                    modifiers.push("sorted-desc");
                }

                return modifiers.map(function (modifier) {
                    return "cui-data-table__head-cell--" + modifier;
                });
            }
        }],
        compile: function compile(telem, tattrs) {
            if (tattrs.translations) {
                telem.find(".cui-data-table__head-cell[ng-repeat]").attr("translate", "");
            }

            if (tattrs.trackBy) {
                telem.find(".cui-data-table__row").attr("ng-repeat", "row in rows track by row." + tattrs.trackBy);
            }

            if (tattrs.rowClass) {
                telem.find(".cui-data-table__row").attr("ng-class", tattrs.rowClass);
            }

            return {
                post: function post(scope, elem, attrs) {
                    if ("selectable" in attrs) {
                        scope.initSelectAll();
                    }

                    if ("sortable" in attrs) {
                        scope.initSortable();
                    }
                }
            };
        }
    };
}).directive("cuiDataTableContent", ["$compile", function ($compile) {
    var defaultTemplate = "<span>{{ displayValue(column, row) }}</span>";
    return {
        restrict: "E",
        replace: false,
        scope: false,
        link: function link(scope, elem) {
            elem.append($compile(scope.column.template || defaultTemplate)(scope));
        }
    };
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGF0YWJsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidGVtcGxhdGVVcmwiLCJzY29wZSIsImNvbHVtbnMiLCJjb2x1bW5zRmlsdGVyRXhwcmVzc2lvbiIsInRyYW5zbGF0aW9ucyIsInJvd0NsYXNzIiwicm93cyIsImRibGNsaWNrIiwic29ydGFibGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGZpbHRlciIsImV4dGVuZCIsImNvbHVtbnNGaWx0ZXIiLCJnZXRTb3J0VGFiaW5kZXgiLCJnZXRTb3J0Q2xhc3NlcyIsImRpc3BsYXlMYWJlbCIsImRpc3BsYXlWYWx1ZSIsImluaXRTZWxlY3RBbGwiLCJpbml0U29ydGFibGUiLCJzZWxlY3RBbGxDaGFuZ2UiLCJoZWFkQ2VsbENsaWNrIiwiZmxhZ3MiLCJyZXNvcnRpbmciLCJzZWxlY3RhYmxlIiwic2VsZWN0QWxsIiwiaW5kZXRlcm1pbmF0ZSIsImNhblNvcnQiLCJjb2x1bW4iLCJsYWJlbCIsImRvbnRTb3J0IiwiZmlsdGVyIiwiaXRlbSIsImZvckVhY2giLCJzb3J0IiwidmFsdWUiLCJkaXJlY3Rpb24iLCJ0aGVuIiwiY2F0Y2giLCIkd2F0Y2giLCJyb3dEYXRhQ2hhbmdlIiwic29tZVNlbGVjdGVkIiwiYWxsU2VsZWN0ZWQiLCJsZW5ndGgiLCJzb21lIiwicm93Iiwic2VsZWN0ZWQiLCJldmVyeSIsImZpbHRlckZ1bmN0aW9uIiwibW9kaWZpZXIiLCJ1bmRlZmluZWQiLCJtb2RpZmllcnMiLCJwdXNoIiwibWFwIiwiY29tcGlsZSIsInRlbGVtIiwidGF0dHJzIiwiZmluZCIsImF0dHIiLCJ0cmFja0J5IiwicG9zdCIsImVsZW0iLCJhdHRycyIsIiRjb21waWxlIiwiZGVmYXVsdFRlbXBsYXRlIiwibGluayIsImFwcGVuZCIsInRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsS0FBZixF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ZSI6ImRhdGF0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpXHJcbiAgICAuZGlyZWN0aXZlKFwiY3VpRGF0YVRhYmxlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvZGF0YXRhYmxlLmh0bWxcIixcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFwiPVwiLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uc0ZpbHRlckV4cHJlc3Npb246IFwiJmNvbHVtbnNGaWx0ZXJcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uczogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICByb3dDbGFzczogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICByb3dzOiBcIj1cIixcclxuICAgICAgICAgICAgICAgIGRibGNsaWNrOiBcIiZcIixcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBcIiZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbXCIkc2NvcGVcIiwgXCIkZmlsdGVyXCIsIGZ1bmN0aW9uKCRzY29wZSwgJGZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgYW5ndWxhci5leHRlbmQoJHNjb3BlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc0ZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBnZXRTb3J0VGFiaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U29ydENsYXNzZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpbml0U2VsZWN0QWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRTb3J0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGxDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZENlbGxDbGljayxcclxuICAgICAgICAgICAgICAgICAgICBmbGFnczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29ydGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RBbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNhblNvcnQoY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5mbGFncy5zb3J0YWJsZSAmJiAhIWNvbHVtbi5sYWJlbCAmJiAhY29sdW1uLmRvbnRTb3J0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhlYWRDZWxsQ2xpY2soY29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5Tb3J0KGNvbHVtbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgYW55IHNvcnRpbmcgc3R1ZmYgb24gb3RoZXIgY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5jb2x1bW5zLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGNvbHVtbikuZm9yRWFjaChpdGVtID0+IGRlbGV0ZSBpdGVtLnNvcnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHNvcnQgcHJvcGVydHkgdG8gdGhlIHJpZ2h0IG9uZSBmb3IgdGhpcyBjb2x1bW5cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc29ydCA9IGNvbHVtbi5zb3J0ID09PSBcIkFTQ1wiID8gXCJERVNDXCIgOiBcIkFTQ1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwYXRjaCB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSB0YWJsZSB3aXRoIGEgXCJzb3J0aW5nXCIgc3RhdGUgdW50aWwgdGhlIHByb21pc2UgcmVzb2x2ZXNcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3MucmVzb3J0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc29ydGFibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGNvbHVtbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjb2x1bW4uc29ydFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3MucmVzb3J0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3MucmVzb3J0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFNvcnRhYmxlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mbGFncy5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5pdFNlbGVjdEFsbCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3Muc2VsZWN0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaChcInJvd3NcIiwgcm93RGF0YUNoYW5nZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcm93RGF0YUNoYW5nZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNvbWVTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mbGFncy5zZWxlY3RBbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZsYWdzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mbGFncy5zZWxlY3RBbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZsYWdzLmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3Muc2VsZWN0QWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmxhZ3MuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvbWVTZWxlY3RlZCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnJvd3MgJiYgJHNjb3BlLnJvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUucm93cy5zb21lKHJvdyA9PiByb3cuc2VsZWN0ZWQgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWxsU2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yb3dzICYmICRzY29wZS5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJvd3MuZXZlcnkocm93ID0+IHJvdy5zZWxlY3RlZCA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3RBbGxDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5yb3dzICYmICRzY29wZS5yb3dzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc2VsZWN0ZWQgPSAkc2NvcGUuZmxhZ3Muc2VsZWN0QWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY29sdW1uc0ZpbHRlcihjb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyRnVuY3Rpb24gPSAkc2NvcGUuY29sdW1uc0ZpbHRlckV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlckZ1bmN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlckZ1bmN0aW9uKGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlMYWJlbChjb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbHVtbi5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS50cmFuc2xhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS50cmFuc2xhdGlvbnMgKyBcIi5cIiArIGNvbHVtbi5sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5sYWJlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkaXNwbGF5VmFsdWUoY29sdW1uLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJGZpbHRlcihjb2x1bW4uZmlsdGVyKShyb3dbY29sdW1uLnZhbHVlXSwgY29sdW1uLm1vZGlmaWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tjb2x1bW4udmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNvcnRUYWJpbmRleChjb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhblNvcnQoY29sdW1uKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFNvcnRDbGFzc2VzKGNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuU29ydChjb2x1bW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZXJzID0gW1wic29ydGFibGVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5zb3J0ID09PSBcIkFTQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKFwic29ydGVkLWFzY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbHVtbi5zb3J0ID09PSBcIkRFU0NcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChcInNvcnRlZC1kZXNjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVycy5tYXAobW9kaWZpZXIgPT4gYGN1aS1kYXRhLXRhYmxlX19oZWFkLWNlbGwtLSR7bW9kaWZpZXJ9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBjb21waWxlOiBmdW5jdGlvbih0ZWxlbSwgdGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGF0dHJzLnRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbGVtLmZpbmQoXCIuY3VpLWRhdGEtdGFibGVfX2hlYWQtY2VsbFtuZy1yZXBlYXRdXCIpLmF0dHIoXCJ0cmFuc2xhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhdHRycy50cmFja0J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVsZW0uZmluZChcIi5jdWktZGF0YS10YWJsZV9fcm93XCIpLmF0dHIoXCJuZy1yZXBlYXRcIiwgXCJyb3cgaW4gcm93cyB0cmFjayBieSByb3cuXCIgKyB0YXR0cnMudHJhY2tCeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRhdHRycy5yb3dDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbGVtLmZpbmQoXCIuY3VpLWRhdGEtdGFibGVfX3Jvd1wiKS5hdHRyKFwibmctY2xhc3NcIiwgdGF0dHJzLnJvd0NsYXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3Qoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInNlbGVjdGFibGVcIiBpbiBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuaW5pdFNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJzb3J0YWJsZVwiIGluIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5pbml0U29ydGFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSlcclxuICAgIC5kaXJlY3RpdmUoXCJjdWlEYXRhVGFibGVDb250ZW50XCIsIFtcIiRjb21waWxlXCIsIGZ1bmN0aW9uKCRjb21waWxlKSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFRlbXBsYXRlID0gYDxzcGFuPnt7IGRpc3BsYXlWYWx1ZShjb2x1bW4sIHJvdykgfX08L3NwYW4+YDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgIHJlcGxhY2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY29wZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtLmFwcGVuZCgkY29tcGlsZShzY29wZS5jb2x1bW4udGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlKShzY29wZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1dKTtcclxuIl19

"use strict";

angular.module("cui").directive("cuiFormField", function () {
    function hasLabel(elem) {
        return !!elem.find("field-label").text();
    }

    function hasSingleControl(elem) {
        return elem.find("field-control").children("textarea,input,select").length === 1;
    }

    return {
        restrict: "E",
        replace: true,
        transclude: {
            label: "?fieldLabel",
            control: "fieldControl",
            hint: "?fieldHint"
        },
        templateUrl: "cui/angular/directives/templates/formfield.html",
        scope: {
            mandatory: "=?",
            layout: "@"
        },
        controller: ["$scope", function ($scope) {
            $scope.getLayoutClasses = function (entries) {
                if (!entries) {
                    return null;
                }

                return entries.split(" ").map(function (entry) {
                    return "cui-form-field--" + entry;
                });
            };
        }],
        link: function link(scope, elem) {
            var label, control;

            if (hasSingleControl(elem)) {
                control = elem.find("field-control").children("textarea,input,select");
                control.addClass("cui-form-field__control");

                if (hasLabel(elem)) {
                    label = elem.find("field-label").parent();
                    label.attr("for", scope.$id);
                    control.attr("id", scope.$id);
                }
            }
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1maWVsZC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwiaGFzTGFiZWwiLCJlbGVtIiwiZmluZCIsInRleHQiLCJoYXNTaW5nbGVDb250cm9sIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwibGFiZWwiLCJjb250cm9sIiwiaGludCIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJtYW5kYXRvcnkiLCJsYXlvdXQiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiZ2V0TGF5b3V0Q2xhc3NlcyIsImVudHJpZXMiLCJzcGxpdCIsIm1hcCIsImVudHJ5IiwibGluayIsImFkZENsYXNzIiwicGFyZW50IiwiYXR0ciIsIiRpZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLEtBQWYsRUFBc0JDLFNBQXRCLENBQWdDLGNBQWhDLEVBQWdELFlBQVc7QUFDdkQsYUFBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEIsZUFBTyxDQUFDLENBQUNBLEtBQUtDLElBQUwsQ0FBVSxhQUFWLEVBQXlCQyxJQUF6QixFQUFUO0FBQ0g7O0FBRUQsYUFBU0MsZ0JBQVQsQ0FBMEJILElBQTFCLEVBQWdDO0FBQzVCLGVBQU9BLEtBQUtDLElBQUwsQ0FBVSxlQUFWLEVBQTJCRyxRQUEzQixDQUFvQyx1QkFBcEMsRUFBNkRDLE1BQTdELEtBQXdFLENBQS9FO0FBQ0g7O0FBRUQsV0FBTztBQUNIQyxrQkFBVSxHQURQO0FBRUhDLGlCQUFTLElBRk47QUFHSEMsb0JBQVk7QUFDUkMsbUJBQU8sYUFEQztBQUVSQyxxQkFBUyxjQUZEO0FBR1JDLGtCQUFNO0FBSEUsU0FIVDtBQVFIQyxxQkFBYSxpREFSVjtBQVNIQyxlQUFPO0FBQ0hDLHVCQUFXLElBRFI7QUFFSEMsb0JBQVE7QUFGTCxTQVRKO0FBYUhDLG9CQUFZLENBQUMsUUFBRCxFQUFXLFVBQVNDLE1BQVQsRUFBaUI7QUFDcENBLG1CQUFPQyxnQkFBUCxHQUEwQixVQUFTQyxPQUFULEVBQWtCO0FBQ3hDLG9CQUFJLENBQUNBLE9BQUwsRUFBYztBQUNWLDJCQUFPLElBQVA7QUFDSDs7QUFFRCx1QkFBT0EsUUFBUUMsS0FBUixDQUFjLEdBQWQsRUFBbUJDLEdBQW5CLENBQXVCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDMUMsMkJBQU8scUJBQXFCQSxLQUE1QjtBQUNILGlCQUZNLENBQVA7QUFHSCxhQVJEO0FBU0gsU0FWVyxDQWJUO0FBd0JIQyxjQUFNLGNBQVNWLEtBQVQsRUFBZ0JiLElBQWhCLEVBQXNCO0FBQ3hCLGdCQUFJUyxLQUFKLEVBQVdDLE9BQVg7O0FBRUEsZ0JBQUlQLGlCQUFpQkgsSUFBakIsQ0FBSixFQUE0QjtBQUN4QlUsMEJBQVVWLEtBQUtDLElBQUwsQ0FBVSxlQUFWLEVBQTJCRyxRQUEzQixDQUFvQyx1QkFBcEMsQ0FBVjtBQUNBTSx3QkFBUWMsUUFBUixDQUFpQix5QkFBakI7O0FBRUEsb0JBQUl6QixTQUFTQyxJQUFULENBQUosRUFBb0I7QUFDaEJTLDRCQUFRVCxLQUFLQyxJQUFMLENBQVUsYUFBVixFQUF5QndCLE1BQXpCLEVBQVI7QUFDQWhCLDBCQUFNaUIsSUFBTixDQUFXLEtBQVgsRUFBa0JiLE1BQU1jLEdBQXhCO0FBQ0FqQiw0QkFBUWdCLElBQVIsQ0FBYSxJQUFiLEVBQW1CYixNQUFNYyxHQUF6QjtBQUNIO0FBQ0o7QUFDSjtBQXJDRSxLQUFQO0FBdUNILENBaEREIiwiZmlsZSI6ImZvcm1maWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aUZvcm1GaWVsZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGZ1bmN0aW9uIGhhc0xhYmVsKGVsZW0pIHtcclxuICAgICAgICByZXR1cm4gISFlbGVtLmZpbmQoXCJmaWVsZC1sYWJlbFwiKS50ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFzU2luZ2xlQ29udHJvbChlbGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0uZmluZChcImZpZWxkLWNvbnRyb2xcIikuY2hpbGRyZW4oXCJ0ZXh0YXJlYSxpbnB1dCxzZWxlY3RcIikubGVuZ3RoID09PSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdHJhbnNjbHVkZToge1xyXG4gICAgICAgICAgICBsYWJlbDogXCI/ZmllbGRMYWJlbFwiLFxyXG4gICAgICAgICAgICBjb250cm9sOiBcImZpZWxkQ29udHJvbFwiLFxyXG4gICAgICAgICAgICBoaW50OiBcIj9maWVsZEhpbnRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvZm9ybWZpZWxkLmh0bWxcIixcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBtYW5kYXRvcnk6IFwiPT9cIixcclxuICAgICAgICAgICAgbGF5b3V0OiBcIkBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGF5b3V0Q2xhc3NlcyA9IGZ1bmN0aW9uKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZW50cmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnNwbGl0KFwiIFwiKS5tYXAoZnVuY3Rpb24oZW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjdWktZm9ybS1maWVsZC0tXCIgKyBlbnRyeTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBsYWJlbCwgY29udHJvbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYXNTaW5nbGVDb250cm9sKGVsZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sID0gZWxlbS5maW5kKFwiZmllbGQtY29udHJvbFwiKS5jaGlsZHJlbihcInRleHRhcmVhLGlucHV0LHNlbGVjdFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wuYWRkQ2xhc3MoXCJjdWktZm9ybS1maWVsZF9fY29udHJvbFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzTGFiZWwoZWxlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGVsZW0uZmluZChcImZpZWxkLWxhYmVsXCIpLnBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLmF0dHIoXCJmb3JcIiwgc2NvcGUuJGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmF0dHIoXCJpZFwiLCBzY29wZS4kaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

angular.module("cui").directive("cuiPagination", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/pagination.html",
        scope: {
            data: "=",
            request: "&",
            prevLabel: "@",
            nextLabel: "@",
            ofLabel: "@"
        },
        controller: ["$scope", function ($scope) {
            $scope.isFirst = function () {
                if (!$scope.data) {
                    return true;
                }
                return $scope.data.currentPage === 1;
            };

            $scope.isLast = function () {
                if (!$scope.data) {
                    return true;
                }
                return $scope.data.currentPage === $scope.data.numberOfPages;
            };
        }]
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJkYXRhIiwicmVxdWVzdCIsInByZXZMYWJlbCIsIm5leHRMYWJlbCIsIm9mTGFiZWwiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiaXNGaXJzdCIsImN1cnJlbnRQYWdlIiwiaXNMYXN0IiwibnVtYmVyT2ZQYWdlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLEtBQWYsRUFBc0JDLFNBQXRCLENBQWdDLGVBQWhDLEVBQWlELFlBQVc7QUFDeEQsV0FBTztBQUNIQyxrQkFBVSxHQURQO0FBRUhDLGlCQUFTLElBRk47QUFHSEMscUJBQWEsa0RBSFY7QUFJSEMsZUFBTztBQUNIQyxrQkFBTSxHQURIO0FBRUhDLHFCQUFTLEdBRk47QUFHSEMsdUJBQVcsR0FIUjtBQUlIQyx1QkFBVyxHQUpSO0FBS0hDLHFCQUFTO0FBTE4sU0FKSjtBQVdIQyxvQkFBWSxDQUFDLFFBQUQsRUFBVyxVQUFTQyxNQUFULEVBQWlCO0FBQ3BDQSxtQkFBT0MsT0FBUCxHQUFpQixZQUFXO0FBQ3hCLG9CQUFJLENBQUNELE9BQU9OLElBQVosRUFBa0I7QUFDZCwyQkFBTyxJQUFQO0FBQ0g7QUFDRCx1QkFBT00sT0FBT04sSUFBUCxDQUFZUSxXQUFaLEtBQTRCLENBQW5DO0FBQ0gsYUFMRDs7QUFPQUYsbUJBQU9HLE1BQVAsR0FBZ0IsWUFBVztBQUN2QixvQkFBSSxDQUFDSCxPQUFPTixJQUFaLEVBQWtCO0FBQ2QsMkJBQU8sSUFBUDtBQUNIO0FBQ0QsdUJBQU9NLE9BQU9OLElBQVAsQ0FBWVEsV0FBWixLQUE0QkYsT0FBT04sSUFBUCxDQUFZVSxhQUEvQztBQUNILGFBTEQ7QUFNSCxTQWRXO0FBWFQsS0FBUDtBQTJCSCxDQTVCRCIsImZpbGUiOiJwYWdpbmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpUGFnaW5hdGlvblwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvcGFnaW5hdGlvbi5odG1sXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgZGF0YTogXCI9XCIsXHJcbiAgICAgICAgICAgIHJlcXVlc3Q6IFwiJlwiLFxyXG4gICAgICAgICAgICBwcmV2TGFiZWw6IFwiQFwiLFxyXG4gICAgICAgICAgICBuZXh0TGFiZWw6IFwiQFwiLFxyXG4gICAgICAgICAgICBvZkxhYmVsOiBcIkBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuaXNGaXJzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kYXRhLmN1cnJlbnRQYWdlID09PSAxO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmlzTGFzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kYXRhLmN1cnJlbnRQYWdlID09PSAkc2NvcGUuZGF0YS5udW1iZXJPZlBhZ2VzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dXHJcbiAgICB9O1xyXG59KTtcclxuIl19

"use strict";

angular.module("cui").directive("cuiPaymentSchedule", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/paymentschedule.html",
        scope: {
            frequency: "@",
            list: "="
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzY2hlZHVsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidGVtcGxhdGVVcmwiLCJzY29wZSIsImZyZXF1ZW5jeSIsImxpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxvQkFBaEMsRUFBc0QsWUFBVztBQUM3RCxXQUFPO0FBQ0hDLGtCQUFVLEdBRFA7QUFFSEMsaUJBQVMsSUFGTjtBQUdIQyxxQkFBYSx1REFIVjtBQUlIQyxlQUFPO0FBQ0hDLHVCQUFXLEdBRFI7QUFFSEMsa0JBQU07QUFGSDtBQUpKLEtBQVA7QUFTSCxDQVZEIiwiZmlsZSI6InBheW1lbnRzY2hlZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aVBheW1lbnRTY2hlZHVsZVwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvcGF5bWVudHNjaGVkdWxlLmh0bWxcIixcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICBmcmVxdWVuY3k6IFwiQFwiLFxyXG4gICAgICAgICAgICBsaXN0OiBcIj1cIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=

"use strict";

angular.module("cui").directive("cuiPopover", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        templateUrl: "cui/angular/directives/templates/popover.html",
        scope: {
            trigger: "=",
            whenShown: "&"
        },
        link: function link(scope, elem) {
            var shown = void 0,
                focusedBefore = void 0;

            $(document).on("keydown", handleKeydown);
            scope.$watch("trigger", handleTrigger);
            scope.$on("$destroy", teardown);

            function handleTrigger(value) {
                if (value && !shown) {
                    show();
                } else if (!value && shown) {
                    close();
                }
            }

            function teardown() {
                $(document).off("keydown", handleKeydown);
                document.body.removeEventListener("focus", handleFocus, true);
            }

            function show() {
                shown = true;
                elem.addClass("is-shown").attr("aria-hidden", "false");
                focusedBefore = document.activeElement;
                getFocusables().first().focus();
                document.body.addEventListener("focus", handleFocus, true);
                scope.whenShown();
            }

            function close() {
                shown = false;
                elem.removeClass("is-shown").attr("aria-hidden", "true");
                if (focusedBefore) {
                    focusedBefore.focus();
                }
                document.body.removeEventListener("focus", handleFocus, true);
            }

            // helper function to get all focusable element that aren't disabled right now
            function getFocusables() {
                return elem.find("input, textarea, select, button, a[href], [contenteditable], [tabindex]:not([tabindex^='-'])").filter(":not([disabled])");
            }

            function handleKeydown(e) {
                if (!scope.trigger) {
                    return;
                }

                if (e.which === 27) {
                    // esc key
                    scope.trigger = false;
                    scope.$apply();
                } else if (e.which === 9) {
                    // tab key
                    trapTabKey(e);
                }
            }

            // helper function trapping the tab key inside the popover
            function trapTabKey(e) {
                var focusables = getFocusables(),
                    focusedItemIndex = focusables.index(document.activeElement);

                if (e.shiftKey && focusedItemIndex === 0) {
                    e.preventDefault();
                    focusables.last().focus();
                } else if (!e.shiftKey && focusedItemIndex === focusables.length - 1) {
                    e.preventDefault();
                    focusables.first().focus();
                }
            }

            // helper function keeping focus from straying outside the popover
            function handleFocus(e) {
                if (shown && !$.contains(elem[0], e.target)) {
                    getFocusables().first().focus();
                }
            }
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRyYW5zY2x1ZGUiLCJ0ZW1wbGF0ZVVybCIsInNjb3BlIiwidHJpZ2dlciIsIndoZW5TaG93biIsImxpbmsiLCJlbGVtIiwic2hvd24iLCJmb2N1c2VkQmVmb3JlIiwiJCIsImRvY3VtZW50Iiwib24iLCJoYW5kbGVLZXlkb3duIiwiJHdhdGNoIiwiaGFuZGxlVHJpZ2dlciIsIiRvbiIsInRlYXJkb3duIiwidmFsdWUiLCJzaG93IiwiY2xvc2UiLCJvZmYiLCJib2R5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUZvY3VzIiwiYWRkQ2xhc3MiLCJhdHRyIiwiYWN0aXZlRWxlbWVudCIsImdldEZvY3VzYWJsZXMiLCJmaXJzdCIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUNsYXNzIiwiZmluZCIsImZpbHRlciIsImUiLCJ3aGljaCIsIiRhcHBseSIsInRyYXBUYWJLZXkiLCJmb2N1c2FibGVzIiwiZm9jdXNlZEl0ZW1JbmRleCIsImluZGV4Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImxhc3QiLCJsZW5ndGgiLCJjb250YWlucyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUUMsTUFBUixDQUFlLEtBQWYsRUFBc0JDLFNBQXRCLENBQWdDLFlBQWhDLEVBQThDLFlBQVc7QUFDckQsV0FBTztBQUNIQyxrQkFBVSxHQURQO0FBRUhDLGlCQUFTLElBRk47QUFHSEMsb0JBQVksSUFIVDtBQUlIQyxxQkFBYSwrQ0FKVjtBQUtIQyxlQUFPO0FBQ0hDLHFCQUFTLEdBRE47QUFFSEMsdUJBQVc7QUFGUixTQUxKO0FBU0hDLGNBQU0sY0FBU0gsS0FBVCxFQUFnQkksSUFBaEIsRUFBc0I7QUFDeEIsZ0JBQUlDLGNBQUo7QUFBQSxnQkFBV0Msc0JBQVg7O0FBRUFDLGNBQUVDLFFBQUYs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QXhCO0FBQ0g7QUFDSjtBQUNKO0FBdkZFLEtBQVA7QUF5RkgsQ0ExRkQiLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aVBvcG92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvcG9wb3Zlci5odG1sXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgdHJpZ2dlcjogXCI9XCIsXHJcbiAgICAgICAgICAgIHdoZW5TaG93bjogXCImXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG93biwgZm9jdXNlZEJlZm9yZTtcclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKFwia2V5ZG93blwiLCBoYW5kbGVLZXlkb3duKTtcclxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKFwidHJpZ2dlclwiLCBoYW5kbGVUcmlnZ2VyKTtcclxuICAgICAgICAgICAgc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgdGVhcmRvd24pO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVHJpZ2dlcih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFzaG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXZhbHVlICYmIHNob3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdGVhcmRvd24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJrZXlkb3duXCIsIGhhbmRsZUtleWRvd24pO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlRm9jdXMsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5hZGRDbGFzcyhcImlzLXNob3duXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9jdXNlZEJlZm9yZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBnZXRGb2N1c2FibGVzKCkuZmlyc3QoKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgaGFuZGxlRm9jdXMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUud2hlblNob3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2xhc3MoXCJpcy1zaG93blwiKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c2VkQmVmb3JlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBoYW5kbGVGb2N1cywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0byBnZXQgYWxsIGZvY3VzYWJsZSBlbGVtZW50IHRoYXQgYXJlbid0IGRpc2FibGVkIHJpZ2h0IG5vd1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRGb2N1c2FibGVzKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZmluZChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0LCBidXR0b24sIGFbaHJlZl0sIFtjb250ZW50ZWRpdGFibGVdLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXhePSctJ10pXCIpLmZpbHRlcihcIjpub3QoW2Rpc2FibGVkXSlcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUtleWRvd24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzY29wZS50cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzYyBrZXlcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS50cmlnZ2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0YWIga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhcFRhYktleShlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaGVscGVyIGZ1bmN0aW9uIHRyYXBwaW5nIHRoZSB0YWIga2V5IGluc2lkZSB0aGUgcG9wb3ZlclxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0cmFwVGFiS2V5KGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBnZXRGb2N1c2FibGVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNlZEl0ZW1JbmRleCA9IGZvY3VzYWJsZXMuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEl0ZW1JbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGVzLmxhc3QoKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSXRlbUluZGV4ID09PSBmb2N1c2FibGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlcy5maXJzdCgpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGhlbHBlciBmdW5jdGlvbiBrZWVwaW5nIGZvY3VzIGZyb20gc3RyYXlpbmcgb3V0c2lkZSB0aGUgcG9wb3ZlclxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVGb2N1cyhlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd24gJiYgISQuY29udGFpbnMoZWxlbVswXSwgZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Rm9jdXNhYmxlcygpLmZpcnN0KCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

angular.module("cui").directive("cuiRadios", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/radios.html",
        scope: {
            changeExpression: "&change",
            value: "=property",
            options: "=",
            disabled: "=",
            required: "=?",
            orientation: "@",
            translations: "@"
        },
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            function getLabelConventionally(option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.label;
                }
                return option;
            }

            function getLabelTranslation(option) {
                return $scope.translations + "." + getLabelConventionally(option);
            }

            $scope.getOptionLabel = function (option) {
                return $scope.translations ? getLabelTranslation(option) : getLabelConventionally(option);
            };

            $scope.getOptionValue = function (option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.value;
                }
                return option;
            };

            $scope.isRequired = function () {
                return $scope.required && !$scope.value;
            };

            $scope.change = function () {
                $timeout(function () {
                    $scope.changeExpression();
                });
            };
        }],
        compile: function compile(telem, tattrs) {
            if (tattrs.translations) {
                telem.find(".cui-radio").nextAll("span").attr("translate", "");
            }

            return {
                pre: function pre(scope, elem) {
                    // ie will try to honour the `disabled` attribute even though it's not on
                    // a focusable form element, with hilarious results, so we pull it off
                    elem.removeAttr("disabled");
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvcy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidGVtcGxhdGVVcmwiLCJzY29wZSIsImNoYW5nZUV4cHJlc3Npb24iLCJ2YWx1ZSIsIm9wdGlvbnMiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwib3JpZW50YXRpb24iLCJ0cmFuc2xhdGlvbnMiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJHRpbWVvdXQiLCJnZXRMYWJlbENvbnZlbnRpb25hbGx5Iiwib3B0aW9uIiwibGFiZWwiLCJnZXRMYWJlbFRyYW5zbGF0aW9uIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25WYWx1ZSIsImlzUmVxdWlyZWQiLCJjaGFuZ2UiLCJjb21waWxlIiwidGVsZW0iLCJ0YXR0cnMiLCJmaW5kIiwibmV4dEFsbCIsImF0dHIiLCJwcmUiLCJlbGVtIiwicmVtb3ZlQXR0ciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxRQUFRQyxNQUFSLENBQWUsS0FBZixFQUFzQkMsU0FBdEIsQ0FBZ0MsV0FBaEMsRUFBNkMsWUFBVztBQUNwRCxXQUFPO0FBQ0hDLGtCQUFVLEdBRFA7QUFFSEMsaUJBQVMsSUFGTjtBQUdIQyxxQkFBYSw4Q0FIVjtBQUlIQyxlQUFPO0FBQ0hDLDhCQUFrQixTQURmO0FBRUhDLG1CQUFPLFdBRko7QUFHSEMscUJBQVMsR0FITjtBQUlIQyxzQkFBVSxHQUpQO0FBS0hDLHNCQUFVLElBTFA7QUFNSEMseUJBQWEsR0FOVjtBQU9IQywwQkFBYztBQVBYLFNBSko7QUFhSEMsb0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixVQUFTQyxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUMxRCxxQkFBU0Msc0JBQVQsQ0FBZ0NDLE1BQWhDLEVBQXdDO0FBQ3BDLG9CQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUIsMkJBQU9BLE9BQU9DLEtBQWQ7QUFDSDtBQUNELHVCQUFPRCxNQUFQO0FBQ0g7O0FBRUQscUJBQVNFLG1CQUFULENBQTZCRixNQUE3QixFQUFxQztBQUNqQyx1QkFBT0gsT0FBT0YsWUFBUCxHQUFzQixHQUF0QixHQUE0QkksdUJBQXVCQyxNQUF2QixDQUFuQztBQUNIOztBQUVESCxtQkFBT00sY0FBUCxHQUF3QixVQUFTSCxNQUFULEVBQWlCO0FBQ3JDLHVCQUFPSCxPQUFPRixZQUFQLEdBQXNCTyxvQkFBb0JGLE1BQXBCLENBQXRCLEdBQW9ERCx1QkFBdUJDLE1BQXZCLENBQTNEO0FBQ0gsYUFGRDs7QUFJQUgsbUJBQU9PLGNBQVAsR0FBd0IsVUFBU0osTUFBVCxFQUFpQjtBQUNyQyxvQkFBSSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzVCLDJCQUFPQSxPQUFPVixLQUFkO0FBQ0g7QUFDRCx1QkFBT1UsTUFBUDtBQUNILGFBTEQ7O0FBT0FILG1CQUFPUSxVQUFQLEdBQW9CLFlBQVc7QUFDM0IsdUJBQU9SLE9BQU9KLFFBQVAsSUFBbUIsQ0FBQ0ksT0FBT1AsS0FBbEM7QUFDSCxhQUZEOztBQUlBTyxtQkFBT1MsTUFBUCxHQUFnQixZQUFXO0FBQ3ZCUix5QkFBUyxZQUFXO0FBQ2hCRCwyQkFBT1IsZ0JBQVA7QUFDSCxpQkFGRDtBQUdILGFBSkQ7QUFLSCxTQWhDVyxDQWJUO0FBOENIa0IsaUJBQVMsaUJBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQzdCLGdCQUFJQSxPQUFPZCxZQUFYLEVBQXlCO0FBQ3JCYSxzQkFBTUUsSUFBTixDQUFXLFlBQVgsRUFBeUJDLE9BQXpCLENBQWlDLE1BQWpDLEVBQXlDQyxJQUF6QyxDQUE4QyxXQUE5QyxFQUEyRCxFQUEzRDtBQUNIOztBQUVELG1CQUFPO0FBQ0hDLHFCQUFLLGFBQVN6QixLQUFULEVBQWdCMEIsSUFBaEIsRUFBc0I7QUFDdkI7QUFDQTtBQUNBQSx5QkFBS0MsVUFBTCxDQUFnQixVQUFoQjtBQUNIO0FBTEUsYUFBUDtBQU9IO0FBMURFLEtBQVA7QUE0REgsQ0E3REQiLCJmaWxlIjoicmFkaW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpUmFkaW9zXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjdWkvYW5ndWxhci9kaXJlY3RpdmVzL3RlbXBsYXRlcy9yYWRpb3MuaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUV4cHJlc3Npb246IFwiJmNoYW5nZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogXCI9cHJvcGVydHlcIixcclxuICAgICAgICAgICAgb3B0aW9uczogXCI9XCIsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBcIj1cIixcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwiPT9cIixcclxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwiQFwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IFwiQFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sbGVyOiBbXCIkc2NvcGVcIiwgXCIkdGltZW91dFwiLCBmdW5jdGlvbigkc2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRMYWJlbFRyYW5zbGF0aW9uKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS50cmFuc2xhdGlvbnMgKyBcIi5cIiArIGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnRyYW5zbGF0aW9ucyA/IGdldExhYmVsVHJhbnNsYXRpb24ob3B0aW9uKSA6IGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5pc1JlcXVpcmVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnJlcXVpcmVkICYmICEkc2NvcGUudmFsdWU7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2hhbmdlRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24odGVsZW0sIHRhdHRycykge1xyXG4gICAgICAgICAgICBpZiAodGF0dHJzLnRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdGVsZW0uZmluZChcIi5jdWktcmFkaW9cIikubmV4dEFsbChcInNwYW5cIikuYXR0cihcInRyYW5zbGF0ZVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHByZTogZnVuY3Rpb24oc2NvcGUsIGVsZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZSB3aWxsIHRyeSB0byBob25vdXIgdGhlIGBkaXNhYmxlZGAgYXR0cmlidXRlIGV2ZW4gdGhvdWdoIGl0J3Mgbm90IG9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBmb2N1c2FibGUgZm9ybSBlbGVtZW50LCB3aXRoIGhpbGFyaW91cyByZXN1bHRzLCBzbyB3ZSBwdWxsIGl0IG9mZlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=

"use strict";

angular.module("cui").directive("cuiSpinner", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/spinner.html",
        scope: {
            trigger: "="
        },
        compile: function compile(telem, tattrs) {
            if (tattrs.type) {
                telem.addClass("cui-spinner--" + tattrs.type);
            }
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJ0cmlnZ2VyIiwiY29tcGlsZSIsInRlbGVtIiwidGF0dHJzIiwidHlwZSIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxRQUFRQyxNQUFSLENBQWUsS0FBZixFQUFzQkMsU0FBdEIsQ0FBZ0MsWUFBaEMsRUFBOEMsWUFBVztBQUNyRCxXQUFPO0FBQ0hDLGtCQUFVLEdBRFA7QUFFSEMsaUJBQVMsSUFGTjtBQUdIQyxxQkFBYSwrQ0FIVjtBQUlIQyxlQUFPO0FBQ0hDLHFCQUFTO0FBRE4sU0FKSjtBQU9IQyxpQkFBUyxpQkFBU0MsS0FBVCxFQUFnQkMsTUFBaEIsRUFBd0I7QUFDN0IsZ0JBQUlBLE9BQU9DLElBQVgsRUFBaUI7QUFDYkYsc0JBQU1HLFFBQU4sQ0FBZSxrQkFBa0JGLE9BQU9DLElBQXhDO0FBQ0g7QUFDSjtBQVhFLEtBQVA7QUFhSCxDQWREIiwiZmlsZSI6InNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcImN1aVwiKS5kaXJlY3RpdmUoXCJjdWlTcGlubmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjdWkvYW5ndWxhci9kaXJlY3RpdmVzL3RlbXBsYXRlcy9zcGlubmVyLmh0bWxcIixcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiBcIj1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24odGVsZW0sIHRhdHRycykge1xyXG4gICAgICAgICAgICBpZiAodGF0dHJzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHRlbGVtLmFkZENsYXNzKFwiY3VpLXNwaW5uZXItLVwiICsgdGF0dHJzLnR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

angular.module("cui").directive("cuiSteps", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/steps.html",
        scope: {
            steps: "<",
            current: "@",
            translations: "@"
        },
        controller: ["$scope", function ($scope) {
            angular.extend($scope, {
                isDone: isDone, isCurrent: isCurrent
            });

            function isValid() {
                return $scope.steps.indexOf($scope.current) !== -1;
            }

            function isDone(step) {
                if ($scope.current === "done") {
                    return true;
                } else if (!isValid()) {
                    return false;
                }

                var found = false;
                $scope.steps.some(function (item) {
                    if (step === item) {
                        found = true;
                    }
                    return isCurrent(item);
                });
                return found;
            }

            function isCurrent(step) {
                if (!isValid()) {
                    return false;
                }

                return step === $scope.current;
            }
        }]
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBzLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZVVybCIsInNjb3BlIiwic3RlcHMiLCJjdXJyZW50IiwidHJhbnNsYXRpb25zIiwiY29udHJvbGxlciIsIiRzY29wZSIsImV4dGVuZCIsImlzRG9uZSIsImlzQ3VycmVudCIsImlzVmFsaWQiLCJpbmRleE9mIiwic3RlcCIsImZvdW5kIiwic29tZSIsIml0ZW0iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxVQUFoQyxFQUE0QyxZQUFXO0FBQ25ELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLHFCQUFhLDZDQUhWO0FBSUhDLGVBQU87QUFDSEMsbUJBQU8sR0FESjtBQUVIQyxxQkFBUyxHQUZOO0FBR0hDLDBCQUFjO0FBSFgsU0FKSjtBQVNIQyxvQkFBWSxDQUFDLFFBQUQsRUFBVyxVQUFTQyxNQUFULEVBQWlCO0FBQ3BDWCxvQkFBUVksTUFBUixDQUFlRCxNQUFmLEVBQXVCO0FBQ25CRSw4QkFEbUIsRUFDWEM7QUFEVyxhQUF2Qjs7QUFJQSxxQkFBU0MsT0FBVCxHQUFtQjtBQUNmLHVCQUFPSixPQUFPSixLQUFQLENBQWFTLE9BQWIsQ0FBcUJMLE9BQU9ILE9BQTVCLE1BQXlDLENBQUMsQ0FBakQ7QUFDSDs7QUFFRCxxQkFBU0ssTUFBVCxDQUFnQkksSUFBaEIsRUFBc0I7QUFDbEIsb0JBQUlOLE9BQU9ILE9BQVAsS0FBbUIsTUFBdkIsRUFBK0I7QUFDM0IsMkJBQU8sSUFBUDtBQUNILGlCQUZELE1BRU8sSUFBSSxDQUFDTyxTQUFMLEVBQWdCO0FBQ25CLDJCQUFPLEtBQVA7QUFDSDs7QUFFRCxvQkFBSUcsUUFBUSxLQUFaO0FBQ0FQLHVCQUFPSixLQUFQLENBQWFZLElBQWIsQ0FBa0IsZ0JBQVE7QUFDdEIsd0JBQUlGLFNBQVNHLElBQWIsRUFBbUI7QUFDZkYsZ0NBQVEsSUFBUjtBQUNIO0FBQ0QsMkJBQU9KLFVBQVVNLElBQVYsQ0FBUDtBQUNILGlCQUxEO0FBTUEsdUJBQU9GLEtBQVA7QUFDSDs7QUFFRCxxQkFBU0osU0FBVCxDQUFtQkcsSUFBbkIsRUFBeUI7QUFDckIsb0JBQUksQ0FBQ0YsU0FBTCxFQUFnQjtBQUNaLDJCQUFPLEtBQVA7QUFDSDs7QUFFRCx1QkFBT0UsU0FBU04sT0FBT0gsT0FBdkI7QUFDSDtBQUNKLFNBakNXO0FBVFQsS0FBUDtBQTRDSCxDQTdDRCIsImZpbGUiOiJzdGVwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aVN0ZXBzXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjdWkvYW5ndWxhci9kaXJlY3RpdmVzL3RlbXBsYXRlcy9zdGVwcy5odG1sXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgc3RlcHM6IFwiPFwiLFxyXG4gICAgICAgICAgICBjdXJyZW50OiBcIkBcIixcclxuICAgICAgICAgICAgdHJhbnNsYXRpb25zOiBcIkBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIHtcclxuICAgICAgICAgICAgICAgIGlzRG9uZSwgaXNDdXJyZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaXNWYWxpZCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuc3RlcHMuaW5kZXhPZigkc2NvcGUuY3VycmVudCkgIT09IC0xO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBpc0RvbmUoc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5jdXJyZW50ID09PSBcImRvbmVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnN0ZXBzLnNvbWUoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXAgPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNDdXJyZW50KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ3VycmVudChzdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RlcCA9PT0gJHNjb3BlLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

angular.module("cui").directive("cuiSwitcher", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/switcher.html",
        scope: {
            changeExpression: "&change",
            value: "=property",
            options: "=",
            disabled: "=",
            format: "@",
            translations: "@"
        },
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            function getLabelConventionally(option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.label;
                }
                return option;
            }

            function getLabelTranslation(option) {
                return $scope.translations + "." + getLabelConventionally(option);
            }

            $scope.getOptionLabel = function (option) {
                return $scope.translations ? getLabelTranslation(option) : getLabelConventionally(option);
            };

            $scope.getOptionValue = function (option) {
                if ((typeof option === "undefined" ? "undefined" : _typeof(option)) === "object") {
                    return option.value;
                }
                return option;
            };

            $scope.change = function () {
                $timeout(function () {
                    $scope.changeExpression();
                });
            };
        }],
        compile: function compile(telem, tattrs) {
            if (tattrs.translations) {
                telem.find(".cui-switcher__text").attr("translate", "");
            }

            return {
                pre: function pre(scope, elem) {
                    // ie will try to honour the `disabled` attribute even though it's not on
                    // a focusable form element, with hilarious results, so we pull it off
                    elem.removeAttr("disabled");
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZVVybCIsInNjb3BlIiwiY2hhbmdlRXhwcmVzc2lvbiIsInZhbHVlIiwib3B0aW9ucyIsImRpc2FibGVkIiwiZm9ybWF0IiwidHJhbnNsYXRpb25zIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiR0aW1lb3V0IiwiZ2V0TGFiZWxDb252ZW50aW9uYWxseSIsIm9wdGlvbiIsImxhYmVsIiwiZ2V0TGFiZWxUcmFuc2xhdGlvbiIsImdldE9wdGlvbkxhYmVsIiwiZ2V0T3B0aW9uVmFsdWUiLCJjaGFuZ2UiLCJjb21waWxlIiwidGVsZW0iLCJ0YXR0cnMiLCJmaW5kIiwiYXR0ciIsInByZSIsImVsZW0iLCJyZW1vdmVBdHRyIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxhQUFoQyxFQUErQyxZQUFXO0FBQ3RELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLHFCQUFhLGdEQUhWO0FBSUhDLGVBQU87QUFDSEMsOEJBQWtCLFNBRGY7QUFFSEMsbUJBQU8sV0FGSjtBQUdIQyxxQkFBUyxHQUhOO0FBSUhDLHNCQUFVLEdBSlA7QUFLSEMsb0JBQVEsR0FMTDtBQU1IQywwQkFBYztBQU5YLFNBSko7QUFZSEMsb0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixVQUFTQyxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUMxRCxxQkFBU0Msc0JBQVQsQ0FBZ0NDLE1BQWhDLEVBQXdDO0FBQ3BDLG9CQUFJLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBdEIsRUFBZ0M7QUFDNUIsMkJBQU9BLE9BQU9DLEtBQWQ7QUFDSDtBQUNELHVCQUFPRCxNQUFQO0FBQ0g7O0FBRUQscUJBQVNFLG1CQUFULENBQTZCRixNQUE3QixFQUFxQztBQUNqQyx1QkFBT0gsT0FBT0YsWUFBUCxHQUFzQixHQUF0QixHQUE0QkksdUJBQXVCQyxNQUF2QixDQUFuQztBQUNIOztBQUVESCxtQkFBT00sY0FBUCxHQUF3QixVQUFTSCxNQUFULEVBQWlCO0FBQ3JDLHVCQUFPSCxPQUFPRixZQUFQLEdBQXNCTyxvQkFBb0JGLE1BQXBCLENBQXRCLEdBQW9ERCx1QkFBdUJDLE1BQXZCLENBQTNEO0FBQ0gsYUFGRDs7QUFJQUgsbUJBQU9PLGNBQVAsR0FBd0IsVUFBU0osTUFBVCxFQUFpQjtBQUNyQyxvQkFBSSxRQUFPQSxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXRCLEVBQWdDO0FBQzVCLDJCQUFPQSxPQUFPVCxLQUFkO0FBQ0g7QUFDRCx1QkFBT1MsTUFBUDtBQUNILGFBTEQ7O0FBT0FILG1CQUFPUSxNQUFQLEdBQWdCLFlBQVc7QUFDdkJQLHlCQUFTLFlBQVc7QUFDaEJELDJCQUFPUCxnQkFBUDtBQUNILGlCQUZEO0FBR0gsYUFKRDtBQUtILFNBNUJXLENBWlQ7QUF5Q0hnQixpQkFBUyxpQkFBU0MsS0FBVCxFQUFnQkMsTUFBaEIsRUFBd0I7QUFDN0IsZ0JBQUlBLE9BQU9iLFlBQVgsRUFBeUI7QUFDckJZLHNCQUFNRSxJQUFOLENBQVcscUJBQVgsRUFBa0NDLElBQWxDLENBQXVDLFdBQXZDLEVBQW9ELEVBQXBEO0FBQ0g7O0FBRUQsbUJBQU87QUFDSEMscUJBQUssYUFBU3RCLEtBQVQsRUFBZ0J1QixJQUFoQixFQUFzQjtBQUN2QjtBQUNBO0FBQ0FBLHlCQUFLQyxVQUFMLENBQWdCLFVBQWhCO0FBQ0g7QUFMRSxhQUFQO0FBT0g7QUFyREUsS0FBUDtBQXVESCxDQXhERCIsImZpbGUiOiJzd2l0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwiY3VpXCIpLmRpcmVjdGl2ZShcImN1aVN3aXRjaGVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJjdWkvYW5ndWxhci9kaXJlY3RpdmVzL3RlbXBsYXRlcy9zd2l0Y2hlci5odG1sXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgY2hhbmdlRXhwcmVzc2lvbjogXCImY2hhbmdlXCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBcIj1wcm9wZXJ0eVwiLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBcIj1cIixcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IFwiPVwiLFxyXG4gICAgICAgICAgICBmb3JtYXQ6IFwiQFwiLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnM6IFwiQFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cm9sbGVyOiBbXCIkc2NvcGVcIiwgXCIkdGltZW91dFwiLCBmdW5jdGlvbigkc2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24ubGFiZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRMYWJlbFRyYW5zbGF0aW9uKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS50cmFuc2xhdGlvbnMgKyBcIi5cIiArIGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLnRyYW5zbGF0aW9ucyA/IGdldExhYmVsVHJhbnNsYXRpb24ob3B0aW9uKSA6IGdldExhYmVsQ29udmVudGlvbmFsbHkob3B0aW9uKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXRPcHRpb25WYWx1ZSA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5jaGFuZ2VFeHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSxcclxuICAgICAgICBjb21waWxlOiBmdW5jdGlvbih0ZWxlbSwgdGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXR0cnMudHJhbnNsYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICB0ZWxlbS5maW5kKFwiLmN1aS1zd2l0Y2hlcl9fdGV4dFwiKS5hdHRyKFwidHJhbnNsYXRlXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHJlOiBmdW5jdGlvbihzY29wZSwgZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGllIHdpbGwgdHJ5IHRvIGhvbm91ciB0aGUgYGRpc2FibGVkYCBhdHRyaWJ1dGUgZXZlbiB0aG91Z2ggaXQncyBub3Qgb25cclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZvY3VzYWJsZSBmb3JtIGVsZW1lbnQsIHdpdGggaGlsYXJpb3VzIHJlc3VsdHMsIHNvIHdlIHB1bGwgaXQgb2ZmXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

angular.module("cui").directive("cuiTabbed", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        templateUrl: "cui/angular/directives/templates/tabbed.html",
        scope: {
            active: "=?"
        },
        controller: ["$scope", function ($scope) {
            $scope.parts = [];
            $scope.registerPart = function (part) {
                // if no name given, fall back to index in parts array
                if (!part.name) {
                    part.name = $scope.parts.length + "";
                }

                $scope.parts.push(part);

                if (!$scope.active) {
                    $scope.activate(part.name);
                }

                return part.name;
            };
            $scope.isActive = function (tabName) {
                return $scope.active === tabName;
            };
            $scope.activate = function (tabName) {
                $scope.active = tabName;
            };
            $scope.isHidden = function (part) {
                return !part.hidden;
            };

            // these two to be accessed by tabbed-part child scope
            this.registerPart = $scope.registerPart;
            this.isActive = $scope.isActive;
        }]
    };
}).directive("cuiTabbedPart", function () {
    return {
        require: "^^cuiTabbed",
        restrict: "E",
        replace: true,
        transclude: true,
        templateUrl: "cui/angular/directives/templates/tabbed-part.html",
        scope: {
            hide: "=?"
        },
        link: function link(scope, elem, attrs, cuiTabbed) {
            // register this part with the `cui-tabbed` scope,
            // get a part name back to use when querying if i'm active or hidden
            var part = {
                name: attrs.name,
                label: attrs.label,
                anchorClass: attrs.anchorClass || "",
                hidden: attrs.hide ? scope.hide : false
            };
            scope.partName = cuiTabbed.registerPart(part);

            scope.isActive = function () {
                return cuiTabbed.isActive(scope.partName);
            };

            if (attrs.hide) {
                scope.$watch("hide", function (newValue) {
                    part.hidden = newValue;
                });
            }
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmJlZC5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlVXJsIiwic2NvcGUiLCJhY3RpdmUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwicGFydHMiLCJyZWdpc3RlclBhcnQiLCJwYXJ0IiwibmFtZSIsImxlbmd0aCIsInB1c2giLCJhY3RpdmF0ZSIsImlzQWN0aXZlIiwidGFiTmFtZSIsImlzSGlkZGVuIiwiaGlkZGVuIiwicmVxdWlyZSIsImhpZGUiLCJsaW5rIiwiZWxlbSIsImF0dHJzIiwiY3VpVGFiYmVkIiwibGFiZWwiLCJhbmNob3JDbGFzcyIsInBhcnROYW1lIiwiJHdhdGNoIiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxXQUFoQyxFQUE2QyxZQUFXO0FBQ3BELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLG9CQUFZLElBSFQ7QUFJSEMscUJBQWEsOENBSlY7QUFLSEMsZUFBTztBQUNIQyxvQkFBUTtBQURMLFNBTEo7QUFRSEMsb0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBU0MsTUFBVCxFQUFpQjtBQUNwQ0EsbUJBQU9DLEtBQVAsR0FBZSxFQUFmO0FBQ0FELG1CQUFPRSxZQUFQLEdBQXNCLFVBQVNDLElBQVQsRUFBZTtBQUNqQztBQUNBLG9CQUFJLENBQUNBLEtBQUtDLElBQVYsRUFBZ0I7QUFDWkQseUJBQUtDLElBQUwsR0FBWUosT0FBT0MsS0FBUCxDQUFhSSxNQUFiLEdBQXNCLEVBQWxDO0FBQ0g7O0FBRURMLHVCQUFPQyxLQUFQLENBQWFLLElBQWIsQ0FBa0JILElBQWxCOztBQUVBLG9CQUFJLENBQUNILE9BQU9GLE1BQVosRUFBb0I7QUFDaEJFLDJCQUFPTyxRQUFQLENBQWdCSixLQUFLQyxJQUFyQjtBQUNIOztBQUVELHVCQUFPRCxLQUFLQyxJQUFaO0FBQ0gsYUFiRDtBQWNBSixtQkFBT1EsUUFBUCxHQUFrQixVQUFTQyxPQUFULEVBQWtCO0FBQ2hDLHVCQUFPVCxPQUFPRixNQUFQLEtBQWtCVyxPQUF6QjtBQUNILGFBRkQ7QUFHQVQsbUJBQU9PLFFBQVAsR0FBa0IsVUFBU0UsT0FBVCxFQUFrQjtBQUNoQ1QsdUJBQU9GLE1BQVAsR0FBZ0JXLE9BQWhCO0FBQ0gsYUFGRDtBQUdBVCxtQkFBT1UsUUFBUCxHQUFrQixVQUFTUCxJQUFULEVBQWU7QUFDN0IsdUJBQU8sQ0FBQ0EsS0FBS1EsTUFBYjtBQUNILGFBRkQ7O0FBSUE7QUFDQSxpQkFBS1QsWUFBTCxHQUFvQkYsT0FBT0UsWUFBM0I7QUFDQSxpQkFBS00sUUFBTCxHQUFnQlIsT0FBT1EsUUFBdkI7QUFDSCxTQTdCVztBQVJULEtBQVA7QUF1Q0gsQ0F4Q0QsRUF3Q0doQixTQXhDSCxDQXdDYSxlQXhDYixFQXdDOEIsWUFBVztBQUNyQyxXQUFPO0FBQ0hvQixpQkFBUyxhQUROO0FBRUhuQixrQkFBVSxHQUZQO0FBR0hDLGlCQUFTLElBSE47QUFJSEMsb0JBQVksSUFKVDtBQUtIQyxxQkFBYSxtREFMVjtBQU1IQyxlQUFPO0FBQ0hnQixrQkFBTTtBQURILFNBTko7QUFTSEMsY0FBTSxjQUFTakIsS0FBVCxFQUFnQmtCLElBQWhCLEVBQXNCQyxLQUF0QixFQUE2QkMsU0FBN0IsRUFBd0M7QUFDMUM7QUFDQTtBQUNBLGdCQUFJZCxPQUFPO0FBQ1BDLHNCQUFNWSxNQUFNWixJQURMO0FBRVBjLHVCQUFPRixNQUFNRSxLQUZOO0FBR1BDLDZCQUFhSCxNQUFNRyxXQUFOLElBQXFCLEVBSDNCO0FBSVBSLHdCQUFRSyxNQUFNSCxJQUFOLEdBQWFoQixNQUFNZ0IsSUFBbkIsR0FBMEI7QUFKM0IsYUFBWDtBQU1BaEIsa0JBQU11QixRQUFOLEdBQWlCSCxVQUFVZixZQUFWLENBQXVCQyxJQUF2QixDQUFqQjs7QUFFQU4sa0JBQU1XLFFBQU4sR0FBaUIsWUFBVztBQUN4Qix1QkFBT1MsVUFBVVQsUUFBVixDQUFtQlgsTUFBTXVCLFFBQXpCLENBQVA7QUFDSCxhQUZEOztBQUlBLGdCQUFJSixNQUFNSCxJQUFWLEVBQWdCO0FBQ1poQixzQkFBTXdCLE1BQU4sQ0FBYSxNQUFiLEVBQXFCLFVBQVNDLFFBQVQsRUFBbUI7QUFDcENuQix5QkFBS1EsTUFBTCxHQUFjVyxRQUFkO0FBQ0gsaUJBRkQ7QUFHSDtBQUNKO0FBN0JFLEtBQVA7QUErQkgsQ0F4RUQiLCJmaWxlIjoidGFiYmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpVGFiYmVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImN1aS9hbmd1bGFyL2RpcmVjdGl2ZXMvdGVtcGxhdGVzL3RhYmJlZC5odG1sXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgYWN0aXZlOiBcIj0/XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IFtcIiRzY29wZVwiLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnBhcnRzID0gW107XHJcbiAgICAgICAgICAgICRzY29wZS5yZWdpc3RlclBhcnQgPSBmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBubyBuYW1lIGdpdmVuLCBmYWxsIGJhY2sgdG8gaW5kZXggaW4gcGFydHMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmICghcGFydC5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydC5uYW1lID0gJHNjb3BlLnBhcnRzLmxlbmd0aCArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhcnRzLnB1c2gocGFydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFjdGl2YXRlKHBhcnQubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnQubmFtZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJHNjb3BlLmlzQWN0aXZlID0gZnVuY3Rpb24odGFiTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5hY3RpdmUgPT09IHRhYk5hbWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICRzY29wZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKHRhYk5hbWUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5hY3RpdmUgPSB0YWJOYW1lO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAkc2NvcGUuaXNIaWRkZW4gPSBmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIXBhcnQuaGlkZGVuO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlc2UgdHdvIHRvIGJlIGFjY2Vzc2VkIGJ5IHRhYmJlZC1wYXJ0IGNoaWxkIHNjb3BlXHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQYXJ0ID0gJHNjb3BlLnJlZ2lzdGVyUGFydDtcclxuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9ICRzY29wZS5pc0FjdGl2ZTtcclxuICAgICAgICB9XVxyXG4gICAgfTtcclxufSkuZGlyZWN0aXZlKFwiY3VpVGFiYmVkUGFydFwiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZTogXCJeXmN1aVRhYmJlZFwiLFxyXG4gICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvdGFiYmVkLXBhcnQuaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIGhpZGU6IFwiPT9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzLCBjdWlUYWJiZWQpIHtcclxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgdGhpcyBwYXJ0IHdpdGggdGhlIGBjdWktdGFiYmVkYCBzY29wZSxcclxuICAgICAgICAgICAgLy8gZ2V0IGEgcGFydCBuYW1lIGJhY2sgdG8gdXNlIHdoZW4gcXVlcnlpbmcgaWYgaSdtIGFjdGl2ZSBvciBoaWRkZW5cclxuICAgICAgICAgICAgdmFyIHBhcnQgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IGF0dHJzLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yQ2xhc3M6IGF0dHJzLmFuY2hvckNsYXNzIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBoaWRkZW46IGF0dHJzLmhpZGUgPyBzY29wZS5oaWRlIDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2NvcGUucGFydE5hbWUgPSBjdWlUYWJiZWQucmVnaXN0ZXJQYXJ0KHBhcnQpO1xyXG5cclxuICAgICAgICAgICAgc2NvcGUuaXNBY3RpdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdWlUYWJiZWQuaXNBY3RpdmUoc2NvcGUucGFydE5hbWUpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGF0dHJzLmhpZGUpIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChcImhpZGVcIiwgZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0LmhpZGRlbiA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuIl19

"use strict";

angular.module("cui").directive("cuiToast", function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        templateUrl: "cui/angular/directives/templates/toast.html",
        scope: {
            trigger: "=",
            severity: "@",
            timeout: "@",
            actionLabel: "@",
            actionFunction: "&"
        },
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            $scope.hasAction = function () {
                return !!$scope.actionLabel;
            };

            $scope.doAction = function () {
                $scope.trigger = false;

                if ($scope.actionFunction) {
                    $scope.actionFunction();
                }
            };

            $scope.$watch("trigger", function (newValue) {
                if (newValue) {
                    $timeout(Number($scope.timeout) * 1000).then(function () {
                        $scope.trigger = false;
                    });
                }
            });
        }]
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0cmFuc2NsdWRlIiwidGVtcGxhdGVVcmwiLCJzY29wZSIsInRyaWdnZXIiLCJzZXZlcml0eSIsInRpbWVvdXQiLCJhY3Rpb25MYWJlbCIsImFjdGlvbkZ1bmN0aW9uIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiR0aW1lb3V0IiwiaGFzQWN0aW9uIiwiZG9BY3Rpb24iLCIkd2F0Y2giLCJuZXdWYWx1ZSIsIk51bWJlciIsInRoZW4iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxVQUFoQyxFQUE0QyxZQUFXO0FBQ25ELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLG9CQUFZLElBSFQ7QUFJSEMscUJBQWEsNkNBSlY7QUFLSEMsZUFBTztBQUNIQyxxQkFBUyxHQUROO0FBRUhDLHNCQUFVLEdBRlA7QUFHSEMscUJBQVMsR0FITjtBQUlIQyx5QkFBYSxHQUpWO0FBS0hDLDRCQUFnQjtBQUxiLFNBTEo7QUFZSEMsb0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixVQUFTQyxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUMxREQsbUJBQU9FLFNBQVAsR0FBbUIsWUFBVztBQUMxQix1QkFBTyxDQUFDLENBQUNGLE9BQU9ILFdBQWhCO0FBQ0gsYUFGRDs7QUFJQUcsbUJBQU9HLFFBQVAsR0FBa0IsWUFBVztBQUN6QkgsdUJBQU9OLE9BQVAsR0FBaUIsS0FBakI7O0FBRUEsb0JBQUlNLE9BQU9GLGNBQVgsRUFBMkI7QUFDdkJFLDJCQUFPRixjQUFQO0FBQ0g7QUFDSixhQU5EOztBQVFBRSxtQkFBT0ksTUFBUCxDQUFjLFNBQWQsRUFBeUIsVUFBU0MsUUFBVCxFQUFtQjtBQUN4QyxvQkFBSUEsUUFBSixFQUFjO0FBQ1ZKLDZCQUFTSyxPQUFPTixPQUFPSixPQUFkLElBQXlCLElBQWxDLEVBQXdDVyxJQUF4QyxDQUE2QyxZQUFNO0FBQy9DUCwrQkFBT04sT0FBUCxHQUFpQixLQUFqQjtBQUNILHFCQUZEO0FBR0g7QUFDSixhQU5EO0FBT0gsU0FwQlc7QUFaVCxLQUFQO0FBa0NILENBbkNEIiwiZmlsZSI6InRvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpVG9hc3RcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvdG9hc3QuaHRtbFwiLFxyXG4gICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiPVwiLFxyXG4gICAgICAgICAgICBzZXZlcml0eTogXCJAXCIsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IFwiQFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJAXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbkZ1bmN0aW9uOiBcIiZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIFwiJHRpbWVvdXRcIiwgZnVuY3Rpb24oJHNjb3BlLCAkdGltZW91dCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuaGFzQWN0aW9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gISEkc2NvcGUuYWN0aW9uTGFiZWw7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZG9BY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS50cmlnZ2VyID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5hY3Rpb25GdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hY3Rpb25GdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaChcInRyaWdnZXJcIiwgZnVuY3Rpb24obmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KE51bWJlcigkc2NvcGUudGltZW91dCkgKiAxMDAwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRyaWdnZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfV1cclxuICAgIH07XHJcbn0pO1xyXG4iXX0=

"use strict";

angular.module("cui").directive("cuiToggle", function () {
    return {
        restrict: "A",
        compile: function compile() {
            return {
                post: function post(scope, elem) {
                    elem.addClass("cui-toggle").after("<i></i> ");
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJjb21waWxlIiwicG9zdCIsInNjb3BlIiwiZWxlbSIsImFkZENsYXNzIiwiYWZ0ZXIiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxXQUFoQyxFQUE2QyxZQUFXO0FBQ3BELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxtQkFBVztBQUNoQixtQkFBTztBQUNIQyxzQkFBTSxjQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFzQjtBQUN4QkEseUJBQUtDLFFBQUwsQ0FBYyxZQUFkLEVBQTRCQyxLQUE1QixDQUFrQyxVQUFsQztBQUNIO0FBSEUsYUFBUDtBQUtIO0FBUkUsS0FBUDtBQVVILENBWEQiLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpVG9nZ2xlXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgY29tcGlsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0OiBmdW5jdGlvbihzY29wZSwgZWxlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkQ2xhc3MoXCJjdWktdG9nZ2xlXCIpLmFmdGVyKFwiPGk+PC9pPiBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==

"use strict";

angular.module("cui").directive("cuiWaiting", function () {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "cui/angular/directives/templates/waiting.html",
        transclude: {
            waiting: "whenWaiting",
            done: "?whenDone",
            failed: "?whenFailed"
        },
        scope: {
            trigger: "="
        },
        controller: ["$scope", "$timeout", function ($scope, $timeout) {
            angular.extend($scope, {
                isShown: function isShown() {
                    return !!$scope.trigger;
                },
                isWaiting: function isWaiting() {
                    return $scope.trigger === "waiting";
                },
                isDone: function isDone() {
                    return $scope.trigger === "done";
                },
                isFailed: function isFailed() {
                    return $scope.trigger === "failed";
                }
            });
            $scope.$watch("trigger", function (value) {
                if (value === "done" || value === "failed") {
                    $timeout(function () {
                        $scope.trigger = false;
                    }, 3000);
                }
            });
        }]
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmcuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInRlbXBsYXRlVXJsIiwidHJhbnNjbHVkZSIsIndhaXRpbmciLCJkb25lIiwiZmFpbGVkIiwic2NvcGUiLCJ0cmlnZ2VyIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiR0aW1lb3V0IiwiZXh0ZW5kIiwiaXNTaG93biIsImlzV2FpdGluZyIsImlzRG9uZSIsImlzRmFpbGVkIiwiJHdhdGNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVFDLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxTQUF0QixDQUFnQyxZQUFoQyxFQUE4QyxZQUFXO0FBQ3JELFdBQU87QUFDSEMsa0JBQVUsR0FEUDtBQUVIQyxpQkFBUyxJQUZOO0FBR0hDLHFCQUFhLCtDQUhWO0FBSUhDLG9CQUFZO0FBQ1JDLHFCQUFTLGFBREQ7QUFFUkMsa0JBQU0sV0FGRTtBQUdSQyxvQkFBUTtBQUhBLFNBSlQ7QUFTSEMsZUFBTztBQUNIQyxxQkFBUztBQUROLFNBVEo7QUFZSEMsb0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixVQUFTQyxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUMxRGQsb0JBQVFlLE1BQVIsQ0FBZUYsTUFBZixFQUF1QjtBQUNuQkcsdUJBRG1CLHFCQUNUO0FBQ04sMkJBQU8sQ0FBQyxDQUFDSCxPQUFPRixPQUFoQjtBQUNILGlCQUhrQjtBQUluQk0seUJBSm1CLHVCQUlQO0FBQ1IsMkJBQU9KLE9BQU9GLE9BQVAsS0FBbUIsU0FBMUI7QUFDSCxpQkFOa0I7QUFPbkJPLHNCQVBtQixvQkFPVjtBQUNMLDJCQUFPTCxPQUFPRixPQUFQLEtBQW1CLE1BQTFCO0FBQ0gsaUJBVGtCO0FBVW5CUSx3QkFWbUIsc0JBVVI7QUFDUCwyQkFBT04sT0FBT0YsT0FBUCxLQUFtQixRQUExQjtBQUNIO0FBWmtCLGFBQXZCO0FBY0FFLG1CQUFPTyxNQUFQLENBQWMsU0FBZCxFQUF5QixpQkFBUztBQUM5QixvQkFBSUMsVUFBVSxNQUFWLElBQW9CQSxVQUFVLFFBQWxDLEVBQTRDO0FBQ3hDUCw2QkFBUyxZQUFXO0FBQ2hCRCwrQkFBT0YsT0FBUCxHQUFpQixLQUFqQjtBQUNILHFCQUZELEVBRUcsSUFGSDtBQUdIO0FBQ0osYUFORDtBQU9ILFNBdEJXO0FBWlQsS0FBUDtBQW9DSCxDQXJDRCIsImZpbGUiOiJ3YWl0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoXCJjdWlcIikuZGlyZWN0aXZlKFwiY3VpV2FpdGluZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwiY3VpL2FuZ3VsYXIvZGlyZWN0aXZlcy90ZW1wbGF0ZXMvd2FpdGluZy5odG1sXCIsXHJcbiAgICAgICAgdHJhbnNjbHVkZToge1xyXG4gICAgICAgICAgICB3YWl0aW5nOiBcIndoZW5XYWl0aW5nXCIsXHJcbiAgICAgICAgICAgIGRvbmU6IFwiP3doZW5Eb25lXCIsXHJcbiAgICAgICAgICAgIGZhaWxlZDogXCI/d2hlbkZhaWxlZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiBcIj1cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udHJvbGxlcjogW1wiJHNjb3BlXCIsIFwiJHRpbWVvdXRcIiwgZnVuY3Rpb24oJHNjb3BlLCAkdGltZW91dCkge1xyXG4gICAgICAgICAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIHtcclxuICAgICAgICAgICAgICAgIGlzU2hvd24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhJHNjb3BlLnRyaWdnZXI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNXYWl0aW5nKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUudHJpZ2dlciA9PT0gXCJ3YWl0aW5nXCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNEb25lKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUudHJpZ2dlciA9PT0gXCJkb25lXCI7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXNGYWlsZWQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS50cmlnZ2VyID09PSBcImZhaWxlZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLiR3YXRjaChcInRyaWdnZXJcIiwgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcImRvbmVcIiB8fCB2YWx1ZSA9PT0gXCJmYWlsZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudHJpZ2dlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XVxyXG4gICAgfTtcclxufSk7XHJcbiJdfQ==
}(window.jQuery, window.angular));
