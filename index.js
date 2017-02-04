function getQueryObj(url) {
    var pairs = url.slice(url.indexOf('?') + 1).split('&');
    var querys = {};
    pairs.forEach(function(pair) {
        p = pair.split('=');
        querys[p[0]] = p[1];
    })
    return querys;
}

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tab) {
    var tab = tab[0] || {};
    console.log(tab);
    var searchStr = getQueryObj(tab.url).q;
    document.getElementById('baidugou').setAttribute('src', 'https://www.baidu.com/s?wd='+searchStr);
})