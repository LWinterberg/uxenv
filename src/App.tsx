import "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";
import MenuBar from "./ui/MenuBar";
import { bapp } from "./App.css";
import Stack from "./ui/Stack";
import useShuffler from "./lib/useShuffler";

const menuData = parseData(data.split("\n"));

function App() {
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
          <MenuBar items={menuData} />
        </Stack.Layer>
        <Stack.Layer>
          <img src={img} />
        </Stack.Layer>
      </Stack>
    </div>
  );
}

export default App;
