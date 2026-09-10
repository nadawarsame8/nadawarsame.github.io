---
layout: archive
title: About
permalink: /about/
---
# Hi! I am Nada 👋

I began my journey in technology through Computer Science, where I discovered a passion for problem-solving and building things that make a real difference. Through coursework, personal projects, and continuous learning, I've developed an interest in how technology can be used to solve complex challenges and improve everyday experiences.

I'm passionate about software engineering, data-driven solutions, artificial intelligence, and healthcare technology. I enjoy exploring how these fields intersect to create impactful products, and I'm especially interested in building technology that is both innovative and meaningful.

I'm currently seeking opportunities to grow as a developer, collaborate on exciting projects, and gain experience across different areas of technology while continuing to discover where I can make the greatest impact.

## My Skills

### My Technical Skills
{% include technicalskills.md %}
### Soft Skills
| Skill | Level |
| ---- | ---- |
{% assign skills = site.data.skills.soft | sort: "title" %}
{% for skill in skills %}
| {{ skill.title }} | {{ skill.level }} |
{% endfor %}