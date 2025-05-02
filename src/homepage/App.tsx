import { createCAPCHAElement } from "@/client";
import { useEffect, useRef, useState } from "react";

export function App() {
  const capchaEl = useRef<HTMLDivElement|null>(null);
  const [isHuman, setHuman] = useState(false);
  useEffect(()=>{
    if(!capchaEl.current?.children.length){
      capchaEl.current?.append(createCAPCHAElement({
        onverify: () => setHuman(true),
        path: "http://localhost:3002"
      }))
    }
  }, [capchaEl]);
  return (
    <div className="app">
      <h1>CAPCHA - 次世代のCAPTCHA</h1>
      <p>CAPCHAとは、Click And Please Click Hybrid Applicationの略で、新しいボット防止プログラムです。</p>
      <div ref={capchaEl} id="capcha"></div>
      {isHuman && <span>完了しました！</span>}
    </div>
  );
}

export default App;
