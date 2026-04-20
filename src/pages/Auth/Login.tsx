import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-5xl rounded-2xl shadow-xl border">
        <CardContent className="grid md:grid-cols-2 px-4">
          {/* LEFT SIDE */}
          <div className="p-8 md:p-12">
            <div className="max-w-sm mx-auto">
              <h1 className="text-3xl font-semibold tracking-tight mb-2">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                Login to your dashboard
              </p>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="doctor@example.com" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label>Password</Label>
                    <button className="text-xs text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <Input type="password" placeholder="Enter your password" />
                </div>

                <Button className="w-full h-10 text-sm">Login</Button>
              </div>

              <div className="my-8">
                <div className="rounded-lg border bg-muted/40 p-4 text-center space-y-2">
                  <p className="text-sm font-medium">
                    Need access to the system?
                  </p>

                  <p className="text-xs text-muted-foreground">
                    This platform is available for registered businesses only.
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Contact us or request a demo to get started.
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <Button variant="outline" className="w-full text-sm">
                      Contact Us
                    </Button>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block relative bg-muted/20 rounded-r-2xl overflow-hidden">
            {/* Doctor Image */}
            <img
              src="https://images.unsplash.com/photo-1758691463569-66de91d76452?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // 👉 put your image in /public/doctor.jpg
              alt="Doctor"
              className="object-cover w-full h-full"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-muted-foreground text-center">
        By continuing, you agree to our{" "}
        <span className="underline cursor-pointer">Terms of Service</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
}
