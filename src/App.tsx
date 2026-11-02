
import { Show, SignIn, useUser, useClerk } from '@clerk/react';
import './App.css';

function WelcomePage() {
    const { user } = useUser();
    const { signOut } = useClerk();

    const handleLogout = async () => {
        await signOut({ redirectUrl: '/' });
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h2>TrackHub</h2>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </header>

            <main className="welcome-content">
                <h1>
                    Welcome to TrackHub, {user?.firstName || 'User'}!
                </h1>

                <p>You have successfully logged in.</p>
            </main>
        </div>
    );
}

function App() {
    return (
        <>
            <Show when="signed-out">
                <div className="login-container">
                    <h1>TrackHub</h1>
                    <p>Sign in to continue</p>
                    <SignIn />
                </div>
            </Show>

            <Show when="signed-in">
                <WelcomePage />
            </Show>
        </>
    );
}

export default App;
