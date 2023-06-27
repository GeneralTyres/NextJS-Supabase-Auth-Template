import AuthForm from '../auth-form'

export default function Page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen">
            <div className="flex flex-col justify-center">
                <div className="text-center mx-auto md:max-w-2xl">
                    <h1 className="header">Supabase Auth + Storage</h1>
                    <p>
                        Experience our Auth and Storage through a simple profile management example. Create a user profile and
                        upload an avatar image. Fast, simple, secure.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="mx-auto">
                    <AuthForm />
                </div>
            </div>
        </div>
    )
}
