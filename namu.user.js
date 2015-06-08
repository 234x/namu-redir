// ==UserScript==
// 오리지널		https://chrome.google.com/webstore/detail/나무위키로-바꾸자/iagngamkdbdngiohhjaphmmjbjblfbnp
// @name		나무위키로 바꾸자
// @version		1.0.3
// @date		2015.06.09
// @author		제작 : 박윤지
// @author		수정 : 未央
// @description		미러나 리그베다 위키를 열면 자동으로 나무위키 미러나 나무위키로 넘겨줍니다.
// @include		*://mir.pe/wiki/*
// @include		http://rigvedawiki.net/r1/wiki.php/*
// ==/UserScript==

function main() {
	var _target, _prefix, _docname = location.pathname;
	if(location.host.match(/rigvedawiki\.net$/) !== null) {
		_target = 'namu.wiki';
		_docname = _docname.replace(/^\/r1\/wiki\.php/, '');
		_prefix = '/w';
	}
	else {
		_target = 'namu.mirror.wiki';
		_docname = _docname.replace(/^\/wiki/, '');
		switch(location.host) {
			case 'mir.pe':
				_prefix = '/wiki';
				break;
			case 'dark.mir.pe':
				_prefix = '/dark';
				break;
			case 'raw.mir.pe':
				_prefix = '/raw';
				break;
			case 'm.mir.pe':
				_prefix = '/m';
				break;
			case 'd.mir.pe':
				_prefix = '/d';
				break;
			default:
				return;
		}
	}
	location.replace(location.protocol + '//' + _target + _prefix + _docname + (location.search?'?' + location.search:''));
	return;
}

main();