// VoiceAgentWidget.jsx
import React, { useState, useEffect } from "react";
import Vapi from "@vapi-ai/web";

const VoiceAgentWidget = ({ vapiKey, assistantId }) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [callStatus, setCallStatus] = useState("inactive");
  const [vapi, setVapi] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const instance = new Vapi(vapiKey);
    setVapi(instance);

    instance.on("call-start", () => setCallStatus("active"));
    instance.on("call-end", () => setCallStatus("inactive"));
    instance.on("error", (err) => setError(err.message || "Error occurred"));

    return () => {
      instance.stop();
    };
  }, [vapiKey]);

  const togglePanel = () => setPanelOpen(!panelOpen);

  const startCall = async () => {
    if (!vapi) return;
    setError("");
    setCallStatus("loading");
    try {
      await vapi.start(assistantId);
    } catch (err) {
      setError(err.message || "Failed to start call");
      setCallStatus("inactive");
    }
  };

  const stopCall = () => {
    if (!vapi) return;
    setCallStatus("loading");
    vapi.stop();
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
      <button
        onClick={togglePanel}
        style={{
          borderRadius: "50%",
          width: 60,
          height: 60,
          backgroundColor: "#4caf50",
          color: "#fff",
          fontSize: 24,
          border: "none",
          cursor: "pointer",
        }}
      >
        🎤
      </button>

      {panelOpen && (
        <div
          style={{
            width: 280,
            padding: 15,
            marginTop: 10,
            borderRadius: 10,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            fontFamily: "sans-serif",
          }}
        >
          {error && (
            <div style={{ color: "red", marginBottom: 10, fontSize: 12 }}>
              {error}
            </div>
          )}
          {callStatus === "inactive" && (
            <button
              onClick={startCall}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#4caf50",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              Start Conversation
            </button>
          )}
          {callStatus === "loading" && <div>Loading...</div>}
          {callStatus === "active" && (
            <button
              onClick={stopCall}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#f44336",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              Stop Conversation
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceAgentWidget;