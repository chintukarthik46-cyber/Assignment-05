 ## 1️ HTML Document Structure

### Key Elements :

`<!DOCTYPE html>` → Tells the browser this is HTML5  
`<html>` → Root element  
`<head>` → Metadata, title, links  
`<body>` → Visible content  

---

## 2️. Meta Tags

Meta tags provide metadata about the HTML document.  
They are placed inside the `<head>` section and are not visible on the webpage.

### Key Meta Tags:

`<meta charset="UTF-8">` → Defines character encoding (UTF-8 supports all characters)

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  
→ Makes the website responsive on different screen sizes

`<meta name="description" content="Page description here">`  
→ Provides a short summary for search engines (SEO purpose)

`<meta name="keywords" content="HTML, CSS, JavaScript">`  
→ Specifies keywords related to the webpage content

---

## 3️. Semantic HTML5 Elements

Semantic elements clearly describe the meaning of content.

### Important Semantic Tags:

`<header>` → Top section (logo, title, intro)

`<nav>` → Navigation links

`<main>` → Main content area

`<section>` → Grouped related content

`<article>` → Independent content (blog/news)

`<aside>` → Sidebar content

`<footer>` → Bottom section (copyright, links)

---

## 4️. Forms

Forms are used to collect user input.

### Common Input Types:

`type="text"` → Single line text input  
`type="email"` → Email input with validation  
`type="password"` → Hidden text input  
`type="number"` → Numeric input  
`type="radio"` → Select one option  
`type="checkbox"` → Select multiple options  
`type="date"` → Date picker  
`type="file"` → File upload  

### Validation Attributes:

`required` → Field must be filled  
`pattern` → Defines custom validation pattern  
`min` → Minimum value  
`max` → Maximum value  

### Form Attributes:

`action` → URL where form data is sent  
`method` → HTTP method (GET / POST)  
`name` → Name of the form  
`id` → Unique identifier  
`placeholder` → Hint text inside input field  

---

## 5️. Tables

Tables are used to display structured data in rows and columns.

`<table>` → Main container  
`<thead>` → Table header section  
`<tbody>` → Table body section  
`<tfoot>` → Table footer section  
`<tr>` → Table row  
`<th>` → Header cell  
`<td>` → Data cell  

---

## 6️. Lists

`<ul>` → Unordered (bullet) list  
`<ol>` → Ordered (numbered) list  
`<li>` → List item  

`<dl>` → Description list  
`<dt>` → Term  
`<dd>` → Description  

---

## 7️. Media Elements

`<img src="" alt="">` → Displays image (alt is important for accessibility)

`<audio controls>` → Embeds audio  

`<video controls>` → Embeds video  

---

## 8️. Links and Navigation

`<a href="">` → Creates hyperlink  

`href` → URL of the page  
`target="_blank"` → Opens link in new tab  
`rel="noopener"` → Security improvement when using target="_blank"`  

---

## 9️. Attributes

### class vs id

`class` → Used for multiple elements, reusable  
`id` → Used for one unique element  

### Data Attributes

`data-*` → Custom attributes to store extra information  
Example: `data-user-id="101"`  

Used mainly with JavaScript.

---

## 10. Accessibility Basics

Accessibility ensures websites are usable for everyone.

Use semantic HTML → Improves screen reader support  
Use `alt` attribute → Describes images  
Use `<label>` → Connects input with text  
Use ARIA attributes (like `aria-label`) → Improves assistive technology support  

---

## Quick Revision Questions

1. What is the purpose of DOCTYPE?  
→ It tells the browser which HTML version is used and prevents quirks mode.

2. Explain Semantic HTML and give 5 examples.  
→ Semantic HTML uses meaningful tags that describe structure.  
Examples: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`

3. Difference between Block and Inline Elements?  
→ Block elements take full width and start on new line.  
→ Inline elements take only required width and do not start on new line.

4. How do you make forms accessible and user-friendly?  
→ Use proper labels, validation attributes, correct input types, and ARIA attributes.

5. What are Data Attributes and when are they used?  
→ Custom attributes starting with `data-` used to store extra data in HTML elements.
