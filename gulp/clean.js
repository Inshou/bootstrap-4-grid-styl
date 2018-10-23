import paths from "./paths";
import del from "del";

function clean() {
  return del(paths.root);
}

export default clean;