// -------------------------------- Deepseek AI -----------------------
// Deepseek Design very professional and interseting

import { useNavigate } from 'react-router';
import { AlertCircle, Home, RefreshCw, ArrowLeft, Search } from 'lucide-react';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full text-center">
                {/* Animated Background Elements */}
                <div className="relative">
                    {/* Floating blurred circles */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                        <div className="w-64 h-64 bg-purple-300 dark:bg-purple-900/30 rounded-full blur-3xl animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 -z-10">
                        <div className="w-48 h-48 bg-pink-300 dark:bg-pink-900/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>
                    <div className="absolute top-20 left-0 -z-10">
                        <div className="w-40 h-40 bg-blue-300 dark:bg-blue-900/30 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>

                    {/* 404 Text with Glitch Effect */}
                    <div className="relative mb-8">
                        <h1 className="text-9xl sm:text-[12rem] font-extrabold tracking-tighter">
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
                                404
                            </span>
                        </h1>

                        {/* Glitch overlay */}
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <h1 className="text-9xl sm:text-[12rem] font-extrabold tracking-tighter text-transparent opacity-20 select-none">
                                404
                            </h1>
                        </div>
                    </div>

                    {/* Error Icon */}
                    <div className="mb-6 animate-bounce">
                        <div className="inline-flex p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full">
                            <AlertCircle className="w-16 h-16 text-purple-600 dark:text-purple-400" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                            The page you're looking for doesn't exist or has been moved to another URL.
                        </p>
                    </div>

                    {/* Suggested Actions */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
                        >
                            <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                            Back to Home
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto mb-8">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search for what you need..."
                                className="w-full px-5 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg hover:opacity-90 transition-opacity">
                                Go
                            </button>
                        </div>
                    </div>

                    {/* Helpful Links */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Quick Links:</span>
                            <a href="/" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                                Home
                            </a>
                            <a href="/about" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                                About
                            </a>
                            <a href="/contact" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                                Contact
                            </a>
                            <a href="/support" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                                Support
                            </a>
                        </div>
                    </div>

                    {/* Try Again Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                        >
                            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                            Try refreshing the page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;