import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/jaunepomme.jpg"
          alt="JaunePomme logo"
          width={180}
          height={180}
          style={{ borderRadius: '50%' }}
          priority
        />

        Since I never saw a Japanese guide for Meteora I decided to start one to support the Japanese community. So here is my contribution.
        <p>
        僕(ちょと変わった日本語と面白さが回ってある; アニキと読んでくれ、へへへ)なりのMeteoraの使い方の説明書。君、運が良かったね、日本人あてに書いたぞ。これで誰か儲けたら良いなと思うから書いてみた。
        でちょっと敬語と楽しい日本語で書いとくね、楽しい文章にしたいから(笑)
        因みに日本人じゃないので(ハーフ)、俺の日本語は少し雑(敬語苦手)と言う人多いと思うけれど、よろしくねー、相棒(笑)
        mon adresse de wallet solana 、もしこのガイドが役にたったらツイッターでDMして、へへ。
        で金がありすぎたら、まー、コーヒー嫌いのでC.C.Lemon、C.C.Lemonを買えるための寄付でも送っていいぞ(笑)
        では、相棒、準備は良いか? 行こう、遥か彼方へ。
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>🧳 必要な物</li>
          <li>👨‍🏫 Meteoraって何?</li>
          <li>📕 Meteoraの使い方</li>
          <li>🧰 バラバラ情報</li>
          <li>🌐 Meteora情報</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://app.meteora.ag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/meteora.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Meteora へ →
          </a>
        </div>
        <div>

<h1>1. 🧳 必要な物</h1>
ご存知? 金を稼ぐ為に金が必要です。
まずは携帯かパソコンとインターネットが必要です。
そしたらこの中から一つのウオレットが必要です。

<Image src={"/meteora/wallets.png"} alt={"different wallets"}
                          width={500}
                          height={500}/>


Meteoraはソルのチェインのプロトコルなのでよろしくね。
で後はそこにお金を入れることです。まー僕はソルが好きなので結婚ソルでプレイするんですけどUSDTとかが好きな人だったらそっちのコイン使ってもオッケーです🙆。
携帯でも出来ますけどまーパソコン使った方が早いし見やすい。けど携帯でウオレットのアプリをダウンロードしたらもちろんできます。外にいたら便利と思います。

大きいマーケットキャップのコインもあるし、低いのもありますので色んなプレイができます。ただただ memecoin じゃないのでご安心。

あとは自分の好きなアプリでマーケットを調べましょう。僕の場合はdexscreenerを使います。
こちらです
<Image src={"/meteora/dexscreener.png"} alt={"dexscreener"}
                          width={800}
                          height={800}/>

これでどのコインを選択するのか決めます。

ボーナス:少しLPとCLMMをなんだかグーグルで確認してください。まー、知らなくてもいいけれど、知っていたらもっと早くmeteoraを理解する事ができます。
せめてLPぐらいを知った方が良いね。
オッケーこれで準備できました。
さてと、ゲームの説明に入ります。

<h1>2. 👨‍🏫 Meteoraって何?</h1>

<div>
諸君、そろそろお金持ちになる時がきました。
色んなコインを買ったり売ったりする(要するにトレーダーね)と金を稼げると思いますが結構難しいと思うのでおすすめはできません。
ビットコイン(BITCOIN)の価値と値段が上がる度にだいたい他のコインも上がります。
その中にソル(SOL)もう同時に上がります。
上がるほどソルの世界(＝エコシステム)のボリューウムも上がりますそこで結構金をいつもより安全に稼げる方法があります。そのボリュームを利用して金を稼ぐ。LP(Liquidity Pool)をする事です。
リクイディティプールに資金を提供する。もちろん色んなプロトコルでできる事です。しかし、meteoraの場合は異常に儲かる、なぜかと言うと普通のLPは固定手数料だけどmeteoraは固定手数料とダイナミック手数料両方をもらえます。
上手くなって行く度にもっともっと儲かれます、もうスキルの問題です。それをDLMMと言います。
一般のLP(AMM)はだいたいX$の何々コインをプールに入れて、待つだけ、ボリュームが多ければ多いほど稼げます。
CLMMのLPは同じですが、Aの価格とBの価格を選んでその間でボリュームが多ければ多いほど稼げます。イメージ的に言うと1Dのシステムです。(横,水平方向、数学のX線)
MeteoraはDLMMと言うシステムを使う。DLMMはCLMMのようにAの価格とBの価格を選びます。しかしそれに加えてその値段の間にどのように自分のliquidityを置くのを選べる事ができます。もはや2D(数学ではX,Y線ね)(横と縦、水平方向と垂直方向)システムです。
AとBの値段の間を横で分割する、その流動性を縦に分ける。だから、自分がその値段の間に自分のliquidityの量を増減することを選べる。上手に分けたら普通のLPより儲かることもできるし、もしコインが下がっても普通のLPシステムよりうまく損失を減らせる。

