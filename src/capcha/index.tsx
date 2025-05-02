import "./index.css";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    const [checkState, check] = useState(0);
    const [vid, setVid] = useState<NodeJS.Timeout>();

    return <div className="capcha">
        <div className={"checkbox checkbox"+checkState} onClick={()=>{
            if(checkState === 0){
                check(1);
                if(!vid) setVid(setTimeout(()=>{
                    check(2);
                    parent.postMessage("verified", "*");
                }, Math.random() * 1000 + 500));
            }
        }}>
            <div className="grgr"></div>
            <div className="grgr grgr2"></div>
        </div>
        { checkState == 0 ? "人間ですか？" :
          checkState == 1 ? "読込中..." :
          "完了しました" }
    </div>
}

const main = () => 
    createRoot(document.body).render(<App/>);

document.readyState === "loading" ?
    addEventListener("DOMContentLoaded", main) :
    main();
