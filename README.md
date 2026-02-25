# ❤️ Premium Romantic Memory Website

A beautiful, mobile-first romantic web experience featuring password protection, live relationship counter, image gallery, and interactive love messages.

## 🎯 Features

### 🔐 Password Gate
- Elegant full-screen password overlay
- Password: **حبي العسول**
- Confetti explosion on correct password
- Shake animation on wrong password
- Persistent login using localStorage

### ⏳ Live Relationship Counter
- Starts from: **December 3, 2024**
- Real-time updates every second
- Displays: Years, Months, Days, Hours, Minutes, Seconds
- Beautiful glassmorphism design
- Animated glow effect

### 🖼️ Premium Screenshot Swiper
- Supports 26 images
- Perfect aspect ratio preservation (object-fit: contain)
- Smooth slide transitions
- Auto-play with 5-second intervals
- Navigation arrows and pagination dots
- Lazy loading for performance
- Zoom-in animation on active slide
- Background blur effect
- Mobile swipe support

### 💖 Love Message Button
- 26 unique romantic messages in Arabic
- Random non-repeating messages
- Special final message after all messages shown
- Smooth fade-in animations
- Elegant glassmorphism container

### 🎨 Visual Effects
- Floating hearts animation
- Deep romantic gradient background
- Custom gold-glow scrollbar
- Premium typography (Cairo + Amiri fonts)
- Smooth micro-interactions
- Mobile-responsive design

## 📁 Project Structure

```
ooo/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # Image folder (create this)
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    ...
    └── 26.jpg
```

## 🚀 Setup Instructions

### 1. Create Images Folder
Create a folder named `images` in the same directory as `index.html`:

```
c:/Users/Al-Saad/OneDrive/Desktop/ooo/images/
```

### 2. Add Your Screenshots
Place your 26 chat screenshots in the `images` folder and name them:
- 1.jpg
- 2.jpg
- 3.jpg
- ... (continue up to)
- 26.jpg

**Important:** The images can be in any format (jpg, png, jpeg). If using different formats, update the file extensions in `script.js` in the `IMAGE_PATHS` array.

### 3. Open the Website
Simply open `index.html` in your browser:
- Double-click `index.html`, or
- Right-click → Open with → Your preferred browser

### 4. Enter Password
Enter the password: **حبي العسول**

## 🎨 Customization

### Change Password
Edit `script.js` line 2:
```javascript
const CORRECT_PASSWORD = "حبي العسول"; // Change this
```

### Change Relationship Start Date
Edit `script.js` line 3:
```javascript
const RELATIONSHIP_START_DATE = new Date('2024-12-03T00:00:00'); // Change this
```

### Add/Edit Love Messages
Edit the `LOVE_MESSAGES` array in `script.js` (starting at line 6).

### Change Image Paths
If your images are in a different location or have different names, edit the `IMAGE_PATHS` array in `script.js` (starting at line 35).

## 📱 Mobile Optimization

The website is fully mobile-responsive:
- Touch swipe support for image gallery
- Optimized font sizes for mobile
- Responsive counter layout
- Mobile-friendly button sizes
- Smooth animations on all devices

## 🌟 Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Utility-first styling
- **Custom CSS** - Premium animations and effects
- **Vanilla JavaScript** - All functionality
- **Swiper.js** - Image slider
- **Canvas Confetti** - Celebration animation
- **Google Fonts** - Cairo & Amiri fonts

## 💡 Tips

1. **Image Quality**: Use high-quality screenshots for best results
2. **Image Format**: JPG is recommended for photos, PNG for screenshots with text
3. **Browser**: Works best on modern browsers (Chrome, Firefox, Safari, Edge)
4. **Performance**: Lazy loading ensures smooth performance even with 26 images
5. **Privacy**: All data is stored locally (localStorage), no server required

## 🎯 Password

**Password:** حبي العسول

## ❤️ Enjoy Your Romantic Experience!

This website is designed to be a beautiful, intimate space to cherish your memories together.
