---
id: <% tp.date.now("YYYMMDDHHmm") %>
aliases: <% tp.file.cursor(1) %>
---
Type: #index
Tags: [[Zettelkasten Index]] <% tp.file.cursor(2) %>

# ⽊ <% tp.file.title %>

<% tp.file.cursor(3) %>:
```dataview
LIST FROM "_knowledge" or "_ideas" and [[<% tp.file.title %>]]
```

<% await tp.file.move("/_knowledge/" + tp.file.title) %>