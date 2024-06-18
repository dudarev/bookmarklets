- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
  - [caiorss/bookmarklet-maker: Tool to create bookmarklet/ javascript apps to automate the web browser.](https://github.com/caiorss/bookmarklet-maker)

## How to create a bookmarklet

```shell
minify file.js | pbcopy
```

## Bookmarklets

- [Copy link as Markdown](<"javascript:void%20function(){javascript:(function(){var%20a=document.title.replace(/^(\d+)\s*/,%22%22),b=%22[%22+a+%22](%22+window.location.href+%22)%22;(function(a){if(window.clipboardData%26%26window.clipboardData.setData)return%20clipboardData.setData(%22Text%22,a);if(document.queryCommandSupported%26%26document.queryCommandSupported(%22copy%22)){var%20b=document.createElement(%22textarea%22);b.textContent=a,b.style.position=%22fixed%22,document.body.appendChild(b),b.select();try{return%20document.execCommand(%22copy%22)}catch(a){return%20console.warn(%22Copy%20to%20clipboard%20failed.%22,a),!1}finally{document.body.removeChild(b)}}})(b),alert(%22Copied%20to%20clipboard:\n\n%22+b)})()}();">)

## Useful links

- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
- [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/)
