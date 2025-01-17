import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to API Explorer
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover and interact with external APIs effortlessly
        </p>
      </section>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Globe className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>External API Posts</CardTitle>
            <CardDescription>Fetch and display posts from JSONPlaceholder API</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore how to use API routes and client-side data fetching in Next.js by fetching posts from an external API.</p>
          </CardContent>
          <CardFooter>
            <Link href="/fetch-posts" passHref>
              <Button>
                View Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        {/* Placeholder cards for future features */}
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>New feature in development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Stay tuned for more exciting API integrations and features.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>New feature in development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Stay tuned for more exciting API integrations and features.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

