import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart3, PieChart, Bell, Download } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Smart Expense Tracking for Everyone
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Take control of your finances with our intuitive expense tracking solution
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Get Started Free
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <BarChart3 className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-muted-foreground">
              Visualize your spending patterns with interactive charts and insights
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <PieChart className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Budget Planning</h3>
            <p className="text-muted-foreground">
              Set and track budgets for different expense categories
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Bell className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
            <p className="text-muted-foreground">
              Never miss a payment with customizable bill reminders
            </p>
          </Card>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-4">₹0<span className="text-base font-normal">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Basic expense tracking</li>
                <li>✓ Up to 50 transactions</li>
                <li>✓ Basic analytics</li>
              </ul>
              <Button className="w-full">Start Free</Button>
            </Card>

            <Card className="p-6 border-primary">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-3xl font-bold mb-4">₹99<span className="text-base font-normal">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ Unlimited transactions</li>
                <li>✓ Detailed analytics</li>
                <li>✓ CSV export</li>
                <li>✓ Budget alerts</li>
              </ul>
              <Button className="w-full">Choose Standard</Button>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-3xl font-bold mb-4">₹199<span className="text-base font-normal">/month</span></p>
              <ul className="text-left space-y-2 mb-6">
                <li>✓ All Standard features</li>
                <li>✓ UPI integration</li>
                <li>✓ Multi-language support</li>
                <li>✓ Priority support</li>
              </ul>
              <Button className="w-full">Choose Premium</Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}