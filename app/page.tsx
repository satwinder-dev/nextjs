
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start", padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>Select a page to navigate:</p>
      <Link href="/user"><Button>Users</Button></Link>
      <Link href="/dashboard"><Button>Dashboard</Button></Link>
      
      <Link href="/login"><Button>Login</Button></Link>
    </main>
  );
}
