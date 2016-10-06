import { Component } from '@angular/core';
import { ImagePicker } from 'ionic-native';
//import * as $ from "jquery";
import { Transfer } from 'ionic-native';


@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    imagepath:any;


  constructor() {
    this.imagepath=false;

  }


  openphotobowse(){

    //$('.status-input').removeClass('hide');
    //$('.browsephoto').removeClass('hide');

    let options = {
      // max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 80,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 1024,
      height: 0,

      // quality of resized image, defaults to 100
      quality: 90
    };
    //noinspection TypeScriptUnresolvedFunction
    ImagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        alert('Image URI: ' + results[i]);
        //$('.photopreview').attr('src',results[i]);
        this.imagepath=results[i];
        //alert('Image URI: ' + this.imagepath);
      }
    }, (err) => { });
  }


    upload(){
        const fileTransfer = new Transfer();
        var options: any;

        options = {
            fileKey: 'file',
            //fileName: this.imagepath.toString().replace('file:///data/data/com.ionicframework.demo866280/cache/',''),
            fileName: this.imagepath.toString().replace('file:///data/data/com.ionicframework.demo866280/cache/',''),
            headers: {}

    }
        //fileTransfer.upload(this.imagepath, "http://torqkd.com/user/ajs2/testfileupload", options)
        fileTransfer.upload(this.imagepath, "http://166.62.34.31:2/uploads", options)
            .then((data) => {
                // success

                alert(data);
                var i:any;
                for(i in data){
                    alert(i+'=='+data[i]);
                }
            }, (err) => {
                // error

                alert('error');
                alert(err);
                var i:any;
                for(i in err){
                    alert(i+'=='+err[i]);
                }
                // error

            })
    }

}
