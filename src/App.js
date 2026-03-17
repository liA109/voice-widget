// App.jsx
import React from "react";
import VoiceAgentWidget from "./VoiceAgentWidget";

function App() {
  return (
    <VoiceAgentWidget
      vapiKey="772a8343-db91-4b8f-ae13-35ca56fe3cca" 
      assistantId="f604a6d4-f971-446c-b8de-8fec5d02715b" 
    />
  );
}

export default App;