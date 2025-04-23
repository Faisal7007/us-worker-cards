"use client"

export default function ChatbotEmbed() {
  return (
    <iframe
      src="https://<your-username>.streamlit.app/?embed=true"
      className="w-full h-[600px] border-none"
      allowFullScreen
      loading="lazy"
    />
  );
}
