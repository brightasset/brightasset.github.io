/* @license
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,s,a){return jQuery.easing[jQuery.easing.def](e,t,n,s,a)},easeInQuad:function(e,t,n,s,a){return s*(t/=a)*t+n},easeOutQuad:function(e,t,n,s,a){return-s*(t/=a)*(t-2)+n},easeInOutQuad:function(e,t,n,s,a){return(t/=a/2)<1?s/2*t*t+n:-s/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,s,a){return s*(t/=a)*t*t+n},easeOutCubic:function(e,t,n,s,a){return s*((t=t/a-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,s,a){return(t/=a/2)<1?s/2*t*t*t+n:s/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,s,a){return s*(t/=a)*t*t*t+n},easeOutQuart:function(e,t,n,s,a){return-s*((t=t/a-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,s,a){return(t/=a/2)<1?s/2*t*t*t*t+n:-s/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,s,a){return s*(t/=a)*t*t*t*t+n},easeOutQuint:function(e,t,n,s,a){return s*((t=t/a-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,s,a){return(t/=a/2)<1?s/2*t*t*t*t*t+n:s/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,s,a){return-s*Math.cos(t/a*(Math.PI/2))+s+n},easeOutSine:function(e,t,n,s,a){return s*Math.sin(t/a*(Math.PI/2))+n},easeInOutSine:function(e,t,n,s,a){return-s/2*(Math.cos(Math.PI*t/a)-1)+n},easeInExpo:function(e,t,n,s,a){return 0==t?n:s*Math.pow(2,10*(t/a-1))+n},easeOutExpo:function(e,t,n,s,a){return t==a?n+s:s*(1-Math.pow(2,-10*t/a))+n},easeInOutExpo:function(e,t,n,s,a){return 0==t?n:t==a?n+s:(t/=a/2)<1?s/2*Math.pow(2,10*(t-1))+n:s/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,s,a){return-s*(Math.sqrt(1-(t/=a)*t)-1)+n},easeOutCirc:function(e,t,n,s,a){return s*Math.sqrt(1-(t=t/a-1)*t)+n},easeInOutCirc:function(e,t,n,s,a){return(t/=a/2)<1?-s/2*(Math.sqrt(1-t*t)-1)+n:s/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,s,a){var i=1.70158,u=0,r=s;if(0==t)return n;if(1==(t/=a))return n+s;if(u||(u=.3*a),r<Math.abs(s)){r=s;i=u/4}else i=u/(2*Math.PI)*Math.asin(s/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t*a-i)*(2*Math.PI)/u)+n},easeOutElastic:function(e,t,n,s,a){var i=1.70158,u=0,r=s;if(0==t)return n;if(1==(t/=a))return n+s;if(u||(u=.3*a),r<Math.abs(s)){r=s;i=u/4}else i=u/(2*Math.PI)*Math.asin(s/r);return r*Math.pow(2,-10*t)*Math.sin((t*a-i)*(2*Math.PI)/u)+s+n},easeInOutElastic:function(e,t,n,s,a){var i=1.70158,u=0,r=s;if(0==t)return n;if(2==(t/=a/2))return n+s;if(u||(u=a*(.3*1.5)),r<Math.abs(s)){r=s;i=u/4}else i=u/(2*Math.PI)*Math.asin(s/r);return t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t*a-i)*(2*Math.PI)/u)*-.5+n:r*Math.pow(2,-10*(t-=1))*Math.sin((t*a-i)*(2*Math.PI)/u)*.5+s+n},easeInBack:function(e,t,n,s,a,i){return void 0==i&&(i=1.70158),s*(t/=a)*t*((i+1)*t-i)+n},easeOutBack:function(e,t,n,s,a,i){return void 0==i&&(i=1.70158),s*((t=t/a-1)*t*((i+1)*t+i)+1)+n},easeInOutBack:function(e,t,n,s,a,i){return void 0==i&&(i=1.70158),(t/=a/2)<1?s/2*(t*t*((1+(i*=1.525))*t-i))+n:s/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+n},easeInBounce:function(e,t,n,s,a){return s-jQuery.easing.easeOutBounce(e,a-t,0,s,a)+n},easeOutBounce:function(e,t,n,s,a){return(t/=a)<1/2.75?s*(7.5625*t*t)+n:t<2/2.75?s*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?s*(7.5625*(t-=2.25/2.75)*t+.9375)+n:s*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,s,a){return t<a/2?.5*jQuery.easing.easeInBounce(e,2*t,0,s,a)+n:.5*jQuery.easing.easeOutBounce(e,2*t-a,0,s,a)+.5*s+n}}),$(function(){$('a[href^="#"]').click(function(){var e=$(this).attr("href"),t=$("#"==e||""==e?"html":e).offset().top;return $("body").width()>768&&(t-=$(".l-header").eq(0).height()+$("#wpadminbar").eq(0).height()+20),$("body,html").animate({scrollTop:t},500,"swing"),!1})}),$(".l-sub__list__switch").on("click",function(){$(this).hasClass("closed")?($(this).next().slideDown(),$(this).removeClass("closed").addClass("opened")):($(this).next().slideUp(),$(this).removeClass("opened").addClass("closed"))}),$(".c-faq__term").on("click",function(){$(this).hasClass("closed")?($(this).next().slideDown(),$(this).removeClass("closed").addClass("opened")):($(this).next().slideUp(),$(this).removeClass("opened").addClass("closed"))}),$(".c-thumb-link__line").each(function(){var e=1*parseInt($(this).css("line-height"))*(1*$(this).attr("data-line")+.5);if($(this).height()>e)for(;;)if($(this).html($(this).html().slice(0,-1)),$(this).height()<=e){$(this).html($(this).html().slice(0,-2)),$(this).html($(this).html()+"……");break}}),$(".l-header__logo > span").on("click",function(){$(".l-footer").addClass("opened")}),$(".l-footer__title > span").on("click",function(){$(".l-footer").removeClass("opened")}),$(".l-footer__label > span").on("click",function(){$(this).hasClass("closed")?($(this).removeClass("closed").addClass("opened"),$(this).parent().next().slideDown()):($(this).removeClass("opened").addClass("closed"),$(this).parent().next().slideUp())});