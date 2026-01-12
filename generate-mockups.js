const fs = require("fs");
const path = require("path");

const API_KEY = process.env.GEMINI_API_KEY;

const prompts = [
  {
    name: "1-brutalist",
    prompt: `Generate an image: UI/UX website mockup for a Self-care guide homepage with brutalist web design aesthetic. Black and white color scheme with bold red accent color. Monospace typography, visible grid lines, harsh borders, zero rounded corners. Navigation bar at top, large hero text "Start Here", vertical list of content cards with hard edges. Anti-corporate, raw, honest aesthetic. Desktop browser view, 1920x1080, photorealistic UI mockup.`
  },
  {
    name: "2-editorial",
    prompt: `Generate an image: UI/UX website mockup for a Self-care guide homepage with editorial magazine design aesthetic. Off-white cream background, charcoal text, elegant large serif headlines. Asymmetric grid layout, oversized typography, pull quotes, sophisticated print-inspired design. Like Bloomberg Businessweek magazine website. Navigation bar, hero section with bold headline, content cards. Desktop browser view, 1920x1080, photorealistic UI mockup.`
  },
  {
    name: "3-japanese-minimal",
    prompt: `Generate an image: UI/UX website mockup for a Self-care guide homepage with Japanese minimalist design aesthetic. Almost pure white background, maximum whitespace, zen aesthetic, intentional emptiness. Clean sans-serif typography, sparse layout, extreme breathing room. Muji-inspired, ryokan aesthetic. Minimal navigation, centered content, very few elements. Desktop browser view, 1920x1080, photorealistic UI mockup.`
  },
  {
    name: "4-retro-70s",
    prompt: `Generate an image: UI/UX website mockup for a Self-care guide homepage with 1970s retro wellness aesthetic. Warm color palette: mustard yellow, terracotta orange, olive green, cream. Rounded serif typography Cooper Black style, organic flowing shapes, groovy vibes. Vintage self-help book aesthetic, hand-drawn illustration elements. Desktop browser view, 1920x1080, photorealistic UI mockup.`
  },
  {
    name: "5-dark-luxe",
    prompt: `Generate an image: UI/UX website mockup for a Self-care guide homepage with dark luxury spa aesthetic. Deep charcoal black background, warm gold accent color, cream off-white text. Thin elegant serif typography, generous letter spacing. Premium wellness retreat feel, evening calm atmosphere, high-end spa menu aesthetic. Subtle dark gradients, refined minimal details. Desktop browser view, 1920x1080, photorealistic UI mockup.`
  }
];

async function generateMockup(promptData) {
  console.log(`\nGenerating ${promptData.name}...`);

  // Use gemini-2.0-flash-exp with image generation
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [{ text: promptData.prompt }]
    }],
    generationConfig: {
      responseModalities: ["image", "text"]
    }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || JSON.stringify(data));
    }

    // Look for image in response
    if (data.candidates && data.candidates[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData?.mimeType?.startsWith("image/")) {
          const imageData = part.inlineData.data;
          const outputPath = path.join(__dirname, "mockups", `${promptData.name}.png`);
          fs.writeFileSync(outputPath, Buffer.from(imageData, "base64"));
          console.log(`✓ Saved: ${outputPath}`);
          return true;
        }
      }
    }

    console.log(`✗ No image in response`);
    console.log("Response:", JSON.stringify(data, null, 2).slice(0, 500));
    return false;
  } catch (error) {
    console.error(`✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  const mockupsDir = path.join(__dirname, "mockups");
  if (!fs.existsSync(mockupsDir)) {
    fs.mkdirSync(mockupsDir, { recursive: true });
  }

  console.log("=== Self-Care Guide Mockup Generator ===");
  console.log("Using Gemini 2.0 Flash for image generation...");

  let successCount = 0;
  for (const prompt of prompts) {
    const success = await generateMockup(prompt);
    if (success) successCount++;
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  console.log(`\n=== Complete: ${successCount}/5 mockups generated ===`);
}

main();
