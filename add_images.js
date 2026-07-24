const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src/content/artigos');

const images = [
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1505664111306-651d6db048fd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555374018-1c4fa4891129?auto=format&fit=crop&q=80"
];

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

let imgIndex = 0;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Se já tiver image no frontmatter, pula
  if (content.includes('image: ')) return;

  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (match) {
    const frontmatter = match[1];
    const imageUrl = images[imgIndex % images.length];
    const newFrontmatter = frontmatter + `\nimage: '${imageUrl}'`;
    
    content = content.replace(/^---\n[\s\S]*?\n---/, `---\n${newFrontmatter}\n---`);
    fs.writeFileSync(filePath, content, 'utf8');
    imgIndex++;
    console.log(`Imagem adicionada em: ${file}`);
  }
});
console.log("Processo concluído.");
