import React from "react";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import AtomsCheatSheet from "./atoms/AtomsCheatSheet"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fab, faAngleDown)



function App() {
  return (
    <div className="App">
      <AtomsCheatSheet />
    </div>
  );
}

export default App;
