_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"4ier":function(t){t.exports=JSON.parse('[{"title":"CentOS Stream9\u3078SSL\u8a3c\u660e\u66f8\u53d6\u5f97(Let\'s Encrypt)","contentSnippet":"\u306f\u3058\u3081\u306b\u5148\u65e5\u3001\u30ec\u30f3\u30bf\u30eb\u30b5\u30fc\u30d0\u306bSSL\u3092\u8a2d\u5b9a\u3057\u3066\u6b32\u3057\u3044\u3068\u3044\u3046\u304a\u9858\u3044\u3092\u3055\u308c\u307e\u3057\u3066\u3002\u305d\u3053\u3089\u8fba\u306f\u3058\u3081\u3066\u3060\u3063\u305f\u306e\u3068\u3001\u6628\u4eca\u306e\u30ec\u30f3\u30bf\u30eb\u30b5\u30fc\u30d0\u3068\u3044\u3048\u3070\u30ef\u30f3\u30af\u30ea\u30c3\u30af\u3067SSL\u304c\u5c0e\u5165\u3067\u304d\u308b\u3082\u306e\u304c\u591a\u3044\u3053\u3068\u3082\u3042\u308a\u3001\u73cd\u3057\u3044\u306a\u3042\u3068\u601d\u3063\u305f\u306e\u3067\u305d\u306e\u969b\u306e\u624b\u9806\u3092\u30e1\u30e2\u66f8\u304d\u7a0b\u5ea6\u306b\u6b8b\u3057\u3066\u304a\u3053\u3046\u3068\u601d\u3044\u307e\u3059\u3002\uff08\u3042\u3089\u3086\u308b\u8aac\u660e\u3001\u304a\u3088\u3073\u8a3c\u660e\u66f8\u53d6\u5f97\u5f8c\u306eApache\u306e\u8a2d\u5b9a\u306a\u3069\u306f\u7701\u304d\u307e\u3059\uff09!cerbot\u516c\u5f0f\u3092\u898b\u308b\u3068\u3001System\u304b\u3089CentOS Stream9\u304c\u9078\u3079\u306a\u3044\u305f\u3081\u30b5\u30dd\u30fc\u30c8\u5916\u304b\u3068\u601d\u308f\u308c\u307e\u3059\u3002\u5c0e\u5165\u306e\u969b\u306f\u8981\u691c\u8a0e\u3002 \u624b\u9806EPEL\u30a4\u30f3\u30b9\u30c8\u30fc\u30ebsudo dnf config-manager --set-enabled c...","link":"https://zenn.dev/akusu/articles/182851e1f28cbd","isoDate":"2022-04-01T08:05:47.000Z","dateMiliSeconds":1648800347000,"authorName":"Akari Kusumoto","authorId":"akarikusumoto"},{"title":"\u30d7\u30ed\u30c0\u30af\u30c8\u3092\u3088\u304f\u3059\u308b\u70ba\u306e\u30d7\u30ed\u30bb\u30b9\u69cb\u7bc9\u5b9f\u8df5\u8a71","contentSnippet":"\u80cc\u666f\u3069\u3046\u3082\u3001CPO \u5c31\u4efb\u4e00\u767a\u76ee\u306e\u8a18\u4e8b\u3067\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30c8\u3078\u66f4\u306b\u30b3\u30df\u30c3\u30c8\u3057\u3066\u3044\u304f\u6240\u5b58\u3067\u3059\u3002#\u30d7\u30ed\u30c0\u30af\u30c8 #HIPHOP #\u91e3\u308a\u30d5\u30ea\u30fc\u30af\u306e\u65b9\u3005\u4ef2\u826f\u304f\u3057\u3066\u304f\u3060\u3055\u3044 @sintaro0221\u4eca\u56de\u3001\u672c\u8a18\u4e8b\u3092\u66f8\u3053\u3046\u3068\u601d\u3063\u305f\u304d\u3063\u304b\u3051\u306f\u3001\u30ea\u30fc\u30c9\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u7acb\u5834\u304b\u3089 CPO \u306b\u306a\u3063\u305f\u969b\u306e\u76f4\u8fd1\u306e\u696d\u52d9\u5909\u5316\u3068\u3001\u696d\u52d9\u304c\u3069\u3053\u306b\u5411\u304b\u3063\u3066\u3069\u3093\u306a\u8ab2\u984c\u3092\u89e3\u3053\u3046\u3068\u3057\u3066\u3044\u308b\u306e\u304b\u3001\u6574\u7406\u3068\u5171\u6709\u306e\u70ba\u3067\u3059\u3002 \u3053\u308c\u307e\u3067\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3068\u3044\u3046\u3053\u3068\u3082\u3042\u308a\u9818\u57df\u554f\u308f\u305a\u3001\u7acb\u3061\u306f\u3060\u304b\u308b\u58c1\u306b\u591a\u304f\u53d6\u308a\u7d44\u3093\u3067\u6765\u307e\u3057\u305f\uff08\u73fe\u5728\u3082\u7d76\u8cdb\u596e\u95d8\u4e2d\uff09\u4ee5\u524d\u306f\u3001\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u306b\u7740\u76ee\u3057\u305f\u4e0a\u3067\u30dc\u30c8\u30eb\u30cd\u30c3\u30af\u3068\u306a\u308a\u305d\u3046\u306a\u8ab2\u984c\u306b\u65e9\u3081\u306b\u610f\u8b58\u3092\u5411\u3051\u3066\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3057\u305f\u3002\u76ee...","link":"https://zenn.dev/sintaro/articles/e4087299473308","isoDate":"2022-02-04T03:44:37.000Z","dateMiliSeconds":1643946277000,"authorName":"Shintaro Nakagawa","authorId":"shintaronakagawa"},{"title":"\u8912\u3081\u6bba\u3057\u3066\u3001\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\uff08\u3092\u6b53\u8fce\uff09\u3059\u308b\u6587\u5316\u3092\u4f5c\u308d\u3046\uff01","contentSnippet":"\u3053\u3093\u306b\u3061\u306f\uff01Lisa Technologies \u682a\u5f0f\u4f1a\u793e\u30a4\u30f3\u30bf\u30fc\u30f3\u306e\u3044\u306e\u3046\u3048\u3053\u3046\u3059\u3051\u3067\u3059\uff0112 \u6708\u306b\u958b\u8a2d\u3057\u305f\u958b\u767a\u30d6\u30ed\u30b0\uff08Lisa Output Hub\uff09\u3092\u76db\u308a\u4e0a\u3052\u308b\u306b\u306f\u3069\u3046\u3057\u305f\u3089\u3044\u3044\u3060\u308d\u3046\u304b\uff1f\uff08\u79c1\u3092\u542b\u3081\u305f\uff09\u958b\u767a\u5e83\u5831\u30a4\u30f3\u30bf\u30fc\u30f3\u751f\u305f\u3061\u306f\u3001\u793e\u5185\u306b\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u3059\u308b\u6587\u5316\u3092\u4f5c\u308b\u3053\u3068\u304c\u5fc5\u8981\u3060\u3068\u8003\u3048\u307e\u3057\u305f\u3002\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u958b\u767a\u30d6\u30ed\u30b0\u3092\u901a\u3058\u3066\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u6587\u5316\u3092\u4f5c\u308b\u305f\u3081\u306b\u884c\u3063\u305f\u53d6\u308a\u7d44\u307f\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u3053\u3061\u3089\u304c\u5f0a\u793e\u306e\u958b\u767a\u30d6\u30ed\u30b0\u3067\u3059\u3002https://dev-blog.lisatech.jp\u958b\u767a\u30d6\u30ed\u30b0\u958b\u8a2d\u306e\u3064\u3044\u3066\u306f\u3053\u3061\u3089\u306e\u8a18\u4e8b\u3092\u5fa1\u89a7\u304f\u3060\u3055\u3044\u3002https://zenn.dev/lisatech/arti...","link":"https://zenn.dev/lisatech/articles/emoji-thread-kill","isoDate":"2022-02-03T03:59:44.000Z","dateMiliSeconds":1643860784000,"authorName":"Lisa Technologies","authorId":"corporate"},{"title":"\u9867\u5ba2\u306e\u58f0\u3092\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u53cd\u6620\u3057\u305f\u3044\uff01Productboard\u3092\u89e6\u3063\u3066\u307f\u305f","contentSnippet":"\u6982\u8981\u3053\u3093\u306b\u3061\u306f\uff01Lisa Technologies \u30a4\u30f3\u30bf\u30fc\u30f3\u306e\u306a\u304b\u304c\u308f\u306f\u3058\u3081\u3067\u3059\uff01\u4eca\u56de\u3001\u5f0a\u793e\u3067\u306f\u3088\u308a\u4e00\u5c64\u9867\u5ba2\u306e\u58f0\u3092\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u53cd\u6620\u3057\u3066\u3044\u304f\u305f\u3081\u3001Productboard \u3068\u3044\u3046\u30c4\u30fc\u30eb\u3092\u5c0e\u5165\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\uff01https://productboard.com\u3053\u3061\u3089\u306f\u30a2\u30e1\u30ea\u30ab\u306e Saas \u3067\u3059\u304c\u3001Slack \u306a\u3069\u3068\u306f\u9055\u3063\u3066\u65e5\u672c\u3067\u306f\u307e\u3060\u307e\u3060\u5c0e\u5165\u4e8b\u4f8b\u304c\u591a\u304f\u306a\u3044\u3088\u3046\u3067\u3059\u306e\u3067\u3001\u7b46\u8005\u304c\u5b9f\u969b\u306b Free Trial \u3067\u89e6\u3063\u3066\u307f\u3066\u308f\u304b\u3063\u305f\u3053\u3068\u3092\u8a18\u4e8b\u306b\u6b8b\u305d\u3046\u3068\u601d\u3044\u307e\u3059\uff01 \u8ab2\u984c\u610f\u8b58\u5f0a\u793e\u304c Productboard \u306e\u5c0e\u5165\u3092\u6c7a\u3081\u305f\u7406\u7531\u306f\u3001\u9867\u5ba2\u306e\u58f0\u3092\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u53cd\u6620\u3059\u308b\u30d5\u30ed\u30fc\u304c\u6574\u3063\u3066\u3044\u306a\u304b\u3063\u305f...","link":"https://zenn.dev/lisatech/articles/productboard","isoDate":"2022-02-01T03:01:41.000Z","dateMiliSeconds":1643684501000,"authorName":"Lisa Technologies","authorId":"corporate"},{"title":"AWS Control Tower \u3067\u8a2d\u5b9a\u3057\u305f\u7ba1\u7406\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u79fb\u884c","contentSnippet":"\u300c\u3088\u3057\u306a\u306b\u300d\u3068\u3044\u3046\u8a00\u8449\u3092\u91cd\u5b9d\u3057\u3066\u304a\u308a\u3001\u306a\u3093\u3068\u306a\u304f\u3067\u4f7f\u3063\u3066\u3044\u305f\u306e\u3067\u610f\u5473\u3092\u8abf\u3079\u3066\u307f\u307e\u3057\u305f\u3002\u3044\u3044\u8a00\u8449\u3067\u3059\u306d\u3002\u3053\u308c\u304b\u3089\u3082\u91cd\u5b9d\u3057\u3088\u3046\u3068\u601d\u3044\u307e\u3059\u3002\u3088\u3057\u306a\u306b\u3068\u306f\u3001\u3088\u3044\u5869\u6885\u306b\u306a\u308b\u3088\u3046\u306b\u3001\u3088\u3044\u72b6\u6cc1\u306b\u306a\u308b\u3088\u3046\u306b\u3068\u3044\u3046\u610f\u5473\u306e\u526f\u8a5e\u3067\u3042\u308b\u3002\u53c2\u8003\uff1aweblio \u3055\u3066\u3001\u4eca\u56deAWS \u306e\u30de\u30eb\u30c1\u30a2\u30ab\u30a6\u30f3\u30c8\u74b0\u5883\u3092\u300c\u3088\u3057\u306a\u306b\u300d\u30bb\u30ad\u30e5\u30a2\u306b\u4f5c\u6210\u3057\u3066\u304f\u308c\u308bAWS Control Tower\u3068\u3044\u3046\u30b5\u30fc\u30d3\u30b9\u304c\u3042\u308a\u3001\u305d\u306e\u969b\u306b\u300c\u3048\u3044\u3084\u300d\u3067\u3084\u3063\u3066\u3057\u307e\u3063\u305f\u30df\u30b9\u304b\u3089\u306e\u5fa9\u65e7\u65b9\u6cd5\u3092\u6b8b\u3057\u3066\u304a\u304d\u307e\u3059\u3002\u672c\u4ef6\u306f\u3001AWS Support\u306e\u65b9\u306b\u6559\u308f\u3063\u305f\u5185\u5bb9\u3092\u591a\u304f\u542b\u307f\u307e\u3059\u3002\u591a\u8b1d\u3002 TL;DR\u9593\u9055\u3063\u305f\u30a2\u30ab\u30a6\u30f3\u30c8[1]\u3067ControlTower\u306e\u8a2d\u5b9a...","link":"https://zenn.dev/sintaro/articles/9af62408b27a94","isoDate":"2021-12-28T09:00:32.000Z","dateMiliSeconds":1640682032000,"authorName":"Shintaro Nakagawa","authorId":"shintaronakagawa"},{"title":"\u65e8\u3059\u304e\u305f\uff01\u304a\u3059\u3059\u3081\u306e\u3075\u308b\u3055\u3068\u7d0d\u7a0e\u8fd4\u793c\u54c1[\u5317\u6d77\u9053\u767d\u7ce0\u90e1]","contentSnippet":"\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u76db\u308a\u3060\u306a\u3002\u3068\u64ae\u3063\u305f\u5f8c\u306b\u601d\u3044\u307e\u3057\u305f\u3001\u3001\u3001\u4f5c\u3063\u3066\u3001\u76db\u3063\u3066\u3001\u4e0a\u3052\u308b(note)\u3001\u3053\u3068\u306f\u3001\u30d5\u30fc\u30c9\u30c7\u30ea\u30d0\u30ea\u30fc\u3092\u3055\u308c\u3066\u3044\u308b\u98f2\u98df\u5e97\u306e\u65b9\u3005\u304c\u6599\u7406\u3092Uber Eats\u7b49\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u63b2\u8f09\u3059\u308b\u540c\u3058\u6d41\u308c\u3067\u3059\u304c\u898b\u3048\u3066\u306a\u3044\u69d8\u3005\u306a\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u304c\u3042\u308b\u3093\u3060\u306a\u30fc\u3001\u3068\u6539\u3081\u3066\u601d\u3044\u307e\u3057\u305f\uff08\u5f37\u5f15\uff09\u7d9a\u304d\u3092\u307f\u308b","link":"https://note.com/_sintaro0221_/n/n8814c7d4b6a9","isoDate":"2021-12-24T11:29:23.000Z","dateMiliSeconds":1640345363000,"authorName":"Shintaro Nakagawa","authorId":"shintaronakagawa"},{"title":"Notion\u3067\u30a4\u30f3\u30bb\u30d7\u30b7\u30e7\u30f3\u30c7\u30c3\u30ad\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f5c\u3063\u305f\u306e\u3067\u516c\u958b\u3057\u307e\u3059","contentSnippet":"\u3053\u3093\u306b\u3061\u306f\uff01Lisa Technologies \u682a\u5f0f\u4f1a\u793e\u30a4\u30f3\u30bf\u30fc\u30f3\u306e\u306a\u304b\u304c\u308f\u306f\u3058\u3081\u3067\u3059\uff01\u4eca\u56de\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30ad\u30c3\u30af\u30aa\u30d5\u306a\u3069\u306b\u4f7f\u3046\u30a4\u30f3\u30bb\u30d7\u30b7\u30e7\u30f3\u30c7\u30c3\u30ad\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092 Notion \u3067\u4f5c\u6210\u3057\u307e\u3057\u305f\uff01Duplicate \u53ef\u306b\u3057\u307e\u3057\u305f\u306e\u3067\u307f\u306a\u3055\u3093\u3082\u3054\u81ea\u7531\u306b\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002https://hyper-sunshine-6c1.notion.site/d08cfbcc61a14b87bb82ffb905762eca\u672c\u8a18\u4e8b\u3067\u306f\u3001\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f5c\u6210\u306e\u7d4c\u7def\u3084\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u4f7f\u3044\u65b9\u306a\u3069\u3092\u7d39\u4ecb\u3057\u307e\u3059\uff01 \u4f5c\u6210\u306e\u7d4c\u7def \u305d\u3082\u305d\u3082\u30a4\u30f3\u30bb\u30d7\u30b7\u30e7\u30f3\u30c7\u30c3\u30ad\u3063\u3066\uff1f\u30a4\u30f3\u30bb\u30d7\u30b7\u30e7\u30f3\u30c7\u30c3\u30ad\u3068\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e...","link":"https://zenn.dev/lisatech/articles/inception-deck-template-on-notion","isoDate":"2021-12-23T05:16:34.000Z","dateMiliSeconds":1640236594000,"authorName":"Lisa Technologies","authorId":"corporate"},{"title":"\u30d6\u30ed\u30b0\u3092\u66f8\u3051\u306a\u3044\u4eba\u306b\u304a\u3059\u3059\u3081\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3063\u3066\u307f\u305f","contentSnippet":"\u793e\u5185\u306b\u3066\u3001\u958b\u767a\u542b\u3081\u305f\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u3092\u3069\u3093\u3069\u3093\u3057\u3066\u3044\u3053\u3046\u3068\u3044\u3046\u30ad\u30c3\u30af\u30aa\u30d5MTG\u304c\u5148\u9031\u3042\u308a\u307e\u3057\u305f\u3002\u8a2d\u8a08\u3001\u5b9f\u88c5\u3001\u904b\u7528\u8a08\u753b\u307e\u3067\u3001\u65b0\u3057\u304f\u53c2\u753b\u3055\u308c\u305f\u30e1\u30f3\u30d0\u30fc\u304c\u5927\u6d3b\u8e8d\u3057\u3066\u304f\u308c\u305f\u306e\u3067\u793e\u5185\u3067\u958b\u767a\u30d6\u30ed\u30b0\u542b\u3081\u305f\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u5f37\u5316\u3092\u3057\u3066\u3044\u304d\u305f\u3044\u3068\u601d\u3046\u65b9\u306f\u662f\u975e\u4e0b\u8a18\u3092\u8997\u3044\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\u7d9a\u304d\u3092\u307f\u308b","link":"https://note.com/_sintaro0221_/n/nf8e185809621","isoDate":"2021-12-20T03:05:40.000Z","dateMiliSeconds":1639969540000,"authorName":"Shintaro Nakagawa","authorId":"shintaronakagawa"},{"title":"\u958b\u767a\u30e1\u30f3\u30d0\u30fc4\u4eba\u306e\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3067\u3059\u304c\u3001\u958b\u767a\u5e83\u5831\u59cb\u3081\u307e\u3059","contentSnippet":"\u306f\u3058\u3081\u307e\u3057\u3066\uff01Lisa Technologies \u682a\u5f0f\u4f1a\u793e\u30a8\u30f3\u30b8\u30cb\u30a2\u30a4\u30f3\u30bf\u30fc\u30f3\u306e\u306a\u304b\u304c\u308f\u306f\u3058\u3081\u3068\u7533\u3057\u307e\u3059\uff01\u3053\u306e\u5ea6\u3001\u5f0a\u793e\u3067\u306f\u30a8\u30f3\u30b8\u30cb\u30a2\u7d44\u7e54\u62e1\u5927\u306e\u305f\u3081\u306e\u958b\u767a\u5e83\u5831\u306e\u65bd\u7b56\u3068\u3057\u3066\u30c6\u30c3\u30af\u30d6\u30ed\u30b0\u3092\u59cb\u3081\u308b\u3053\u3068\u306b\u3044\u305f\u3057\u307e\u3057\u305f\uff01\ud83c\udf89https://dev-blog.lisatech.jp\u672c\u7a3f\u3067\u306f\u30c6\u30c3\u30af\u30d6\u30ed\u30b0\u306e\u30ed\u30fc\u30f3\u30c1\u3092\u8a18\u5ff5\u3057\u3066\u3001\u30d6\u30ed\u30b0\u3092\u958b\u59cb\u3057\u305f\u7d4c\u7def\u3084\u5c11\u4eba\u6570\u3067\u30d6\u30ed\u30b0\u3092\u7d99\u7d9a\u3059\u308b\u305f\u3081\u306e\u5de5\u592b\u306b\u3064\u3044\u3066\u304a\u8a71\u3067\u304d\u305f\u3089\u3068\u601d\u3044\u307e\u3059\uff01 1.15 \u5104\u5186\u306e\u8cc7\u91d1\u8abf\u9054\uff01\u958b\u767a\u30c1\u30fc\u30e0\u306e\u62e1\u5927\u304c\u6025\u52d9\u306b\u98f2\u98df\u5e97\u304c\u904b\u7528\u3059\u308b\u30d5\u30fc\u30c9\u30c7\u30ea\u30d0\u30ea\u30fc\u306e\u6700\u9069\u5316\u3092\u884c\u3046\u305f\u3081\u306e\u30d7\u30ed\u30c0\u30af\u30c8\u300c\u30d5\u30fc\u30c9\u30c7\u30ea\u30d0\u30ea\u30fc\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08FDM\uff09\u300d\u3092\u958b\u767a\u3059\u308b\u5f0a\u793e\u3067\u306f\u30012021 ...","link":"https://zenn.dev/lisatech/articles/launch-devrel","isoDate":"2021-12-01T03:24:20.000Z","dateMiliSeconds":1638329060000,"authorName":"Lisa Technologies","authorId":"corporate"}]')},"6HUz":function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){return a("wPgB")}])},Mmls:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("q1tI"),o=a.n(n),i=a("8Kt/"),r=a.n(i),s=a("fneu"),c=o.a.createElement,l=function(t){var e=t.path,a=t.title,n=t.description,i=t.ogImageUrl,l=t.noindex,m=t.removeSiteNameFromTitle,u="".concat(s.a.siteRoot).concat(e||""),d="".concat(s.a.siteRoot,"/og.png");return c(r.a,null,c("title",null,m?a:"".concat(a," | ").concat(s.a.siteMeta.title)),c("meta",{property:"og:title",content:a}),c("meta",{property:"og:url",content:u}),c("meta",{name:"twitter:card",content:"summary_large_image"}),c("meta",{property:"og:site",content:s.a.siteMeta.title}),c("meta",{property:"og:image",content:i||d}),!!n&&c(o.a.Fragment,null,c("meta",{name:"description",content:n}),c("meta",{property:"og:description",content:n})),e&&c("link",{rel:"canonical",href:u}),l&&c("meta",{name:"robots",content:"noindex"}))}},l07G:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=[{id:"corporate",name:"Lisa Technologies",role:"Official",bio:"\u30d5\u30fc\u30c9\u30c7\u30ea\u30d0\u30ea\u30fc\u3092\u6700\u9069\u5316\u3059\u308b\u300c\u30d5\u30fc\u30c9\u30c7\u30ea\u30d0\u30ea\u30fc\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\uff08FDM\uff09\u300d\u3092\u958b\u767a\u3057\u3066\u3044\u307e\u3059\u3002\u8cc7\u91d1\u8abf\u9054\u5b8c\u4e86\u306b\u4f34\u3044\u7d44\u7e54\u62e1\u5927\u4e2d\uff01",avatarSrc:"/avatars/lisa_tech.png",sources:["https://zenn.dev/lisatech/feed"],websiteUrl:"https://lisatech.jp/"},{id:"shintaronakagawa",name:"Shintaro Nakagawa",role:"Lead Engineer",bio:"\u5b66\u751f\u6642\u4ee3\u3088\u308a\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u30fb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u696d\u52d9\u306b\u643a\u308f\u308b\u3002\u5de5\u5b66\u90e8\u5352\uff08\u5352\u8ad6AR\u5b9f\u88c5)\u3001\u8fb2\u6797\u6c34\u7523\u7701\u8a8d\u5b9a\u306e\uff16\u6b21\u7523\u696d\u3067\u306e\u7acb\u3061\u4e0a\u3052\u3001D2C\u30d6\u30e9\u30f3\u30c9\u306e\u7acb\u3061\u4e0a\u3052\u3001EC\u7cfbSaaS\u306e\u81ea\u793e\u958b\u767a\u3001\u30d5\u30ea\u30fc\u30e9\u30f3\u30b9\u3092\u7d4c\u3066\u3001 Lisa Technologies(\u682a)\u306b\u30b8\u30e7\u30a4\u30f3",avatarSrc:"/avatars/shintaro_nakagawa.jpg",sources:["https://zenn.dev/sintaro/feed","https://note.com/_sintaro0221_/rss"],twitterUsername:"sintaro0221",githubUsername:"sintaro"},{id:"akarikusumoto",name:"Akari Kusumoto",role:"Backend dev",bio:"FDM\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u62c5\u5f53\u3057\u3066\u3044\u307e\u3059",avatarSrc:"/avatars/akari_kusumoto.jpg",sources:["https://zenn.dev/akusu/feed"],twitterUsername:"",githubUsername:"AkariKusumoto",websiteUrl:""},{id:"yutakamiyazaki",name:"Yutaka Miyazaki",role:"Frontend dev",bio:"\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30f3\u30b8\u30cb\u30a22\u5e74\u76ee\u306e\u696d\u52d9\u59d4\u8a17\u3002\u524d\u8077\u306f\u30af\u30e9\u30a6\u30c9ERP\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u958b\u767a\u3092\u3057\u3066\u3044\u307e\u3057\u305f\u3002",avatarSrc:"/avatars/yutaka_miyazaki.svg",sources:["https://yutaaaaa.dev/rss/feed.xml"],twitterUsername:"yutaaaaa___",githubUsername:"Yuta07",websiteUrl:"https://yutaaaaa.dev/"}]},szSY:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return s}));var n=a("l07G");a("4ier");function o(t){return n.a.find((function(e){return e.id===t}))}function i(t){var e=new URL(t);return(null===e||void 0===e?void 0:e.hostname)||"blog"}function r(t){return"https://www.google.com/s2/favicons?domain=".concat(t)}function s(t){return"/members/".concat(encodeURIComponent(t))}},wPgB:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),o=a.n(n),i=a("YFqc"),r=a.n(i),s=a("fneu"),c=a("l07G"),l=a("AAbX"),m=a("Mmls"),u=a("szSY"),d=o.a.createElement,h=function(t){var e=t.member;return d(r.a,{href:Object(u.d)(e.id)},d("a",{className:"member-card"},d("div",{className:"member-card__avatar"},d("img",{src:e.avatarSrc,alt:e.name,width:80,height:80,className:"member-card__avatar-img"})),d("h2",{className:"member-card__name"}," ",e.name),d("p",{className:"member-card__bio"},e.bio)))};e.default=function(){return d(o.a.Fragment,null,d(m.a,{title:"Members",path:"/members"}),d(l.a,null,d("section",{className:"members"},d("h1",{className:"members__title"},"Members"," ",d("span",{className:"members__title-team"},"@ ",s.a.siteMeta.teamName)),d("div",{className:"members__cards"},c.a.map((function(t,e){return d(h,{key:"member-card-".concat(e),member:t})}))))))}}},[["6HUz",0,1,2,3]]]);