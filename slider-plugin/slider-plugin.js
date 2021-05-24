!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";t.__esModule=!0,t.Observer=void 0;var n=function(){function e(){this.observers=[]}return e.prototype.subscribe=function(e){this.observers.push(e)},e.prototype.broadcast=function(e){0!==this.observers.length&&this.observers.forEach((function(t){return t(e)}))},e}();t.Observer=n},function(e,t,i){"use strict";t.__esModule=!0,i(2);var n=i(3);!function(e){var t,i=function(t,i){var a=e.extend({$this:t,orientation:"horizontal",minValue:0,maxValue:100,currentValue:[0],step:1,isShowValueWindow:!1,isShowScaleValues:!1},i);return new n.Presenter(a)},a=function(e){return Array.isArray(e)&&"number"==typeof e[0]||Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1]},s=function(e){return"horizontal"===e||"vertical"===e},r=function(e){1===e.length?t.setCurrentValue(e[0]):2===e.length&&(e[0]<e[1]?(t.setCurrentValueMin(e[0]),t.setCurrentValueMax(e[1])):e[0]>e[1]&&(t.setCurrentValueMin(e[1]),t.setCurrentValueMax(e[0])))},u=function(e){t.setOrientation(e)},o=function(e){t.setMinValue(e)},l=function(e){t.setMaxValue(e)},h=function(e){t.setStep(e)},c=function(e){t.setIsShowValueWindow(e)},d=function(e){t.setIsShowScaleValues(e)};e.fn.slider=function(e,n){switch(e){case"setCurrentValue":a(n)&&r(n);break;case"setOrientation":s(n)&&u(n);break;case"setMinValue":"number"==typeof n&&o(n);break;case"setMaxValue":"number"==typeof n&&l(n);break;case"setStep":"number"==typeof n&&h(n);break;case"setIsShowValueWindow":"boolean"==typeof n&&c(n);break;case"setIsShowScaleValues":"boolean"==typeof n&&d(n);break;default:e?"object"==typeof e&&(t=i(this,e)):t=i(this)}return this}}(jQuery)},function(e,t){},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Presenter=void 0;var s=i(0),r=i(4),u=i(5),o=function(e){function t(t){var i=t.$this,n=t.orientation,a=t.minValue,s=t.maxValue,o=t.currentValue,l=t.step,h=t.isShowValueWindow,c=t.isShowScaleValues,d=e.call(this)||this;return d.model=new r.Model({orientation:n,minValue:a,maxValue:s,currentValue:o,step:l,isShowValueWindow:h,isShowScaleValues:c}),d.view=new u.View({$this:i,orientation:n,minValue:a,maxValue:s,currentValue:o,step:l,isShowValueWindow:h,isShowScaleValues:c}),d.$this=i,d.init(),d}return a(t,e),t.prototype.init=function(){var e=this;this.model.subscribe((function(t){switch(t.type){case"updateCurrentValue":e.updateCurrentValue(t.value);break;case"updateCurrentValueMin":e.updateCurrentValueMin(t.value);break;case"updateCurrentValueMax":e.updateCurrentValueMax(t.value);break;case"updateOrientation":e.updateOrientation(t.value);break;case"updateMinValue":e.updateMinValue(t.value);break;case"updateMaxValue":e.updateMaxValue(t.value);break;case"updateStep":e.updateStep(t.value);break;case"updateIsShowValueWindow":e.updateIsShowValueWindow(t.value);break;case"updateIsShowScaleValues":e.updateIsShowScaleValues(t.value)}})),this.view.subscribe((function(t){switch(t.type){case"setCurrentValue":e.setCurrentValue(t.value);break;case"setCurrentValueMin":e.setCurrentValueMin(t.value);break;case"setCurrentValueMax":e.setCurrentValueMax(t.value)}}))},t.prototype.setCurrentValue=function(e){this.model.setCurrentValue(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValue=function(e){this.view.updateCurrentValue(e)},t.prototype.setCurrentValueMin=function(e){this.model.setCurrentValueMin(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValueMin=function(e){this.view.updateCurrentValueMin(e)},t.prototype.setCurrentValueMax=function(e){this.model.setCurrentValueMax(e),this.$this.trigger("updateCurrentValue",{currentValue:this.model.getCurrentValue()})},t.prototype.updateCurrentValueMax=function(e){this.view.updateCurrentValueMax(e)},t.prototype.setOrientation=function(e){this.model.setOrientation(e)},t.prototype.updateOrientation=function(e){this.view.updateOrientation(e)},t.prototype.setMinValue=function(e){this.model.setMinValue(e),this.$this.trigger("updateMinValue",{minValue:this.model.getMinValue()})},t.prototype.updateMinValue=function(e){this.view.updateMinValue(e)},t.prototype.setMaxValue=function(e){this.model.setMaxValue(e),this.$this.trigger("updateMaxValue",{maxValue:this.model.getMaxValue()})},t.prototype.updateMaxValue=function(e){this.view.updateMaxValue(e)},t.prototype.setStep=function(e){this.model.setStep(e),this.$this.trigger("updateStep",{step:this.model.getStep()})},t.prototype.updateStep=function(e){this.view.updateStep(e)},t.prototype.setIsShowValueWindow=function(e){this.model.setIsShowValueWindow(e)},t.prototype.updateIsShowValueWindow=function(e){this.view.updateIsShowValueWindow(e)},t.prototype.setIsShowScaleValues=function(e){this.model.setIsShowScaleValues(e)},t.prototype.updateIsShowScaleValues=function(e){this.view.updateIsShowScaleValues(e)},t}(s.Observer);t.Presenter=o},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Model=void 0;var s=function(e){function t(t){var i=t.orientation,n=t.minValue,a=t.maxValue,s=t.currentValue,r=t.step,u=t.isShowValueWindow,o=t.isShowScaleValues,l=e.call(this)||this;return l.orientation=i,l.minValue=n,l.maxValue=a,l.currentValue=s,l.step=r,l.isShowValueWindow=u,l.isShowScaleValues=o,l}return a(t,e),t.prototype.setCurrentValue=function(e){e>=this.minValue&&e<=this.maxValue&&(this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValue",value:this.currentValue[0]}),2===this.currentValue.length&&this.currentValue.splice(1,1))},t.prototype.setCurrentValueMin=function(e){1===this.currentValue.length&&(e>=this.minValue&&e<=this.maxValue&&(this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMin",value:this.currentValue[0]})));2===this.currentValue.length&&(e>=this.minValue&&e<=this.currentValue[1]&&(this.currentValue[0]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMin",value:this.currentValue[0]})))},t.prototype.setCurrentValueMax=function(e){e>this.currentValue[0]&&e<=this.maxValue&&(this.currentValue[1]=Math.round(e/this.step)*this.step,this.broadcast({type:"updateCurrentValueMax",value:this.currentValue[1]}))},t.prototype.getCurrentValue=function(){return this.currentValue},t.prototype.setOrientation=function(e){this.orientation=e,this.broadcast({type:"updateOrientation",value:this.orientation})},t.prototype.setMinValue=function(e){e<this.currentValue[0]&&(this.minValue=e,this.broadcast({type:"updateMinValue",value:this.minValue}))},t.prototype.getMinValue=function(){return this.minValue},t.prototype.setMaxValue=function(e){1===this.currentValue.length&&e>this.currentValue[0]&&(this.maxValue=e,this.broadcast({type:"updateMaxValue",value:this.maxValue})),2===this.currentValue.length&&e>this.currentValue[1]&&(this.maxValue=e,this.broadcast({type:"updateMaxValue",value:this.maxValue}))},t.prototype.getMaxValue=function(){return this.maxValue},t.prototype.setStep=function(e){e<(this.maxValue-this.minValue)/10&&(this.step=e,this.broadcast({type:"updateStep",value:this.step}))},t.prototype.getStep=function(){return this.step},t.prototype.setIsShowValueWindow=function(e){this.isShowValueWindow=e,this.broadcast({type:"updateIsShowValueWindow",value:this.isShowValueWindow})},t.prototype.setIsShowScaleValues=function(e){this.isShowScaleValues=e,this.broadcast({type:"updateIsShowScaleValues",value:this.isShowScaleValues})},t.prototype.getState=function(){return{orientation:this.orientation,minValue:this.minValue,maxValue:this.maxValue,currentValue:this.currentValue,step:this.step,isShowValueWindow:this.isShowValueWindow,isShowScaleValues:this.isShowScaleValues}},t}(i(0).Observer);t.Model=s},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.View=void 0;var s=i(0),r=i(6),u=i(8),o=i(10),l=i(12),h=i(14),c=i(16),d=function(e){function t(t){var i=t.$this,n=t.orientation,a=t.minValue,s=t.maxValue,d=t.currentValue,p=t.step,V=t.isShowValueWindow,w=t.isShowScaleValues,v=e.call(this)||this;return v.$this=i,v.orientation=n,v.minValue=a,v.maxValue=s,v.currentValue=d,v.viewMinValue=v.minValue-v.minValue,v.viewMaxValue=v.maxValue-v.minValue,v.isCurrentValue()?v.viewCurrentValue=[v.currentValue[0]-v.minValue]:v.isCurrentValues()&&(v.viewCurrentValue=[v.currentValue[0]-v.minValue,v.currentValue[1]-v.minValue]),v.step=p,v.isShowValueWindow=V,v.isShowScaleValues=w,v.slider=new r.Slider(v.orientation),v.scale=new u.Scale(v.orientation),v.progressBar=new o.ProgressBar(v.orientation),v.isCurrentValue()?(v.runner=new l.Runner(v.orientation),v.isShowValueWindow&&(v.valueWindow=new h.ValueWindow(v.orientation))):v.isCurrentValues()&&(v.runnerMin=new l.Runner(v.orientation),v.runnerMax=new l.Runner(v.orientation),v.isShowValueWindow&&(v.valueWindowMin=new h.ValueWindow(v.orientation),v.valueWindowMax=new h.ValueWindow(v.orientation))),v.isShowScaleValues&&(v.scaleValues=new c.ScaleValues(v.orientation,v.minValue,v.maxValue,v.step)),v.$slider=v.slider.getSlider(),v.$scale=v.scale.getScale(),v.$progressBar=v.progressBar.getProgressBar(),v.isCurrentValue()?(v.$runner=v.runner.getRunner(),v.isShowValueWindow&&(v.$valueWindow=v.valueWindow.getValueWindow())):v.isCurrentValues()&&(v.$runnerMin=v.runnerMin.getRunner(),v.$runnerMax=v.runnerMax.getRunner(),v.isShowValueWindow&&(v.$valueWindowMin=v.valueWindowMin.getValueWindow(),v.$valueWindowMax=v.valueWindowMax.getValueWindow())),v.isShowScaleValues&&(v.$scaleValues=v.scaleValues.getScaleValues()),v.init(),v}return a(t,e),t.prototype.init=function(){var e=this;this.$this.append(this.$slider.append(this.$scale).append(this.$progressBar)),this.isCurrentValue()?(this.$slider.append(this.$runner),this.isShowValueWindow&&this.$slider.append(this.$valueWindow)):this.isCurrentValues()&&(this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax)),this.isShowScaleValues&&(this.$slider.append(this.$scaleValues),"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())),this.dataCollection(),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),void 0!==this.$runner&&this.runner.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunner(n)})),void 0!==this.$runnerMin&&this.runnerMin.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMin(n)})),void 0!==this.$runnerMax&&this.runnerMax.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMax(n)})),this.scale.subscribe((function(t){var i=t.type,n=t.value;"clickScale"===i&&e.handleScalesClick(n)})),this.progressBar.subscribe((function(t){var i=t.type,n=t.value;"clickScale"===i&&e.handleScalesClick(n)})),void 0!==this.$scaleValues&&this.scaleValues.subscribe((function(t){var i=t.type,n=t.value;"clickScale"===i&&e.handleScalesClick(n)})),$(window).on("resize",(function(){return e.handleWindowResize()}))},t.prototype.updateCurrentValue=function(e){this.isCurrentValue()?(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue()):this.isCurrentValues()&&(this.convertSingleValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue())},t.prototype.updateCurrentValueMin=function(e){this.isCurrentValue()?(this.convertIntervalValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin()):this.isCurrentValues()&&(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin())},t.prototype.updateCurrentValueMax=function(e){this.isCurrentValue()?(this.convertIntervalValue(),this.currentValue[1]=e,this.viewCurrentValue[1]=e-this.minValue,this.renderCurrentValueMax()):this.isCurrentValues()&&(this.currentValue[1]=e,this.viewCurrentValue[1]=e-this.minValue,this.renderCurrentValueMax())},t.prototype.updateOrientation=function(e){this.$this.children(".slider").removeClass("slider_"+this.orientation).addClass("slider_"+e),this.orientation=e,this.scale.updateOrientation(this.orientation),this.progressBar.updateOrientation(this.orientation),this.isCurrentValue()&&(this.runner.updateOrientation(this.orientation),this.isShowValueWindow&&this.valueWindow.updateOrientation(this.orientation)),this.isCurrentValues()&&(this.runnerMin.updateOrientation(this.orientation),this.runnerMax.updateOrientation(this.orientation),this.isShowValueWindow&&(this.valueWindowMin.updateOrientation(this.orientation),this.valueWindowMax.updateOrientation(this.orientation))),this.isShowScaleValues&&this.scaleValues.updateOrientation(this.orientation),this.dataCollection(),this.isShowScaleValues&&"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight()),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateMinValue=function(e){this.minValue=e,this.viewMinValue=this.minValue-this.minValue,this.viewMaxValue=this.maxValue-this.minValue,this.isCurrentValue()?this.viewCurrentValue[0]=this.currentValue[0]-this.minValue:this.isCurrentValues()&&(this.viewCurrentValue[0]=this.currentValue[0]-this.minValue,this.viewCurrentValue[1]=this.currentValue[1]-this.minValue),this.dataCollection(),this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateMaxValue=function(e){this.maxValue=e,this.viewMaxValue=this.maxValue-this.minValue,this.dataCollection(),this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},t.prototype.updateStep=function(e){this.step=e,this.scaleValues.updateStep(this.step)},t.prototype.updateIsShowValueWindow=function(e){this.isShowValueWindow=e,this.isShowValueWindow?this.isCurrentValue()?(this.valueWindow=new h.ValueWindow(this.orientation),this.$valueWindow=this.valueWindow.getValueWindow(),this.$slider.append(this.$valueWindow),this.renderCurrentValue()):this.isCurrentValues()&&(this.valueWindowMin=new h.ValueWindow(this.orientation),this.valueWindowMax=new h.ValueWindow(this.orientation),this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow(),this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.renderCurrentValueMin(),this.renderCurrentValueMax()):this.isShowValueWindow||(this.isCurrentValue()?(delete this.valueWindow,delete this.$valueWindow,this.$slider.find(".value-window").remove()):this.isCurrentValues()&&(delete this.valueWindowMin,delete this.valueWindowMax,delete this.$valueWindowMin,delete this.$valueWindowMax,this.$slider.find(".value-window").remove()))},t.prototype.updateIsShowScaleValues=function(e){var t=this;this.isShowScaleValues=e,this.isShowScaleValues?(this.scaleValues=new c.ScaleValues(this.orientation,this.minValue,this.maxValue,this.step),this.$scaleValues=this.scaleValues.getScaleValues(),this.$slider.append(this.$scaleValues),"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())):this.isShowScaleValues||(delete this.scaleValues,delete this.$scaleValues,this.$slider.find(".scale-values").remove()),this.scaleValues.subscribe((function(e){var i=e.type,n=e.value;"clickScale"===i&&t.handleScalesClick(n)}))},t.prototype.convertIntervalValue=function(){var e=this;delete this.runner,this.isShowValueWindow&&delete this.valueWindow,delete this.$runner,this.isShowValueWindow&&delete this.$valueWindow,this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runnerMin=new l.Runner(this.orientation),this.runnerMax=new l.Runner(this.orientation),this.isShowValueWindow&&(this.valueWindowMin=new h.ValueWindow(this.orientation),this.valueWindowMax=new h.ValueWindow(this.orientation)),this.$runnerMin=this.runnerMin.getRunner(),this.$runnerMax=this.runnerMax.getRunner(),this.isShowValueWindow&&(this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow()),this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.runnerMin.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMin(n)})),this.runnerMax.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunnerMax(n)}))},t.prototype.convertSingleValue=function(){var e=this;this.currentValue.splice(1,1),this.viewCurrentValue.splice(1,1),delete this.runnerMin,delete this.runnerMax,this.isShowValueWindow&&(delete this.valueWindowMin,delete this.valueWindowMax),delete this.$runnerMin,delete this.$runnerMax,this.isShowValueWindow&&(delete this.$valueWindowMin,delete this.$valueWindowMax),this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runner=new l.Runner(this.orientation),this.isShowValueWindow&&(this.valueWindow=new h.ValueWindow(this.orientation)),this.$runner=this.runner.getRunner(),this.isShowValueWindow&&(this.$valueWindow=this.valueWindow.getValueWindow()),this.$slider.append(this.$runner),this.isShowValueWindow&&this.$slider.append(this.$valueWindow),this.runner.subscribe((function(t){var i=t.type,n=t.value;"updatePositionRunner"===i&&e.handleSliderUpdatePositionRunner(n)}))},t.prototype.isCurrentValue=function(){return 1===this.currentValue.length},t.prototype.isCurrentValues=function(){return 2===this.currentValue.length},t.prototype.dataCollection=function(){"horizontal"===this.orientation?(this.scaleSize=this.$scale.outerWidth(),this.scaleOffset=this.$scale.offset().left):"vertical"===this.orientation&&(this.scaleSize=this.$scale.outerHeight(),this.scaleOffset=this.$scale.offset().top),this.unit=this.scaleSize/this.viewMaxValue},t.prototype.renderCurrentValue=function(){this.runner.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar(this.viewCurrentValue[0]*this.unit,0),this.isShowValueWindow&&this.valueWindow.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},t.prototype.renderCurrentValueMin=function(){this.runnerMin.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMin.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},t.prototype.renderCurrentValueMax=function(){this.runnerMax.updatePositionRunner(this.viewCurrentValue[1]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMax.renderValueWindow(this.currentValue[1],this.viewCurrentValue[1]*this.unit)},t.prototype.handleSliderUpdatePositionRunner=function(e){this.broadcast({type:"setCurrentValue",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleSliderUpdatePositionRunnerMin=function(e){this.broadcast({type:"setCurrentValueMin",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleSliderUpdatePositionRunnerMax=function(e){this.broadcast({type:"setCurrentValueMax",value:(e-this.scaleOffset)/this.unit+this.minValue})},t.prototype.handleScalesClick=function(e){if(this.isCurrentValue())this.broadcast({type:"setCurrentValue",value:(e-this.scaleOffset)/this.unit+this.minValue});else if(this.isCurrentValues()){var t=this.currentValue[1]-Math.floor((e-this.scaleOffset)/this.unit+this.minValue),i=Math.floor((e-this.scaleOffset)/this.unit)-this.currentValue[0]+this.minValue;t>i?this.broadcast({type:"setCurrentValueMin",value:(e-this.scaleOffset)/this.unit+this.minValue}):i>t&&this.broadcast({type:"setCurrentValueMax",value:(e-this.scaleOffset)/this.unit+this.minValue})}},t.prototype.handleWindowResize=function(){this.progressBar.renderProgressBar(0,0),this.dataCollection(),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),this.isShowScaleValues&&"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())},t}(s.Observer);t.View=d},function(e,t,i){"use strict";t.__esModule=!0,t.Slider=void 0,i(7);var n=function(){function e(e){this.$slider=$("<div />",{class:"slider slider_"+e})}return e.prototype.getSlider=function(){return this.$slider},e}();t.Slider=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Scale=void 0;var s=i(0);i(9);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$scale=$("<div />",{class:"scale scale_"+t,on:{click:function(e){return i.handleScaleClick(e)}}}),i}return a(t,e),t.prototype.getScale=function(){return this.$scale},t.prototype.updateOrientation=function(e){this.$scale.removeClass("scale_"+this.orientation),this.orientation=e,this.$scale.addClass("scale_"+this.orientation)},t.prototype.handleScaleClick=function(e){"horizontal"===this.orientation?this.broadcast({type:"clickScale",value:e.pageX}):"vertical"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageY})},t}(s.Observer);t.Scale=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.ProgressBar=void 0;var s=i(0);i(11);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$progressBar=$("<div />",{class:"progress-bar progress-bar_"+t,on:{click:function(e){return i.handleProgressBar(e)}}}),i}return a(t,e),t.prototype.getProgressBar=function(){return this.$progressBar},t.prototype.renderProgressBar=function(e,t){"horizontal"===this.orientation?(this.size=this.$progressBar.css("height"),this.$progressBar.css({width:e+"px",transform:"translateX("+t+"px)"})):"vertical"===this.orientation&&(this.size=this.$progressBar.css("width"),this.$progressBar.css({height:e+"px",transform:"translateY("+t+"px)"}))},t.prototype.updateOrientation=function(e){this.$progressBar.removeClass("progress-bar_"+this.orientation),this.orientation=e,this.$progressBar.addClass("progress-bar_"+this.orientation),"horizontal"===this.orientation?this.$progressBar.css({height:this.size,transform:"translateX(0)"}):"vertical"===this.orientation&&this.$progressBar.css({width:this.size,transform:"translateY(0)"})},t.prototype.handleProgressBar=function(e){"horizontal"===this.orientation?this.broadcast({type:"clickScale",value:e.pageX}):"vertical"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageY})},t}(s.Observer);t.ProgressBar=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.Runner=void 0;var s=i(0);i(13);var r=function(e){function t(t){var i=e.call(this)||this;return i.orientation=t,i.$document=$(document),i.$runner=$("<div />",{class:"runner runner_"+t,on:{mousedown:function(){return i.handleRunnerMousedown()}}}),i}return a(t,e),t.prototype.getRunner=function(){return this.$runner},t.prototype.updatePositionRunner=function(e){"horizontal"===this.orientation?this.$runner.css({transform:"translateX("+e+"px)"}):"vertical"===this.orientation&&this.$runner.css({transform:"translateY("+e+"px)"})},t.prototype.updateOrientation=function(e){this.$runner.removeClass("runner_"+this.orientation),this.orientation=e,this.$runner.addClass("runner_"+this.orientation)},t.prototype.handleRunnerMousedown=function(){var e=this;this.$document.on("mousemove",(function(t){return e.handleDocumentMousemove(t)})),this.$document.on("mouseup",(function(){return e.handleDocumentMouseup()}))},t.prototype.handleDocumentMousemove=function(e){"horizontal"===this.orientation?this.broadcast({type:"updatePositionRunner",value:e.pageX}):"vertical"===this.orientation&&this.broadcast({type:"updatePositionRunner",value:e.pageY})},t.prototype.handleDocumentMouseup=function(){this.$document.off("mousemove")},t}(s.Observer);t.Runner=r},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.ValueWindow=void 0,i(15);var n=function(){function e(e){this.orientation=e,this.$valueWindow=$("<div />",{class:"value-window value-window_"+e})}return e.prototype.getValueWindow=function(){return this.$valueWindow},e.prototype.renderValueWindow=function(e,t){this.$valueWindow.text(e),"horizontal"===this.orientation?this.$valueWindow.css({transform:"translateX("+(t-this.$valueWindow.outerWidth()/2)+"px)"}):"vertical"===this.orientation&&this.$valueWindow.css({transform:"translate(-"+(this.$valueWindow.outerWidth()+20)+"px,\n        "+(t-this.$valueWindow.outerHeight()/2)+"px)"})},e.prototype.updateOrientation=function(e){this.$valueWindow.removeClass("value-window_"+this.orientation),this.orientation=e,this.$valueWindow.addClass("value-window_"+this.orientation)},e}();t.ValueWindow=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";var n,a=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});t.__esModule=!0,t.ScaleValues=void 0;var s=i(0);i(17);var r=function(e){function t(t,i,n,a){var s=e.call(this)||this;s.orientation=t,s.minValue=i,s.maxValue=n,s.step=a,s.$scaleValues=$("<div/>",{class:"scale-values scale-values_"+s.orientation,on:{click:function(e){return s.handleScaleValues(e)}}}),"horizontal"===s.orientation?s.symbol="|":"vertical"===s.orientation&&(s.symbol="—");for(var r=s.minValue;r<=s.maxValue;r+=(s.maxValue-s.minValue)/10)s.addScaleValue(Math.floor(r/s.step)*s.step);return s}return a(t,e),t.prototype.getScaleValues=function(){return this.$scaleValues},t.prototype.updatePositionScaleValues=function(e){"horizontal"===this.orientation?this.$scaleValues.css({width:e/10*11,transform:"translateX(-"+e/20+"px)"}):"vertical"===this.orientation&&this.$scaleValues.css({height:e/10*11,transform:"translateY(-"+e/20+"px)"})},t.prototype.updateOrientation=function(e){this.$scaleValues.removeClass("scale-values_"+this.orientation),this.orientation=e,this.$scaleValues.addClass("scale-values_"+this.orientation),"horizontal"===this.orientation?(this.$scaleValues.css({height:"auto"}),this.symbol="|",this.$scaleValues.find(".scale-values__symbol").text(this.symbol)):"vertical"===this.orientation&&(this.$scaleValues.css({width:"auto"}),this.symbol="—",this.$scaleValues.find(".scale-values__symbol").text(this.symbol))},t.prototype.updateMinMaxValues=function(e,t){this.$scaleValues.find("*").remove(),this.minValue=e,this.maxValue=t;for(var i=this.minValue;i<=this.maxValue;i+=(this.maxValue-this.minValue)/10)this.addScaleValue(Math.floor(i/this.step)*this.step)},t.prototype.updateStep=function(e){this.step=e,this.$scaleValues.find("*").remove();for(var t=this.minValue;t<=this.maxValue;t+=(this.maxValue-this.minValue)/10)this.addScaleValue(Math.floor(t/this.step)*this.step)},t.prototype.addScaleValue=function(e){this.$scaleValues.append($("<div/>",{class:"scale-values__scale-value"}).append($("<span/>",{class:"scale-values__symbol",text:this.symbol})).append($("<span/>",{text:e,class:"scale-values__value"})))},t.prototype.handleScaleValues=function(e){"horizontal"===this.orientation?this.broadcast({type:"clickScale",value:e.pageX}):"vertical"===this.orientation&&this.broadcast({type:"clickScale",value:e.pageY})},t}(s.Observer);t.ScaleValues=r},function(e,t,i){"use strict";i.r(t)}]);