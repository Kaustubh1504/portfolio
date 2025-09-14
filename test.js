fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer <OPENROUTER_API_KEY>",
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
    "X-Title": "<YOUR_SITE_NAME>",     // Optional
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "z-ai/glm-4.5-air:free",
    messages: [
      {
        role: "user",
        content: "What is the meaning of life?"
      }
    ]
  })
})
  .then((res) => {
    if (!res.ok) throw new Error("HTTP error " + res.status);
    return res.json();
  })
  .then((data) => {
    console.log("Response:", data);
    console.log("AI Says:", data.choices[0].message.content);
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
