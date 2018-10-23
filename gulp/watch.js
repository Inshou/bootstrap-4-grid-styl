import paths from "./paths";
import gulp from "gulp";
import styles from "./styles";

function watch() {
  gulp.watch(paths.styles.src, styles);
}

export default watch;
