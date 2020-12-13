FILENAME:=./_drafts/$(shell date +"%Y-%m-%d")-.md
define post
---
layout: post
title: ""
author:
categories: []
tags: []
---
endef
export post

build:
	bundle exec jekyll build
clean:
	bundle exec jekyll clean
serve:
	bundle exec jekyll serve --livereload --drafts
draft:
	touch $(FILENAME)
	echo "$$post" > $(FILENAME)
