const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src/content/artigos');
const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const slug = file.replace('.md', '');
  const uniqueUrl = `https://picsum.photos/seed/${slug}/800/400`;
  
  const newContent = content.replace(/^image:\s*'.*?'/m, `image: '${uniqueUrl}'`);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
});
console.log("Picsum images applied!");
