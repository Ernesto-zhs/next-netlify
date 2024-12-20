import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Next Netlify'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="zh" data-theme="lofi">
            <body></body>
        </html>
    );
}
