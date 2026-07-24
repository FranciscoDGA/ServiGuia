const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src/content/artigos');
const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

let index = 1;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the image line with a unique loremflickr URL
  const uniqueUrl = `https://loremflickr.com/800/400/office,business,law?lock=${index}`;
  
  // regex to match the image field in frontmatter
  const newContent = content.replace(/^image:\s*'.*?'/m, `image: '${uniqueUrl}'`);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated image for ${file} with lock=${index}`);
  }
  
  index++;
});
console.log("Images updated successfully!");
