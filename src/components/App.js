import React from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faAngleDown, faHashtag, faVolumeUp, faLock} from '@fortawesome/free-solid-svg-icons'
import AtomsCheatSheet from "./atoms/AtomsCheatSheet"


library.add(fab, faAngleDown,faHashtag, faVolumeUp, faLock)



function App() {
  return (
    <div className="App">      
      <AtomsCheatSheet />
    </div>
  );
}

export default App;
