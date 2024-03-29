---
title: HTML basic questions
tags: ["HTML", "Interview"]
summary: HTML5 Interview Questions
date: "2022-08-15"
cover: https://i.imgur.com/Zw3wGN1.jpeg
---

## HTML Interview Questions

### What are semantic tags in HTML5?

- header, footer, article, aside, details, figcaption, figure, main, nav, section, mark, summary, tima
- why use semantic tags
  - easier to read
  - greater accessibility
- ref: [Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)

### How HTML5 doctype is different from normal html doctype?

- HTML5에서는 오직 `<!DOCTYPE html>`만 사용가능
- ref: [HTML \<!DOCTYPE\> 선언](http://www.tcpschool.com/html-tags/doctype)

### How many heading tags are there in HTML5?

- h1, h2, h3, h4, h5, h6
- ref: [HTML5 Headings](https://www.w3schools.com/tags/tag_hn.asp)

### Where should script tag be placed in html?

- head tag with `async` or `defer` attribute
- ref: [Where should I put \<script\> tags in HTML markup?](https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup)

### What is the difference between figure and image tag?

- figure tag is used to group a figure with a caption
- ref: [HTML Figure Tag](https://www.w3schools.com/tags/tag_figure.asp)

### How section tag is different from div tag

- section tag: the content inside is grouped and should appear as a entry in an outline of a page
- div tag: does not convey any meaning, aside from any found in its class, lang and title attributes.
- ref: [HTML Section Tag](https://www.w3schools.com/tags/tag_section.asp)

### Difference between class and id attribute

- class: used to group elements with similar styles
- id: used to identify an element
- ref: [HTML Class and ID Attribute](https://www.w3schools.com/tags/att_global_id.asp)

### What is the difference between canvas and svg?

- canvas: used to draw graphics
- svg: used to draw graphics
- ref: [Canvas vs SVG](https://www.w3schools.com/tags/tag_canvas.asp)

### What you need to add in a html document to make page responsive?

- meta tag
- ref: [HTML Meta Tag](https://www.w3schools.com/tags/tag_meta.asp)
  1### List some of media tags available in HTML5
- audio, video, source, track
- ref: [HTML5 Media Tags](https://www.w3schools.com/tags/tag_media.asp)

### Explain new Form input types in HTML5

- date: It allows the user to select a date from a drop-down calendar.
- DateTime: It allows the user to select a date and time along with time zone
- time: It allows the user to enter time.
- DateTime-local: It allows the user to select a local date and time
- week: It allows the user to select a week and year from a drop-down calendar.
- month: It allows the user to select a month and year from a drop-down calendar.
- email: It allows the user to enter an e-mail address.
- tel: It allows the user to enter the phone number with a specific pattern.
- URL: It allows the user to enter a website URL
- search: It's a text field for entering a search string
- range: It allows the user to range the value with the slider.
- number: It allows the user to enter a numeric value with the increase and decrease arrow.
- color: It allows the user to select a color from the color picker
- ref: [HTML5 Form Input Types](https://www.w3schools.com/tags/tag_input.asp)

### What is image map in HTML5?

- The HTML `<map>` tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more `<area>` tags.
- ref: [HTML Image Map](https://www.w3schools.com/html/html_images_imagemap.asp)

### Difference between `<b>` and `<strong>` tag

- `<b>`:The bold tag or `<b>` is also one of the formatting elements of HTML. The text written under `<b>` tag makes the text bold presentationally to draw attention.
- `<strong>`: The strong tag is one of the element of HTML used in formatting HTML texts. It is used to show importance of the text by making it bold or highlighting it semantically.
- The main difference between these two tag is that the strong tag semantically emphasizes on the important word or section of words while the bold tag is just offset text conventionally styled in bold.
- ref: [Difference between strong and bold tag in HTML](https://www.geeksforgeeks.org/difference-between-strong-and-bold-tag-in-html/)

### What are the various formatting tags in HTML5?

- `<b>` - Bold <b>text</b>
- `<strong>` - Important <strong>text</strong>
- `<i>` - Italic <i>text</i>
- `<em>` - Emphasized <em>text</em>
- `<mark>` - Marked <mark>text</mark>
- `<small>` - Smaller <small>text</small>
- `<del>` - Deleted <del>text</del>
- `<ins>` - Inserted <ins>text</ins>
- `<sub>` - Subscript <sub>text</sub>
- `<sup>` - Superscript <sup>text</sup>
- ref: [HTML Formatting Tags](https://www.w3schools.com/html/html_formatting.asp)

### Explain the concept of web storage in HTML5

- With web storage, web applications can store data locally within the user's browser.

  - Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

- Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.
- Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.
- ref: [HTML Web Storage API](https://www.w3schools.com/html/html5_webstorage.asp)

### Explain Meta tags

- The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data.
- `<meta>` tags always go inside the `<head>` element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.
- Metadata will not be displayed on the page, but is machine parsable.
- Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.
- There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the `<meta>` tag (See "Setting The Viewport" example below).
- ref: [HTML Meta Tags](https://www.w3schools.com/tags/tag_meta.asp)

### Explain the `<base>` tag

- The `<base>` tag specifies the base URL to use for all relative URLs in a document.
- ref: [HTML Base Tag](https://www.w3schools.com/tags/tag_base.asp)

### What are the frequently useful API in HTML5?

- ref: [APIs in HTML5](https://www.codingtag.com/api-in-html5)

### What are inline elements and block level elements in HTML5?

- ref: [HTML Block and Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
