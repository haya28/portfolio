'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: '問題と回答ランダム表示ツール',
    description: '2年生時に個人開発した、問題と回答をランダムに出すツール',
    image: "/images/avatar.png",
    link: 'https://github.com/haya28/kadai5.git',
  },
  {
    title: '高専祭プログラミング補助',
    description: '2023年度高専祭で5人チームで開発したプログラミング補助ツール',
    image: '/kosensai-project.png',
    link: 'https://github.com/kk2a/kosensai2-I-B.git',
  },
  {
    title: '蛇ゲーム',
    description: 'Googleの蛇ゲームを再現したシンプルなゲーム',
    image: '/snake-game.png',
    link: 'https://github.com/haya28/game.git',
  },
  {
    title: '電卓',
    description: '足し算・引き算・掛け算・割り算・微分積分ができる電卓',
    image: '/dentaku_1.png',
    link: 'https://github.com/haya28/GUI-app.git',
  },
  {
    title: '高専生向けSNS',
    description: '高専テクノゼミ主催のWebハッカソンで開発したSNS',
    // image: '/kosen-sns.png',
    image: '/dentaku_1.png',
    link: 'https://github.com/K-ryuto/K-SNS.git',
  },
  {
    title: 'Webサーバー構築手順書',
    description: 'Webサーバーの構築手順書',
    image: '/dentaku_1.png',
    // image: '/server-manual.png',
    link: '/images/3I-27-手順書.pdf',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <nav className="fixed top-0 flex w-full justify-center space-x-6 bg-gray-900 py-4 text-white">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/history" className="hover:text-gray-300">History</Link>
        <Link href="/skill" className="hover:text-gray-300">Skill</Link>
      </nav>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">Fukuda Hayato Portfolio</h1>
        <p className="mt-2 text-gray-700">大阪公立大学工業高等専門学校 知能情報コース3年</p>
        <p className="mt-2 text-gray-600">Next.jsとSupabaseを使った開発をしています。</p>
      </div>

      <div className="mt-10">
        <h2 className="text-center text-2xl font-semibold text-gray-800">制作物</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg bg-white p-4 shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-md"
              />
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
              <Link
                href={project.link}
                className="mt-2 inline-block text-blue-500 hover:underline"
              >
                詳しく見る
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-gray-800">リンク</h2>
        <div className="mt-4 space-x-4">
          <Link href="https://github.com/haya28" className="text-blue-500 hover:underline">
            GitHub
          </Link>
          {/* <Link href="https://twitter.com/your-twitter" className="text-blue-500 hover:underline">
            Twitter
          </Link> */}
        </div>
      </div>
    </main>
  );
}
