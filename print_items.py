import json
with open('inspect.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data[:30]:
    print(f"[{item['index']}] desc: {item['desc']}")
