module.exports = {
    newsFeed : {
        url: 'www.quipmate.com',
        port: 80,
        path: '/ajax/write.php?action=news_feed&start=0',
        method: 'GET',
        headers: {}
    },
    profileFeed : {
        url: 'www.quipmate.com',
        port: 80,
        path: '/ajax/write.php?action=profile_feed&&start=0',
        method: 'GET',
        headers: {}
    }
}