import React from "react";
import {render} from "react-dom";

// ./ assumes that it's a local path, to refer to own modules need ./
import App from "./app.jsx";

render(<App/>, document.getElementById("app"));
