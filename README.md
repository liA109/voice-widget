Voice Agent Widget – Vapi.ai
A simple floating voice widget built with React that allows users to interact with a Vapi.ai assistant.

Features:
- Floating 🎤 button to open/close the widget
- Start/Stop voice conversation with the assistant
- Displays error messages if the call fails
- Clean, lightweight, and easy to embed

Setup & Run
1. Clone the repository:
git clone https://github.com/liA109/voice-widget.git
cd voice-widget

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Open http://localhost:3000 in your browser

Configuration
Replace the following in App.jsx with your keys:
<VoiceAgentWidget
  vapiKey="YOUR_PUBLIC_VAPI_KEY"
  assistantId="YOUR_ASSISTANT_ID"
/>

Usage
- Click the 🎤 button to open the widget
- Click Start Conversation to talk to the assistant
- Click Stop Conversation to end the call
