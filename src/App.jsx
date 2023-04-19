import { useState } from "react";
import ReactMarkdown from "react-markdown";

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '' && lastLine == '') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://mhmd-k.github.io/portfolio/), and
> Block Quotes!
`;

export default function App() {
  const [text, setText] = useState(defaultText);

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="row">
      <div className="col">
        <h2>Editor</h2>
        <textarea id="editor" value={text} onChange={handleChange}></textarea>
      </div>
      <div className="col">
        <h2>Previewer</h2>
        <div id="preview">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
