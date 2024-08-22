# Lookup

## HTML

### Element Type Reference

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

### Boilerplate

```html
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Webpage Title</title>
    </head>
    <body>

    </body>
</html>
```

### HTML Validator

https://validator.w3.org/#validate_by_input


### Anchor Security

```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noopener noreferrer"></a>
```

### HTML Named Characters

https://html.spec.whatwg.org/multipage/named-characters.html


## CSS

### CSS Selector Combinations

grouping: s1, s2 {} "or"
chaining: s1s2 {} "and"
descendant: s1 s2 {} "s2 descendant of s1"
child: s1 > s2 {} "s2 direct child of s1"

### Stylesheet Inclusion

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Border Box Model

Include padding and border in width/height:
```css
  box-sizing: border-box;
```

### Inheriting Box-sizing

https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

### Horizontal Centering

```css
.container {
  width: 10px;
  margin: 0 auto;
}
```

### Flex

```css
display: flex;
flex-direction: row/column;
justify-content: space-between/space-around/space-evenly/center/flex-start/flex-end;
align-items: stretch/center/flex-start/flex-end/baseline;
gap: 8px;
flex-wrap: wrap;
align-content: <options of justify-content>

flex: flex-grow flex-shrink flex-basis;
align-self: <options of align-items>
min-width: 0px;
```

justify-content aligns across the main axis
align-items aligns along the cross axis
align-content aligns the horizontal row(s) created by wrapping
