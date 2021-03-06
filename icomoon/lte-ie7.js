/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icm-home' : '&#xe000;',
			'icm-home-2' : '&#xe001;',
			'icm-home-3' : '&#xe002;',
			'icm-office' : '&#xe003;',
			'icm-newspaper' : '&#xe004;',
			'icm-pencil' : '&#xe005;',
			'icm-pencil-2' : '&#xe006;',
			'icm-quill' : '&#xe007;',
			'icm-pen' : '&#xe008;',
			'icm-blog' : '&#xe009;',
			'icm-droplet' : '&#xe00a;',
			'icm-paint-format' : '&#xe00b;',
			'icm-image' : '&#xe00c;',
			'icm-image-2' : '&#xe00d;',
			'icm-images' : '&#xe00e;',
			'icm-camera' : '&#xe00f;',
			'icm-music' : '&#xe010;',
			'icm-headphones' : '&#xe011;',
			'icm-play' : '&#xe012;',
			'icm-film' : '&#xe013;',
			'icm-camera-2' : '&#xe014;',
			'icm-dice' : '&#xe015;',
			'icm-pacman' : '&#xe016;',
			'icm-spades' : '&#xe017;',
			'icm-clubs' : '&#xe018;',
			'icm-diamonds' : '&#xe019;',
			'icm-pawn' : '&#xe01a;',
			'icm-bullhorn' : '&#xe01b;',
			'icm-connection' : '&#xe01c;',
			'icm-podcast' : '&#xe01d;',
			'icm-feed' : '&#xe01e;',
			'icm-book' : '&#xe01f;',
			'icm-books' : '&#xe020;',
			'icm-library' : '&#xe021;',
			'icm-file' : '&#xe022;',
			'icm-profile' : '&#xe023;',
			'icm-file-2' : '&#xe024;',
			'icm-file-3' : '&#xe025;',
			'icm-file-4' : '&#xe026;',
			'icm-copy' : '&#xe027;',
			'icm-copy-2' : '&#xe028;',
			'icm-copy-3' : '&#xe029;',
			'icm-paste' : '&#xe02a;',
			'icm-paste-2' : '&#xe02b;',
			'icm-paste-3' : '&#xe02c;',
			'icm-stack' : '&#xe02d;',
			'icm-folder' : '&#xe02e;',
			'icm-folder-open' : '&#xe02f;',
			'icm-tag' : '&#xe030;',
			'icm-tags' : '&#xe031;',
			'icm-barcode' : '&#xe032;',
			'icm-qrcode' : '&#xe033;',
			'icm-ticket' : '&#xe034;',
			'icm-cart' : '&#xe035;',
			'icm-cart-2' : '&#xe036;',
			'icm-cart-3' : '&#xe037;',
			'icm-coin' : '&#xe038;',
			'icm-credit' : '&#xe039;',
			'icm-calculate' : '&#xe03a;',
			'icm-support' : '&#xe03b;',
			'icm-phone' : '&#xe03c;',
			'icm-phone-hang-up' : '&#xe03d;',
			'icm-address-book' : '&#xe03e;',
			'icm-notebook' : '&#xe03f;',
			'icm-envelop' : '&#xe040;',
			'icm-pushpin' : '&#xe041;',
			'icm-location' : '&#xe042;',
			'icm-location-2' : '&#xe043;',
			'icm-compass' : '&#xe044;',
			'icm-map' : '&#xe045;',
			'icm-map-2' : '&#xe046;',
			'icm-history' : '&#xe047;',
			'icm-clock' : '&#xe048;',
			'icm-clock-2' : '&#xe049;',
			'icm-alarm' : '&#xe04a;',
			'icm-alarm-2' : '&#xe04b;',
			'icm-bell' : '&#xe04c;',
			'icm-stopwatch' : '&#xe04d;',
			'icm-calendar' : '&#xe04e;',
			'icm-calendar-2' : '&#xe04f;',
			'icm-print' : '&#xe050;',
			'icm-keyboard' : '&#xe051;',
			'icm-screen' : '&#xe052;',
			'icm-laptop' : '&#xe053;',
			'icm-mobile' : '&#xe054;',
			'icm-mobile-2' : '&#xe055;',
			'icm-tablet' : '&#xe056;',
			'icm-tv' : '&#xe057;',
			'icm-cabinet' : '&#xe058;',
			'icm-drawer' : '&#xe059;',
			'icm-drawer-2' : '&#xe05a;',
			'icm-drawer-3' : '&#xe05b;',
			'icm-box-add' : '&#xe05c;',
			'icm-box-remove' : '&#xe05d;',
			'icm-download' : '&#xe05e;',
			'icm-upload' : '&#xe05f;',
			'icm-disk' : '&#xe060;',
			'icm-storage' : '&#xe061;',
			'icm-undo' : '&#xe062;',
			'icm-redo' : '&#xe063;',
			'icm-flip' : '&#xe064;',
			'icm-flip-2' : '&#xe065;',
			'icm-undo-2' : '&#xe066;',
			'icm-redo-2' : '&#xe067;',
			'icm-forward' : '&#xe068;',
			'icm-reply' : '&#xe069;',
			'icm-bubble' : '&#xe06a;',
			'icm-bubbles' : '&#xe06b;',
			'icm-bubbles-2' : '&#xe06c;',
			'icm-bubble-2' : '&#xe06d;',
			'icm-bubbles-3' : '&#xe06e;',
			'icm-bubbles-4' : '&#xe06f;',
			'icm-user' : '&#xe070;',
			'icm-users' : '&#xe071;',
			'icm-user-2' : '&#xe072;',
			'icm-users-2' : '&#xe073;',
			'icm-user-3' : '&#xe074;',
			'icm-user-4' : '&#xe075;',
			'icm-quotes-left' : '&#xe076;',
			'icm-busy' : '&#xe077;',
			'icm-spinner' : '&#xe078;',
			'icm-spinner-2' : '&#xe079;',
			'icm-spinner-3' : '&#xe07a;',
			'icm-spinner-4' : '&#xe07b;',
			'icm-spinner-5' : '&#xe07c;',
			'icm-spinner-6' : '&#xe07d;',
			'icm-binoculars' : '&#xe07e;',
			'icm-search' : '&#xe07f;',
			'icm-zoom-in' : '&#xe080;',
			'icm-zoom-out' : '&#xe081;',
			'icm-expand' : '&#xe082;',
			'icm-contract' : '&#xe083;',
			'icm-expand-2' : '&#xe084;',
			'icm-contract-2' : '&#xe085;',
			'icm-key' : '&#xe086;',
			'icm-key-2' : '&#xe087;',
			'icm-lock' : '&#xe088;',
			'icm-lock-2' : '&#xe089;',
			'icm-unlocked' : '&#xe08a;',
			'icm-wrench' : '&#xe08b;',
			'icm-settings' : '&#xe08c;',
			'icm-equalizer' : '&#xe08d;',
			'icm-cog' : '&#xe08e;',
			'icm-cogs' : '&#xe08f;',
			'icm-cog-2' : '&#xe090;',
			'icm-hammer' : '&#xe091;',
			'icm-wand' : '&#xe092;',
			'icm-aid' : '&#xe093;',
			'icm-bug' : '&#xe094;',
			'icm-pie' : '&#xe095;',
			'icm-stats' : '&#xe096;',
			'icm-bars' : '&#xe097;',
			'icm-bars-2' : '&#xe098;',
			'icm-gift' : '&#xe099;',
			'icm-trophy' : '&#xe09a;',
			'icm-glass' : '&#xe09b;',
			'icm-mug' : '&#xe09c;',
			'icm-food' : '&#xe09d;',
			'icm-leaf' : '&#xe09e;',
			'icm-rocket' : '&#xe09f;',
			'icm-meter' : '&#xe0a0;',
			'icm-meter2' : '&#xe0a1;',
			'icm-dashboard' : '&#xe0a2;',
			'icm-hammer-2' : '&#xe0a3;',
			'icm-fire' : '&#xe0a4;',
			'icm-lab' : '&#xe0a5;',
			'icm-magnet' : '&#xe0a6;',
			'icm-remove' : '&#xe0a7;',
			'icm-remove-2' : '&#xe0a8;',
			'icm-briefcase' : '&#xe0a9;',
			'icm-airplane' : '&#xe0aa;',
			'icm-truck' : '&#xe0ab;',
			'icm-road' : '&#xe0ac;',
			'icm-accessibility' : '&#xe0ad;',
			'icm-target' : '&#xe0ae;',
			'icm-shield' : '&#xe0af;',
			'icm-lightning' : '&#xe0b0;',
			'icm-switch' : '&#xe0b1;',
			'icm-power-cord' : '&#xe0b2;',
			'icm-signup' : '&#xe0b3;',
			'icm-list' : '&#xe0b4;',
			'icm-list-2' : '&#xe0b5;',
			'icm-numbered-list' : '&#xe0b6;',
			'icm-menu' : '&#xe0b7;',
			'icm-menu-2' : '&#xe0b8;',
			'icm-tree' : '&#xe0b9;',
			'icm-cloud' : '&#xe0ba;',
			'icm-cloud-download' : '&#xe0bb;',
			'icm-cloud-upload' : '&#xe0bc;',
			'icm-download-2' : '&#xe0bd;',
			'icm-upload-2' : '&#xe0be;',
			'icm-download-3' : '&#xe0bf;',
			'icm-upload-3' : '&#xe0c0;',
			'icm-globe' : '&#xe0c1;',
			'icm-earth' : '&#xe0c2;',
			'icm-link' : '&#xe0c3;',
			'icm-flag' : '&#xe0c4;',
			'icm-attachment' : '&#xe0c5;',
			'icm-eye' : '&#xe0c6;',
			'icm-eye-blocked' : '&#xe0c7;',
			'icm-eye-2' : '&#xe0c8;',
			'icm-bookmark' : '&#xe0c9;',
			'icm-bookmarks' : '&#xe0ca;',
			'icm-brightness-medium' : '&#xe0cb;',
			'icm-brightness-contrast' : '&#xe0cc;',
			'icm-contrast' : '&#xe0cd;',
			'icm-star' : '&#xe0ce;',
			'icm-star-2' : '&#xe0cf;',
			'icm-star-3' : '&#xe0d0;',
			'icm-heart' : '&#xe0d1;',
			'icm-heart-2' : '&#xe0d2;',
			'icm-heart-broken' : '&#xe0d3;',
			'icm-thumbs-up' : '&#xe0d4;',
			'icm-thumbs-up-2' : '&#xe0d5;',
			'icm-happy' : '&#xe0d6;',
			'icm-happy-2' : '&#xe0d7;',
			'icm-smiley' : '&#xe0d8;',
			'icm-smiley-2' : '&#xe0d9;',
			'icm-tongue' : '&#xe0da;',
			'icm-tongue-2' : '&#xe0db;',
			'icm-sad' : '&#xe0dc;',
			'icm-sad-2' : '&#xe0dd;',
			'icm-wink' : '&#xe0de;',
			'icm-wink-2' : '&#xe0df;',
			'icm-grin' : '&#xe0e0;',
			'icm-grin-2' : '&#xe0e1;',
			'icm-cool' : '&#xe0e2;',
			'icm-cool-2' : '&#xe0e3;',
			'icm-angry' : '&#xe0e4;',
			'icm-angry-2' : '&#xe0e5;',
			'icm-evil' : '&#xe0e6;',
			'icm-evil-2' : '&#xe0e7;',
			'icm-shocked' : '&#xe0e8;',
			'icm-shocked-2' : '&#xe0e9;',
			'icm-confused' : '&#xe0ea;',
			'icm-confused-2' : '&#xe0eb;',
			'icm-neutral' : '&#xe0ec;',
			'icm-neutral-2' : '&#xe0ed;',
			'icm-wondering' : '&#xe0ee;',
			'icm-wondering-2' : '&#xe0ef;',
			'icm-point-up' : '&#xe0f0;',
			'icm-point-right' : '&#xe0f1;',
			'icm-point-down' : '&#xe0f2;',
			'icm-point-left' : '&#xe0f3;',
			'icm-warning' : '&#xe0f4;',
			'icm-notification' : '&#xe0f5;',
			'icm-question' : '&#xe0f6;',
			'icm-info' : '&#xe0f7;',
			'icm-info-2' : '&#xe0f8;',
			'icm-blocked' : '&#xe0f9;',
			'icm-cancel-circle' : '&#xe0fa;',
			'icm-checkmark-circle' : '&#xe0fb;',
			'icm-spam' : '&#xe0fc;',
			'icm-close' : '&#xe0fd;',
			'icm-checkmark' : '&#xe0fe;',
			'icm-checkmark-2' : '&#xe0ff;',
			'icm-spell-check' : '&#xe100;',
			'icm-minus' : '&#xe101;',
			'icm-plus' : '&#xe102;',
			'icm-enter' : '&#xe103;',
			'icm-exit' : '&#xe104;',
			'icm-play-2' : '&#xe105;',
			'icm-pause' : '&#xe106;',
			'icm-stop' : '&#xe107;',
			'icm-backward' : '&#xe108;',
			'icm-forward-2' : '&#xe109;',
			'icm-play-3' : '&#xe10a;',
			'icm-pause-2' : '&#xe10b;',
			'icm-stop-2' : '&#xe10c;',
			'icm-backward-2' : '&#xe10d;',
			'icm-forward-3' : '&#xe10e;',
			'icm-first' : '&#xe10f;',
			'icm-last' : '&#xe110;',
			'icm-previous' : '&#xe111;',
			'icm-next' : '&#xe112;',
			'icm-eject' : '&#xe113;',
			'icm-volume-high' : '&#xe114;',
			'icm-volume-medium' : '&#xe115;',
			'icm-volume-low' : '&#xe116;',
			'icm-volume-mute' : '&#xe117;',
			'icm-volume-mute-2' : '&#xe118;',
			'icm-volume-increase' : '&#xe119;',
			'icm-volume-decrease' : '&#xe11a;',
			'icm-loop' : '&#xe11b;',
			'icm-loop-2' : '&#xe11c;',
			'icm-loop-3' : '&#xe11d;',
			'icm-shuffle' : '&#xe11e;',
			'icm-arrow-up-left' : '&#xe11f;',
			'icm-arrow-up' : '&#xe120;',
			'icm-arrow-up-right' : '&#xe121;',
			'icm-arrow-right' : '&#xe122;',
			'icm-arrow-down-right' : '&#xe123;',
			'icm-arrow-down' : '&#xe124;',
			'icm-arrow-down-left' : '&#xe125;',
			'icm-arrow-left' : '&#xe126;',
			'icm-arrow-up-left-2' : '&#xe127;',
			'icm-arrow-up-2' : '&#xe128;',
			'icm-arrow-up-right-2' : '&#xe129;',
			'icm-arrow-right-2' : '&#xe12a;',
			'icm-arrow-down-right-2' : '&#xe12b;',
			'icm-arrow-down-2' : '&#xe12c;',
			'icm-arrow-down-left-2' : '&#xe12d;',
			'icm-arrow-left-2' : '&#xe12e;',
			'icm-arrow-up-left-3' : '&#xe12f;',
			'icm-arrow-up-3' : '&#xe130;',
			'icm-arrow-up-right-3' : '&#xe131;',
			'icm-arrow-right-3' : '&#xe132;',
			'icm-arrow-down-right-3' : '&#xe133;',
			'icm-arrow-down-3' : '&#xe134;',
			'icm-arrow-down-left-3' : '&#xe135;',
			'icm-arrow-left-3' : '&#xe136;',
			'icm-tab' : '&#xe137;',
			'icm-checkbox-checked' : '&#xe138;',
			'icm-checkbox-unchecked' : '&#xe139;',
			'icm-checkbox-partial' : '&#xe13a;',
			'icm-radio-checked' : '&#xe13b;',
			'icm-radio-unchecked' : '&#xe13c;',
			'icm-crop' : '&#xe13d;',
			'icm-scissors' : '&#xe13e;',
			'icm-filter' : '&#xe13f;',
			'icm-filter-2' : '&#xe140;',
			'icm-font' : '&#xe141;',
			'icm-text-height' : '&#xe142;',
			'icm-text-width' : '&#xe143;',
			'icm-bold' : '&#xe144;',
			'icm-underline' : '&#xe145;',
			'icm-italic' : '&#xe146;',
			'icm-strikethrough' : '&#xe147;',
			'icm-omega' : '&#xe148;',
			'icm-sigma' : '&#xe149;',
			'icm-table' : '&#xe14a;',
			'icm-table-2' : '&#xe14b;',
			'icm-insert-template' : '&#xe14c;',
			'icm-pilcrow' : '&#xe14d;',
			'icm-left-to-right' : '&#xe14e;',
			'icm-right-to-left' : '&#xe14f;',
			'icm-paragraph-left' : '&#xe150;',
			'icm-paragraph-center' : '&#xe151;',
			'icm-paragraph-right' : '&#xe152;',
			'icm-paragraph-justify' : '&#xe153;',
			'icm-paragraph-left-2' : '&#xe154;',
			'icm-paragraph-center-2' : '&#xe155;',
			'icm-paragraph-right-2' : '&#xe156;',
			'icm-paragraph-justify-2' : '&#xe157;',
			'icm-indent-increase' : '&#xe158;',
			'icm-indent-decrease' : '&#xe159;',
			'icm-new-tab' : '&#xe15a;',
			'icm-embed' : '&#xe15b;',
			'icm-code' : '&#xe15c;',
			'icm-console' : '&#xe15d;',
			'icm-share' : '&#xe15e;',
			'icm-mail' : '&#xe15f;',
			'icm-mail-2' : '&#xe160;',
			'icm-mail-3' : '&#xe161;',
			'icm-mail-4' : '&#xe162;',
			'icm-google' : '&#xe163;',
			'icm-google-plus' : '&#xe164;',
			'icm-google-plus-2' : '&#xe165;',
			'icm-google-plus-3' : '&#xe166;',
			'icm-google-plus-4' : '&#xe167;',
			'icm-google-drive' : '&#xe168;',
			'icm-facebook' : '&#xe169;',
			'icm-facebook-2' : '&#xe16a;',
			'icm-facebook-3' : '&#xe16b;',
			'icm-instagram' : '&#xe16c;',
			'icm-twitter' : '&#xe16d;',
			'icm-twitter-2' : '&#xe16e;',
			'icm-twitter-3' : '&#xe16f;',
			'icm-feed-2' : '&#xe170;',
			'icm-feed-3' : '&#xe171;',
			'icm-feed-4' : '&#xe172;',
			'icm-youtube' : '&#xe173;',
			'icm-youtube-2' : '&#xe174;',
			'icm-vimeo' : '&#xe175;',
			'icm-vimeo2' : '&#xe176;',
			'icm-vimeo-2' : '&#xe177;',
			'icm-lanyrd' : '&#xe178;',
			'icm-flickr' : '&#xe179;',
			'icm-flickr-2' : '&#xe17a;',
			'icm-flickr-3' : '&#xe17b;',
			'icm-flickr-4' : '&#xe17c;',
			'icm-picassa' : '&#xe17d;',
			'icm-picassa-2' : '&#xe17e;',
			'icm-dribbble' : '&#xe17f;',
			'icm-dribbble-2' : '&#xe180;',
			'icm-dribbble-3' : '&#xe181;',
			'icm-forrst' : '&#xe182;',
			'icm-forrst-2' : '&#xe183;',
			'icm-deviantart' : '&#xe184;',
			'icm-deviantart-2' : '&#xe185;',
			'icm-steam' : '&#xe186;',
			'icm-steam-2' : '&#xe187;',
			'icm-github' : '&#xe188;',
			'icm-github-2' : '&#xe189;',
			'icm-github-3' : '&#xe18a;',
			'icm-github-4' : '&#xe18b;',
			'icm-github-5' : '&#xe18c;',
			'icm-wordpress' : '&#xe18d;',
			'icm-wordpress-2' : '&#xe18e;',
			'icm-joomla' : '&#xe18f;',
			'icm-blogger' : '&#xe190;',
			'icm-blogger-2' : '&#xe191;',
			'icm-tumblr' : '&#xe192;',
			'icm-tumblr-2' : '&#xe193;',
			'icm-yahoo' : '&#xe194;',
			'icm-tux' : '&#xe195;',
			'icm-apple' : '&#xe196;',
			'icm-finder' : '&#xe197;',
			'icm-android' : '&#xe198;',
			'icm-windows' : '&#xe199;',
			'icm-windows8' : '&#xe19a;',
			'icm-soundcloud' : '&#xe19b;',
			'icm-soundcloud-2' : '&#xe19c;',
			'icm-skype' : '&#xe19d;',
			'icm-reddit' : '&#xe19e;',
			'icm-linkedin' : '&#xe19f;',
			'icm-lastfm' : '&#xe1a0;',
			'icm-lastfm-2' : '&#xe1a1;',
			'icm-delicious' : '&#xe1a2;',
			'icm-stumbleupon' : '&#xe1a3;',
			'icm-stumbleupon-2' : '&#xe1a4;',
			'icm-stackoverflow' : '&#xe1a5;',
			'icm-pinterest' : '&#xe1a6;',
			'icm-pinterest-2' : '&#xe1a7;',
			'icm-xing' : '&#xe1a8;',
			'icm-xing-2' : '&#xe1a9;',
			'icm-flattr' : '&#xe1aa;',
			'icm-foursquare' : '&#xe1ab;',
			'icm-foursquare-2' : '&#xe1ac;',
			'icm-paypal' : '&#xe1ad;',
			'icm-paypal-2' : '&#xe1ae;',
			'icm-paypal-3' : '&#xe1af;',
			'icm-yelp' : '&#xe1b0;',
			'icm-libreoffice' : '&#xe1b1;',
			'icm-file-pdf' : '&#xe1b2;',
			'icm-file-openoffice' : '&#xe1b3;',
			'icm-file-word' : '&#xe1b4;',
			'icm-file-excel' : '&#xe1b5;',
			'icm-file-zip' : '&#xe1b6;',
			'icm-file-powerpoint' : '&#xe1b7;',
			'icm-file-xml' : '&#xe1b8;',
			'icm-file-css' : '&#xe1b9;',
			'icm-html5' : '&#xe1ba;',
			'icm-html5-2' : '&#xe1bb;',
			'icm-css3' : '&#xe1bc;',
			'icm-chrome' : '&#xe1bd;',
			'icm-firefox' : '&#xe1be;',
			'icm-IE' : '&#xe1bf;',
			'icm-opera' : '&#xe1c0;',
			'icm-safari' : '&#xe1c1;',
			'icm-IcoMoon' : '&#xe1c2;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icm-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};