import Head from 'next/head';

export default function Page() {
    return (
        <main className="container mx-auto px-4">
            <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h1 className="text-4xl font-bold mb-4">曾怀松</h1>
                <p className="text-gray-600 mb-4">Java开发工程师</p>
                <p className="text-gray-600 mb-4">Email: austin_zhs@163.com</p>
                <p className="text-gray-600 mb-4">Phone: 18013825621</p>
                {/* <p className="text-gray-600 mb-4">LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-500">linkedin.com/in/johndoe</a></p> */}
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                    <p className="text-gray-600 mb-2">XYZ Corporation</p>
                    <p className="text-gray-600 mb-2">January 2020 - Present</p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
                        <li>Improved application performance and user experience.</li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Junior Software Engineer</h3>
                    <p className="text-gray-600 mb-2">ABC Inc.</p>
                    <p className="text-gray-600 mb-2">June 2018 - December 2019</p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Assisted in the development of web applications using JavaScript and PHP.</li>
                        <li>Participated in code reviews and pair programming sessions.</li>
                        <li>Contributed to the improvement of development processes and tools.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">学历</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">软件技术</h3>
                    <p className="text-gray-600 mb-2">江苏经贸职业技术学院</p>
                    <p className="text-gray-600 mb-2">2015/9 - 2018/7</p>
                </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">技能</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>JavaScript, TypeScript</li>
                    <li>React, Next.js</li>
                    <li>Node.js, Express</li>
                    <li>HTML, CSS, Tailwind CSS</li>
                    <li>Git, GitHub</li>
                </ul>
            </section>
        </main>
    );
}


