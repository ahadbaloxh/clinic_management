import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      
      <div className="space-y-4 border rounded-xl p-6 bg-background">
        <h2 className="text-lg font-medium">General Settings</h2>
        <div className="space-y-2">
          <Label>System Name</Label>
          <Input defaultValue="Clinic Management System" />
        </div>
        
        <div className="flex items-center justify-between py-2">
          <div className="space-y-0.5">
            <Label>Email Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive daily summaries.</p>
          </div>
          <Switch defaultChecked />
        </div>

        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
