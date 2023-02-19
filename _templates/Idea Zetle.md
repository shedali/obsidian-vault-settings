---
id: <% tp.date.now("YYYMMDDHHmm") %>
aliases: <% tp.file.cursor(1) %>
status: new
type: #idea 
tags: <% tp.file.cursor(2) %>
---

# <% tp.file.title %>
<% tp.file.cursor(3) %>
<% await tp.file.move("/_ideas/" + tp.file.title) %>