こんな感じ、まだ読めないと思うけど、後で説明するから待ってて。
<Image src={"/meteora/exampleswarms.png"} alt={"example swarms"}
                          width={800}
                          height={800}/>

少し見える?AとBの間にコインを入れてあるで高さの方はまー同じぐらいねここは。CLMMに近いポジションとも言えるね。
綺麗だってばよ。

でーーーーーー、コインの値段はどうでも良い。我々はどれでけコインのボリュウームから利益を貰えるかの勝負だ。いかにトレーダーの争いの中に我々は金を稼げるか。
この勝負の中私達ただコインを買う人と売る人にliquidityを渡す、そこから手数書をもらう、争いが強いほどボリュームが高い、高いほど儲かる。長く続くほど儲かる。
戦争には参加しません、ただ見ているだけ。コインの値段が上がろうが下がろうがどうでもいい。我々の領域(AとBの間ね)にさえ入っていれば儲かります。

コインの選択肢は君に渡しておく。ボリュームが目的なので、memecoin狙いの方がもちろん一番儲かるけどリスクも同時につく。どのコインをLPするかは君次第。descreenerやapeproやgmgnでちゃんとコインの価値を
確認してから入ってね。理想なコインと言ったらPnutみたいなコインね。大きいボリュームで長く上がり続けてきたから、これで儲かった人多かったと思うよ、僕も含めてね。

さてと、ちょと説明したけど、どう言う風に使うのか教えよっか。(笑)

</div>


<h1>3. 📕 Meteoraの使い方</h1>

ではまず Meteora App,こちらに行きましょう:
<div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://app.meteora.ag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/meteora.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Meteora へ →
          </a>
        </div>

でウオレットを繋ぎます。
<Image src={"/meteora/connect.png"} alt={"connect screen"}
                          width={900}
                          height={800}/>


繋がったらこんな画面になります。君がこれを読む時まだブルラン中だと良いなー、一番儲かれる時期だもんね。
<Image src={"/meteora/intro.png"} alt={"intro"}
                          width={800}
                          height={800}/>

僕が説明するのはこの今入ってるDLMMの事のみ。

色んまプールが見えます。
一つ選びましょう。
例文としてLLMを使います、言うっとくけどこれは投資アドバイスではありません。自分で調べてください。うん。自分で調べた方が良い。人それぞれのアプローチがあるからね。
俺はちょっとセーフのプレイの方が良いかな、rugされたくないので。

ではLLMにクリックしましょう。で show all にクリックする。でこんな感じ。
<Image src={"/meteora/clickLLM.png"} alt={"clickLLM"}
                          width={800}
                          height={800}/>


色んなのあるでしょ。
じゃあ、ちょっと単語の説明する。大事だかここちゃんと理解してから後を読んで。あ、値段じゃなくて価格の単語もあったよな、それ使おーっと。(笑)
    
Bin step: binの間の差。一つのbinは一つの値段。要するにどれだけ価格を離れるのか。
もっと具体的に言うと:
俺たちはLLM/SOLペアの価格Aと価格Bの間に流動性(liquidity)を提供します。前に説明したように、君はその範囲を分割して、流動性を水平方向(横)だけでなく垂直方向(縦)にも提供できます。
ここのbin stepは、価格AからBまでの間で流動性をどれくらい精密に広げるかを選択するためのものです。
つまり、0.1%、0.5%、1%など、非常に細かく区切ることもできる。
細かくするほど、価格の精度が高くなるね。
例えば、LLMの価格が1.5$と仮定します。A=1$、B=2$と設定した場合、俺たちの区切りは1.01、1.02、1.03… B=2$まで続きます。
また、1.1、1.2、1.3のように区切ると(ここでは10のbinでBに到達します)、その場合、価格の精度はかなり低くなります。
でトレーダーはいるほど精密を高くするとたくさんの手数書を取れる。(まー、スリッページの事ね)
だからどれだけ価格の精度が欲しいのかしかし見た通り、0.01のステップだと結構たくさんのbinが必要になる。でそれ、69binsまでは無料で使えるけど、それ以上に使いたかったら少し
払わないといけないの、だから69binsしたら2$までは辿りつかんじゃんなんか1.69まででしょう、だから追加のポジションを開かないといけなくなる。69stepと31stepさえあれば、範囲的にはオッケー。
そこ、一つの策となる。たくさんで精度が高いなポジションを開くか、大きいけど精度が下がる一つのポジションを開くかだ。

