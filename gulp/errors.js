import notify from "gulp-notify";

const onError = function (err) {
  notify({
    title: "Gulp Task Error",
    message: "Check the console."
  }).write(err);

  console.log(err.toString());

  this.emit("end");
};

export default onError;