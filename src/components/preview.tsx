import { useEffect, useRef } from "react";
import "./preview.css";

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head></head>
  <body>
    <div id="root"></div>
  </body>

  <script>
    window.addEventListener('message', (event) => {
      try{
        eval(event.data)
      }catch(err){
        const root = document.getElementById('root')
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>'
        console.error(err)
      }
    }, false);
  </script>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframeRef = useRef<any>();

  useEffect(() => {
    iframeRef.current.srcdoc = html;
    iframeRef.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframeRef}
        title="preview"
      />
    </div>
  );
};

export default Preview;
