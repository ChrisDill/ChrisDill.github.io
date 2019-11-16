---
title: Chris Dill
layout: default
---

### **Hi there!**
I am a software developer interested in game development and design. Looking for future opportunities for my career in the industry.

Contact me via email if you want to get in touch.

### **Posts**
I enjoy other developers blogs which inspired me to start my own.

<ul>
  {% for post in site.posts%}
  <li>
    <h4><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h4>
  </li>
  <h5 class="posted">Posted on {{ post.date | date: "%b %-d, %Y" }}</h5>
  {% endfor %}
</ul>
