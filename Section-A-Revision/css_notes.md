## A.2️ CSS Fundamentals

---

## 1️. CSS Selectors

Selectors are used to target HTML elements.

`element` → Targets all elements of that type  
Example: `p {}`  

`.class` → Targets elements with a specific class  
Example: `.box {}`  

`#id` → Targets a unique element  
Example: `#header {}`  

`[attribute]` → Targets elements with specific attribute  
Example: `input[type="text"] {}`  

`:pseudo-class` → Targets element state  
Example: `a:hover {}`  

`::pseudo-element` → Targets part of element  
Example: `p::before {}`  

---

## 2️. Specificity and Cascade

When multiple styles apply to the same element, the browser decides using:

1. Specificity
2. Cascade order (last rule wins if specificity is equal)

### Specificity Values:

Inline style → 1000  
ID selector → 100  
Class / attribute / pseudo-class → 10  
Element / pseudo-element → 1  

Higher value wins.

---

## 3️. Box Model

Every HTML element is a rectangular box.

Structure:

Content → Padding → Border → Margin  

Content → Actual text/image  
Padding → Space inside border  
Border → Surrounds padding  
Margin → Space outside border  

---

## 4️. box-sizing

Controls how width and height are calculated.

`content-box` (default)  
→ Width = content only (padding & border added separately)

`border-box`  
→ Width includes content + padding + border  

`box-sizing: border-box;` is commonly used.

---

## 5️. Display Property

`block` → Takes full width, starts on new line  
Example: div, p  

`inline` → Takes required width, no new line  
Example: span, a  

`inline-block` → Inline but allows width & height  

`none` → Removes element from layout  

---

## 6️. Position Property

`static` → Default position  

`relative` → Positioned relative to its normal position  

`absolute` → Positioned relative to nearest positioned ancestor  

`fixed` → Positioned relative to viewport  

`sticky` → Acts relative until scroll threshold, then fixed  

---

## 7️. Flexbox Basics

Used for one-dimensional layouts.

`display: flex;` → Creates flex container  

Flex Container Properties:

`justify-content` → Aligns items horizontally  
`align-items` → Aligns items vertically  

Flex Items → Direct children of flex container  

---

## 8️. Grid Basics

Used for two-dimensional layouts.

`display: grid;` → Creates grid container  

`grid-template-columns` → Defines columns  
`grid-template-rows` → Defines rows  
`grid-area` → Defines specific area placement  

---

## 9️. Units

`px` → Fixed pixel unit  
`%` → Relative to parent  
`em` → Relative to parent font-size  
`rem` → Relative to root font-size  
`vh` → Viewport height  
`vw` → Viewport width  

---

## 10. Responsive Design

### Media Queries

Used to apply styles based on screen size.

Example:
`@media (max-width: 768px) {}`  

### Mobile-First Approach

Design for small screens first, then use `min-width` for larger screens.

---

##  Quick Revision Questions

1. Explain the CSS box model.  
→ It consists of Content, Padding, Border, and Margin.

2. What is CSS specificity and how is it calculated?  
→ It determines which CSS rule applies.  
Inline (1000) > ID (100) > Class (10) > Element (1)

3. Difference between margin and padding?  
→ Margin is space outside the border.  
→ Padding is space inside the border.

4. How does position: relative vs absolute work?  
→ Relative moves element from its normal position.  
→ Absolute positions element relative to nearest positioned ancestor.

5. Difference between display: none and visibility: hidden?  
→ display: none removes element completely from layout.  
→ visibility: hidden hides element but keeps its space.

6. How do you center elements horizontally and vertically?  
→ Using Flexbox:  
`display: flex;`  
`justify-content: center;`  
`align-items: center;`
