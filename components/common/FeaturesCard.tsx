import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function FeaturesCard() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <Card className="relative mx-auto w-full max-w-sm pt-0">
                    <CardHeader className="space-y-1 p-6">
                        <CardTitle className="text-2xl font-bold">Pro Plan</CardTitle>
                        <CardDescription>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold">$24</span>
                                <Badge className="text-sm text-muted-foreground">tags</Badge>
                            </div>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
