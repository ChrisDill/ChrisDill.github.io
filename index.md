---
title: Chris Dill
layout: default
---

### **Hi there!**
I am a Software developer interested in game development and design. I am currently collaborating on a game, contributing to open source and trying out new ideas. 

Feel free to contact me through email if you want to get in touch. 
Feedback is appreciated.

### **Posts**
<ul>
  {% for post in site.posts %}
  <li>
    <h4><a class="link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
  </li>
  <h5>Posted on {{ post.date | date: "%b %-d, %Y" }}</h5>
  {% endfor %}
</ul>
