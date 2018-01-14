(function(window){var svgSprite='<svg><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M363.840919 472.978737C336.938714 497.358861 337.301807 537.486138 364.730379 561.486138L673.951902 832.05497C682.818816 839.813519 696.296418 838.915012 704.05497 830.048098 711.813519 821.181184 710.915012 807.703582 702.048098 799.94503L392.826577 529.376198C384.59578 522.174253 384.502227 511.835287 392.492414 504.59418L702.325747 223.807723C711.056111 215.895829 711.719614 202.404616 703.807723 193.674252 695.895829 184.943889 682.404617 184.280386 673.674253 192.192278L363.840919 472.978737Z"  ></path></symbol><symbol id="icon-category" viewBox="0 0 1024 1024"><path d="M134.095238 256C147.560466 256 158.476191 246.448741 158.476191 234.666667 158.476191 222.884592 147.560466 213.333333 134.095238 213.333333L36.571428 213.333333C23.1062 213.333333 12.190476 222.884592 12.190476 234.666667 12.190476 246.448741 23.1062 256 36.571428 256L134.095238 256Z"  ></path><path d="M134.095238 533.333333C147.560466 533.333333 158.476191 523.782074 158.476191 512 158.476191 500.217926 147.560466 490.666667 134.095238 490.666667L36.571428 490.666667C23.1062 490.666667 12.190476 500.217926 12.190476 512 12.190476 523.782074 23.1062 533.333333 36.571428 533.333333L134.095238 533.333333Z"  ></path><path d="M134.095238 810.666667C147.560466 810.666667 158.476191 801.115407 158.476191 789.333333 158.476191 777.55126 147.560466 768 134.095238 768L36.571428 768C23.1062 768 12.190476 777.55126 12.190476 789.333333 12.190476 801.115407 23.1062 810.666667 36.571428 810.666667L134.095238 810.666667Z"  ></path><path d="M987.428572 256C1000.893801 256 1011.809523 246.448741 1011.809523 234.666667 1011.809523 222.884592 1000.893801 213.333333 987.428572 213.333333L280.380951 213.333333C266.915725 213.333333 256 222.884592 256 234.666667 256 246.448741 266.915725 256 280.380951 256L987.428572 256Z"  ></path><path d="M993.52381 533.333333C1006.989037 533.333333 1017.904762 523.782074 1017.904762 512 1017.904762 500.217926 1006.989037 490.666667 993.52381 490.666667L286.47619 490.666667C273.010963 490.666667 262.095238 500.217926 262.095238 512 262.095238 523.782074 273.010963 533.333333 286.47619 533.333333L993.52381 533.333333Z"  ></path><path d="M996.571428 810.666667C1010.036657 810.666667 1020.952382 801.115407 1020.952382 789.333333 1020.952382 777.55126 1010.036657 768 996.571428 768L289.52381 768C276.058581 768 265.142857 777.55126 265.142857 789.333333 265.142857 801.115407 276.058581 810.666667 289.52381 810.666667L996.571428 810.666667Z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881Z"  ></path><path d="M795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z"  ></path></symbol><symbol id="icon-less" viewBox="0 0 1024 1024"><path d="M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"  ></path></symbol><symbol id="icon-moreunfold" viewBox="0 0 1024 1024"><path d="M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path></symbol><symbol id="icon-color" viewBox="0 0 1026 1024"><path d="M811.984589 328.552129c-57.139501 0-101.497797 44.358297-101.497798 101.497798s44.358297 101.497797 101.497798 101.497797 101.497797-44.358297 101.497797-101.497797c0.751836-57.139501-44.358297-101.497797-101.497797-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.40235-62.402349 0-35.33627 27.066079-62.402349 62.40235-62.40235 35.33627 0 62.402349 27.066079 62.402349 62.40235 0 35.33627-26.314244 62.402349-62.402349 62.402349zM211.267995 328.552129c-57.139501 0-101.497797 44.358297-101.497797 101.497798s44.358297 101.497797 101.497797 101.497797 101.497797-44.358297 101.497798-101.497797-44.358297-101.497797-101.497798-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.402349-62.402349 0-35.33627 27.066079-62.402349 62.402349-62.40235 35.33627 0 62.402349 27.066079 62.40235 62.40235 0 35.33627-27.066079 62.402349-62.40235 62.402349zM750.334075 211.265786c0-57.139501-44.358297-101.497797-101.497798-101.497798s-101.497797 44.358297-101.497797 101.497798 44.358297 101.497797 101.497797 101.497797c56.387665 0 101.497797-44.358297 101.497798-101.497797z m-102.249633 62.402349c-35.33627 0-62.402349-27.066079-62.40235-62.402349 0-35.33627 27.066079-62.402349 62.40235-62.40235s62.402349 27.066079 62.402349 62.40235c0 35.33627-26.314244 62.402349-62.402349 62.402349zM375.168142 109.767988c-57.139501 0-101.497797 44.358297-101.497797 101.497798s44.358297 101.497797 101.497797 101.497797S476.665939 268.405286 476.665939 211.265786s-44.358297-101.497797-101.497797-101.497798z m0 163.900147c-35.33627 0-62.402349-27.066079-62.402349-62.402349 0-35.33627 27.066079-62.402349 62.402349-62.40235 35.33627 0 62.402349 27.066079 62.40235 62.40235 0 35.33627-27.066079 62.402349-62.40235 62.402349z"  ></path><path d="M272.166674 921.750367l62.402349 27.817915c54.883994 22.555066 115.030837 34.584435 177.433187 34.584435 35.33627 0 62.402349-27.066079 62.402349-62.40235 0-15.788546-6.014684-30.073421-15.788546-40.599119-18.044053-18.044053-27.817915-42.10279-27.817915-68.417034 0-57.139501 44.358297-101.497797 101.497797-101.497797h98.490456c139.84141 0 253.368576-113.527166 253.368575-253.368576 0-230.061674-212.017621-417.268722-472.152716-417.268722C251.115279 39.847283 39.849493 251.864905 39.849493 512c0 124.052863 43.606461 231.565345 121.797357 316.522761 3.759178 15.036711-3.007342 25.562408-16.540382 26.314243-9.022026 0.751836-18.795888-8.270191-18.795888-8.27019l-4.511014-3.759178c-4.511013-5.262849-8.270191-9.773862-12.781204-15.036711-67.665198-87.212922-109.016153-196.98091-109.016152-315.770925 0-281.938326 229.309838-511.248164 511.248164-511.248164s511.248164 205.251101 511.248165 457.116005c0 161.64464-131.571219 293.215859-293.215859 293.215859H632.295895c-35.33627 0-62.402349 27.066079-62.402349 62.40235 0 15.788546 6.014684 30.073421 15.788546 40.599119 18.044053 18.044053 27.817915 42.10279 27.817915 68.417034 0 57.139501-44.358297 101.497797-101.497797 101.497797-93.227606 0-180.440529-24.810573-255.624083-68.417034-0.751836-0.751836-17.292217-28.56975 15.788547-33.832599z"  ></path></symbol><symbol id="icon-code" viewBox="0 0 1024 1024"><path d="M335.168 520.416m-50.528 0a50.528 50.528 0 1 0 101.056 0 50.528 50.528 0 1 0-101.056 0Z"  ></path><path d="M537.248 520.416m-50.528 0a50.528 50.528 0 1 0 101.056 0 50.528 50.528 0 1 0-101.056 0Z"  ></path><path d="M739.36 520.416m-50.528 0a50.528 50.528 0 1 0 101.056 0 50.528 50.528 0 1 0-101.056 0Z"  ></path><path d="M548.192 823.232h-187.776a302.816 302.816 0 1 1 0-605.632h303.168a302.816 302.816 0 0 1 302.816 302.816v3.712a299.104 299.104 0 0 1-299.104 299.104 25.6 25.6 0 1 0 0 51.2c193.472 0 350.304-156.8 350.304-350.304v-3.712C1017.6 324.896 859.104 166.4 663.584 166.4h-303.168C164.896 166.4 6.4 324.896 6.4 520.416s158.496 354.016 354.016 354.016h187.776a25.6 25.6 0 1 0 0-51.2z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)