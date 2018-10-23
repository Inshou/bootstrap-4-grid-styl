import gulp from "gulp";
import styles from "./gulp/styles";
import watch from "./gulp/watch";
import clean from "./gulp/clean";

gulp.task(styles);
gulp.task(clean);

gulp.task("build", gulp.series(
  clean,
  styles
));

gulp.task("default", gulp.series(
  "build",
  watch
));
