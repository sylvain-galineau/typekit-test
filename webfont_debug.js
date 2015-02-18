/* Web Font Loader v1.5.14 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){// Input 0
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$27$$) {
  return $fn$$.call.apply($fn$$.bind, arguments);
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$28$$) {
  if (!$fn$$1$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments);
  };
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$29$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
var $goog$now$$ = Date.now || function() {
  return+new Date;
};
// Input 1
function $webfont$DomHelper$$($mainWindow$$, $opt_loadWindow$$) {
  this.$mainWindow_$ = $mainWindow$$;
  this.$loadWindow_$ = $opt_loadWindow$$ || $mainWindow$$;
  this.$document_$ = this.$loadWindow_$.document;
}
$webfont$DomHelper$$.prototype.createElement = function $$webfont$DomHelper$$$$createElement$($domElement_elem$$1$$, $opt_attr$$, $opt_innerHtml$$) {
  $domElement_elem$$1$$ = this.$document_$.createElement($domElement_elem$$1$$);
  if ($opt_attr$$) {
    for (var $attr$$ in $opt_attr$$) {
      $opt_attr$$.hasOwnProperty($attr$$) && ("style" == $attr$$ ? $domElement_elem$$1$$.style.cssText = $opt_attr$$[$attr$$] : $domElement_elem$$1$$.setAttribute($attr$$, $opt_attr$$[$attr$$]));
    }
  }
  $opt_innerHtml$$ && $domElement_elem$$1$$.appendChild(this.$document_$.createTextNode($opt_innerHtml$$));
  return $domElement_elem$$1$$;
};
function $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_insertInto$self_t$$, $tagName$$2$$, $e$$12$$) {
  $JSCompiler_StaticMethods_insertInto$self_t$$ = $JSCompiler_StaticMethods_insertInto$self_t$$.$document_$.getElementsByTagName($tagName$$2$$)[0];
  $JSCompiler_StaticMethods_insertInto$self_t$$ || ($JSCompiler_StaticMethods_insertInto$self_t$$ = document.documentElement);
  $JSCompiler_StaticMethods_insertInto$self_t$$ && $JSCompiler_StaticMethods_insertInto$self_t$$.lastChild && $JSCompiler_StaticMethods_insertInto$self_t$$.insertBefore($e$$12$$, $JSCompiler_StaticMethods_insertInto$self_t$$.lastChild);
}
function $JSCompiler_StaticMethods_whenBodyExists$$($JSCompiler_StaticMethods_whenBodyExists$self$$, $callback$$35$$) {
  function $check$$() {
    $JSCompiler_StaticMethods_whenBodyExists$self$$.$document_$.body ? $callback$$35$$() : setTimeout($check$$, 0);
  }
  $check$$();
}
function $JSCompiler_StaticMethods_updateClassName$$($e$$15$$, $add_opt_add_remainingClasses$$, $opt_remove_remove$$) {
  $add_opt_add_remainingClasses$$ = $add_opt_add_remainingClasses$$ || [];
  $opt_remove_remove$$ = $opt_remove_remove$$ || [];
  for (var $classes$$ = $e$$15$$baseVal.split(/\s+/), $i$$7$$ = 0;$i$$7$$ < $add_opt_add_remainingClasses$$.length;$i$$7$$ += 1) {
    for (var $found$$ = !1, $j$$1$$ = 0;$j$$1$$ < $classes$$.length;$j$$1$$ += 1) {
      if ($add_opt_add_remainingClasses$$[$i$$7$$] === $classes$$[$j$$1$$]) {
        $found$$ = !0;
        break;
      }
    }
    $found$$ || $classes$$.push($add_opt_add_remainingClasses$$[$i$$7$$]);
  }
  $add_opt_add_remainingClasses$$ = [];
  for ($i$$7$$ = 0;$i$$7$$ < $classes$$.length;$i$$7$$ += 1) {
    $found$$ = !1;
    for ($j$$1$$ = 0;$j$$1$$ < $opt_remove_remove$$.length;$j$$1$$ += 1) {
      if ($classes$$[$i$$7$$] === $opt_remove_remove$$[$j$$1$$]) {
        $found$$ = !0;
        break;
      }
    }
    $found$$ || $add_opt_add_remainingClasses$$.push($classes$$[$i$$7$$]);
  }
  $e$$15$$.className = $add_opt_add_remainingClasses$$.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
}
function $JSCompiler_StaticMethods_hasClassName$$($e$$16$$, $name$$53$$) {
  for (var $classes$$1$$ = $e$$16$$baseVal.split(/\s+/), $i$$8$$ = 0, $len$$ = $classes$$1$$.length;$i$$8$$ < $len$$;$i$$8$$++) {
    if ($classes$$1$$[$i$$8$$] == $name$$53$$) {
      return!0;
    }
  }
  return!1;
}
function $JSCompiler_StaticMethods_getProtocol$$($JSCompiler_StaticMethods_getProtocol$self$$) {
  if ("string" === typeof $JSCompiler_StaticMethods_getProtocol$self$$.$protocol_$) {
    return $JSCompiler_StaticMethods_getProtocol$self$$.$protocol_$;
  }
  var $protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$loadWindow_$.location.protocol;
  "about:" == $protocol$$1$$ && ($protocol$$1$$ = $JSCompiler_StaticMethods_getProtocol$self$$.$mainWindow_$.location.protocol);
  return "https:" == $protocol$$1$$ ? "https:" : "http:";
}
function $JSCompiler_StaticMethods_loadStylesheet$$($JSCompiler_StaticMethods_loadStylesheet$self$$, $href$$) {
  var $link$$ = $JSCompiler_StaticMethods_loadStylesheet$self$$.createElement("link", {rel:"stylesheet", href:$href$$}), $done$$ = !1;
  $link$$.onload = function $$link$$$onload$() {
    $done$$ || ($done$$ = !0);
  };
  $link$$.onerror = function $$link$$$onerror$() {
    $done$$ || ($done$$ = !0);
  };
  $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_loadStylesheet$self$$, "head", $link$$);
}
function $JSCompiler_StaticMethods_loadScript$$($JSCompiler_StaticMethods_loadScript$self$$, $src$$4$$, $opt_callback$$7$$, $opt_timeout$$) {
  var $head$$ = $JSCompiler_StaticMethods_loadScript$self$$.$document_$.getElementsByTagName("head")[0];
  if ($head$$) {
    var $script$$1$$ = $JSCompiler_StaticMethods_loadScript$self$$.createElement("script", {src:$src$$4$$}), $done$$1$$ = !1;
    $script$$1$$.onload = $script$$1$$.onreadystatechange = function $$script$$1$$$onreadystatechange$() {
      $done$$1$$ || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || ($done$$1$$ = !0, $opt_callback$$7$$ && $opt_callback$$7$$(null), $script$$1$$.onload = $script$$1$$.onreadystatechange = null, "HEAD" == $script$$1$$.parentNode.tagName && $head$$.removeChild($script$$1$$));
    };
    $head$$.appendChild($script$$1$$);
    window.setTimeout(function() {
      $done$$1$$ || ($done$$1$$ = !0, $opt_callback$$7$$ && $opt_callback$$7$$(Error("Script load timeout")));
    }, $opt_timeout$$ || 5E3);
    return $script$$1$$;
  }
  return null;
}
;
// Input 2
function $webfont$BrowserInfo$$($webfontSupport$$, $webKitFallbackBug$$) {
  this.$webfontSupport_$ = $webfontSupport$$;
  this.$webKitFallbackBug_$ = $webKitFallbackBug$$;
}
;
// Input 3
function $webfont$Version$$($opt_major$$, $opt_minor$$, $opt_patch$$, $opt_build$$) {
  this.$major$ = null != $opt_major$$ ? $opt_major$$ : null;
  this.$minor$ = null != $opt_minor$$ ? $opt_minor$$ : null;
  this.$patch$ = null != $opt_patch$$ ? $opt_patch$$ : null;
  this.$build$ = null != $opt_build$$ ? $opt_build$$ : null;
}
var $webfont$Version$TOKENIZER$$ = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
$webfont$Version$$.prototype.compare = function $$webfont$Version$$$$compare$($version$$7$$) {
  return this.$major$ > $version$$7$$.$major$ || this.$major$ === $version$$7$$.$major$ && this.$minor$ > $version$$7$$.$minor$ || this.$major$ === $version$$7$$.$major$ && this.$minor$ === $version$$7$$.$minor$ && this.$patch$ > $version$$7$$.$patch$ ? 1 : this.$major$ < $version$$7$$.$major$ || this.$major$ === $version$$7$$.$major$ && this.$minor$ < $version$$7$$.$minor$ || this.$major$ === $version$$7$$.$major$ && this.$minor$ === $version$$7$$.$minor$ && this.$patch$ < $version$$7$$.$patch$ ? 
  -1 : 0;
};
$webfont$Version$$.prototype.toString = function $$webfont$Version$$$$toString$() {
  return[this.$major$, this.$minor$ || "", this.$patch$ || "", this.$build$ || ""].join("");
};
function $webfont$Version$parse$$($match_str$$8$$) {
  $match_str$$8$$ = $webfont$Version$TOKENIZER$$.exec($match_str$$8$$);
  var $major$$ = null, $minor$$ = null, $patch$$ = null, $build$$ = null;
  $match_str$$8$$ && (null !== $match_str$$8$$[1] && $match_str$$8$$[1] && ($major$$ = parseInt($match_str$$8$$[1], 10)), null !== $match_str$$8$$[2] && $match_str$$8$$[2] && ($minor$$ = parseInt($match_str$$8$$[2], 10)), null !== $match_str$$8$$[3] && $match_str$$8$$[3] && ($patch$$ = parseInt($match_str$$8$$[3], 10)), null !== $match_str$$8$$[4] && $match_str$$8$$[4] && ($build$$ = /^[0-9]+$/.test($match_str$$8$$[4]) ? parseInt($match_str$$8$$[4], 10) : $match_str$$8$$[4]));
  return new $webfont$Version$$($major$$, $minor$$, $patch$$, $build$$);
}
;
// Input 4
function $webfont$UserAgent$$($name$$54$$, $version$$14$$, $engine$$, $engineVersion$$, $platform$$, $platformVersion$$, $documentMode$$, $browserInfo$$) {
  this.$name_$ = $name$$54$$;
  this.$browserInfo_$ = $browserInfo$$;
}
$webfont$UserAgent$$.prototype.getName = function $$webfont$UserAgent$$$$getName$() {
  return this.$name_$;
};
// Input 5
function $webfont$UserAgentParser$$($userAgent$$) {
  this.$userAgent_$ = $userAgent$$;
}
var $webfont$UserAgentParser$UNKNOWN_USER_AGENT$$ = new $webfont$UserAgent$$("Unknown", 0, 0, 0, 0, 0, 0, new $webfont$BrowserInfo$$(!1, !1));
$webfont$UserAgentParser$$.prototype.parse = function $$webfont$UserAgentParser$$$$parse$() {
  var $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$;
  if (-1 != this.$userAgent_$.indexOf("MSIE") || -1 != this.$userAgent_$.indexOf("Trident/")) {
    $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $JSCompiler_StaticMethods_getPlatform_$$(this);
    var $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getPlatformVersionString_$$(this)), $browserVersion$$inline_26_engineVersion$$inline_44$$ = null, $engineVersionString$$inline_29$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Trident\/([\d\w\.]+)/, 1), $browserVersion$$inline_26_engineVersion$$inline_44$$ = -1 != this.$userAgent_$.indexOf("MSIE") ? $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, 
    /MSIE ([\d\w\.]+)/, 1)) : $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /rv:([\d\w\.]+)/, 1));
    "" != $engineVersionString$$inline_29$$ && $webfont$Version$parse$$($engineVersionString$$inline_29$$);
    $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = new $webfont$UserAgent$$("MSIE", 0, 0, 0, 0, 0, 0, new $webfont$BrowserInfo$$("Windows" == $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ && 6 <= $browserVersion$$inline_26_engineVersion$$inline_44$$.$major$ || 
    "Windows Phone" == $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ && 8 <= $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$.$major$, !1));
  } else {
    if (-1 != this.$userAgent_$.indexOf("Opera")) {
      a: {
        if ($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Presto\/([\d\w\.]+)/, 1)), $webfont$Version$parse$$($JSCompiler_StaticMethods_getPlatformVersionString_$$(this)), null !== $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$.$major$ || 
        $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /rv:([^\)]+)/, 1)), -1 != this.$userAgent_$.indexOf("Opera Mini/")) {
          $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Opera Mini\/([\d\.]+)/, 1)), $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = 
          new $webfont$UserAgent$$("OperaMini", 0, 0, 0, $JSCompiler_StaticMethods_getPlatform_$$(this), 0, 0, new $webfont$BrowserInfo$$(!1, !1));
        } else {
          if (-1 != this.$userAgent_$.indexOf("Version/") && ($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Version\/([\d\.]+)/, 1)), null !== $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$.$major$)) {
            $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = new $webfont$UserAgent$$("Opera", 0, 0, 0, $JSCompiler_StaticMethods_getPlatform_$$(this), 0, 0, new $webfont$BrowserInfo$$(10 <= $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$.$major$, 
            !1));
            break a;
          }
          $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /Opera[\/ ]([\d\.]+)/, 1));
          $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = null !== $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$.$major$ ? new $webfont$UserAgent$$("Opera", 0, 0, 0, $JSCompiler_StaticMethods_getPlatform_$$(this), 0, 
          0, new $webfont$BrowserInfo$$(10 <= $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$.$major$, !1)) : new $webfont$UserAgent$$("Opera", 0, 0, 0, $JSCompiler_StaticMethods_getPlatform_$$(this), 0, 0, new $webfont$BrowserInfo$$(!1, !1));
        }
      }
    } else {
      /OPR\/[\d.]+/.test(this.$userAgent_$) ? $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$(this) : /AppleWeb(K|k)it/.test(this.$userAgent_$) ? $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = 
      $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$(this) : -1 != this.$userAgent_$.indexOf("Gecko") ? ($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = "Unknown", $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = new $webfont$Version$$, $webfont$Version$parse$$($JSCompiler_StaticMethods_getPlatformVersionString_$$(this)), 
      $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = !1, -1 != this.$userAgent_$.indexOf("Firefox") ? ($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = "Firefox", $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, 
      /Firefox\/([\d\w\.]+)/, 1)), $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = 3 <= $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$.$major$ && 5 <= $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$.$minor$) : -1 != this.$userAgent_$.indexOf("Mozilla") && ($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = 
      "Mozilla"), $browserVersion$$inline_26_engineVersion$$inline_44$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$(this.$userAgent_$, /rv:([^\)]+)/, 1)), $platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ || ($platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$ = 1 < $browserVersion$$inline_26_engineVersion$$inline_44$$.$major$ || 1 == $browserVersion$$inline_26_engineVersion$$inline_44$$.$major$ && 9 < $browserVersion$$inline_26_engineVersion$$inline_44$$.$minor$ || 
      1 == $browserVersion$$inline_26_engineVersion$$inline_44$$.$major$ && 9 == $browserVersion$$inline_26_engineVersion$$inline_44$$.$minor$ && 2 <= $browserVersion$$inline_26_engineVersion$$inline_44$$.$patch$), $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = new $webfont$UserAgent$$($JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$, 
      0, 0, 0, $JSCompiler_StaticMethods_getPlatform_$$(this), 0, 0, new $webfont$BrowserInfo$$($platformVersion$$inline_25_supportWebFont$$inline_43_version$$inline_41$$, !1))) : $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$ = $webfont$UserAgentParser$UNKNOWN_USER_AGENT$$;
    }
  }
  return $JSCompiler_temp$$10_JSCompiler_temp$$11_JSCompiler_temp$$12_JSCompiler_temp$$13_JSCompiler_temp$$2_browserVersion$$inline_37_engineVersion$$inline_34_name$$inline_40_platform$$inline_24$$;
};
function $JSCompiler_StaticMethods_getPlatform_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$) {
  var $mobileOs$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$.$userAgent_$, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
  if ("" != $mobileOs$$) {
    return/BB\d{2}/.test($mobileOs$$) && ($mobileOs$$ = "BlackBerry"), $mobileOs$$;
  }
  $JSCompiler_StaticMethods_getPlatform_$self_os$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatform_$self_os$$.$userAgent_$, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
  return "" != $JSCompiler_StaticMethods_getPlatform_$self_os$$ ? ("Mac_PowerPC" == $JSCompiler_StaticMethods_getPlatform_$self_os$$ ? $JSCompiler_StaticMethods_getPlatform_$self_os$$ = "Macintosh" : "PlayStation" == $JSCompiler_StaticMethods_getPlatform_$self_os$$ && ($JSCompiler_StaticMethods_getPlatform_$self_os$$ = "Linux"), $JSCompiler_StaticMethods_getPlatform_$self_os$$) : "Unknown";
}
function $JSCompiler_StaticMethods_getPlatformVersionString_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$) {
  var $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
  if ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ || ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /Windows Phone( OS)? ([^;)]+)/, 2)) || ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, 
  /(iPhone )?OS ([\d_]+)/, 2))) {
    return $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$;
  }
  if ($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1)) {
    for (var $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$ = $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$.split(/\s/), $i$$9$$ = 0;$i$$9$$ < $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$.length;$i$$9$$ += 1) {
      if (/^[\d\._]+$/.test($genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$[$i$$9$$])) {
        return $genericVersion_iVersion_linuxOrCrOsVersion_parts$$3_winPhoneVersion$$[$i$$9$$];
      }
    }
  }
  return($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$.$userAgent_$, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? $JSCompiler_StaticMethods_getPlatformVersionString_$self_blackBerryVersion$$ : "Unknown";
}
function $JSCompiler_StaticMethods_parseWebKitUserAgentString_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$) {
  var $platform$$2$$ = $JSCompiler_StaticMethods_getPlatform_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$), $platformVersion$$3$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getPlatformVersionString_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$)), $webKitVersion$$ = $webfont$Version$parse$$($JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)), $browserName$$ = 
  "Unknown", $browserVersion$$2_browserVersionString$$ = new $webfont$Version$$, $browserVersion$$2_browserVersionString$$ = "Unknown", $supportWebFont$$1$$ = !1;
  /OPR\/[\d.]+/.test($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$) ? $browserName$$ = "Opera" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Chrome") || -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("CrMo") || -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("CriOS") ? $browserName$$ = "Chrome" : /Silk\/\d/.test($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$) ? 
  $browserName$$ = "Silk" : "BlackBerry" == $platform$$2$$ || "Android" == $platform$$2$$ ? $browserName$$ = "BuiltinBrowser" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("PhantomJS") ? $browserName$$ = "PhantomJS" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Safari") ? $browserName$$ = "Safari" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("AdobeAIR") ? $browserName$$ = 
  "AdobeAIR" : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("PlayStation") && ($browserName$$ = "BuiltinBrowser");
  "BuiltinBrowser" == $browserName$$ ? $browserVersion$$2_browserVersionString$$ = "Unknown" : "Silk" == $browserName$$ ? $browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /Silk\/([\d\._]+)/, 1) : "Chrome" == $browserName$$ ? $browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, 
  /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != $JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$.indexOf("Version/") ? $browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == $browserName$$ ? $browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, 
  /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == $browserName$$ ? $browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /OPR\/([\d.]+)/, 1) : "PhantomJS" == $browserName$$ && ($browserVersion$$2_browserVersionString$$ = $JSCompiler_StaticMethods_getMatchingGroup_$$($JSCompiler_StaticMethods_parseWebKitUserAgentString_$self$$.$userAgent_$, /PhantomJS\/([\d.]+)/, 1));
  $browserVersion$$2_browserVersionString$$ = $webfont$Version$parse$$($browserVersion$$2_browserVersionString$$);
  $supportWebFont$$1$$ = "AdobeAIR" == $browserName$$ ? 2 < $browserVersion$$2_browserVersionString$$.$major$ || 2 == $browserVersion$$2_browserVersionString$$.$major$ && 5 <= $browserVersion$$2_browserVersionString$$.$minor$ : "BlackBerry" == $platform$$2$$ ? 10 <= $platformVersion$$3$$.$major$ : "Android" == $platform$$2$$ ? 2 < $platformVersion$$3$$.$major$ || 2 == $platformVersion$$3$$.$major$ && 1 < $platformVersion$$3$$.$minor$ : 526 <= $webKitVersion$$.$major$ || 525 <= $webKitVersion$$.$major$ && 
  13 <= $webKitVersion$$.$minor$;
  return new $webfont$UserAgent$$($browserName$$, 0, 0, 0, 0, 0, 0, new $webfont$BrowserInfo$$($supportWebFont$$1$$, 536 > $webKitVersion$$.$major$ || 536 == $webKitVersion$$.$major$ && 11 > $webKitVersion$$.$minor$));
}
function $JSCompiler_StaticMethods_getMatchingGroup_$$($groups_str$$9$$, $regexp$$2$$, $index$$45$$) {
  return($groups_str$$9$$ = $groups_str$$9$$.match($regexp$$2$$)) && $groups_str$$9$$[$index$$45$$] ? $groups_str$$9$$[$index$$45$$] : "";
}
;
// Input 6
function $webfont$CssClassName$$($opt_joinChar$$) {
  this.$joinChar_$ = $opt_joinChar$$ || "-";
}
$webfont$CssClassName$$.prototype.$build$ = function $$webfont$CssClassName$$$$$build$$($var_args$$31$$) {
  for (var $parts$$4$$ = [], $i$$10$$ = 0;$i$$10$$ < arguments.length;$i$$10$$++) {
    $parts$$4$$.push(arguments[$i$$10$$].replace(/[\W_]+/g, "").toLowerCase());
  }
  return $parts$$4$$.join(this.$joinChar_$);
};
// Input 7
function $webfont$Font$$($name$$57$$, $opt_variation$$) {
  this.$name_$ = $name$$57$$;
  this.$weight_$ = 4;
  this.$style_$ = "n";
  var $match$$1$$ = ($opt_variation$$ || "n4").match(/^([nio])([1-9])$/i);
  $match$$1$$ && (this.$style_$ = $match$$1$$[1], this.$weight_$ = parseInt($match$$1$$[2], 10));
}
$webfont$Font$$.prototype.getName = function $$webfont$Font$$$$getName$() {
  return this.$name_$;
};
function $JSCompiler_StaticMethods_getVariation$$($JSCompiler_StaticMethods_getVariation$self$$) {
  return $JSCompiler_StaticMethods_getVariation$self$$.$style_$ + $JSCompiler_StaticMethods_getVariation$self$$.$weight_$;
}
function $webfont$Font$parseCssVariation$$($css$$1$$) {
  var $weight$$ = 4, $style$$1$$ = "n", $m$$ = null;
  $css$$1$$ && (($m$$ = $css$$1$$.match(/(normal|oblique|italic)/i)) && $m$$[1] && ($style$$1$$ = $m$$[1].substr(0, 1).toLowerCase()), ($m$$ = $css$$1$$.match(/([1-9]00|normal|bold)/i)) && $m$$[1] && (/bold/i.test($m$$[1]) ? $weight$$ = 7 : /[1-9]00/.test($m$$[1]) && ($weight$$ = parseInt($m$$[1].substr(0, 1), 10))));
  return $style$$1$$ + $weight$$;
}
;
// Input 8
function $webfont$EventDispatcher$$($domHelper$$, $config$$) {
  this.$domHelper_$ = $domHelper$$;
  this.$htmlElement_$ = $domHelper$$.$loadWindow_$.document.documentElement;
  this.$callbacks_$ = $config$$;
  this.$namespace_$ = "wf";
  this.$cssClassName_$ = new $webfont$CssClassName$$("-");
  this.$dispatchEvents_$ = !1 !== $config$$.events;
  this.$setClasses_$ = !1 !== $config$$.classes;
}
function $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_dispatchInactive$self$$) {
  if ($JSCompiler_StaticMethods_dispatchInactive$self$$.$setClasses_$) {
    var $hasActive$$ = $JSCompiler_StaticMethods_hasClassName$$($JSCompiler_StaticMethods_dispatchInactive$self$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, "active")), $add$$2$$ = [], $remove$$2$$ = [$JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, "loading")];
    $hasActive$$ || $add$$2$$.push($JSCompiler_StaticMethods_dispatchInactive$self$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchInactive$self$$.$namespace_$, "inactive"));
    $JSCompiler_StaticMethods_updateClassName$$($JSCompiler_StaticMethods_dispatchInactive$self$$.$htmlElement_$, $add$$2$$, $remove$$2$$);
  }
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchInactive$self$$, "inactive");
}
function $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatch_$self$$, $event$$1$$, $opt_font$$) {
  if ($JSCompiler_StaticMethods_dispatch_$self$$.$dispatchEvents_$ && $JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$1$$]) {
    if ($opt_font$$) {
      $JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$1$$]($opt_font$$.getName(), $JSCompiler_StaticMethods_getVariation$$($opt_font$$));
    } else {
      $JSCompiler_StaticMethods_dispatch_$self$$.$callbacks_$[$event$$1$$]();
    }
  }
}
;
// Input 9
// Input 10
function $webfont$FontModuleLoader$$() {
  this.$modules_$ = {};
}
;
// Input 11
function $webfont$FontRuler$$($domHelper$$2$$, $fontTestString$$) {
  this.$domHelper_$ = $domHelper$$2$$;
  this.$fontTestString_$ = $fontTestString$$;
  this.$el_$ = this.$domHelper_$.createElement("span", {"aria-hidden":"true"}, this.$fontTestString_$);
}
function $JSCompiler_StaticMethods_setFont$$($JSCompiler_StaticMethods_setFont$self$$, $font$$6$$) {
  var $JSCompiler_temp_const$$7$$ = $JSCompiler_StaticMethods_setFont$self$$.$el_$, $JSCompiler_inline_result$$120_quoted$$inline_123$$;
  $JSCompiler_inline_result$$120_quoted$$inline_123$$ = [];
  for (var $split$$inline_124_style$$inline_129$$ = $font$$6$$.$name_$.split(/,\s*/), $i$$inline_125$$ = 0;$i$$inline_125$$ < $split$$inline_124_style$$inline_129$$.length;$i$$inline_125$$++) {
    var $part$$inline_126$$ = $split$$inline_124_style$$inline_129$$[$i$$inline_125$$].replace(/['"]/g, "");
    -1 == $part$$inline_126$$.indexOf(" ") ? $JSCompiler_inline_result$$120_quoted$$inline_123$$.push($part$$inline_126$$) : $JSCompiler_inline_result$$120_quoted$$inline_123$$.push("'" + $part$$inline_126$$ + "'");
  }
  $JSCompiler_inline_result$$120_quoted$$inline_123$$ = $JSCompiler_inline_result$$120_quoted$$inline_123$$.join(",");
  $split$$inline_124_style$$inline_129$$ = "normal";
  "o" === $font$$6$$.$style_$ ? $split$$inline_124_style$$inline_129$$ = "oblique" : "i" === $font$$6$$.$style_$ && ($split$$inline_124_style$$inline_129$$ = "italic");
  $JSCompiler_temp_const$$7$$.style.cssText = "display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + $JSCompiler_inline_result$$120_quoted$$inline_123$$ + ";" + ("font-style:" + $split$$inline_124_style$$inline_129$$ + ";font-weight:" + ($font$$6$$.$weight_$ + "00") + ";");
}
function $JSCompiler_StaticMethods_insert$$($JSCompiler_StaticMethods_insert$self$$) {
  $JSCompiler_StaticMethods_insertInto$$($JSCompiler_StaticMethods_insert$self$$.$domHelper_$, "body", $JSCompiler_StaticMethods_insert$self$$.$el_$);
}
$webfont$FontRuler$$.prototype.remove = function $$webfont$FontRuler$$$$remove$() {
  var $node$$inline_60$$ = this.$el_$;
  $node$$inline_60$$.parentNode && $node$$inline_60$$.parentNode.removeChild($node$$inline_60$$);
};
// Input 12
// Input 13
function $webfont$FontWatchRunner$$($activeCallback$$1_fontRuler$$inline_63$$, $inactiveCallback$$1$$, $domHelper$$4$$, $font$$9$$, $browserInfo$$1$$, $opt_timeout$$2$$, $opt_metricCompatibleFonts$$, $opt_fontTestString$$1$$) {
  this.$activeCallback_$ = $activeCallback$$1_fontRuler$$inline_63$$;
  this.$inactiveCallback_$ = $inactiveCallback$$1$$;
  this.$domHelper_$ = $domHelper$$4$$;
  this.$font_$ = $font$$9$$;
  this.$fontTestString_$ = $opt_fontTestString$$1$$ || "BESbswy";
  this.$browserInfo_$ = $browserInfo$$1$$;
  this.$lastResortWidths_$ = {};
  this.$timeout_$ = $opt_timeout$$2$$ || 3E3;
  this.$metricCompatibleFonts_$ = $opt_metricCompatibleFonts$$ || null;
  this.$fontRulerB_$ = this.$fontRulerA_$ = null;
  $activeCallback$$1_fontRuler$$inline_63$$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$($activeCallback$$1_fontRuler$$inline_63$$);
  for (var $font$$inline_64$$ in $webfont$FontWatchRunner$LastResortFonts$$) {
    $webfont$FontWatchRunner$LastResortFonts$$.hasOwnProperty($font$$inline_64$$) && ($JSCompiler_StaticMethods_setFont$$($activeCallback$$1_fontRuler$$inline_63$$, new $webfont$Font$$($webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_64$$], $JSCompiler_StaticMethods_getVariation$$(this.$font_$))), this.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$inline_64$$]] = $activeCallback$$1_fontRuler$$inline_63$$.$el_$.offsetWidth);
  }
  $activeCallback$$1_fontRuler$$inline_63$$.remove();
}
var $webfont$FontWatchRunner$LastResortFonts$$ = {$SERIF$:"serif", $SANS_SERIF$:"sans-serif", $MONOSPACE$:"monospace"};
$webfont$FontWatchRunner$$.prototype.start = function $$webfont$FontWatchRunner$$$$start$() {
  this.$fontRulerA_$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$(this.$fontRulerA_$);
  this.$fontRulerB_$ = new $webfont$FontRuler$$(this.$domHelper_$, this.$fontTestString_$);
  $JSCompiler_StaticMethods_insert$$(this.$fontRulerB_$);
  this.$started_$ = $goog$now$$();
  $JSCompiler_StaticMethods_setFont$$(this.$fontRulerA_$, new $webfont$Font$$(this.$font_$.getName() + ",serif", $JSCompiler_StaticMethods_getVariation$$(this.$font_$)));
  $JSCompiler_StaticMethods_setFont$$(this.$fontRulerB_$, new $webfont$Font$$(this.$font_$.getName() + ",sans-serif", $JSCompiler_StaticMethods_getVariation$$(this.$font_$)));
  $JSCompiler_StaticMethods_check_$$(this);
};
function $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$, $a$$2$$, $b$$1$$) {
  for (var $font$$11$$ in $webfont$FontWatchRunner$LastResortFonts$$) {
    if ($webfont$FontWatchRunner$LastResortFonts$$.hasOwnProperty($font$$11$$) && $a$$2$$ === $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$11$$]] && $b$$1$$ === $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$self$$.$lastResortWidths_$[$webfont$FontWatchRunner$LastResortFonts$$[$font$$11$$]]) {
      return!0;
    }
  }
  return!1;
}
function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
  var $widthA$$ = $JSCompiler_StaticMethods_check_$self$$.$fontRulerA_$.$el_$.offsetWidth, $widthB$$ = $JSCompiler_StaticMethods_check_$self$$.$fontRulerB_$.$el_$.offsetWidth;
  $widthA$$ === $JSCompiler_StaticMethods_check_$self$$.$lastResortWidths_$.serif && $widthB$$ === $JSCompiler_StaticMethods_check_$self$$.$lastResortWidths_$["sans-serif"] || $JSCompiler_StaticMethods_check_$self$$.$browserInfo_$.$webKitFallbackBug_$ && $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_check_$self$$, $widthA$$, $widthB$$) ? $goog$now$$() - $JSCompiler_StaticMethods_check_$self$$.$started_$ >= $JSCompiler_StaticMethods_check_$self$$.$timeout_$ ? $JSCompiler_StaticMethods_check_$self$$.$browserInfo_$.$webKitFallbackBug_$ && 
  $JSCompiler_StaticMethods_widthsMatchLastResortWidths_$$($JSCompiler_StaticMethods_check_$self$$, $widthA$$, $widthB$$) && (null === $JSCompiler_StaticMethods_check_$self$$.$metricCompatibleFonts_$ || $JSCompiler_StaticMethods_check_$self$$.$metricCompatibleFonts_$.hasOwnProperty($JSCompiler_StaticMethods_check_$self$$.$font_$.getName())) ? $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, $JSCompiler_StaticMethods_check_$self$$.$activeCallback_$) : $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, 
  $JSCompiler_StaticMethods_check_$self$$.$inactiveCallback_$) : $JSCompiler_StaticMethods_asyncCheck_$$($JSCompiler_StaticMethods_check_$self$$) : $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_check_$self$$, $JSCompiler_StaticMethods_check_$self$$.$activeCallback_$);
}
function $JSCompiler_StaticMethods_asyncCheck_$$($JSCompiler_StaticMethods_asyncCheck_$self$$) {
  setTimeout($goog$bind$$(function() {
    $JSCompiler_StaticMethods_check_$$(this);
  }, $JSCompiler_StaticMethods_asyncCheck_$self$$), 25);
}
function $JSCompiler_StaticMethods_finish_$$($JSCompiler_StaticMethods_finish_$self$$, $callback$$36$$) {
  $JSCompiler_StaticMethods_finish_$self$$.$fontRulerA_$.remove();
  $JSCompiler_StaticMethods_finish_$self$$.$fontRulerB_$.remove();
  $callback$$36$$($JSCompiler_StaticMethods_finish_$self$$.$font_$);
}
;
// Input 14
function $webfont$FontWatcher$$($userAgent$$2$$, $domHelper$$5$$, $eventDispatcher$$, $opt_timeout$$3$$) {
  this.$domHelper_$ = $domHelper$$5$$;
  this.$eventDispatcher_$ = $eventDispatcher$$;
  this.$currentlyWatched_$ = 0;
  this.$success_$ = this.$last_$ = !1;
  this.$timeout_$ = $opt_timeout$$3$$;
  this.$browserInfo_$ = $userAgent$$2$$.$browserInfo_$;
}
function $JSCompiler_StaticMethods_watchFonts$$($JSCompiler_StaticMethods_watchFonts$self$$, $fonts$$1$$, $fontTestStrings_testStrings$$, $metricCompatibleFonts$$, $i$$12_last$$) {
  $fontTestStrings_testStrings$$ = $fontTestStrings_testStrings$$ || {};
  if (0 === $fonts$$1$$.length && $i$$12_last$$) {
    $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$);
  } else {
    for ($JSCompiler_StaticMethods_watchFonts$self$$.$currentlyWatched_$ += $fonts$$1$$.length, $i$$12_last$$ && ($JSCompiler_StaticMethods_watchFonts$self$$.$last_$ = $i$$12_last$$), $i$$12_last$$ = 0;$i$$12_last$$ < $fonts$$1$$.length;$i$$12_last$$++) {
      var $font$$12$$ = $fonts$$1$$[$i$$12_last$$], $testString$$ = $fontTestStrings_testStrings$$[$font$$12$$.getName()], $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$ = $JSCompiler_StaticMethods_watchFonts$self$$.$eventDispatcher_$, $font$$inline_69$$ = $font$$12$$;
      $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$.$setClasses_$ && $JSCompiler_StaticMethods_updateClassName$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$.$htmlElement_$, [$JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$.$namespace_$, $font$$inline_69$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$inline_69$$).toString(), 
      "loading")]);
      $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$, "fontloading", $font$$inline_69$$);
      $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$ = null;
      $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$ = new $webfont$FontWatchRunner$$($goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontActive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $goog$bind$$($JSCompiler_StaticMethods_watchFonts$self$$.$fontInactive_$, $JSCompiler_StaticMethods_watchFonts$self$$), $JSCompiler_StaticMethods_watchFonts$self$$.$domHelper_$, $font$$12$$, $JSCompiler_StaticMethods_watchFonts$self$$.$browserInfo_$, $JSCompiler_StaticMethods_watchFonts$self$$.$timeout_$, 
      $metricCompatibleFonts$$, $testString$$);
      $JSCompiler_StaticMethods_dispatchFontLoading$self$$inline_68_fontWatchRunner$$.start();
    }
  }
}
$webfont$FontWatcher$$.prototype.$fontActive_$ = function $$webfont$FontWatcher$$$$$fontActive_$$($font$$13$$) {
  var $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$ = this.$eventDispatcher_$;
  $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$setClasses_$ && $JSCompiler_StaticMethods_updateClassName$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$htmlElement_$, [$JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$namespace_$, $font$$13$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$13$$).toString(), "active")], [$JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$namespace_$, 
  $font$$13$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$13$$).toString(), "loading"), $JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$.$namespace_$, $font$$13$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$13$$).toString(), "inactive")]);
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontActive$self$$inline_71$$, "fontactive", $font$$13$$);
  this.$success_$ = !0;
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this);
};
$webfont$FontWatcher$$.prototype.$fontInactive_$ = function $$webfont$FontWatcher$$$$$fontInactive_$$($font$$14$$) {
  var $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$ = this.$eventDispatcher_$;
  if ($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$setClasses_$) {
    var $hasFontActive$$inline_76$$ = $JSCompiler_StaticMethods_hasClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$htmlElement_$, $JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$namespace_$, $font$$14$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$14$$).toString(), "active")), $add$$inline_77$$ = [], $remove$$inline_78$$ = [$JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$namespace_$, 
    $font$$14$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$14$$).toString(), "loading")];
    $hasFontActive$$inline_76$$ || $add$$inline_77$$.push($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$namespace_$, $font$$14$$.getName(), $JSCompiler_StaticMethods_getVariation$$($font$$14$$).toString(), "inactive"));
    $JSCompiler_StaticMethods_updateClassName$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$.$htmlElement_$, $add$$inline_77$$, $remove$$inline_78$$);
  }
  $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_dispatchFontInactive$self$$inline_74$$, "fontinactive", $font$$14$$);
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$(this);
};
function $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$) {
  0 == --$JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$currentlyWatched_$ && $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$last_$ && ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$success_$ ? ($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$ = 
  $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$eventDispatcher_$, $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$setClasses_$ && $JSCompiler_StaticMethods_updateClassName$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$htmlElement_$, [$JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$namespace_$, 
  "active")], [$JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$namespace_$, "loading"), $JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$cssClassName_$.$build$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$namespace_$, 
  "inactive")]), $JSCompiler_StaticMethods_dispatch_$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$, "active")) : $JSCompiler_StaticMethods_dispatchInactive$$($JSCompiler_StaticMethods_decreaseCurrentlyWatched_$self_JSCompiler_StaticMethods_dispatchActive$self$$inline_80$$.$eventDispatcher_$));
}
;
// Input 15
function $webfont$WebFont$$($mainWindow$$1$$) {
  this.$mainWindow_$ = $mainWindow$$1$$;
  this.$fontModuleLoader_$ = new $webfont$FontModuleLoader$$;
  this.$userAgentParser_$ = new $webfont$UserAgentParser$$($mainWindow$$1$$.navigator.userAgent);
  this.$userAgent_$ = this.$userAgentParser_$.parse();
  this.$moduleFailedLoading_$ = this.$moduleLoading_$ = 0;
  this.$classes_$ = this.$events_$ = !0;
}
$webfont$WebFont$$.prototype.load = function $$webfont$WebFont$$$$load$($configuration$$3_fontWatcher$$inline_91$$) {
  this.$domHelper_$ = new $webfont$DomHelper$$(this.$mainWindow_$, $configuration$$3_fontWatcher$$inline_91$$.context || this.$mainWindow_$);
  this.$events_$ = !1 !== $configuration$$3_fontWatcher$$inline_91$$.events;
  this.$classes_$ = !1 !== $configuration$$3_fontWatcher$$inline_91$$.classes;
  var $eventDispatcher$$inline_87$$ = new $webfont$EventDispatcher$$(this.$domHelper_$, $configuration$$3_fontWatcher$$inline_91$$), $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$ = [], $i$$inline_92_timeout$$inline_90$$ = $configuration$$3_fontWatcher$$inline_91$$.timeout;
  $eventDispatcher$$inline_87$$.$setClasses_$ && $JSCompiler_StaticMethods_updateClassName$$($eventDispatcher$$inline_87$$.$htmlElement_$, [$eventDispatcher$$inline_87$$.$cssClassName_$.$build$($eventDispatcher$$inline_87$$.$namespace_$, "loading")]);
  $JSCompiler_StaticMethods_dispatch_$$($eventDispatcher$$inline_87$$, "loading");
  var $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$ = this.$fontModuleLoader_$, $domHelper$$inline_135_module$$inline_94$$ = this.$domHelper_$, $modules$$inline_136$$ = [], $key$$inline_137_len$$inline_93$$;
  for ($key$$inline_137_len$$inline_93$$ in $configuration$$3_fontWatcher$$inline_91$$) {
    if ($configuration$$3_fontWatcher$$inline_91$$.hasOwnProperty($key$$inline_137_len$$inline_93$$)) {
      var $moduleFactory$$inline_138$$ = $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$.$modules_$[$key$$inline_137_len$$inline_93$$];
      $moduleFactory$$inline_138$$ && $modules$$inline_136$$.push($moduleFactory$$inline_138$$($configuration$$3_fontWatcher$$inline_91$$[$key$$inline_137_len$$inline_93$$], $domHelper$$inline_135_module$$inline_94$$));
    }
  }
  $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$ = $modules$$inline_136$$;
  this.$moduleFailedLoading_$ = this.$moduleLoading_$ = $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$.length;
  $configuration$$3_fontWatcher$$inline_91$$ = new $webfont$FontWatcher$$(this.$userAgent_$, this.$domHelper_$, $eventDispatcher$$inline_87$$, $i$$inline_92_timeout$$inline_90$$);
  $i$$inline_92_timeout$$inline_90$$ = 0;
  for ($key$$inline_137_len$$inline_93$$ = $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$.length;$i$$inline_92_timeout$$inline_90$$ < $key$$inline_137_len$$inline_93$$;$i$$inline_92_timeout$$inline_90$$++) {
    $domHelper$$inline_135_module$$inline_94$$ = $JSCompiler_StaticMethods_getModules$self$$inline_133_modules$$inline_89$$[$i$$inline_92_timeout$$inline_90$$], $domHelper$$inline_135_module$$inline_94$$.$supportUserAgent$(this.$userAgent_$, $goog$bind$$(this.$isModuleSupportingUserAgent_$, this, $domHelper$$inline_135_module$$inline_94$$, $eventDispatcher$$inline_87$$, $configuration$$3_fontWatcher$$inline_91$$));
  }
};
$webfont$WebFont$$.prototype.$isModuleSupportingUserAgent_$ = function $$webfont$WebFont$$$$$isModuleSupportingUserAgent_$$($allModulesLoaded_module$$, $eventDispatcher$$2$$, $fontWatcher$$, $support$$1$$) {
  var $that$$2$$ = this;
  $support$$1$$ ? $allModulesLoaded_module$$.load(function($fonts$$2$$, $opt_fontTestStrings$$, $opt_metricCompatibleFonts$$1$$) {
    $JSCompiler_StaticMethods_onModuleReady_$$($that$$2$$, $fontWatcher$$, $fonts$$2$$, $opt_fontTestStrings$$, $opt_metricCompatibleFonts$$1$$);
  }) : ($allModulesLoaded_module$$ = 0 == --this.$moduleLoading_$, this.$moduleFailedLoading_$--, $allModulesLoaded_module$$ && 0 == this.$moduleFailedLoading_$ ? $JSCompiler_StaticMethods_dispatchInactive$$($eventDispatcher$$2$$) : (this.$classes_$ || this.$events_$) && $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$, [], {}, null, $allModulesLoaded_module$$));
};
function $JSCompiler_StaticMethods_onModuleReady_$$($JSCompiler_StaticMethods_onModuleReady_$self$$, $fontWatcher$$1$$, $fonts$$3$$, $opt_fontTestStrings$$1$$, $opt_metricCompatibleFonts$$2$$) {
  var $allModulesLoaded$$1$$ = 0 == --$JSCompiler_StaticMethods_onModuleReady_$self$$.$moduleLoading_$;
  ($JSCompiler_StaticMethods_onModuleReady_$self$$.$classes_$ || $JSCompiler_StaticMethods_onModuleReady_$self$$.$events_$) && setTimeout(function() {
    $JSCompiler_StaticMethods_watchFonts$$($fontWatcher$$1$$, $fonts$$3$$, $opt_fontTestStrings$$1$$ || null, $opt_metricCompatibleFonts$$2$$ || null, $allModulesLoaded$$1$$);
  }, 0);
}
;
// Input 16
function $webfont$modules$google$FontApiUrlBuilder$$($apiUrl$$, $protocol$$3$$, $text$$10$$) {
  this.$apiUrl_$ = $apiUrl$$ ? $apiUrl$$ : $protocol$$3$$ + $webfont$modules$google$FontApiUrlBuilder$DEFAULT_API_URL$$;
  this.$fontFamilies_$ = [];
  this.$subsets_$ = [];
  this.$text_$ = $text$$10$$ || "";
}
var $webfont$modules$google$FontApiUrlBuilder$DEFAULT_API_URL$$ = "//fonts.googleapis.com/css";
$webfont$modules$google$FontApiUrlBuilder$$.prototype.$build$ = function $$webfont$modules$google$FontApiUrlBuilder$$$$$build$$() {
  if (0 == this.$fontFamilies_$.length) {
    throw Error("No fonts to load!");
  }
  if (-1 != this.$apiUrl_$.indexOf("kit=")) {
    return this.$apiUrl_$;
  }
  for (var $length$$13_url$$11$$ = this.$fontFamilies_$.length, $sb$$ = [], $i$$15$$ = 0;$i$$15$$ < $length$$13_url$$11$$;$i$$15$$++) {
    $sb$$.push(this.$fontFamilies_$[$i$$15$$].replace(/ /g, "+"));
  }
  $length$$13_url$$11$$ = this.$apiUrl_$ + "?family=" + $sb$$.join("%7C");
  0 < this.$subsets_$.length && ($length$$13_url$$11$$ += "&subset=" + this.$subsets_$.join(","));
  0 < this.$text_$.length && ($length$$13_url$$11$$ += "&text=" + encodeURIComponent(this.$text_$));
  return $length$$13_url$$11$$;
};
// Input 17
function $webfont$modules$google$FontApiParser$$($fontFamilies$$2$$) {
  this.$fontFamilies_$ = $fontFamilies$$2$$;
  this.$parsedFonts_$ = [];
  this.$fontTestStrings_$ = {};
}
var $webfont$modules$google$FontApiParser$INT_FONTS$$ = {latin:"BESbswy", cyrillic:"&#1081;&#1103;&#1046;", greek:"&#945;&#946;&#931;", khmer:"&#x1780;&#x1781;&#x1782;", Hanuman:"&#x1780;&#x1781;&#x1782;"}, $webfont$modules$google$FontApiParser$WEIGHTS$$ = {thin:"1", extralight:"2", "extra-light":"2", ultralight:"2", "ultra-light":"2", light:"3", regular:"4", book:"4", medium:"5", "semi-bold":"6", semibold:"6", "demi-bold":"6", demibold:"6", bold:"7", "extra-bold":"8", extrabold:"8", "ultra-bold":"8", 
ultrabold:"8", black:"9", heavy:"9", l:"3", r:"4", b:"7"}, $webfont$modules$google$FontApiParser$STYLES$$ = {i:"i", italic:"i", n:"n", normal:"n"}, $webfont$modules$google$FontApiParser$VARIATION_MATCH$$ = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
$webfont$modules$google$FontApiParser$$.prototype.parse = function $$webfont$modules$google$FontApiParser$$$$parse$() {
  for (var $length$$14$$ = this.$fontFamilies_$.length, $i$$16$$ = 0;$i$$16$$ < $length$$14$$;$i$$16$$++) {
    var $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = this.$fontFamilies_$[$i$$16$$].split(":"), $fontFamily$$1$$ = $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$[0].replace(/\+/g, " "), $variations$$ = ["n4"];
    if (2 <= $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$.length) {
      var $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$;
      var $providedVariations$$inline_99_variations$$inline_97$$ = $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$[1];
      $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$ = [];
      if ($providedVariations$$inline_99_variations$$inline_97$$) {
        for (var $providedVariations$$inline_99_variations$$inline_97$$ = $providedVariations$$inline_99_variations$$inline_97$$.split(","), $length$$inline_100$$ = $providedVariations$$inline_99_variations$$inline_97$$.length, $i$$inline_101$$ = 0;$i$$inline_101$$ < $length$$inline_100$$;$i$$inline_101$$++) {
          var $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$;
          $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ = $providedVariations$$inline_99_variations$$inline_97$$[$i$$inline_101$$];
          if ($fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$.match(/^[\w-]+$/)) {
            $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ = $webfont$modules$google$FontApiParser$VARIATION_MATCH$$.exec($fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$.toLowerCase());
            var $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = void 0;
            if (null == $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$) {
              $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = "";
            } else {
              $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = void 0;
              $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$[1];
              if (null == $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ || "" == $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$) {
                $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = "4";
              } else {
                var $weight$$inline_145$$ = $webfont$modules$google$FontApiParser$WEIGHTS$$[$JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$], $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = $weight$$inline_145$$ ? $weight$$inline_145$$ : isNaN($JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$) ? "4" : $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$.substr(0, 
                1)
              }
              $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ = $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$[2];
              $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$ = [null == $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ || "" == $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ ? "n" : $webfont$modules$google$FontApiParser$STYLES$$[$fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$], $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$].join("");
            }
            $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ = $JSCompiler_inline_result$$inline_143_JSCompiler_temp$$inline_142_parsedWeight$$inline_144$$;
          } else {
            $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ = "";
          }
          $fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$ && $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$.push($fvd$$inline_102_groups$$inline_141_parsedStyle$$inline_146_variation$$inline_140$$);
        }
      }
      0 < $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$.length && ($variations$$ = $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$);
      3 == $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$.length && ($elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$[2], $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$ = [], $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ ? 
      $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$.split(",") : $finalSubsets$$inline_105_finalVariations$$inline_98_fvds$$, 0 < $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$.length && ($elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$[0]]) && (this.$fontTestStrings_$[$fontFamily$$1$$] = 
      $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$));
    }
    this.$fontTestStrings_$[$fontFamily$$1$$] || ($elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = $webfont$modules$google$FontApiParser$INT_FONTS$$[$fontFamily$$1$$]) && (this.$fontTestStrings_$[$fontFamily$$1$$] = $elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$);
    for ($elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ = 0;$elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ < $variations$$.length;$elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$ += 1) {
      this.$parsedFonts_$.push(new $webfont$Font$$($fontFamily$$1$$, $variations$$[$elements$$1_fontTestString$$1_hanumanTestString_j$$2_subsets_subsets$$inline_104$$]));
    }
  }
};
// Input 18
function $webfont$modules$google$GoogleFontApi$$($domHelper$$6$$, $configuration$$5$$) {
  this.$userAgent_$ = (new $webfont$UserAgentParser$$(navigator.userAgent)).parse();
  this.$domHelper_$ = $domHelper$$6$$;
  this.$configuration_$ = $configuration$$5$$;
}
var $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$ = {Arimo:!0, Cousine:!0, Tinos:!0};
$webfont$modules$google$GoogleFontApi$$.prototype.$supportUserAgent$ = function $$webfont$modules$google$GoogleFontApi$$$$$supportUserAgent$$($userAgent$$3$$, $support$$2$$) {
  $support$$2$$($userAgent$$3$$.$browserInfo_$.$webfontSupport_$);
};
$webfont$modules$google$GoogleFontApi$$.prototype.load = function $$webfont$modules$google$GoogleFontApi$$$$load$($onReady$$1$$) {
  var $domHelper$$7$$ = this.$domHelper_$;
  "MSIE" == this.$userAgent_$.getName() && 1 != this.$configuration_$.blocking ? $JSCompiler_StaticMethods_whenBodyExists$$($domHelper$$7$$, $goog$bind$$(this.$insertLink_$, this, $onReady$$1$$)) : this.$insertLink_$($onReady$$1$$);
};
$webfont$modules$google$GoogleFontApi$$.prototype.$insertLink_$ = function $$webfont$modules$google$GoogleFontApi$$$$$insertLink_$$($onReady$$2$$) {
  for (var $domHelper$$8$$ = this.$domHelper_$, $fontApiUrlBuilder$$ = new $webfont$modules$google$FontApiUrlBuilder$$(this.$configuration_$.api, $JSCompiler_StaticMethods_getProtocol$$($domHelper$$8$$), this.$configuration_$.text), $fontApiParser_fontFamilies$$3$$ = this.$configuration_$.families, $length$$inline_151$$ = $fontApiParser_fontFamilies$$3$$.length, $i$$inline_152$$ = 0;$i$$inline_152$$ < $length$$inline_151$$;$i$$inline_152$$++) {
    var $elements$$inline_153$$ = $fontApiParser_fontFamilies$$3$$[$i$$inline_152$$].split(":");
    3 == $elements$$inline_153$$.length && $fontApiUrlBuilder$$.$subsets_$.push($elements$$inline_153$$.pop());
    var $joinCharacter$$inline_154$$ = "";
    2 == $elements$$inline_153$$.length && "" != $elements$$inline_153$$[1] && ($joinCharacter$$inline_154$$ = ":");
    $fontApiUrlBuilder$$.$fontFamilies_$.push($elements$$inline_153$$.join($joinCharacter$$inline_154$$));
  }
  $fontApiParser_fontFamilies$$3$$ = new $webfont$modules$google$FontApiParser$$($fontApiParser_fontFamilies$$3$$);
  $fontApiParser_fontFamilies$$3$$.parse();
  $JSCompiler_StaticMethods_loadStylesheet$$($domHelper$$8$$, $fontApiUrlBuilder$$.$build$());
  $onReady$$2$$($fontApiParser_fontFamilies$$3$$.$parsedFonts_$, $fontApiParser_fontFamilies$$3$$.$fontTestStrings_$, $webfont$modules$google$GoogleFontApi$METRICS_COMPATIBLE_FONTS$$);
};
// Input 19
function $webfont$modules$Fontdeck$$($domHelper$$9$$, $configuration$$6$$) {
  this.$domHelper_$ = $domHelper$$9$$;
  this.$configuration_$ = $configuration$$6$$;
  this.$fonts_$ = [];
}
$webfont$modules$Fontdeck$$.prototype.$getScriptSrc$ = function $$webfont$modules$Fontdeck$$$$$getScriptSrc$$($projectId$$) {
  var $JSCompiler_StaticMethods_getHostName$self$$inline_115$$ = this.$domHelper_$;
  return $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$) + (this.$configuration_$.api || "//f.fontdeck.com/s/css/js/") + ($JSCompiler_StaticMethods_getHostName$self$$inline_115$$.$loadWindow_$.location.hostname || $JSCompiler_StaticMethods_getHostName$self$$inline_115$$.$mainWindow_$.location.hostname) + "/" + $projectId$$ + ".js";
};
$webfont$modules$Fontdeck$$.prototype.$supportUserAgent$ = function $$webfont$modules$Fontdeck$$$$$supportUserAgent$$($userAgent$$4$$, $support$$3$$) {
  var $projectId$$1$$ = this.$configuration_$.id, $loadWindow$$ = this.$domHelper_$.$loadWindow_$, $self$$2$$ = this;
  $projectId$$1$$ ? ($loadWindow$$.__webfontfontdeckmodule__ || ($loadWindow$$.__webfontfontdeckmodule__ = {}), $loadWindow$$.__webfontfontdeckmodule__[$projectId$$1$$] = function $$loadWindow$$$__webfontfontdeckmodule__$$projectId$$1$$$($fontdeckSupports$$, $data$$26$$) {
    for (var $i$$18$$ = 0, $j$$3$$ = $data$$26$$.fonts.length;$i$$18$$ < $j$$3$$;++$i$$18$$) {
      var $font$$15$$ = $data$$26$$.fonts[$i$$18$$];
      $self$$2$$.$fonts_$.push(new $webfont$Font$$($font$$15$$.name, $webfont$Font$parseCssVariation$$("font-weight:" + $font$$15$$.weight + ";font-style:" + $font$$15$$.style)));
    }
    $support$$3$$($fontdeckSupports$$);
  }, $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, this.$getScriptSrc$($projectId$$1$$), function($err$$) {
    $err$$ && $support$$3$$(!1);
  })) : $support$$3$$(!1);
};
$webfont$modules$Fontdeck$$.prototype.load = function $$webfont$modules$Fontdeck$$$$load$($onReady$$3$$) {
  $onReady$$3$$(this.$fonts_$);
};
// Input 20
function $webfont$modules$Typekit$$($domHelper$$10$$, $configuration$$7$$) {
  this.$domHelper_$ = $domHelper$$10$$;
  this.$configuration_$ = $configuration$$7$$;
  this.$fonts_$ = [];
}
$webfont$modules$Typekit$$.prototype.$getScriptSrc$ = function $$webfont$modules$Typekit$$$$$getScriptSrc$$($kitId$$) {
  var $protocol$$5$$ = $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$);
  return(this.$configuration_$.api || $protocol$$5$$ + "//use.typekit.net") + "/" + $kitId$$ + ".js";
};
$webfont$modules$Typekit$$.prototype.$supportUserAgent$ = function $$webfont$modules$Typekit$$$$$supportUserAgent$$($userAgent$$5$$, $support$$4$$) {
  var $kitId$$1$$ = this.$configuration_$.id, $loadWindow$$1$$ = this.$domHelper_$.$loadWindow_$, $that$$3$$ = this;
  $kitId$$1$$ ? $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, this.$getScriptSrc$($kitId$$1$$), function($err$$1_fn$$5$$) {
    if ($err$$1_fn$$5$$) {
      $support$$4$$(!1);
    } else {
      if ($loadWindow$$1$$.Typekit && $loadWindow$$1$$.Typekit.config && $loadWindow$$1$$.Typekit.config.fn) {
        $err$$1_fn$$5$$ = $loadWindow$$1$$.Typekit.config.fn;
        for (var $i$$19$$ = 0;$i$$19$$ < $err$$1_fn$$5$$.length;$i$$19$$ += 2) {
          for (var $font$$16$$ = $err$$1_fn$$5$$[$i$$19$$], $variations$$2$$ = $err$$1_fn$$5$$[$i$$19$$ + 1], $j$$4$$ = 0;$j$$4$$ < $variations$$2$$.length;$j$$4$$++) {
            $that$$3$$.$fonts_$.push(new $webfont$Font$$($font$$16$$, $variations$$2$$[$j$$4$$]));
          }
        }
        try {
          $loadWindow$$1$$.Typekit.load({events:!1, classes:!1});
        } catch ($e$$19$$) {
        }
      }
      $support$$4$$(!0);
    }
  }, 2E3) : $support$$4$$(!1);
};
$webfont$modules$Typekit$$.prototype.load = function $$webfont$modules$Typekit$$$$load$($onReady$$4$$) {
  $onReady$$4$$(this.$fonts_$);
};
// Input 21
function $webfont$modules$Monotype$$($domHelper$$11$$, $configuration$$9$$) {
  this.$domHelper_$ = $domHelper$$11$$;
  this.$configuration_$ = $configuration$$9$$;
  this.$fonts_$ = [];
}
$webfont$modules$Monotype$$.prototype.$supportUserAgent$ = function $$webfont$modules$Monotype$$$$$supportUserAgent$$($userAgent$$6$$, $support$$5$$) {
  var $self$$3$$ = this, $projectId$$2$$ = $self$$3$$.$configuration_$.projectId, $version$$16$$ = $self$$3$$.$configuration_$.version;
  if ($projectId$$2$$) {
    var $loadWindow$$2$$ = $self$$3$$.$domHelper_$.$loadWindow_$;
    $JSCompiler_StaticMethods_loadScript$$(this.$domHelper_$, $self$$3$$.$getScriptSrc$($projectId$$2$$, $version$$16$$), function($err$$2_mti_fnts$$inline_117$$) {
      if ($err$$2_mti_fnts$$inline_117$$) {
        $support$$5$$(!1);
      } else {
        if ($loadWindow$$2$$["__mti_fntLst" + $projectId$$2$$] && ($err$$2_mti_fnts$$inline_117$$ = $loadWindow$$2$$["__mti_fntLst" + $projectId$$2$$]())) {
          for (var $i$$inline_118$$ = 0;$i$$inline_118$$ < $err$$2_mti_fnts$$inline_117$$.length;$i$$inline_118$$++) {
            $self$$3$$.$fonts_$.push(new $webfont$Font$$($err$$2_mti_fnts$$inline_117$$[$i$$inline_118$$].fontfamily));
          }
        }
        $support$$5$$($userAgent$$6$$.$browserInfo_$.$webfontSupport_$);
      }
    }).id = "__MonotypeAPIScript__" + $projectId$$2$$;
  } else {
    $support$$5$$(!1);
  }
};
$webfont$modules$Monotype$$.prototype.$getScriptSrc$ = function $$webfont$modules$Monotype$$$$$getScriptSrc$$($projectId$$3$$, $version$$17$$) {
  var $p$$ = $JSCompiler_StaticMethods_getProtocol$$(this.$domHelper_$), $api$$2$$ = (this.$configuration_$.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
  return $p$$ + "//" + $api$$2$$ + "/" + $projectId$$3$$ + ".js" + ($version$$17$$ ? "?v=" + $version$$17$$ : "");
};
$webfont$modules$Monotype$$.prototype.load = function $$webfont$modules$Monotype$$$$load$($onReady$$5$$) {
  $onReady$$5$$(this.$fonts_$);
};
// Input 22
function $webfont$modules$Custom$$($domHelper$$12$$, $configuration$$10$$) {
  this.$domHelper_$ = $domHelper$$12$$;
  this.$configuration_$ = $configuration$$10$$;
}
$webfont$modules$Custom$$.prototype.load = function $$webfont$modules$Custom$$$$load$($onReady$$6$$) {
  var $i$$21$$, $len$$2$$, $fonts$$4_urls$$ = this.$configuration_$.urls || [], $familiesConfiguration$$ = this.$configuration_$.families || [], $fontTestStrings$$1$$ = this.$configuration_$.testStrings || {};
  $i$$21$$ = 0;
  for ($len$$2$$ = $fonts$$4_urls$$.length;$i$$21$$ < $len$$2$$;$i$$21$$++) {
    $JSCompiler_StaticMethods_loadStylesheet$$(this.$domHelper_$, $fonts$$4_urls$$[$i$$21$$]);
  }
  $fonts$$4_urls$$ = [];
  $i$$21$$ = 0;
  for ($len$$2$$ = $familiesConfiguration$$.length;$i$$21$$ < $len$$2$$;$i$$21$$++) {
    var $components$$ = $familiesConfiguration$$[$i$$21$$].split(":");
    if ($components$$[1]) {
      for (var $variations$$3$$ = $components$$[1].split(","), $j$$5$$ = 0;$j$$5$$ < $variations$$3$$.length;$j$$5$$ += 1) {
        $fonts$$4_urls$$.push(new $webfont$Font$$($components$$[0], $variations$$3$$[$j$$5$$]));
      }
    } else {
      $fonts$$4_urls$$.push(new $webfont$Font$$($components$$[0]));
    }
  }
  $onReady$$6$$($fonts$$4_urls$$, $fontTestStrings$$1$$);
};
$webfont$modules$Custom$$.prototype.$supportUserAgent$ = function $$webfont$modules$Custom$$$$$supportUserAgent$$($userAgent$$7$$, $support$$6$$) {
  return $support$$6$$($userAgent$$7$$.$browserInfo_$.$webfontSupport_$);
};
// Input 23
var $webFontLoader$$ = new $webfont$WebFont$$(this);
$webFontLoader$$.$fontModuleLoader_$.$modules_$.custom = function $$webFontLoader$$$$fontModuleLoader_$$$modules_$$custom$($configuration$$11$$, $domHelper$$13$$) {
  return new $webfont$modules$Custom$$($domHelper$$13$$, $configuration$$11$$);
};
$webFontLoader$$.$fontModuleLoader_$.$modules_$.fontdeck = function $$webFontLoader$$$$fontModuleLoader_$$$modules_$$fontdeck$($configuration$$12$$, $domHelper$$14$$) {
  return new $webfont$modules$Fontdeck$$($domHelper$$14$$, $configuration$$12$$);
};
$webFontLoader$$.$fontModuleLoader_$.$modules_$.monotype = function $$webFontLoader$$$$fontModuleLoader_$$$modules_$$monotype$($configuration$$13$$, $domHelper$$15$$) {
  return new $webfont$modules$Monotype$$($domHelper$$15$$, $configuration$$13$$);
};
$webFontLoader$$.$fontModuleLoader_$.$modules_$.typekit = function $$webFontLoader$$$$fontModuleLoader_$$$modules_$$typekit$($configuration$$14$$, $domHelper$$16$$) {
  return new $webfont$modules$Typekit$$($domHelper$$16$$, $configuration$$14$$);
};
$webFontLoader$$.$fontModuleLoader_$.$modules_$.google = function $$webFontLoader$$$$fontModuleLoader_$$$modules_$$google$($configuration$$15$$, $domHelper$$17$$) {
  return new $webfont$modules$google$GoogleFontApi$$($domHelper$$17$$, $configuration$$15$$);
};
this.WebFont || (this.WebFont = {}, this.WebFont.load = $goog$bind$$($webFontLoader$$.load, $webFontLoader$$), this.WebFontConfig && $webFontLoader$$.load(this.WebFontConfig));
})(this,document);

