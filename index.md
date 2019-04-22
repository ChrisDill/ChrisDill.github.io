---
title: Chris Dill
layout: default
---

### **Hi there!**
I enjoy making software and games and also experimenting with new ideas and technology. This website is my personal portfolio and my blog where I post about my work and ideas.

Currently I am collaboratively working on a game and contributing to a few open source projects. You can contact me through email if you want to get in touch. Feedback is appreciated.

### **Posts**
<ul>
  {% for post in site.posts %}
  <li>
    <h4><a class="link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
  </li>
  <h5>Posted on {{ post.date | date: "%b %-d, %Y" }}</h5>
  {% endfor %}
</ul>
