(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2375af"],{fb85:function(e,s,l){"use strict";l.r(s);var a=l("2877"),r=Object(a.a)({name:"Table",data:function(){return{url:"http://192.168.0.126:8099/vueTest/upload.php",files:{},files2:[],tableData:[{date:"2016-05-03",name:"1张三",province:"广东",city:"天河区",address:"广东市天河区无名路8888号高大尚大厦",zip:200330,trClass:"trClass"},{date:"2016-05-02",name:"2张三",province:"广东",city:"天河区",address:"广东市天河区无名路8888号高大尚大厦",zip:200331}]}},components:{},methods:{upload:function(){this.$refs.uploadFiles.upload()},_success:function(){},_error:function(){}}},function(){var e=this,s=e.$createElement,l=e._self._c||s;return l("div",[l("div",[l("img",{attrs:{src:e.files.src,width:"100",height:"100",border:"1"}}),l("ak-upload",{attrs:{action:e.url,multiple:!0,maxSize:1024},on:{success:e._success,error:e._error},model:{value:e.files,callback:function(s){e.files=s},expression:"files"}},[e._v("自动上传\n    ")])],1),l("br"),l("div",[e._v("\n    "+e._s(e.files2)+"\n    "),l("ak-upload",{ref:"uploadFiles",attrs:{action:e.url,multiple:!0,maxSize:1024,drag:!0},on:{success:e._success,error:e._error},model:{value:e.files2,callback:function(s){e.files2=s},expression:"files2"}},[e._v("选择文件\n    ")]),l("ak-button",{on:{click:e.upload}},[e._v("上传")])],1)])},[],!1,null,null,null);s.default=r.exports}}]);