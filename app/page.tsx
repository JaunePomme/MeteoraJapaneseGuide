import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/jaunepomme.jpg"
          alt="JaunePomme logo"
          width={180}
          height={38}
          priority
        />

        Since I never saw a Japanese guide for Meteora I decided to start one to support the Japanese community. So here is my contribution.
        <p>
        僕なりのMeteoraの使い方の説明書。君、運が良かったね、日本人あてに書いたぞ。これで誰か儲けたら良いなと思うから書いてみた。因みに日本人じゃないので(ハーフ)、俺の日本語は少し雑(敬語苦手)と言う人多いと思うけれど、よろしくねー(笑)
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>🧳 必要な物</li>
          <li>👨‍🏫 Meteoraって何?</li>
          <li>📕 Meteoraの使い方</li>
          <li>🧰 使えるツール</li>
          <li>その他</li>
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
一般のLPはだいたいX$の何々コインをプールに入れて、待つだけ、ボリュームが多ければ多いほど稼げます。
CLMMのLPは同じですが、Aの価格とBの価格を選んでその間でボリュームが多ければ多いほど稼げます。イメージ的に言うと1Dのシステムです。(横,数学のX線)
DLMMのLPはCLMMのようにAの価格とBの価格を選びます。しかしそれに加えてその値段の間にどのように自分のliquidityを置くのを選べる事ができます。もはや2D(X,Y)(横と縦)システムです。
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

<Image src={"/meteora/connect.png"} alt={"connect screen"}
                          width={900}
                          height={800}/>


<h1>4. 🧰 使えるツール</h1>


<h1>5. その他</h1>



Donation/寄付 : mon adresse de wallet solana
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
