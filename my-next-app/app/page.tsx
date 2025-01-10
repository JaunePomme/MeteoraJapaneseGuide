import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        <div>

        Since I never saw a Japanese guide for Meteora I decided to start one to support the Japanese community.　So here is my contribution:諸君、そろそろお金持ちになる時がきました。
色んなコインを買ったり売ったりする(要するにトレーダーね)と金を稼げると思いますが結構難しいと思うのでおすすめはできません。
ビットコイン(BITCOIN)の価値と値段が上がる度にだいたい他のコインも上がります。
その中にソル(SOL)もう同時に上がります。
上がるほどソルの世界(＝エコシステム)のボリューウムも上がりますそこで結構金をいつもより安全に稼げる方法があります。そのボリュームを利用して金を稼ぐ。LP(Liquidity Pool)をする事です。
リクイディティプールに資金を提供する。もちろん色んなプロトコルでできる事です。しかし、meteoraの場合は異常に儲かる、なぜかと言うと普通のLPは固定手数料だけどmeteoraはダイナミック手数料をもらえます。
上手くなって行く度にもっともっと儲かれます、もうスキルの問題です。それをDLMMと言います。

一般のLPはだいたいX$の何々コインをプールに入れて、待つだけ、ボリュームが多ければ多いほど稼げます。
CLMMのLPは同じですが、Aの価格とBの価格を選んでその間でボリュームが多ければ多いほど稼げます。(イメージ的に言うと1Dのシステムです。(横,　数学のX線)
DLMMのLPはCLMMのようにAの価格とBの価格を選びます。しかしそれに加えてその値段の間にどのように自分のliquidityを置くのを選べる事ができます。もはや2D(X,Y)(横と縦)システムです。
AとBの値段の間を横で分割する、その流動性を縦に分ける。だから、自分がその値段の間に自分のliquidityの量を増減することを選べる。上手に分けたら普通のLPより儲かることもできるし、もしコインが下がっても普通のLPシステムよりうまく損失を減らせる。

これからチュウートリアルをするので、よろしく。

こちら💁Meteoraのツイッター @meteora
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
