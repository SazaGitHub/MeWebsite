<script lang="ts">
	import Card from "$lib/Card.svelte";
</script>

<div class="縦揃え">
	<Card id="contact">
		<strong>Personal Information</strong>
		<br />
		Email:
		<a href="mailto:tachibana@saza.pink">tachibana@saza.pink</a>
		<br />
		Music Stats:
		<a href="https://listenbrainz.org/user/Saza/">Listen Brainz</a>
		<br />
		Youtube:
		<a href="https://www.youtube.com/@sazatachibana">Saza沙砂</a>
		<br />
		Twitch:
		<a href="https://www.twitch.tv/sazatachibana">SazaTachibana</a>
		<br />
		Discord: tachibanasaza
	</Card>
</div>

<div>
	<Card id="bio">
		I am 橘沙砂 (Tachibana Saza), a Japanese-American software engineer based
		in San Francisco, California. (According to some autocomplete suggestions)
		In reality, I am a professor of English in Japan at the collegiate level.
		I have studied the art of Japanese since 2020, and lived there for a
		period of time where I studied calligraphy and the art of writing poetry
		and novels in both English and Japanese. I also have studied martial arts
		since 2009, thus as of writing holding a 2nd degree black belt. I was
		almost in a movie once. That then didn't happen. I am the ruiner of
		everything fun according to those around me. I am also [TITLE CARD].
		<br />
		<br />
		橘沙砂と申します。人工知能のオートコンプリートによると、サンフランシスコで働いている電子計算機学者です。実は、
		日本で大学の教授で働きます。2020年から日本語を学習しまして、少々日本に住みました。あの時に書道を学んだり詩や小説を書いたり日本語と英語で両方しました。
		そうして、2009年より格闘技の訓練が始まりまして、こちらを書く時に黒帯の二段を持ちしております。そういえば、映画に出そうになった事があるがそうはなりませんでした。
		周りの人によると、全ての楽しみの事を破壊する人が僕です。最後に僕が[題字]
	</Card>
</div>

<style>
	.縦揃え {
		display: flex;
		align-items: flex-start;
	}

	:global(#bio) {
		display: flex;
		font-family: "Times New Roman", Times, serif;
	}

	:global(#contact) {
		margin-left: auto;
		outline: solid 3px white;
	}
</style>
