---
created: <% tp.file.creation_date("YYYY-MM-DD") %>
happiness: <% tp.system.prompt("score/5?", 5) %>
---
tags:: +Daily Notes
[[Daily Index]]

# {{date:DD MMMM YYYY (ddd)}}
## ⭐️ Highlight of the day:
-  <% tp.file.cursor(1) %>
---
### 📆 Daily questions:
##### 🥳  One thing I'm excited about right now is...
- <% tp.file.cursor(4) %>

##### 🙌  One thing I am thankful for today...
- <% tp.file.cursor(5) %>

----
## 📝 Daily Journal:
<% tp.file.cursor(7) %>

```dataviewjs
const ideas = dv.pages('"_ideas"').where(({ file }) => dv.equal(file.cday,dv.date(dv.current().created)))
const knowledge = dv.pages('"knowledge"').where(({ file }) => dv.equal(file.cday,dv.date(dv.current().created)))
if (ideas.length > 0 || knowledge.length > 0) {
	dv.header(3, "Today Notes:");
	if (ideas.length > 0) {
		dv.header(6, "Ideas:")
		dv.table(["Idea", "Status"], ideas.map(b => [b.file.link, b.status]))
	}

	if (knowledge.length > 0) {
		dv.header(6, "Knowledge:")
		dv.list(knowledge.file.link)
	}
}
```
----
