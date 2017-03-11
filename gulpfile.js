/**
 * Created by asus on 2017/3/10.
 */
var gulp=require("gulp"),
    sass=require("gulp-sass"),
    webserver=require("gulp-webserver");
gulp.task("sass",function(){
    gulp.src("css/*.css")
        .pipe(sass())
})
gulp.task("webserver",["start"],function(){
    gulp.src("./")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }))
})
gulp.task("start",function(){
    gulp.watch("css/*.css",["sass"])
    gulp.watch("index.html")
})