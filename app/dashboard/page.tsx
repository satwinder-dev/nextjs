import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<main style={{ padding: "2rem" }}>
			<h1>Dashboard</h1>
			<p>This is the main dashboard page. Use the navigation to access different sections.</p>
			<div className="flex gap-3 my-4">

				<Link href="/dashboard/attendance"><Button>Attendance</Button></Link>
				<Link href="/dashboard/employees"><Button>Employees</Button></Link>
				<Link href="/dashboard/projects"><Button>Projects</Button></Link>
				<Link href="/dashboard/settings"><Button>Settings</Button></Link>
			</div>
		</main>
	);
}
