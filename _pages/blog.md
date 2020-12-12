---
layout: page
title: Blog
prefix: true
permalink: /blog/
---

<div class="group-title">
  <h1>Blog</h1>
</div>

<div class="posts">
  <ul class="post-list">
    {%- assign date_format = "%b %-d, %Y" -%}
    {% for post in site.posts %}
    <li class="post">
      <h3 class="post-link"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
      <span class="post-meta">Posted {{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
    {% endfor %}
  </ul>
</div>