Fee:普通にただもらう固定手数書。高いほど良いけど、トレーダーは高いの選ぶかな? 2%とか5%とか払いたくないよねスワップする時。けどmemecoinだったら話は別。ここもbin stepほど大事。
だから、まー、1最初の方は1-2%でいいと思います。

TVL:私達がどれくらいこのプールに入れたか。高いほど、たくさんな人がこのプールを使ってるって事です。
まー、最初の方は一番高いTVLに入っても良いと思う。慣れたら、変えてもいいし。

24H vol:一日中のボリュウム。これが大事、これが金が入ってるかどうかの証拠。低いほど、何も起きてないって事さ。俺らはトレーダーが居る場所を目指すから、ボリューム少なかったら、プールをされ。

24h fee/tvl: 計算された、一日中のfee/tvl、これが高いほど、たくさんの手数書を貰える、けれど24hね、たまにmemecoinは5-10hも持たない時もあるので変な数字が出るかもしれない。
で数字が低くてもまAとBの価格の範囲を縮めたら、その数字を裏回る事ができます。(12%が小さい範囲だったら50%にもなれるぞ)

こんな感じで。ビギナーは普通に100/1(bin step/ fee) か100/2を選んで欲しいね。一般の人はそれを選ぶ。その二つのプールで結構TVLが高い場合いが多い。
範囲も広いし、精度悪くわない、普通のアプローチと言います。

じゃあ一番混んでる(tvlの高い奴)、bin 20/0.2% fees を選びましょう。

<Image src={"/meteora/bin20.png"} alt={"bin20"}
                          width={800}
                          height={800}/>

まー、ここは色んな情報が書いてあるだけね、大事なのはポジションを作る事。
一つのポジションで一つの範囲を決める。でもっとデカイ範囲をカバーしたかったらただ同じビンでただ別のポジションをひらけば良い。
例えば1$から1.5$で1.5$から2$までできます。ここポジションを開いてみる、add liquidityをクリックしましょう。

<Image src={"/meteora/openpos.png"} alt={"openpos"}
                          width={800}
                          height={800}/>

ここ、入れたい価格、範囲、あとポジションの形を選ぶことができます。

価格の方はまーご自由にどうぞ。SOLとLLMを両方入れる事もできるし、SOLかLLMを入れる事だけも可能う。で同じ価格を選びたかったらautofillをクリックしてれば良いです。

範囲、一つのポジションで69ビンを作るのが限界です。それ以上入れたっかたら、追加の手数書を各ビンごとに払わないといけないので、払わないで、新たなポジションを開こうね。
そっちの方が無料だし。で、69が限界なので、このビンステップだと現在の値段から大体-6% +6%が限界かな。小さいステップだからたくさんの価格をカバーするけどその代わり、
範囲が小さい。

ポジションの形、三つありますspot, curve, bidask。
形通りに流動性が提供される。
spotは:CLMMのように範囲の中にどこいても同じ値段でコインを売るって事。てっことは範囲の中にどこいても同じ手数書をもらうね、どこいても同じ高さ(y,縦).
高さが大きいほど流動性が高いって事、で手数書をたくさん貰えるってこと。これが普通のセットアップ、ユニフォームポジション、結構便利。ビギナーは最初の方これを使って欲しいね。
curve:これはステーブルコインをプレイする時におすすめかな。範囲の真ん中の方に流動性が集中してるのでコインの値段がそこ長く残るほど儲かります。ステーブルコイン(usdc,usdt)とか
結構値段的に動かないので良いと思う。memecoinは結構動くのですぐyが低い所に行っちゃうじゃん、だからあんま意味ない。まー、状況によるかな。一番リスクが高いポジションです。
ぶっちゃけ、ほぼ使わん。
<Image src={"/meteora/curve.png"} alt={"curve"}
                          width={800}
                          height={800}/>

