function Uploader(){this.init()}Uploader.prototype={fileTypes:["image/jpeg","image/png"],fileTypeErrorMsg:"Incorrect File type. Only JPEG and PNG files",defaultText:"Select Image",maxSize:2097152,maxSizeMsg:"File too large. Max size 2MB",updateFileInfo:function(e){var i,t=e.value,l=t.match(/([^\/\\]+)$/);i=null==l?this.defaultText:l[1],$('label[for^="'+e.id+'"]').text(i);for(var r=$('form[id="uploader"] input'),o=!0,d=0;d<r.length;d++)""==r[d].value&&(o=!1);o?$("button.uploader").removeAttr("disabled"):$("button.uploader").attr("disabled","disabled")},fileCheck:function(e){if($('input[id="'+e.id+'"]')[0].files.length>0){$("#fileError").addClass("hide");var i=$('input[id="'+e.id+'"]')[0].files[0].size,t=$('input[id="'+e.id+'"]')[0].files[0].type;if(i>this.maxSize)return $('input[id="'+e.id+'"]')[0].type="text",$('input[id="'+e.id+'"]')[0].type="file",$("#fileError").html(this.maxSizeMsg),void $("#fileError").removeClass("hide");if(this.fileTypes.indexOf(t)>-1)return void $('div[id="fileError"]').addClass("hide");$('input[id="'+e.id+'"]')[0].type="text",$('input[id="'+e.id+'"]')[0].type="file",$("#fileError").html(this.fileTypeErrorMsg),$("#fileError").removeClass("hide")}},init:function(){var e=$("button#upload"),i=$("input.uploader"),t=$("form#uploader"),l=$("#fileError");0==e.length||0==i.length||0==t.length||0==l.length?console.log('Upload form must have an id of "uploader"\nFile input must have a class of "uploader"\nSubmit button must have and id of "upload"\nError message element must have an id of "fileError"'):($('button[id="upload"]').click(function(){}),$("input.uploader").change(function(){uploader.fileCheck(this),uploader.updateFileInfo(this)}))}};var uploader=new Uploader;
