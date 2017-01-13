"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, $) {
    var focusedBeforeDialog = void 0;

    function renderDialog(dialog) {
        var template = "<div class=\"cui-dialog\" data-hook=\"" + dialog.dataHook + "\" role=\"dialog\" aria-hidden=\"true\" aria-labelledby=\"" + dialog.id + "_title\" aria-describedby=\"" + dialog.id + "_message\">\n            <div class=\"cui-dialog__layout\">\n                <div class=\"cui-dialog__content\">\n                    <h1 id=\"" + dialog.id + "_title\" class=\"cui-dialog__title\">" + dialog.title + "</h1>\n                    <p id=\"" + dialog.id + "_message\" class=\"cui-dialog__message\">" + dialog.message + "</p>\n                    <div class=\"cui-dialog__controls\"></div>\n                </div>\n            </div>\n        </div>";
        return $(template).appendTo(document.body);
    }

    function createButtons(dialog) {
        var controlsElement = dialog.element.find(".cui-dialog__controls");

        function writeModifiers(modifiers) {
            if (modifiers) {
                return modifiers.split(" ").map(function (modifier) {
                    return "cui-button--" + modifier;
                }).join(" ");
            }
            return "";
        }

        function createButton(option) {
            $("<button class=\"cui-button\"></button>").text(option.text).addClass(function () {
                return writeModifiers(option.modifiers);
            }).attr("data-hook", dialog.dataHook + "." + option.value).on("click", function (e) {
                e.preventDefault();
                dialog.close(option.value);
            }).appendTo(controlsElement);
        }

        dialog.options.forEach(createButton);
        return controlsElement.find(".cui-button");
    }

    // helper function trapping the tab key inside a node
    function trapTabKey(dialog, e) {
        var focusedItemIndex = dialog.buttons.index(document.activeElement);

        if (e.shiftKey && focusedItemIndex === 0) {
            e.preventDefault();
            dialog.buttons.last().focus();
        } else if (!e.shiftKey && focusedItemIndex === dialog.buttons.length - 1) {
            e.preventDefault();
            dialog.buttons.first().focus();
        }
    }

    // helper function to catch esc and tab keys
    function setupKeystrokeHandler(dialog) {
        $(document).on("keydown", function (e) {
            if (!dialog.shown) {
                return;
            }

            if (e.which === 27) {
                // esc key
                dialog.close(null);
            } else if (e.which === 9) {
                // tab key
                trapTabKey(dialog, e);
            }
        });
    }

    // helper function keeping focus from straying outside the dialog
    function setupFocusHandler(dialog) {
        dialog._focusHandler = function (e) {
            if (this.shown && !$.contains(this.element[0], e.target)) {
                this.buttons.first().focus();
            }
        }.bind(dialog);
    }

    var CUIDialog = function () {
        function CUIDialog() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [{ value: true, text: "OK" }];
            var dataHook = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

            _classCallCheck(this, CUIDialog);

            this.id = "dialog-" + Date.now();
            this.dataHook = dataHook;
            this.title = title;
            this.message = message;
            this.options = options;
            this.element = renderDialog(this);
            this.buttons = createButtons(this);
            this.shown = false;
            setupKeystrokeHandler(this);
            setupFocusHandler(this);
        }

        _createClass(CUIDialog, [{
            key: "show",
            value: function show(callback) {
                this.shown = true;
                this.callback = callback;
                this.element.addClass("is-shown").attr("aria-hidden", "false");
                focusedBeforeDialog = document.activeElement;
                this.buttons.first().focus();
                document.body.addEventListener("focus", this._focusHandler, true);
            }
        }, {
            key: "close",
            value: function close(value) {
                this.shown = false;
                this.element.removeClass("is-shown").attr("aria-hidden", "true");
                if (focusedBeforeDialog) {
                    focusedBeforeDialog.focus();
                }
                document.body.removeEventListener("focus", this._focusHandler, true);
                if (typeof value !== "undefined" && typeof this.callback === "function") {
                    this.callback(value);
                }
            }
        }]);

        return CUIDialog;
    }();

    global.CUIDialog = CUIDialog;
})(window, window.jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGEvZGlhbG9nLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsIiQiLCJmb2N1c2VkQmVmb3JlRGlhbG9nIiwicmVuZGVyRGlhbG9nIiwiZGlhbG9nIiwidGVtcGxhdGUiLCJkYXRhSG9vayIsImlkIiwidGl0bGUiLCJtZXNzYWdlIiwiYXBwZW5kVG8iLCJkb2N1bWVudCIsImJvZHkiLCJjcmVhdGVCdXR0b25zIiwiY29udHJvbHNFbGVtZW50IiwiZWxlbWVudCIsImZpbmQiLCJ3cml0ZU1vZGlmaWVycyIsIm1vZGlmaWVycyIsInNwbGl0IiwibWFwIiwibW9kaWZpZXIiLCJqb2luIiwiY3JlYXRlQnV0dG9uIiwib3B0aW9uIiwidGV4dCIsImFkZENsYXNzIiwiYXR0ciIsInZhbHVlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZSIsIm9wdGlvbnMiLCJmb3JFYWNoIiwidHJhcFRhYktleSIsImZvY3VzZWRJdGVtSW5kZXgiLCJidXR0b25zIiwiaW5kZXgiLCJhY3RpdmVFbGVtZW50Iiwic2hpZnRLZXkiLCJsYXN0IiwiZm9jdXMiLCJsZW5ndGgiLCJmaXJzdCIsInNldHVwS2V5c3Ryb2tlSGFuZGxlciIsInNob3duIiwid2hpY2giLCJzZXR1cEZvY3VzSGFuZGxlciIsIl9mb2N1c0hhbmRsZXIiLCJjb250YWlucyIsInRhcmdldCIsImJpbmQiLCJDVUlEaWFsb2ciLCJEYXRlIiwibm93IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luZG93IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBQ0MsV0FBU0EsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0I7QUFDakIsUUFBSUMsNEJBQUo7O0FBRUEsYUFBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDMUIsWUFBTUMsc0RBQWlERCxPQUFPRSxRQUF4RCxrRUFBdUhGLE9BQU9HLEVBQTlILG9DQUE2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QXJCO0FBQ0EvQix5QkFBU0MsSUFBVCxDQUFjNkMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsS0FBS1IsYUFBN0MsRUFBNEQsSUFBNUQ7QUFDSDtBQXRHWTtBQUFBO0FBQUEsa0NBd0dQckIsS0F4R08sRUF3R0E7QUFDVCxxQkFBS2tCLEtBQUwsR0FBYSxLQUFiO0FBQ0EscUJBQUsvQixPQUFMLENBQWEyQyxXQUFiLENBQXlCLFVBQXpCLEVBQXFDL0IsSUFBckMsQ0FBMEMsYUFBMUMsRUFBeUQsTUFBekQ7QUFDQSxvQkFBSXpCLG1CQUFKLEVBQXlCO0FBQ3JCQSx3Q0FBb0J3QyxLQUFwQjtBQUNIO0FBQ0QvQix5QkFBU0MsSUFBVCxDQUFjK0MsbUJBQWQsQ0FBa0MsT0FBbEMsRUFBMkMsS0FBS1YsYUFBaEQsRUFBK0QsSUFBL0Q7QUFDQSxvQkFBSSxPQUFPckIsS0FBUCxLQUFpQixXQUFqQixJQUFnQyxPQUFPLEtBQUs0QixRQUFaLEtBQXlCLFVBQTdELEVBQXlFO0FBQ3JFLHlCQUFLQSxRQUFMLENBQWM1QixLQUFkO0FBQ0g7QUFDSjtBQWxIWTs7QUFBQTtBQUFBOztBQXFIakI1QixXQUFPcUQsU0FBUCxHQUFtQkEsU0FBbkI7QUFDSCxDQXRIQSxFQXNIQ08sTUF0SEQsRUFzSFNBLE9BQU9DLE1BdEhoQixDQUFEIiwiZmlsZSI6InZhbmlsbGEvZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4oZnVuY3Rpb24oZ2xvYmFsLCAkKSB7XG4gICAgbGV0IGZvY3VzZWRCZWZvcmVEaWFsb2c7XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEaWFsb2coZGlhbG9nKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYDxkaXYgY2xhc3M9XCJjdWktZGlhbG9nXCIgZGF0YS1ob29rPVwiJHtkaWFsb2cuZGF0YUhvb2t9XCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGFyaWEtbGFiZWxsZWRieT1cIiR7ZGlhbG9nLmlkfV90aXRsZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCIke2RpYWxvZy5pZH1fbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1aS1kaWFsb2dfX2xheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWktZGlhbG9nX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cIiR7ZGlhbG9nLmlkfV90aXRsZVwiIGNsYXNzPVwiY3VpLWRpYWxvZ19fdGl0bGVcIj4ke2RpYWxvZy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIiR7ZGlhbG9nLmlkfV9tZXNzYWdlXCIgY2xhc3M9XCJjdWktZGlhbG9nX19tZXNzYWdlXCI+JHtkaWFsb2cubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWktZGlhbG9nX19jb250cm9sc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIHJldHVybiAkKHRlbXBsYXRlKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKGRpYWxvZykge1xuICAgICAgICBjb25zdCBjb250cm9sc0VsZW1lbnQgPSBkaWFsb2cuZWxlbWVudC5maW5kKFwiLmN1aS1kaWFsb2dfX2NvbnRyb2xzXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdyaXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICAgICAgICAgICAgaWYgKG1vZGlmaWVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RpZmllcnMuc3BsaXQoXCIgXCIpLm1hcChtb2RpZmllciA9PiBcImN1aS1idXR0b24tLVwiICsgbW9kaWZpZXIpLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b24ob3B0aW9uKSB7XG4gICAgICAgICAgICAkKFwiPGJ1dHRvbiBjbGFzcz1cXFwiY3VpLWJ1dHRvblxcXCI+PC9idXR0b24+XCIpXG4gICAgICAgICAgICAgICAgLnRleHQob3B0aW9uLnRleHQpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCgpID0+IHdyaXRlTW9kaWZpZXJzKG9wdGlvbi5tb2RpZmllcnMpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZGF0YS1ob29rXCIsIGRpYWxvZy5kYXRhSG9vayArIFwiLlwiICsgb3B0aW9uLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGNvbnRyb2xzRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBkaWFsb2cub3B0aW9ucy5mb3JFYWNoKGNyZWF0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBjb250cm9sc0VsZW1lbnQuZmluZChcIi5jdWktYnV0dG9uXCIpO1xuICAgIH1cblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0cmFwcGluZyB0aGUgdGFiIGtleSBpbnNpZGUgYSBub2RlXG4gICAgZnVuY3Rpb24gdHJhcFRhYktleShkaWFsb2csIGUpIHtcbiAgICAgICAgY29uc3QgZm9jdXNlZEl0ZW1JbmRleCA9IGRpYWxvZy5idXR0b25zLmluZGV4KGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpYWxvZy5idXR0b25zLmxhc3QoKS5mb2N1cygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJdGVtSW5kZXggPT09IGRpYWxvZy5idXR0b25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpYWxvZy5idXR0b25zLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0byBjYXRjaCBlc2MgYW5kIHRhYiBrZXlzXG4gICAgZnVuY3Rpb24gc2V0dXBLZXlzdHJva2VIYW5kbGVyKGRpYWxvZykge1xuICAgICAgICAkKGRvY3VtZW50KS5vbihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKCFkaWFsb2cuc2hvd24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xuICAgICAgICAgICAgICAgIC8vIGVzYyBrZXlcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UobnVsbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyB0YWIga2V5XG4gICAgICAgICAgICAgICAgdHJhcFRhYktleShkaWFsb2csIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24ga2VlcGluZyBmb2N1cyBmcm9tIHN0cmF5aW5nIG91dHNpZGUgdGhlIGRpYWxvZ1xuICAgIGZ1bmN0aW9uIHNldHVwRm9jdXNIYW5kbGVyKGRpYWxvZykge1xuICAgICAgICBkaWFsb2cuX2ZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3duICYmICEkLmNvbnRhaW5zKHRoaXMuZWxlbWVudFswXSwgZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zLmZpcnN0KCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKGRpYWxvZyk7XG4gICAgfVxuXG4gICAgY2xhc3MgQ1VJRGlhbG9nIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiLCBtZXNzYWdlID0gXCJcIiwgb3B0aW9ucyA9IFt7dmFsdWU6IHRydWUsIHRleHQ6IFwiT0tcIn1dLCBkYXRhSG9vayA9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBcImRpYWxvZy1cIiArIERhdGUubm93KCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFIb29rID0gZGF0YUhvb2s7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHJlbmRlckRpYWxvZyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucyA9IGNyZWF0ZUJ1dHRvbnModGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICAgICAgICBzZXR1cEtleXN0cm9rZUhhbmRsZXIodGhpcyk7XG4gICAgICAgICAgICBzZXR1cEZvY3VzSGFuZGxlcih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNob3coY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKFwiaXMtc2hvd25cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICBmb2N1c2VkQmVmb3JlRGlhbG9nID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5maXJzdCgpLmZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCB0aGlzLl9mb2N1c0hhbmRsZXIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xvc2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcyhcImlzLXNob3duXCIpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICAgICAgICBpZiAoZm9jdXNlZEJlZm9yZURpYWxvZykge1xuICAgICAgICAgICAgICAgIGZvY3VzZWRCZWZvcmVEaWFsb2cuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHRoaXMuX2ZvY3VzSGFuZGxlciwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB0aGlzLmNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdsb2JhbC5DVUlEaWFsb2cgPSBDVUlEaWFsb2c7XG59KHdpbmRvdywgd2luZG93LmpRdWVyeSkpO1xuIl19
