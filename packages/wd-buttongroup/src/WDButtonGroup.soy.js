/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from WDButtonGroup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace WDButtonGroup.
 * @public
 */

goog.module('WDButtonGroup.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('WDButton.incrementaldom', 'render');


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>,
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var type = soy.asserts.assertType(opt_data.type == null || (goog.isString(opt_data.type) || opt_data.type instanceof goog.soy.data.SanitizedContent), 'type', opt_data.type, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spacing = soy.asserts.assertType(opt_data.spacing == null || (goog.isString(opt_data.spacing) || opt_data.spacing instanceof goog.soy.data.SanitizedContent), 'spacing', opt_data.spacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var buttons = soy.asserts.assertType(goog.isArray(opt_data.buttons), 'buttons', opt_data.buttons, '!Array<?>');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var name = soy.asserts.assertType(opt_data.name == null || (goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent), 'name', opt_data.name, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy11 = function() {
    incrementalDom.attr('class', 'wd-btn-group' + (type ? ' wd-btn-group-' + type : '') + (elementClasses ? ' ' + elementClasses : ''));
    if (id) {
      incrementalDom.attr('id', id);
    }
    if (name) {
      incrementalDom.attr('name', name);
    }
  };
  incrementalDom.elementOpenStart('div');
      attributes__soy11();
  incrementalDom.elementOpenEnd();
    $buttonList(opt_data, null, opt_ijData);
  incrementalDom.elementClose('div');
}
exports.render = $render;
/**
 * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  type: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>,
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  name: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'WDButtonGroup.render';
}


/**
 * @param {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $buttonList(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var elementClasses = soy.asserts.assertType(opt_data.elementClasses == null || (goog.isString(opt_data.elementClasses) || opt_data.elementClasses instanceof goog.soy.data.SanitizedContent), 'elementClasses', opt_data.elementClasses, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var borderRadius = soy.asserts.assertType(opt_data.borderRadius == null || (goog.isString(opt_data.borderRadius) || opt_data.borderRadius instanceof goog.soy.data.SanitizedContent), 'borderRadius', opt_data.borderRadius, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spacing = soy.asserts.assertType(opt_data.spacing == null || (goog.isString(opt_data.spacing) || opt_data.spacing instanceof goog.soy.data.SanitizedContent), 'spacing', opt_data.spacing, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!Array<?>} */
  var buttons = soy.asserts.assertType(goog.isArray(opt_data.buttons), 'buttons', opt_data.buttons, '!Array<?>');
  var itemClasses__soy48 = '';
  itemClasses__soy48 += 'wd-btn-group-item';
  itemClasses__soy48 += borderRadius ? ' wd-btn-' + borderRadius : '';
  itemClasses__soy48 += elementClasses ? ' ' + elementClasses : '';
  var spacingAttributes__soy63 = function() {
    incrementalDom.attr('class', 'wd-btn-group-spacing');
    if (spacing) {
      incrementalDom.attr('style', 'width:' + spacing);
    }
  };
  incrementalDom.elementOpenStart('ul');
      incrementalDom.attr('class', 'wd-btn-group-list');
  incrementalDom.elementOpenEnd();
    var button117List = buttons;
    var button117ListLen = button117List.length;
        for (var button117Index = 0; button117Index < button117ListLen; button117Index++) {
            var button117Data = button117List[button117Index];
            var btnId__soy73 = button117Index + 1;
              if (button117Index == 0) {
                incrementalDom.elementOpenStart('li');
              incrementalDom.attr('class', 'wd-btn-group-firstitem ' + itemClasses__soy48);
          incrementalDom.elementOpenEnd();
              } else if (button117Index == button117ListLen - 1) {
                incrementalDom.elementOpenStart('div');
                spacingAttributes__soy63();
            incrementalDom.elementOpenEnd();
            incrementalDom.elementClose('div');
            incrementalDom.elementOpenStart('li');
                incrementalDom.attr('class', 'wd-btn-group-lastitem ' + itemClasses__soy48);
            incrementalDom.elementOpenEnd();
              } else {
                incrementalDom.elementOpenStart('div');
                  spacingAttributes__soy63();
              incrementalDom.elementOpenEnd();
              incrementalDom.elementClose('div');
              incrementalDom.elementOpenStart('li');
                  incrementalDom.attr('class', 'wd-btn-group-miditem-' + btnId__soy73 + ' ' + itemClasses__soy48);
              incrementalDom.elementOpenEnd();
              }
              $templateAlias1({disabled: button117Data.disabled, elementClasses: button117Data.elementClasses, style: button117Data.style, color: button117Data.color, size: button117Data.size, width: button117Data.width, hardWidth: button117Data.hardWidth, darkTheme: button117Data.darkTheme, borderRadius: button117Data.borderRadius, href: button117Data.href, icon: button117Data.icon, classIcon: button117Data.classIcon, iconAlignment: button117Data.iconAlignment, id: button117Data.id, label: button117Data.label, name: button117Data.name, rel: button117Data.rel, target: button117Data.target, type: button117Data.type, value: button117Data.value}, null, opt_ijData);
            incrementalDom.elementClose('li');
          }
      incrementalDom.elementClose('ul');
    }
    exports.buttonList = $buttonList;
    /**
     * @typedef {{
 *  elementClasses: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  borderRadius: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  spacing: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  buttons: !Array<?>
 * }}
     */
    $buttonList.Params;
    if (goog.DEBUG) {
      $buttonList.soyTemplateName = 'WDButtonGroup.buttonList';
    }

exports.render.params = ["elementClasses","type","spacing","buttons","borderRadius","id","name"];
exports.render.types = {"elementClasses":"string","type":"string","spacing":"string","buttons":"list<?>","borderRadius":"string","id":"string","name":"string"};
exports.buttonList.params = ["elementClasses","borderRadius","spacing","buttons"];
exports.buttonList.types = {"elementClasses":"string","borderRadius":"string","spacing":"string","buttons":"list<?>"};
templates = exports;
return exports;

});

class WDButtonGroup extends Component {}
Soy.register(WDButtonGroup, templates);
export { WDButtonGroup, templates };
export default templates;
/* jshint ignore:end */
