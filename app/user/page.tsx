import UserClient from "./user-client"

type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

export default async function UsersPage() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store',
    })
    const users: User[] = await res.json()

    return (
        <>
            <div className="min-h-screen w-full relative"style={{
                        background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
                    }}>
                {/* Radial Gradient Background */}
                
                    {/* Your Content/Components */}
                    <UserClient users={users} />
                
            </div>
        </>
    )
}
