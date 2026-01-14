# 📸 AI Image Generator — Advanced Web App

A modern, responsive **AI-style Image Generator web application** that allows users to type a description and generate images based on that prompt.  
This is a **frontend-only demo** that simulates AI image generation using online image sources for realistic visuals.

<img width="1596" height="894" alt="Image" src="https://github.com/user-attachments/assets/ef332ab4-86b9-4b91-abd4-0fbde3668112" />

🌐 **Live Demo:**
https://imanshusixth6web-2026.netlify.app/

---

## 🚀 Features

- ✔ Beautiful, responsive UI with smooth animations  
- ✔ Text prompt input for image generation  
- ✔ Image gallery to display generated visuals  
- ✔ Image download button  
- ✔ Loading animation while images load  
- ✔ Navigation menu (Home, Guide, Gallery, About)  
- ✔ Clean design & interactive user experience  

---

## 📌 How It Works

This project is a **static frontend demo** that simulates AI image generation by fetching images from web sources based on the user’s prompt.

When a user:
1. Enters a prompt  
2. Selects the number of images  

The app:
- Displays a loading spinner  
- Builds image URLs using the prompt  
- Fetches images from Unsplash  
- Displays images in a gallery  
- Allows downloading images  

---

## 💡 Demo Behavior

Since this is a frontend-only project, it does **not** use real AI models like OpenAI or Stable Diffusion.

Instead, it fetches images from **Unsplash** using keyword-based URLs.

**Example:**  
Prompt: `boy`  
Image URL:  
```
https://source.unsplash.com/featured/768x768/?boy
```

---

## 📁 Project Structure

```
📦 root
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┣ 📂 images
 ┃   ┣ 📜 loader.svg
 ┃   ┗ 📜 download.svg
```

---

## 🛠 Technologies Used

- HTML5  
- CSS3 (Flexbox, Grid, Animations)  
- JavaScript (DOM, Fetch API, Event Handling)  
- Unsplash Image Source  
- Font Awesome Icons  
- Google Fonts  

---

## 🧠 How to Use

1. Clone or download the repository  
2. Open `index.html` in your browser  
3. Enter a prompt in the text field  
4. Select the number of images  
5. Click **Generate Images**  
6. Images will load and appear in the gallery  
7. Click the **Download** icon to save any image  

---

## 📈 Optional Enhancements

You can extend this demo by adding:

- ✔ Real AI image generation (OpenAI / Stable Diffusion)  
- ✔ Backend API integration  
- ✔ Prompt history  
- ✔ Advanced style & resolution options  
- ✔ Dark / Light theme toggle  
- ✔ Authentication & user accounts  

---

## 📝 Notes

- Images may repeat depending on availability  
- Demo pulls images from free online sources  
- Backend integration is recommended for real AI generation  

---

## 🚀 Credits

Built by **Imanshu**  
An advanced interactive demo for web portfolio and projects.

---

⭐ If you like this project, feel free to star it and use it in your portfolio!
