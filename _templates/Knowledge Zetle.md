---
id: <% tp.date.now("YYYMMDDHHmm") %>
aliases: <% tp.file.cursor(1) %>
---
Type: #knowledge 
Tags: <% tp.file.cursor(2) %>

# ⽊ <% tp.file.title %>
<% tp.file.cursor(3) %>

# References
<% tp.file.cursor(4) %>
<% await tp.file.move("/_knowledge/" + tp.file.title) %>