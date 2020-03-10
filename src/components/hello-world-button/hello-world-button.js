import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button";

  render() {
    const btn = document.createElement("button");
    btn.innerHTML = "Hello World";
    const body = document.querySelector("body");
    btn.addEventListener("click", function() {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    });
    btn.classList.add(this.buttonCssClass);
    body.appendChild(btn);
  }
}

export default HelloWorldButton;
