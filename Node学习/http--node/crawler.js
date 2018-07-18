var http = require('http');
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348';

//数据处理
function filterChapters (html) {
    var $ = cheerio.load(html);
    var chapters = $('.chapter');
    var courseData = [];
    chapters.each(function (item) {
        var chapter = $(this)
        var chapterTitle = chapter.find('h3').text().trim();
        var videos = chapter.find('.video').children('li')
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function (item) {
            var video = $(this).find('.J-media-item');
            var videoTitle = video.text().trim();
            var videoId = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                title: videoTitle,
                id: videoId
            })
        })
        courseData.push(chapterData)
    })
    return courseData;
}
//输出爬出来的数据
function printCoureInfo (courseData) {
    courseData.forEach(function(item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function(video){
            console.log('   【' + video.id + '】'+ video.title + '\n' )
        })
    })
}
http.get(url, function (res) {
    var html = "";
    
    res.on('data', function (data) {
        html+=data;
    });

    res.on('end', function () {
        var courseData = filterChapters(html);
        printCoureInfo (courseData)
    })
}).on('error', function () {
    console.log('出错了!')
})