import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-poppins">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h3>

                
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

               
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter your password"
                        onChange={(p) => setPassword(p.target.value)}
                        value={password}
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
