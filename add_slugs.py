import re

def slugify(text):
    text = text.lower()
    text = text.replace("\\'", "")
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s-]+', '-', text)
    return text.strip('-')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        new_lines.append(line)
        if line.strip().startswith("title:"):
            m = re.search(r"title:\s*['\"](.*)['\"]\s*,?", line)
            if m:
                title = m.group(1)
                # If there's an escaped quote, it might be matched up to the last quote on the line
                slug = slugify(title)
                spaces = len(line) - len(line.lstrip())
                new_lines.append(" " * spaces + f"slug: '{slug}',\n")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == '__main__':
    process_file('src/servicesData.jsx')
