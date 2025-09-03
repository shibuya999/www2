import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    // Placeholder data
    const personalInfo = {
        name: '山田 太郎',
        title: 'フロントエンドエンジニア',
        introduction: 'Webテクノロジーと美しいUIデザインに情熱を注ぐフロントエンドエンジニアです。ユーザーに最高の体験を提供することを目指し、日々新しい技術を学んでいます。趣味は旅行と写真です。'
    };

    const skills = [
        'HTML5 & CSS3',
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'UI/UX Design',
        'Figma',
        'Git & GitHub'
    ];

    const projects = [
        {
            title: 'ポートフォリオサイト',
            description: 'ReactとTypeScriptを使用して作成した自己紹介サイト。モダンなデザインとパフォーマンスを重視しました。'
        },
        {
            title: 'Eコマースサイト',
            description: 'Next.jsを利用した高速なEコマースプラットフォーム。ユーザー認証、商品管理、決済機能を実装。'
        },
        {
            title: 'タスク管理アプリ',
            description: 'シンプルなUIのタスク管理ツール。ドラッグ＆ドロップによる直感的な操作が可能です。'
        }
    ];


    return (
        <div className="container">
            <header className="header">
                <h1>{personalInfo.name}<span>.</span></h1>
                <p>{personalInfo.title}</p>
            </header>

            <main>
                <section id="about" className="section about-me">
                    <h2>自己紹介</h2>
                    <p>{personalInfo.introduction}</p>
                </section>

                <section id="skills" className="section">
                    <h2>スキル</h2>
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">{skill}</li>
                        ))}
                    </ul>
                </section>

                <section id="projects" className="section">
                    <h2>プロジェクト</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);