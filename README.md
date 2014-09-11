IdentiBox
=========

A super lightweight, easy-to-use jQuery plugin that identifies a series of HTML elements and makes them all of the same height; based on the element of the greatest size.

## Why Use It?

A common problem that we as web developers have is when we have columns horizontally stacked across the page, content forces buttons and photos to not appear the same level when looking from right to left because the content and/or images may different heights. IdentiBox loops through the targeted element and using javascript changes the height of each element based on the element with the **LARGEST** height. In doing so, this forces the elements below the targeted element to line up.

IdentiBox is also **responsive**. When the browser window is resized, it will continue to look at the largest element and resize it. However with the browser window loads or proceeds to be resized below `768px`, the height of the targeted elements will be reset to their original heights. This will respect fluid mobile layouts.

## How Do I Use It?
Include jQuery 1.8+ and identiBox.js in your layout and target your videos container with `identiBox()`.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/identiBox.js"></script>
<script>
  $('.container .column').identiBox();
</script>
```


## Changelog
*09.11.14 - v1.0.0
	* Initial release
*09.11.14 - v1.0.1
	* Fixed small responsive bug

## Credits
[@dgniccum](http://twitter.com/dgniccum), [@LaBettis](http://twitter.com/LaBettis)