bid ask: これが一番リスクの低いセットアップ、けっこspotかこれにします。これはね、ソルだけで入ると一番良いと思う。(SOL/LLMの場合ね)
これはね、階段みたいの形してて、値段が下がるほど俺たちはLLMを買う。要するにDCA(ドルコスト平均法)ってことさー。そうすれば、LLMの価格が下がってても、俺たちはあんまり買わないから、たくさん下がったらだんだん買っていくセットアップ。
良いでしょ(笑) 下がる度にLLMを買って、また上がる度に売る。結構セーフの入り方。でこれをソルだけにすると安いほど買うって事、しかしLLMのみでも(それとも両サイドソルとLLM)で数字が低くてもまAとBの価格の範囲を縮めたら、その数字を裏回る事ができます。
LLMのみでbid askしたら、逆サイドのDCAとなります。LLMの価格が上がるほどたくさん売っていく。そうすれば一番効果的な利益ができます。でそれをしながら手数書ももちろんもらいます。
一番良いのはLLMの価格が下がったり上がったりする時(rangeって言う)価格が結局もとの価格に戻るけどその間我々手数書を設けました、へへ。
何も起きない時に金を稼げるなんて最高です。しかも価格が上がったらボーナスって感じ。下がったら、bid askのセットアップだったらそんなに問題ない。
こっちがそれ:
<Image src={"/meteora/bidask.png"} alt={"bidask"}
                          width={800}
                          height={800}/>

価格から13%ぐらい下がるまでの範囲だ。
でここにビンの価格見れる。これが価格が高い時、あんま流動性が入ってないでしょ。高いほどあんま買わない:
<Image src={"/meteora/lowprice.png"} alt={"lowprice"}
                          width={800}
                          height={800}/>

でこっちが価格が低い時、今度は流動性が高い、安いほどたくさん買う:
<Image src={"/meteora/highprice.png"} alt={"highprice"}
                          width={800}
                          height={800}/>




よしじゃあ、ポジション作ろう。だいたい0.05ソルかかるけどそれ、ポジション締める時に戻る。安心して。
適当の価格入れるね、どういう風になるか見せるだけ。でspotのセットアップにするね:
<Image src={"/meteora/spotup.png"} alt={"spotup"}
                          width={800}
                          height={800}/>

作りました:
<Image src={"/meteora/created.png"} alt={"created"}
                          width={800}
                          height={800}/>
よし、あとは待つだけ。別にやる事はないね。で色はね、右がLLMで左がソル。LLMがXの価格だったらその前(X-...)にある流動性はソルに決まってる。
同じく、LLMの価格の上にあるのはLLMだ。って事は値段が上がったら、LLMがソルに変わる。下がったらLLMになる。だから色が二つある。でLLMが上がったら画面に残るのはソルのみ、だから青色だけが残る。
全てのLLMがソルに上場に売ったってこと。もうこれだけ分かっていればもうあとは脳みそを使って、色んなポジションやセットアぷやビンステップを試して、母に家でも買ってこい。(笑)
少し時間経つとまーこんな感じ:
<Image src={"/meteora/spotafter.png"} alt={"spotafter"}
                          width={800}
                          height={800}/>

あんまりお金をポジションに入れてない、使い方を説明してるだけね、笑。
少しづつ、手数書が上がっていく、で見ての通り、価格全て一つ一つ値段的に近いでしょ。
小さいbin stepを使ったらね。でかいステップほど値段の差が広がる。
<Image src={"/meteora/spotafter2.png"} alt={"spotafter2"}
                          width={800}
                          height={800}/>

少し値段が上がってきたからちょっとソルゲットしたへへ。
横にあるクレイムを押さない度にfees貰わないから、適当にクレイムしてね。けど裏にポイントシステムがあるので、できれば価格が高い時にクレイムした方が良いね。
そうすればポイントを効率的にゲットする。後でポイントを見えるツールを見せるね、待ってろ、焦るな(笑)。待っててくれ、相棒、へへ。

じゃあ、もう十分手数書を手に入れたからそろそろポジションを閉じましょう。
withdrawをクリックしましょう:
<Image src={"/meteora/withdraw.png"} alt={"withdraw"}
                          width={800}
                          height={800}/>

お、最近出た良いfeatureがあるのでそれを見せよう。
自分のコインを出す時、両方を出せるし、片方だけ出せる。さらに、片方の出したい時(例えばなんかどっかで他のポジション作りたいけどソルが無い時)、こうやって:
<Image src={"/meteora/withdrawoneside.png"} alt={"withdrawoneside"}
                          width={800}
                          height={800}/>

