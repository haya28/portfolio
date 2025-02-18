"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Plus, Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"

// 仮のプロジェクトデータ
const initialProjects = [
  { id: 1, title: "プロジェクト1", description: "プロジェクト1の説明", image: "/placeholder.svg" },
  { id: 2, title: "プロジェクト2", description: "プロジェクト2の説明", image: "/placeholder.svg" },
  { id: 3, title: "プロジェクト3", description: "プロジェクト3の説明", image: "/placeholder.svg" },
]

export default function Portfolio() {
  const [projects, setProjects] = useState(initialProjects)
  const [isAdmin, setIsAdmin] = useState(false) // 管理者モードの状態

  // プロジェクトを追加する関数
  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: `新しいプロジェクト${projects.length + 1}`,
      description: "新しいプロジェクトの説明",
      image: "/placeholder.svg",
    }
    setProjects([...projects, newProject])
  }

  // プロジェクトを編集する関数
  const editProject = (id: number) => {
    // ここに編集ロジックを実装
    console.log(`プロジェクト${id}を編集`)
  }

  // プロジェクトを削除する関数
  const deleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* 左サイドバー */}
        <div className="space-y-8">
          {/* プロフィールヘッダー */}
          <div className="flex items-center gap-4">
            <Image src="/placeholder.svg" alt="プロフィール" width={60} height={60} className="rounded-full" />
            <div>
              <h1 className="text-2xl font-mono">福田 捷人</h1>
              <p className="text-gray-400">学生エンジニア</p>
            </div>
          </div>

          {/* 自己紹介 */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              大阪公立大学工業高等専門学校
              知能情報コース3年生です。Web開発や機械学習に興味があり、Next.jsやPythonを使ったアプリ開発を行っています。
            </p>
            <Button
              variant="outline"
              className="rounded-full text-gray-400 hover:text-black hover:bg-white transition-colors duration-300"
            >
              わたしについて
            </Button>
          </div>

          {/* フッター */}
          <div className="text-gray-400 text-sm">
            <p>© UIhub in Framer</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                ライセンス
              </Link>
              <Link href="#" className="hover:text-white">
                404
              </Link>
            </div>
          </div>
        </div>

        {/* 右コンテンツ */}
        <div className="space-y-8">
          {/* プロジェクトセクション */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">Project</h2>
              {isAdmin && (
                <Button variant="outline" size="icon" onClick={addProject}>
                  <Plus className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    {isAdmin && (
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => editProject(project.id)}>
                          <Edit className="w-4 h-4 mr-2" />
                          編集
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteProject(project.id)}>
                          <Trash className="w-4 h-4 mr-2" />
                          削除
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* お問い合わせセクション */}
          <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
            <h2 className="text-2xl font-mono mb-4">お問い合わせ</h2>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/haya28">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://zenn.dev/fukuda1234">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.476c0 6.615-5.385 12-12 12s-12-5.385-12-12 5.385-12 12-12 12 5.385 12 12zm-9.877 3.38c-1.197 0-2.168-.97-2.168-2.168 0-1.197.97-2.168 2.168-2.168 1.197 0 2.168.97 2.168 2.168 0 1.197-.97 2.168-2.168 2.168zm-4.246 0c-1.197 0-2.168-.97-2.168-2.168 0-1.197.97-2.168 2.168-2.168 1.197 0 2.168.97 2.168 2.168 0 1.197-.97 2.168-2.168 2.168z" />
                  </svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:fuku.h.a.y0000@gmail.com">
                  <Mail className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </section>

          {/* 管理者モード切り替えボタン（デモ用） */}
          <Button onClick={() => setIsAdmin(!isAdmin)}>{isAdmin ? "管理者モードOFF" : "管理者モードON"}</Button>
        </div>
      </div>
    </div>
  )
}

