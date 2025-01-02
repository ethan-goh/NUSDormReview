import { useState } from 'react';
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-poppins">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign up</h3>

                
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
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isLoading}
                >
                    Sign up
                </button>

                
                {error && (
                    <div className="mt-4 text-sm text-red-500 bg-red-100 border border-red-400 p-2 rounded-md">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Signup;
