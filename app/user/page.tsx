import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react"

type User = {
    id: number
    name: string
    username: string
    email: string
    phone : string
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
    console.log(users)

    const filteredUsers = users.filter(users=>{
        return users.name.includes("Leanne Graham") || users.username.includes("a") || users.email.includes("a")
    })

    return (
        <div className="max-w-7xl mx-auto">
            <h1>Users (Server Component)</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search users..."
                    className="mb-4 w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  mb-4 my-10">
                {filteredUsers.map(user => (
                    <Card className="w-full max-w-md rounded-2xl shadow-sm" key={user.id}>
                        <CardHeader>
                            <CardTitle className="text-xl">
                                {user.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                @{user.username}
                            </p>
                        </CardHeader>

                        <CardContent className="space-y-4 text-sm">
                            {/* Contact */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    {user.email}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    {user.phone}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4" />
                                    {user.website}
                                </div>
                            </div>

                            {/* Address */}
                            <div className="rounded-lg bg-muted/40 p-3">
                                <p className="mb-1 font-medium flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    Address
                                </p>
                                <p>{user.address.street}, {user.address.suite}</p>
                                <p>
                                    {user.address.city} – {user.address.zipcode}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                                </p>
                            </div>

                            {/* Company */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2 font-medium">
                                    <Building2 className="h-4 w-4" />
                                    {user.company.name}
                                </div>
                                <Badge variant="secondary">
                                    {user.company.catchPhrase}
                                </Badge>
                                <p className="text-xs text-muted-foreground">
                                    {user.company.bs}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
