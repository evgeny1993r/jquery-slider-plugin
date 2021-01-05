!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";t.__esModule=!0,i(1);var n=i(2);!function(e){var t=function(t,i){var s=e.extend({$this:t,orientation:"horizontal",minValue:0,maxValue:100,currentValue:[0],step:1,isShowValueWindow:!1,isShowScaleValues:!1},i);new n.Presenter(s)},i=function(e,t){e.trigger("setOrientation",{orientation:t})},s=function(e,t){e.trigger("setMinValue",{minValue:t})},r=function(e,t){e.trigger("setMaxValue",{maxValue:t})},a=function(e,t){1===t.length?e.trigger("setCurrentValue",{currentValue:t[0]}):2===t.length&&(e.trigger("setCurrentValueMin",{currentValueMin:t[0]}),e.trigger("setCurrentValueMax",{currentValueMax:t[1]}))},u=function(e,t){e.trigger("setStep",{step:t})},o=function(e,t){e.trigger("setIsShowValueWindow",{isShowValueWindow:t})},l=function(e,t){e.trigger("setIsShowScaleValues",{isShowScaleValues:t})};e.fn.slider=function(e,n){return e?"object"==typeof e?t(this,e):"setCurrentValue"!==e||!Array.isArray(n)||"number"!=typeof n[0]||void 0!==n[1]&&"number"!=typeof n[1]?"setOrientation"===e&&"horizontal"===n||"setOrientation"===e&&"vertical"===n?i(this,n):"setMinValue"===e&&"number"==typeof n?s(this,n):"setMaxValue"===e&&"number"==typeof n?r(this,n):"setStep"===e&&"number"==typeof n?u(this,n):"setIsShowValueWindow"===e&&"boolean"==typeof n?o(this,n):"setIsShowScaleValues"===e&&"boolean"==typeof n&&l(this,n):a(this,n):t(this),this}}(jQuery)},function(e,t){},function(e,t,i){"use strict";t.__esModule=!0,t.Presenter=void 0;var n=i(3),s=i(4),r=function(){function e(e){var t=e.$this,i=e.orientation,r=e.minValue,a=e.maxValue,u=e.currentValue,o=e.step,l=e.isShowValueWindow,h=e.isShowScaleValues;this.$this=t,this.model=new n.Model({$this:t,orientation:i,minValue:r,maxValue:a,currentValue:u,step:o,isShowValueWindow:l,isShowScaleValues:h}),this.view=new s.View({$this:t,orientation:i,minValue:r,maxValue:a,currentValue:u,step:o,isShowValueWindow:l,isShowScaleValues:h}),this.init()}return e.prototype.init=function(){var e=this;this.$this.on("setCurrentValue",(function(t,i){var n=i.currentValue;return e.handleSliderSetCurrentValue(n)})),this.$this.on("setCurrentValueMin",(function(t,i){var n=i.currentValueMin;return e.handleSliderSetCurrentValueMin(n)})),this.$this.on("setCurrentValueMax",(function(t,i){var n=i.currentValueMax;return e.handleSliderSetCurrentValueMax(n)})),this.$this.on("setOrientation",(function(t,i){var n=i.orientation;return e.handleSliderSetOrientation(n)})),this.$this.on("setMinValue",(function(t,i){var n=i.minValue;return e.handleSliderSetMinValue(n)})),this.$this.on("setMaxValue",(function(t,i){var n=i.maxValue;return e.handleSliderSetMaxValue(n)})),this.$this.on("setStep",(function(t,i){var n=i.step;return e.handleSliderSetStep(n)})),this.$this.on("setIsShowValueWindow",(function(t,i){var n=i.isShowValueWindow;return e.handleSliderSetIsShowValueWindow(n)})),this.$this.on("setIsShowScaleValues",(function(t,i){var n=i.isShowScaleValues;return e.handleSliderSetIsShowScaleValues(n)})),this.$this.on("updateCurrentValue",(function(){return e.handleSliderUpdateCurrentValue()})),this.$this.on("updateCurrentValueMin",(function(){return e.handleSliderUpdateCurrentValueMin()})),this.$this.on("updateCurrentValueMax",(function(){return e.handleSliderUpdateCurrentValueMax()})),this.$this.on("updateOrientation",(function(){return e.handleSliderUpdateOrientation()})),this.$this.on("updateMinValue",(function(){return e.handleSliderUpdateMinValue()})),this.$this.on("updateMaxValue",(function(){return e.handleSliderUpdateMaxValue()})),this.$this.on("updateStep",(function(){return e.handleSliderUpdateStep()})),this.$this.on("updateIsShowValueWindow",(function(){return e.handleSliderUpdateIsShowValueWindow()})),this.$this.on("updateIsShowScaleValues",(function(){return e.handleSliderUpdateIsShowScaleValues()}))},e.prototype.handleSliderSetCurrentValue=function(e){this.model.setCurrentValue(e)},e.prototype.handleSliderSetCurrentValueMin=function(e){this.model.setCurrentValueMin(e)},e.prototype.handleSliderSetCurrentValueMax=function(e){this.model.setCurrentValueMax(e)},e.prototype.handleSliderSetOrientation=function(e){this.model.setOrientation(e)},e.prototype.handleSliderSetMinValue=function(e){this.model.setMinValue(e)},e.prototype.handleSliderSetMaxValue=function(e){this.model.setMaxValue(e)},e.prototype.handleSliderSetStep=function(e){this.model.setStep(e)},e.prototype.handleSliderSetIsShowValueWindow=function(e){this.model.setIsShowValueWindow(e)},e.prototype.handleSliderSetIsShowScaleValues=function(e){this.model.setIsShowScaleValues(e)},e.prototype.handleSliderUpdateCurrentValue=function(){this.view.updateCurrentValue(this.model.getCurrentValue())},e.prototype.handleSliderUpdateCurrentValueMin=function(){this.view.updateCurrentValueMin(this.model.getCurrentValueMin())},e.prototype.handleSliderUpdateCurrentValueMax=function(){this.view.updateCurrentValueMax(this.model.getCurrentValueMax())},e.prototype.handleSliderUpdateOrientation=function(){this.view.updateOrientation(this.model.getOrientation())},e.prototype.handleSliderUpdateMinValue=function(){this.view.updateMinValue(this.model.getMinValue())},e.prototype.handleSliderUpdateMaxValue=function(){this.view.updateMaxValue(this.model.getMaxValue())},e.prototype.handleSliderUpdateStep=function(){this.view.updateStep(this.model.getStep())},e.prototype.handleSliderUpdateIsShowValueWindow=function(){this.view.updateIsShowValueWindow(this.model.getIsShowValueWindow())},e.prototype.handleSliderUpdateIsShowScaleValues=function(){this.view.updateIsShowScaleValues(this.model.getIsShowScaleValues())},e}();t.Presenter=r},function(e,t,i){"use strict";t.__esModule=!0,t.Model=void 0;var n=function(){function e(e){var t=e.$this,i=e.orientation,n=e.minValue,s=e.maxValue,r=e.currentValue,a=e.step,u=e.isShowValueWindow,o=e.isShowScaleValues;this.$this=t,this.orientation=i,this.minValue=n,this.maxValue=s,1===r.length?this.currentValue=[Math.round(r[0]/this.step)*this.step]:2===r.length&&(this.currentValue=[Math.round(r[0]/this.step)*this.step,Math.round(r[1]/this.step)*this.step]),this.step=a,this.isShowValueWindow=u,this.isShowScaleValues=o}return e.prototype.getCurrentValue=function(){return this.currentValue[0]},e.prototype.setCurrentValue=function(e){e<this.minValue||e>this.maxValue||(this.currentValue[0]=Math.round(e/this.step)*this.step,this.$this.trigger("updateCurrentValue",{currentValue:this.currentValue[0]}))},e.prototype.getCurrentValueMin=function(){return this.currentValue[0]},e.prototype.setCurrentValueMin=function(e){e<this.minValue||e>this.currentValue[1]||(this.currentValue[0]=Math.round(e/this.step)*this.step,this.$this.trigger("updateCurrentValueMin",{currentValueMin:this.currentValue[0]}))},e.prototype.getCurrentValueMax=function(){return this.currentValue[1]},e.prototype.setCurrentValueMax=function(e){e<this.currentValue[0]||e>this.maxValue||(this.currentValue[1]=Math.round(e/this.step)*this.step,this.$this.trigger("updateCurrentValueMax",{currentValueMax:this.currentValue[1]}))},e.prototype.getOrientation=function(){return this.orientation},e.prototype.setOrientation=function(e){this.orientation=e,this.$this.trigger("updateOrientation",{orientation:this.orientation})},e.prototype.getMinValue=function(){return this.minValue},e.prototype.setMinValue=function(e){e>this.currentValue[0]||(this.minValue=e,this.$this.trigger("updateMinValue",{minValue:this.minValue}))},e.prototype.getMaxValue=function(){return this.maxValue},e.prototype.setMaxValue=function(e){1===this.currentValue.length&&e<this.currentValue[0]||2===this.currentValue.length&&e<this.currentValue[1]||(this.maxValue=e,this.$this.trigger("updateMaxValue",{maxValue:this.maxValue}))},e.prototype.getStep=function(){return this.step},e.prototype.setStep=function(e){this.step=e,this.$this.trigger("updateStep",{step:this.step})},e.prototype.getIsShowValueWindow=function(){return this.isShowValueWindow},e.prototype.setIsShowValueWindow=function(e){this.isShowValueWindow=e,this.$this.trigger("updateIsShowValueWindow",{isShowValueWindow:this.isShowValueWindow})},e.prototype.getIsShowScaleValues=function(){return this.isShowScaleValues},e.prototype.setIsShowScaleValues=function(e){this.isShowScaleValues=e,this.$this.trigger("updateIsShowScaleValues",{isShowScaleValues:this.isShowScaleValues})},e}();t.Model=n},function(e,t,i){"use strict";t.__esModule=!0,t.View=void 0;var n=i(5),s=i(7),r=i(9),a=i(11),u=i(13),o=i(15),l=function(){function e(e){var t=e.$this,i=e.orientation,l=e.minValue,h=e.maxValue,d=e.currentValue,c=e.step,V=e.isShowValueWindow,p=e.isShowScaleValues;this.$this=t,this.orientation=i,this.minValue=l,this.maxValue=h,this.currentValue=d,this.viewMinValue=this.minValue-this.minValue,this.viewMaxValue=this.maxValue-this.minValue,this.isCurrentValue()?this.viewCurrentValue=[this.currentValue[0]-this.minValue]:this.isCurrentValues()&&(this.viewCurrentValue=[this.currentValue[0]-this.minValue,this.currentValue[1]-this.minValue]),this.step=c,this.isShowValueWindow=V,this.isShowScaleValues=p,this.slider=new n.Slider(this.orientation),this.scale=new s.Scale(this.orientation),this.progressBar=new r.ProgressBar(this.orientation),this.isCurrentValue()?(this.runner=new a.Runner("updatePositionRunner",this.orientation),this.isShowValueWindow&&(this.valueWindow=new u.ValueWindow(this.orientation))):this.isCurrentValues()&&(this.runnerMin=new a.Runner("updatePositionRunnerMin",this.orientation),this.runnerMax=new a.Runner("updatePositionRunnerMax",this.orientation),this.isShowValueWindow&&(this.valueWindowMin=new u.ValueWindow(this.orientation),this.valueWindowMax=new u.ValueWindow(this.orientation))),this.isShowScaleValues&&(this.scaleValues=new o.ScaleValues(this.orientation,this.minValue,this.maxValue,this.step)),this.$slider=this.slider.getSlider(),this.$scale=this.scale.getScale(),this.$progressBar=this.progressBar.getProgressBar(),this.isCurrentValue()?(this.$runner=this.runner.getRunner(),this.isShowValueWindow&&(this.$valueWindow=this.valueWindow.getValueWindow())):this.isCurrentValues()&&(this.$runnerMin=this.runnerMin.getRunner(),this.$runnerMax=this.runnerMax.getRunner(),this.isShowValueWindow&&(this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow())),this.isShowScaleValues&&(this.$scaleValues=this.scaleValues.getScaleValues()),this.init()}return e.prototype.init=function(){var e=this;this.$this.append(this.$slider.append(this.$scale).append(this.$progressBar)),this.isCurrentValue()?(this.$slider.append(this.$runner),this.isShowValueWindow&&this.$slider.append(this.$valueWindow)):this.isCurrentValues()&&(this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax)),this.isShowScaleValues&&(this.$slider.append(this.$scaleValues),"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())),this.dataCollection(),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),void 0!==this.$runner&&this.$runner.on("updatePositionRunner",(function(t,i){var n=i.positionRunner;return e.handleSliderUpdatePositionRunner(n)})),void 0!==this.$runnerMin&&this.$runnerMin.on("updatePositionRunnerMin",(function(t,i){var n=i.positionRunner;return e.handleSliderUpdatePositionRunnerMin(n)})),void 0!==this.$runnerMax&&this.$runnerMax.on("updatePositionRunnerMax",(function(t,i){var n=i.positionRunner;return e.handleSliderUpdatePositionRunnerMax(n)})),this.$scale.on("clickScale",(function(t,i){var n=i.position;return e.handleScalesClick(n)})),this.$progressBar.on("clickScale",(function(t,i){var n=i.position;return e.handleScalesClick(n)})),void 0!==this.$scaleValues&&this.$scaleValues.on("clickScale",(function(t,i){var n=i.position;return e.handleScalesClick(n)})),$(window).on("resize",(function(){return e.handleWindowResize()}))},e.prototype.updateCurrentValue=function(e){this.isCurrentValue()?(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue()):this.isCurrentValues()&&(this.convertSingleValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValue())},e.prototype.updateCurrentValueMin=function(e){this.isCurrentValue()?(this.convertIntervalValue(),this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin()):this.isCurrentValues()&&(this.currentValue[0]=e,this.viewCurrentValue[0]=e-this.minValue,this.renderCurrentValueMin())},e.prototype.updateCurrentValueMax=function(e){this.currentValue[1]=e,this.viewCurrentValue[1]=e-this.minValue,this.renderCurrentValueMax()},e.prototype.updateOrientation=function(e){this.$this.children(".slider").removeClass("slider_"+this.orientation).addClass("slider_"+e),this.orientation=e,this.scale.updateOrientation(this.orientation),this.progressBar.updateOrientation(this.orientation),this.isCurrentValue()&&(this.runner.updateOrientation(this.orientation),this.isShowValueWindow&&this.valueWindow.updateOrientation(this.orientation)),this.isCurrentValues()&&(this.runnerMin.updateOrientation(this.orientation),this.runnerMax.updateOrientation(this.orientation),this.isShowValueWindow&&(this.valueWindowMin.updateOrientation(this.orientation),this.valueWindowMax.updateOrientation(this.orientation))),this.isShowScaleValues&&this.scaleValues.updateOrientation(this.orientation),this.dataCollection(),this.isShowScaleValues&&"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight()),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},e.prototype.updateMinValue=function(e){this.minValue=e,this.viewMinValue=this.minValue-this.minValue,this.viewMaxValue=this.maxValue-this.minValue,this.isCurrentValue()?this.viewCurrentValue[0]=this.currentValue[0]-this.minValue:this.isCurrentValues()&&(this.viewCurrentValue[0]=this.currentValue[0]-this.minValue,this.viewCurrentValue[1]=this.currentValue[1]-this.minValue),this.dataCollection(),this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},e.prototype.updateMaxValue=function(e){this.maxValue=e,this.viewMaxValue=this.maxValue-this.minValue,this.dataCollection(),this.scaleValues.updateMinMaxValues(this.minValue,this.maxValue),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax())},e.prototype.updateStep=function(e){this.step=e,this.scaleValues.updateStep(this.step)},e.prototype.updateIsShowValueWindow=function(e){this.isShowValueWindow=e,this.isShowValueWindow?this.isCurrentValue()?(this.valueWindow=new u.ValueWindow(this.orientation),this.$valueWindow=this.valueWindow.getValueWindow(),this.$slider.append(this.$valueWindow),this.renderCurrentValue()):this.isCurrentValues()&&(this.valueWindowMin=new u.ValueWindow(this.orientation),this.valueWindowMax=new u.ValueWindow(this.orientation),this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow(),this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax),this.renderCurrentValueMin(),this.renderCurrentValueMax()):this.isShowValueWindow||(this.isCurrentValue()?(delete this.valueWindow,delete this.$valueWindow,this.$slider.find(".value-window").remove()):this.isCurrentValues()&&(delete this.valueWindowMin,delete this.valueWindowMax,delete this.$valueWindowMin,delete this.$valueWindowMax,this.$slider.find(".value-window").remove()))},e.prototype.updateIsShowScaleValues=function(e){this.isShowScaleValues=e,this.isShowScaleValues?(this.scaleValues=new o.ScaleValues(this.orientation,this.minValue,this.maxValue,this.step),this.$scaleValues=this.scaleValues.getScaleValues(),this.$slider.append(this.$scaleValues),"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())):this.isShowScaleValues||(delete this.scaleValues,delete this.$scaleValues,this.$slider.find(".scale-values").remove())},e.prototype.convertIntervalValue=function(){delete this.runner,this.isShowValueWindow&&delete this.valueWindow,delete this.$runner,this.isShowValueWindow&&delete this.$valueWindow,this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runnerMin=new a.Runner("updatePositionRunnerMin",this.orientation),this.runnerMax=new a.Runner("updatePositionRunnerMax",this.orientation),this.isShowValueWindow&&(this.valueWindowMin=new u.ValueWindow(this.orientation),this.valueWindowMax=new u.ValueWindow(this.orientation)),this.$runnerMin=this.runnerMin.getRunner(),this.$runnerMax=this.runnerMax.getRunner(),this.isShowValueWindow&&(this.$valueWindowMin=this.valueWindowMin.getValueWindow(),this.$valueWindowMax=this.valueWindowMax.getValueWindow()),this.$slider.append(this.$runnerMin).append(this.$runnerMax),this.isShowValueWindow&&this.$slider.append(this.$valueWindowMin).append(this.$valueWindowMax)},e.prototype.convertSingleValue=function(){this.currentValue.splice(1,1),this.viewCurrentValue.splice(1,1),delete this.runnerMin,delete this.runnerMax,this.isShowValueWindow&&(delete this.valueWindowMin,delete this.valueWindowMax),delete this.$runnerMin,delete this.$runnerMax,this.isShowValueWindow&&(delete this.$valueWindowMin,delete this.$valueWindowMax),this.$this.find(".runner").remove(),this.isShowValueWindow&&this.$this.find(".value-window").remove(),this.runner=new a.Runner("updatePositionRunner",this.orientation),this.isShowValueWindow&&(this.valueWindow=new u.ValueWindow(this.orientation)),this.$runner=this.runner.getRunner(),this.isShowValueWindow&&(this.$valueWindow=this.valueWindow.getValueWindow()),this.$slider.append(this.$runner),this.isShowValueWindow&&this.$slider.append(this.$valueWindow)},e.prototype.isCurrentValue=function(){return 1===this.currentValue.length},e.prototype.isCurrentValues=function(){return 2===this.currentValue.length},e.prototype.dataCollection=function(){"horizontal"===this.orientation?(this.scaleSize=this.$scale.outerWidth(),this.scaleOffset=this.$scale.offset().left):"vertical"===this.orientation&&(this.scaleSize=this.$scale.outerHeight(),this.scaleOffset=this.$scale.offset().top),this.unit=this.scaleSize/this.viewMaxValue},e.prototype.renderCurrentValue=function(){this.runner.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar(this.viewCurrentValue[0]*this.unit,0),this.isShowValueWindow&&this.valueWindow.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},e.prototype.renderCurrentValueMin=function(){this.runnerMin.updatePositionRunner(this.viewCurrentValue[0]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMin.renderValueWindow(this.currentValue[0],this.viewCurrentValue[0]*this.unit)},e.prototype.renderCurrentValueMax=function(){this.runnerMax.updatePositionRunner(this.viewCurrentValue[1]*this.unit),this.progressBar.renderProgressBar((this.viewCurrentValue[1]-this.viewCurrentValue[0])*this.unit,this.viewCurrentValue[0]*this.unit),this.isShowValueWindow&&this.valueWindowMax.renderValueWindow(this.currentValue[1],this.viewCurrentValue[1]*this.unit)},e.prototype.handleSliderUpdatePositionRunner=function(e){this.$this.trigger("setCurrentValue",{currentValue:(e-this.scaleOffset)/this.unit+this.minValue})},e.prototype.handleSliderUpdatePositionRunnerMin=function(e){this.$this.trigger("setCurrentValueMin",{currentValueMin:(e-this.scaleOffset)/this.unit+this.minValue})},e.prototype.handleSliderUpdatePositionRunnerMax=function(e){this.$this.trigger("setCurrentValueMax",{currentValueMax:(e-this.scaleOffset)/this.unit+this.minValue})},e.prototype.handleScalesClick=function(e){if(this.isCurrentValue())this.$this.trigger("setCurrentValue",{currentValue:(e-this.scaleOffset)/this.unit+this.minValue});else if(this.isCurrentValues()){var t=this.currentValue[1]-Math.floor((e-this.scaleOffset)/this.unit+this.minValue),i=Math.floor((e-this.scaleOffset)/this.unit)-this.currentValue[0]+this.minValue;t>i?this.$this.trigger("setCurrentValueMin",{currentValueMin:(e-this.scaleOffset)/this.unit+this.minValue}):i>t&&this.$this.trigger("setCurrentValueMax",{currentValueMax:(e-this.scaleOffset)/this.unit+this.minValue})}},e.prototype.handleWindowResize=function(){this.progressBar.renderProgressBar(0,0),this.dataCollection(),this.isCurrentValue()?this.renderCurrentValue():this.isCurrentValues()&&(this.renderCurrentValueMin(),this.renderCurrentValueMax()),this.isShowScaleValues&&"horizontal"===this.orientation?this.scaleValues.updatePositionScaleValues(this.$scale.outerWidth()):this.isShowScaleValues&&"vertical"===this.orientation&&this.scaleValues.updatePositionScaleValues(this.$scale.outerHeight())},e}();t.View=l},function(e,t,i){"use strict";t.__esModule=!0,t.Slider=void 0,i(6);var n=function(){function e(e){this.$slider=$("<div />",{class:"slider slider_"+e})}return e.prototype.getSlider=function(){return this.$slider},e}();t.Slider=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.Scale=void 0,i(8);var n=function(){function e(e){var t=this;this.orientation=e,this.$scale=$("<div />",{class:"scale scale_"+e,on:{click:function(e){return t.handleScaleClick(e)}}})}return e.prototype.getScale=function(){return this.$scale},e.prototype.handleScaleClick=function(e){"horizontal"===this.orientation?this.$scale.trigger("clickScale",{position:e.pageX}):"vertical"===this.orientation&&this.$scale.trigger("clickScale",{position:e.pageY})},e.prototype.updateOrientation=function(e){this.$scale.removeClass("scale_"+this.orientation),this.orientation=e,this.$scale.addClass("scale_"+this.orientation)},e}();t.Scale=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.ProgressBar=void 0,i(10);var n=function(){function e(e){var t=this;this.orientation=e,this.$progressBar=$("<div />",{class:"progress-bar progress-bar_"+e,on:{click:function(e){return t.handleProgressBar(e)}}})}return e.prototype.getProgressBar=function(){return this.$progressBar},e.prototype.renderProgressBar=function(e,t){"horizontal"===this.orientation?(this.size=this.$progressBar.css("height"),this.$progressBar.css({width:e+"px",transform:"translateX("+t+"px)"})):"vertical"===this.orientation&&(this.size=this.$progressBar.css("width"),this.$progressBar.css({height:e+"px",transform:"translateY("+t+"px)"}))},e.prototype.handleProgressBar=function(e){"horizontal"===this.orientation?this.$progressBar.trigger("clickScale",{position:e.pageX}):"vertical"===this.orientation&&this.$progressBar.trigger("clickScale",{position:e.pageY})},e.prototype.updateOrientation=function(e){this.$progressBar.removeClass("progress-bar_"+this.orientation),this.orientation=e,this.$progressBar.addClass("progress-bar_"+this.orientation),"horizontal"===this.orientation?this.$progressBar.css({height:this.size,transform:"translateX(0)"}):"vertical"===this.orientation&&this.$progressBar.css({width:this.size,transform:"translateY(0)"})},e}();t.ProgressBar=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.Runner=void 0,i(12);var n=function(){function e(e,t){var i=this;this.eventName=e,this.orientation=t,this.$document=$(document),this.$runner=$("<div />",{class:"runner runner_"+t,on:{mousedown:function(){return i.handleRunnerMousedown()}}})}return e.prototype.getRunner=function(){return this.$runner},e.prototype.updatePositionRunner=function(e){"horizontal"===this.orientation?this.$runner.css({transform:"translateX("+e+"px)"}):"vertical"===this.orientation&&this.$runner.css({transform:"translateY("+e+"px)"})},e.prototype.handleRunnerMousedown=function(){var e=this;this.$document.on("mousemove",(function(t){return e.handleDocumentMousemove(t)})),this.$document.on("mouseup",(function(){return e.handleDocumentMouseup()}))},e.prototype.handleDocumentMousemove=function(e){"horizontal"===this.orientation?this.$runner.trigger(this.eventName,{positionRunner:e.pageX}):"vertical"===this.orientation&&this.$runner.trigger(this.eventName,{positionRunner:e.pageY})},e.prototype.handleDocumentMouseup=function(){this.$document.off("mousemove")},e.prototype.updateOrientation=function(e){this.$runner.removeClass("runner_"+this.orientation),this.orientation=e,this.$runner.addClass("runner_"+this.orientation)},e}();t.Runner=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.ValueWindow=void 0,i(14);var n=function(){function e(e){this.orientation=e,this.$valueWindow=$("<div />",{class:"value-window value-window_"+e})}return e.prototype.getValueWindow=function(){return this.$valueWindow},e.prototype.renderValueWindow=function(e,t){this.$valueWindow.text(e),"horizontal"===this.orientation?this.$valueWindow.css({transform:"translateX("+(t-this.$valueWindow.outerWidth()/2)+"px)"}):"vertical"===this.orientation&&this.$valueWindow.css({transform:"translate(-"+(this.$valueWindow.outerWidth()+20)+"px, "+(t-this.$valueWindow.outerHeight()/2)+"px)"})},e.prototype.updateOrientation=function(e){this.$valueWindow.removeClass("value-window_"+this.orientation),this.orientation=e,this.$valueWindow.addClass("value-window_"+this.orientation)},e}();t.ValueWindow=n},function(e,t,i){"use strict";i.r(t)},function(e,t,i){"use strict";t.__esModule=!0,t.ScaleValues=void 0,i(16);var n=function(){function e(e,t,i,n){var s=this;this.orientation=e,this.minValue=t,this.maxValue=i,this.step=n,this.$scaleValues=$("<div/>",{class:"scale-values scale-values_"+this.orientation,on:{click:function(e){return s.handleScaleValues(e)}}}),"horizontal"===this.orientation?this.symbol="|":"vertical"===this.orientation&&(this.symbol="—");for(var r=this.minValue;r<=this.maxValue;r+=(this.maxValue-this.minValue)/10)this.addScaleValue(Math.floor(r/this.step)*this.step)}return e.prototype.getScaleValues=function(){return this.$scaleValues},e.prototype.addScaleValue=function(e){this.$scaleValues.append($("<div/>",{class:"scale-values__scale-value"}).append($("<span/>",{class:"scale-values__symbol",text:this.symbol})).append($("<span/>",{text:e,class:"scale-values__value"})))},e.prototype.updatePositionScaleValues=function(e){"horizontal"===this.orientation?this.$scaleValues.css({width:e/10*11,transform:"translateX(-"+e/20+"px)"}):"vertical"===this.orientation&&this.$scaleValues.css({height:e/10*11,transform:"translateY(-"+e/20+"px)"})},e.prototype.updateOrientation=function(e){this.$scaleValues.removeClass("scale-values_"+this.orientation),this.orientation=e,this.$scaleValues.addClass("scale-values_"+this.orientation),"horizontal"===this.orientation?(this.$scaleValues.css({height:"auto"}),this.symbol="|",this.$scaleValues.find(".scale-values__symbol").text(this.symbol)):"vertical"===this.orientation&&(this.$scaleValues.css({width:"auto"}),this.symbol="—",this.$scaleValues.find(".scale-values__symbol").text(this.symbol))},e.prototype.updateMinMaxValues=function(e,t){this.$scaleValues.find("*").remove(),this.minValue=e,this.maxValue=t;for(var i=this.minValue;i<=this.maxValue;i+=(this.maxValue-this.minValue)/10)this.addScaleValue(Math.floor(i/this.step)*this.step)},e.prototype.updateStep=function(e){this.step=e,this.$scaleValues.find("*").remove();for(var t=this.minValue;t<=this.maxValue;t+=(this.maxValue-this.minValue)/10)this.addScaleValue(Math.floor(t/this.step)*this.step)},e.prototype.handleScaleValues=function(e){"horizontal"===this.orientation?this.$scaleValues.trigger("clickScale",{position:e.pageX}):"vertical"===this.orientation&&this.$scaleValues.trigger("clickScale",{position:e.pageY})},e}();t.ScaleValues=n},function(e,t,i){"use strict";i.r(t)}]);