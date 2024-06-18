- [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker/)
  - [caiorss/bookmarklet-maker: Tool to create bookmarklet/ javascript apps to automate the web browser.](https://github.com/caiorss/bookmarklet-maker)

## How to create a bookmarklet

```shell
minify file.js | pbcopy
```

## Bookmarklets

<a href="javascript:(function () {  function copyToClipboard(text) {    if (window.clipboardData && window.clipboardData.setData) {      /*IE specific code path to prevent textarea being shown while dialog is visible.*/      return clipboardData.setData(\"Text\", text);    } else if (      document.queryCommandSupported &&      document.queryCommandSupported(\"copy\")    ) {      var textarea = document.createElement(\"textarea\");      textarea.textContent = text;      textarea.style.position =        \"fixed\"; /* Prevent scrolling to bottom of page in MS Edge.*/      document.body.appendChild(textarea);      textarea.select();      try {        return document.execCommand(          \"copy\"        ); /* Security exception may be thrown by some browsers.*/      } catch (ex) {        console.warn(\"Copy to clipboard failed.\", ex);        return false;      } finally {        document.body.removeChild(textarea);      }    }  }  var title = document.title.replace(/^\(\d+\)\s*/, '');  var markdown = \"[\" + title + \"](\" + window.location.href + \")\";  copyToClipboard(markdown);  alert(\"Copied to clipboard:\n\n\" + markdown);})();">Copy link as Markdown</a>
