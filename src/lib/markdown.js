import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'src/content/artigos')

function resolveCoverImage(rawImage, title = '', category = '') {
  if (rawImage && !/picsum\.photos/i.test(rawImage)) {
    return rawImage
  }
  const params = new URLSearchParams({
    title: title || 'Guia do Servidor Público',
    category: category || 'Direitos & RPPS',
  })
  return `/api/cover?${params.toString()}`
}

export function getSortedArticlesData() {
  if (!fs.existsSync(contentDir)) return []
  
  const fileNames = fs.readdirSync(contentDir)
  const allArticlesData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(contentDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      
      return {
        slug,
        ...matterResult.data,
        image: resolveCoverImage(matterResult.data.image, matterResult.data.title, matterResult.data.category),
      }
  })
  
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArticleSlugs() {
  if (!fs.existsSync(contentDir)) return []
  const fileNames = fs.readdirSync(contentDir)
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, '')
        }
      }
    })
}

export async function getArticleData(slug) {
  const fullPath = path.join(contentDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...matterResult.data,
    image: resolveCoverImage(matterResult.data.image, matterResult.data.title, matterResult.data.category),
  }
}
