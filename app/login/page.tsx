
export default function Page() {
	return (
		<main style={{ padding: "2rem" }}>
			<h1>Login</h1>
			<p>Please log in to access your dashboard and manage your account.</p>
		</main>
	);
}


// "use client"
// import React from 'react'
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Building2, Globe, Mail, MapPin, Phone } from "lucide-react"
// import Image from 'next/image'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'

// type User = {
//     id: number
//     name: string
//     username: string
//     email: string
//     phone: string
//     website: string
//     address: {
//         street: string
//         suite: string
//         city: string
//         zipcode: string
//         geo: {
//             lat: string
//             lng: string
//         }
//     }
//     company: {
//         name: string
//         catchPhrase: string
//         bs: string
//     }
// }
// export default function UserClient({ users }: { users: User[] }) {


//     const [search, setSearch] = React.useState("");

//     // Helper to highlight search text in a string
//     function highlightText(text: string, search: string) {
//         if (!search) return text;
//         const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
//         return text.split(regex).map((part, i) =>
//             regex.test(part) ? <span key={i} className="bg-yellow-200">{part}</span> : part
//         );
//     }

//     const filteredUsers = users.filter(user => {
//         return (
//             user.name.toLowerCase().includes(search.toLowerCase()) ||
//             user.username.toLowerCase().includes(search.toLowerCase()) ||
//             user.email.toLowerCase().includes(search.toLowerCase())
//         );
//     });
//     console.log(filteredUsers)
//     const handleSearch = () => {
        
//     };

//     console.log(search)
//     return (
//         <div>
//             <div className="max-w-7xl mx-auto">
//                 <h1>Users (Server Component)</h1>
//                 <div className='flex gap-4 my-10'>
//                     <Input
//                         type="text"
//                         placeholder="Search users..."
//                         className=" w-full max-w-sm rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                     onChange={(e)=>setSearch(e.target.value)}
//                     />
//                     <Button className='cursor-pointer' onClick={handleSearch}>Search</Button>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
//                 {filteredUsers.length !== 0 ? (
//                     filteredUsers.map(user => (
//                         <Card className="w-full max-w-md rounded-2xl shadow-sm" key={user.id}>
//                             <CardHeader>
//                                 <CardTitle className="text-xl">
//                                     {highlightText(user.name, search)}
//                                 </CardTitle>
//                                 <p className="text-sm text-muted-foreground">
//                                     @{highlightText(user.username, search)}
//                                 </p>
//                             </CardHeader>

//                             <CardContent className="space-y-4 text-sm">
//                                 {/* Contact */}
//                                 <div className="space-y-2">
//                                     <div className="flex items-center gap-2">
//                                         <Mail className="h-4 w-4" />
//                                         {highlightText(user.email, search)}
//                                     </div>

//                                     <div className="flex items-center gap-2">
//                                         <Phone className="h-4 w-4" />
//                                         {user.phone}
//                                     </div>

//                                     <div className="flex items-center gap-2">
//                                         <Globe className="h-4 w-4" />
//                                         {user.website}
//                                     </div>
//                                 </div>

//                                 {/* Address */}
//                                 <div className="rounded-lg bg-muted/40 p-3">
//                                     <p className="mb-1 font-medium flex items-center gap-1">
//                                         <MapPin className="h-4 w-4" />
//                                         Address
//                                     </p>
//                                     <p>{user.address.street}, {user.address.suite}</p>
//                                     <p>
//                                         {user.address.city} - {user.address.zipcode}
//                                     </p>
//                                     <p className="text-xs text-muted-foreground">
//                                         Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
//                                     </p>
//                                 </div>

//                                 {/* Company */}
//                                 <div className="space-y-1">
//                                     <div className="flex items-center gap-2 font-medium">
//                                         <Building2 className="h-4 w-4" />
//                                         {user.company.name}
//                                     </div>
//                                     <Badge variant="secondary">
//                                         {user.company.catchPhrase}
//                                     </Badge>
//                                     <p className="text-xs text-muted-foreground">
//                                         {user.company.bs}
//                                     </p>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))
//                 ) : (
//                     <div className='flex w-full justify-center col-span-3 flex-col items-center gap-5'>
//                         <Image src={"/img/no-user.svg"} height={500} width={500} alt='no-user'/>
//                         <h3 className='text-2xl'>No User Found</h3>
//                     </div>
//                 )}
//                 </div>
//             </div>
//         </div>
//     )
// };
