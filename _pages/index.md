---
layout: default
permalink: /
---

## Hello there!

I'm a software developer interested in game development and design. Looking for opportunities to progress my career in the industry.

Contact me via email if you want to get in touch.

<div class="posts">
  <h2>Posts</h2>
  <ul class="post-list">
    {%- assign date_format = "%b %-d, %Y" -%}
    {% for post in site.posts %}
    <li>
      <h3 class="post-link"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
      <span class="post-meta">Posted on {{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
