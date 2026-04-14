import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-6">
            <Card className="w-full max-w-5xl rounded-2xl shadow-xl border">
                <CardContent className="grid md:grid-cols-2 px-4">

                    {/* LEFT SIDE */}
                    <div className="p-8 md:p-12">
                        <div className="max-w-sm mx-auto">
                            <h1 className="text-3xl font-semibold tracking-tight mb-2">
                                Create account
                            </h1>
                            <p className="text-sm text-muted-foreground mb-8">
                                Start managing your clinic today
                            </p>

                            <div className="space-y-5">

                                {/* Role Dropdown */}
                                <div className="space-y-2">
                                    <Label>Your Role</Label>
                                    <select className="w-full h-10 rounded-md border bg-background px-3 text-sm">
                                        <option value="">Select role</option>
                                        <option value="admin">Admin</option>
                                        <option value="doctor">Doctor</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>

                                {/* Name */}
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input placeholder="Dr. John Doe" />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        placeholder="doctor@example.com"
                                    />
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="Create a password"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <Label>Confirm Password</Label>
                                    <Input
                                        type="password"
                                        placeholder="Re-enter password"
                                    />
                                </div>

                                <Button className="w-full h-10 text-sm">
                                    Create Account
                                </Button>
                            </div>

                            <p className="text-sm text-center mt-8 text-muted-foreground">
                                Already have an account?{" "}
                                <span className="text-primary underline cursor-pointer">
                                    Login
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="hidden md:block relative bg-muted/20 rounded-r-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1758691463569-66de91d76452?q=80&w=1632&auto=format&fit=crop"
                            alt="Doctor"
                            className="object-cover w-full h-full"
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <h2 className="text-xl font-semibold mb-2">
                                Join Our Platform
                            </h2>
                            <p className="text-sm text-white/80">
                                Create your account and streamline your clinic operations effortlessly.
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