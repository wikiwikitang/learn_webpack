import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/heading/heading.js";
//import addImage from "./add-image";

const heading = new Heading();
heading.render();

const helloWorldBtn = new HelloWorldButton();
helloWorldBtn.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development Mode");
}

helloWorldBtn.methodThatDoesNotExist();
//addImage();
