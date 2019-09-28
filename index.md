---
title: Chris Dill
layout: default
---

### **Hi there!**
I am a software developer interested in game development and design. I am currently working on open source and personal projects and looking for future opportunities in the industry.

Feel free to contact me via email if you want to get in touch.

Feedback is appreciated.

### **Posts**
I enjoy reading blogs by other developers and was inspired to start my own. Take a look!

<ul>
  {% for post in site.posts %}
  <li>
    <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
  </li>
  <h5>Posted on {{ post.date | date: "%b %-d, %Y" }}</h5>
  {% endfor %}
</ul>
