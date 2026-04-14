import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"


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
                                    <Input
                                        type="email"
                                        placeholder="doctor@example.com"
                                    />
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

                                <Button className="w-full h-10 text-sm">
                                    Login
                                </Button>
                            </div>

                            <div className="my-8 flex items-center gap-3">
                                <Separator className="flex-1" />
                                <span className="text-xs text-muted-foreground whitespace-nowrap">
                                    Or continue with
                                </span>
                                <Separator className="flex-1" />
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <Button
                                    variant="outline"
                                    className="w-full h-11 flex items-center justify-center gap-3 border"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611 20.083h-1.611V20H24v8h11.303C33.796 31.657 29.238 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 
      12-12c3.059 0 5.842 1.154 7.965 3.035l5.657-5.657C34.046 5.053 29.268 3 24 3 12.955 3 4 11.955 4 
      23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306 14.691l6.571 4.819C14.655 16.108 19.007 13 24 13c3.059 0 5.842 
      1.154 7.965 3.035l5.657-5.657C34.046 5.053 29.268 3 24 3 
      16.318 3 9.656 7.337 6.306 14.691z"
                                        />
                                        <path
                                            fill="#4CAF50"
                                            d="M24 43c5.184 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 
      34.091 26.715 35 24 35c-5.217 0-9.763-3.317-11.284-7.946l-6.522 
      5.025C9.505 39.556 16.227 43 24 43z"
                                        />
                                        <path
                                            fill="#1976D2"
                                            d="M43.611 20.083h-1.611V20H24v8h11.303c-1.108 3.657-4.099 
      6.547-7.999 7.57l.003-.002 6.19 5.238C31.48 41.091 36.5 
      36 36.5 28c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                    </svg>

                                    <span className="text-sm font-medium">
                                        Continue with Google
                                    </span>
                                </Button>
                            </div>

                            <p className="text-sm text-center mt-8 text-muted-foreground">
                                Don’t have an account?{" "}
                                <span className="text-primary underline cursor-pointer">
                                    Sign up
                                </span>
                            </p>
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

                        {/* Text Content */}
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h2 className="text-xl font-semibold mb-2">
                                Patients Management System
                            </h2>
                            <p className="text-sm text-white/80">
                                Manage patients, appointments, and records efficiently in one place.
                            </p>
                        </div>

                    </div>

                </CardContent>
            </Card>

            {/* Footer */}
            <p className="absolute bottom-6 text-xs text-muted-foreground text-center">
                By continuing, you agree to our{" "}
                <span className="underline cursor-pointer">
                    Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">
                    Privacy Policy
                </span>.
            </p>
        </div>
    )
}