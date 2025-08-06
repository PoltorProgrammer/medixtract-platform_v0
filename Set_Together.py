import os

# Automatically get the folder where the script is located
root_dir = os.path.dirname(os.path.abspath(__file__))
output_md = os.path.join(root_dir, "project_files.md")

# Allowed file extensions (you can customize this)
valid_extensions = {".js", ".css", ".html", ".py", ".json", ".ts", ".jsx", ".tsx", ".md"}

# Map extension to syntax-highlight language
def get_language(ext):
    return {
        ".js": "javascript",
        ".css": "css",
        ".html": "html",
        ".py": "python",
        ".json": "json",
        ".ts": "typescript",
        ".jsx": "jsx",
        ".tsx": "tsx",
        ".md": "markdown",
    }.get(ext, "")

with open(output_md, "w", encoding="utf-8") as md_file:
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            filepath = os.path.join(dirpath, filename)
            ext = os.path.splitext(filename)[1].lower()

            if ext in valid_extensions:
                relative_path = os.path.relpath(filepath, root_dir)
                language = get_language(ext)

                md_file.write(f"### File: {relative_path}\n")
                md_file.write(f"```{language}\n")
                try:
                    with open(filepath, "r", encoding="utf-8") as code_file:
                        md_file.write(code_file.read())
                except Exception as e:
                    md_file.write(f"/* Error reading file: {e} */")
                md_file.write("\n```\n\n")

print(f"✅ Markdown created at: {output_md}")
