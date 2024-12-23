import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: '******'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
