const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../sai-kripa-website');
const destDir = path.join(__dirname, 'src/pages');

function convertHtmlToJsx(html) {
  let jsx = html;
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Close unclosed tags
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  
  // Fix inline styles
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const parts = rule.split(':');
      if (parts.length === 2) {
        const key = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        const value = parts[1].trim();
        styleObj[key] = value;
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  return jsx;
}

function processFile(filename, componentName) {
  const content = fs.readFileSync(path.join(srcDir, filename), 'utf8');
  
  // Extract content between </header> and <footer>
  const headerEnd = content.indexOf('</header>') + '</header>'.length;
  const footerStart = content.lastIndexOf('<footer>');
  
  if (headerEnd === -1 || footerStart === -1) {
    console.error(`Could not find header/footer in ${filename}`);
    return;
  }
  
  let bodyContent = content.substring(headerEnd, footerStart).trim();
  bodyContent = convertHtmlToJsx(bodyContent);
  
  let fileContent = `export default function ${componentName}() {\n  return (\n    <>\n      ${bodyContent}\n    </>\n  );\n}`;
  
  // Special case for faqs interactive script
  if (componentName === 'FAQs') {
    fileContent = `import { useState } from 'react';\n\nexport default function ${componentName}() {\n` +
      `  const [openId, setOpenId] = useState(null);\n\n` +
      `  const toggleFaq = (id) => {\n` +
      `    setOpenId(openId === id ? null : id);\n` +
      `  };\n\n` +
      `  return (\n    <>\n`;
      
      // We will need to manually handle the FAQ items later, or let the script just output it and I'll use replace_file_content to fix it.
      fileContent += `      ${bodyContent}\n    </>\n  );\n}`;
  }

  fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), fileContent);
  console.log(`Generated ${componentName}.jsx`);
}

processFile('index.html', 'Home');
processFile('about.html', 'About');
processFile('services.html', 'Services');
processFile('faqs.html', 'FAQs');
