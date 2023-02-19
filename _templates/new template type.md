---
id: <% tp.date.now("YYYMMDDHHmm") %>
tags: <% tp.file.cursor(2) %>
---
<% tp.file.cursor(3) %>

await tp.file.move("/_templates/" + tp.file.title)