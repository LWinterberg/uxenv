import { ChangeEvent, useRef, useState } from "react";
import "./App.css";
import { bapp } from "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";
import useShuffler from "./lib/useShuffler";
import MenuBar from "./ui/MenuBar";
import SearchInput from "./ui/SearchInput";
import Stack from "./ui/Stack";

const menuData = parseData(data.split("\n"));

function App() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const searchInputRef = useRef(null);

  const [img, step] = useShuffler([
    "app-empty.png",
    "app-singletrack.png",
    "app-multitrack.png",
  ]);

  return (
    <div className={bapp}>
      <div className="buttons">
        <button onClick={() => step(-1)}>prev</button>
        <button onClick={() => step(1)}>next</button>
      </div>
      <Stack>
        <Stack.Layer y={28}>
          <MenuBar items={menuData} searchTerm={searchTerm}>
            <SearchInput
              ref={searchInputRef}
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            ></SearchInput>
          </MenuBar>
        </Stack.Layer>
        <Stack.Layer>
          <img src={img} />
        </Stack.Layer>
      </Stack>
    </div>
  );
}

export default App;
