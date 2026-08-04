import json
with open('inspect.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for item in data[121:135]:
    print(f"[{item['index']}] DESC: {item['desc']}\nFULLDESC: {item['fullDesc']}\n")