どのビンから、どれくらいを引くのかを選べる、超便利なfeatureでしょう!!!!
オッケー🙆、じゃあ、前の画面に戻って、withdraw and close positionをクリックしましょう:
<Image src={"/meteora/withdrawn.png"} alt={"withdrawn"}
                          width={800}
                          height={800}/>
おめでとう、ポジションを閉じました。
で横にあるgenerate my PnLをクリックしましょう。

でこんな感じのカードが作られる、screenshotをとって、友達に見せたりする。MeteoraのDiscordで他のメンバーを見せるのも良い、みんなそうしてる、楽しい雰囲気って感じかな。
ま数字の0が足りないから0って書いてあるけど、右下に1.07%の利益を出しました。でそれを17分以下に得た。やばくない???やば無ーーーい(笑)。ほんまに金の卵を産む鶏だぜ。
Don't fade.
<Image src={"/meteora/pnl.png"} alt={"pnl"}
                          width={800}
                          height={800}/>



で数字で言うと、結果的にこのぐらいの手数書を得た。
<Image src={"/meteora/result.png"} alt={"result"}
                          width={800}
                          height={800}/>
もうちろんもっと大きいサイズでやっていたらもっと儲かってた。ご自由に。




<h1>4. 🧰 バラバラ情報</h1>

たまにこう、線を引いて、自分の範囲をなんとなく計算する(Technical Analysis to言うかな):
<Image src={"/meteora/TA.png"} alt={"TA"}
                          width={800}
                          height={800}/>


で、みんなでやるLPなので、他の人のポジションの範囲を少し🤏分かる事ができる。
こう言う風に見える:
<Image src={"/meteora/pplposition.png"} alt={"pplposition"}
                          width={800}
                          height={800}/>

このグレイ色のビンがこのプールに入ってる人の流動性です。
どこにどれくらいTVLが置いてあるか、自分の流動性の重さ(他の人と比べて)、だって結局自分一人でプールに入っていたら自分が全てのボリュームをもらうから、どこにどうポジションを開くの
相当大。


で色んなポジションを開くとこんな感じにもなる:
<Image src={"/meteora/multi.png"} alt={"multi"}
                          width={800}
                          height={800}/>

 これはさっき言った奴、小さいビン使ってるけど範囲が小さいからたくさんの小さい範囲を繋がってる。
 そうすれば大きい範囲をカバーしながら精度の高いポジションを開く。
 問題は流動性、金が必要な複数ポジションセットアップ。最近結構多くに使われてる。LLMを見せた時だって、一番TVLが多かったプールがこの20binだし、みんな
 このセットアップ気になってるみたい。

まーあとは経験ね、最初の方は低いバッグで初めて、少し慣れてきたら、上々に額を増やそうね。

 <h1>5.🌐 Meteora情報</h1>
こっちがMeteoraのツイッター:
<Image src={"/meteora/meteoratwitter.png"} alt={"meteoratwitter"}
                          width={800}
                          height={800}/>

コミュニチーもあるのでフォローした方が良いね、いろんな情報が流されるし、他のプレイヤー(人ね、笑)のプレイが見る事もできるし、
チームからのアドバイスも貰えるし、要するにフォローした方が良い。
<div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://app.meteora.ag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Twitter へ →
          </a>
        </div>

こっちがMeteoraのDiscordの雰囲気:
<Image src={"/meteora/meteoradiscord.png"} alt={"meteoradiscord"}
                          width={300}
                          height={300}/>
なんか色んなチャンネルがあって、まー全て英語だけどね。
日本人が少し現れたら日本人宛🇯🇵のチャンネル開くみたい。最近トルコ🇹🇷の開いたみたい。
開いたらそこで話そう!!!
ま、ツイッターのように、英語だけど金の情報も流れるし、新たなfeatureが出る時に情報もう流されるし、俺もそこにいるしへへ、ぜひ来てください。
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://app.meteora.ag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/discord.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Discord へ →
          </a>
        </div>




じゃあな、相棒、楽しかったぜ。          カ。。カッコいい。。(笑)

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/JaunesPommes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/twitter.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          僕のツイッター →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/JaunesPommes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/twitter.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Meteora のツイッター →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://meteora.ag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/meteora.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Meteora ウェブサイト →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discord.com/invite/meteora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image  
            aria-hidden
            src="/discord.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Meteora Discord  →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://docs.meteora.ag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          📕 Meteoraのドキュメント   →
        </a>
      </footer>
    </div>
  );
}
