var quotes = [
	'Strength does not come from winning. Your struggles develop your strengths. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength. -Arnold Schwarzenegger',
	' We cannot erase the past, but we can accept it as history. - Gary Chapman',
	'Learning is a gift. Even when pain is your teacher. -Maya Watson',
	'Be who you needed when you were younger',
	'Powerful avalanches begin with small shifts. -Pamela McFarland Walsh',
	'Courage is being scared to death... and saddling up anyway. -John Wayne',
	'Almost dead yesterday, mayybe dead tomorrow, but alive, gloriously alive, today. -Mat Cauthon',
	"A beautiful battle is one you don't have to fight. -Mat Cauthon",
	'Dude, sucking at something is the first step towards being sorta good at something. -Jake the dog'
]


function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
};

function createTweetButton( text ) {
	twttr.widgets.createShareButton(
		'https://twitter.com/share',
		document.getElementById('twitter-button'),

		{
			text: text
		}
	);
};