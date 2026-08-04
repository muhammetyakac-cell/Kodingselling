import re
import json

with open('src/servicesData.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

matches = re.finditer(r"(desc:\s*')([^']+)('',?\s*fullDesc:\s*')([^']+)'", content)
# actually, let's just do individual searches to be safe
descs = re.findall(r"desc:\s*'([^']+)'", content)
fullDescs = re.findall(r"fullDesc:\s*'([^']+)'", content)

items = []
for i in range(len(descs)):
    items.append({
        'index': i,
        'desc': descs[i],
        'fullDesc': fullDescs[i] if i < len(fullDescs) else ''
    })

with open('inspect.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, ensure_ascii=False, indent=2)
