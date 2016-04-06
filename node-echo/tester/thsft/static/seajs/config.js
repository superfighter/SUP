seajs.config({
	alias: {
		"jquery": 'lib/jquery/1.10.2/jquery',
		"underscore": 'lib/underscore/1.5.2/underscore',
		"Backbone": 'lib/backbone/1.2.1/backbone',
		"modernizr": 'lib/modernizr/2.8.3/modernizr',
		"handlebars": 'lib/handlebars/handlebars-v3.0.1',

		"WdatePicker": 'ui/My97DatePicker/WdatePicker',
		"ztree": 'ui/jquery.ztree/jquery.ztree.all-3.5.js',
		"echarts": 'ui/echarts/echarts-all.js',
		"echarts3": 'ui/echarts/echarts-all-3.0.0.js',
		'artDialog': 'ui/artDialog/dialog',
		'jquery.validate': 'ui/jquery.validate/jquery.validate',
		'jquery.ui.widget': 'ui/fileUpload/jquery_ui-widget',
		'jquery.frame.transport': 'ui/fileUpload/jquery_iframe-transport',
		'jquery.fileupload': 'ui/fileUpload/jquery_fileupload',
		'jquery.tinyscrollbar': 'ui/tinyscrollbar/jquery.tinyscrollbar',
		'jquery.tmpl': 'ui/jquery.tmpl/jquery.tmpl.min',
		'thsPage': 'ui/thsPage/thsPage',
		'md5': 'lib/md5/md5.min',
		'autoComplete': 'ui/autoComplete/autoComplete',

		'jquery.ui.slider': 'ui/slider/jquery-ui.slider.min',
		'jquery.autocomplete': 'ui/jquery.autocomplete/jquery.autocomplete',
		'jquery.timeago': 'ui/jquery.timeago/jquery.timeago',
		'owlCarousel': 'ui/owl.carousel/owl.carousel',
		'cropper': 'ui/cropper/cropper',
		'ifind.dialog': 'ui/ifind/src/ifind.dialog',
		'ifind.xcydialog': 'ui/ifind/src/ifind-xcydialog',
		'ifind.validate': 'ui/ifind/src/ifind.validate',
		'ifind.select': 'ui/ifind/src/ifind.select',
		'ifind.tab': 'ui/ifind/src/ifind.tab',
		'ifind.upload.preview': 'ui/ifind/src/ifind.upload.preview',
		'ifind.word.count': 'ui/ifind/src/ifind.word.count',
		'ifind.datatable': 'ui/ifind/src/ifind.datatable'

	},
	base: 'http://testft.10jqka.com.cn/thsft/static/',
	map:[
		[/^(.*\/thsft\/.*\.(?:css|js))(?:.*)$/i,'$1?v=201603281627']
	]
})