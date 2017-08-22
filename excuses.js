function Excuse() {
/*	
	var myDog = ['dog', 'cat', 'sense of ennui', 'hamster', 'chinchilla', 'iguana', 'turtle', 'best friend', 'bro', 'boo', 'crush', 'sister', 'brother', 'nemesis', 'doppelganger', 'gerbil', 'bunny', 'fish', 'crew'];
	var ate = ['ate', 'peer-reviewed', 'destroyed', 'deleted', 'erased', 'remixed', 'twitched', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
	var myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'momentum', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post', 'comment'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'
*/

var saohua =[
	'打他妈的棒棒糖','干你妈的象拔蚌',' 拿你的象拔蚌去走位',
	'卢本伟闭嘴','日尼玛的威猛先生无敌风火轮','简直是踏马的终极蛇皮怪铁胆火车侠',
	'卡成tm的绝味鸭脖','不把对面打成皮皮','我日你滴妈耶','我干你妈的冰绿茶','我干你妈德芙巧克力','日你妈耳机线','干你妈的香蕉船'
];
document.getElementById('excuses').innerHTML = '<div>'+saohua[Math.round(Math.random()*(saohua.length-1))]+'</div>';
}