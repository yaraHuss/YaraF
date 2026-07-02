import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const docsDir = path.join(projectRoot, 'docs')
const builtIndexPath = path.join(docsDir, 'index.html')
const output404Path = path.join(docsDir, '404.html')

const html = await readFile(builtIndexPath, 'utf8')
const redirectSnippet = `
<script>
  const path = window.location.pathname + window.location.search + window.location.hash
  sessionStorage.setItem('redirect', window.location.origin + path)
</script>
<meta http-equiv="refresh" content="0;url=/">
`

await mkdir(docsDir, { recursive: true })
await writeFile(output404Path, html.replace('</head>', `${redirectSnippet}</head>`))
