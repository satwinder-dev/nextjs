
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start", padding: "2rem" }}>
      <h1>Welcome to the Home Page</h1>
      <p>Select a page to navigate:</p>
      <Link href="/dashboard"><Button>Dashboard</Button></Link>
      <Link href="/dashboard/attendance"><Button>Attendance</Button></Link>
      <Link href="/dashboard/employees"><Button>Employees</Button></Link>
      <Link href="/dashboard/projects"><Button>Projects</Button></Link>
      <Link href="/dashboard/settings"><Button>Settings</Button></Link>
      <Link href="/login"><Button>Login</Button></Link>
    </main>
  );
}
