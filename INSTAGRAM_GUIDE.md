# Instagram Integration Guide for @mini_watts

## How to Add Instagram Photos to Your Website

Since Instagram's API requires authentication and doesn't allow direct scraping, here are three methods to add @mini_watts photos to your website:

## Method 1: Instagram Embed (Recommended)
This is the easiest and most legal way to add Instagram posts.

### Steps:
1. Go to the Instagram post you want to embed: https://www.instagram.com/mini_watts/
2. Click the three dots (...) on the post
3. Select "Embed"
4. Copy the embed code
5. Replace the placeholder divs in your HTML with the embed code

### Example:
Replace this:
```html
<div class="image-placeholder" data-instagram="post1">
    <p>Instagram Post 1</p>
    <small>Add embedded post</small>
</div>
```

With the Instagram embed code:
```html
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/YOUR_POST_ID/" data-instgrm-version="14">
    <!-- Instagram embed content -->
</blockquote>
<script async src="//www.instagram.com/embed.js"></script>
```

## Method 2: Manual Download and Upload
For better control over image display and loading speed.

### Steps:
1. Visit https://www.instagram.com/mini_watts/
2. Right-click on the images you want to use
3. Select "Save Image As..."
4. Save to the `assets/images/` folder in your project
5. Update the HTML to use local images

### Example:
Replace placeholders with:
```html
<img src="assets/images/mini_watts_photo1.jpg" alt="Fitness photo" loading="lazy">
```

## Method 3: Instagram Basic Display API (Advanced)
For automatic updates, but requires more setup.

### Requirements:
- Facebook Developer Account
- Instagram Business Account
- API Token

### Resources:
- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)

## Where to Add Photos

### Hero Section
- Add a main profile photo or action shot
- Location: index.html, line ~52

### Gallery Section
- Add 6-12 of the best posts
- Location: index.html, lines ~223-250

### About Section
- Add a professional profile photo
- Location: index.html, line ~270

### Workout Cards
- Add workout demonstration photos
- Location: index.html, lines ~120-145

## Image Optimization Tips

1. **Resize images** to appropriate dimensions:
   - Hero images: 1200x800px
   - Gallery thumbnails: 400x400px
   - Profile photos: 600x600px

2. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)

3. **Use appropriate formats**:
   - JPEG for photos
   - PNG for graphics with transparency
   - WebP for modern browsers (with JPEG fallback)

## Legal Considerations

- If using someone else's photos, always get permission
- Include photo credits where appropriate
- Consider adding a disclaimer if using user-generated content

## Quick Start

To quickly test the site with placeholder images:
1. The site is already set up with gradient placeholders
2. Open `index.html` in your browser
3. Replace placeholders with actual content as you obtain it

## Testing Your Site

Open the website locally:
```bash
cd guy-next-door-website
open index.html
```

Or use a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Need Help?

The website is fully functional with placeholders. You can:
1. Use it as-is for development
2. Gradually replace placeholders with real content
3. Customize colors and text to match your brand

Remember to update the social media links and contact information with actual details!