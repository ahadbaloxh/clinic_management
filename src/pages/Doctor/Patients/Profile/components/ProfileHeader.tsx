import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Phone, MapPin, CreditCard } from "lucide-react";

type ProfileHeaderProps = {
  patient: {
    name: string;
    age: number;
    gender: string;
    dob: string;
    mrNumber: string;
    cnic: string;
    phone: string;
    city: string;
  };
};

export const ProfileHeader = ({ patient }: ProfileHeaderProps) => {
  const { name, age, gender, dob, mrNumber, cnic, phone, city } = patient;

  return (
    <Card className="rounded-2xl bg-white">
      <CardContent className="py-3 px-5">
        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4 min-w-0">

            {/* Square Avatar */}
            <Avatar className="h-20 w-20 rounded-lg bg-gray-100">
              <AvatarImage src="/profile.png" alt={name} />
              <AvatarFallback className="rounded-lg font-semibold text-lg">
                {name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            {/* INFO */}
            <div className="min-w-0 space-y-2">

              {/* NAME + MR */}
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl font-semibold text-slate-900 truncate">
                  {name}
                </h2>

                <Badge variant="secondary" className="text-md font-semibold px-2 py-1">
                  MR: {mrNumber}
                </Badge>
              </div>

              {/* META */}
              <p className="text-sm text-slate-600">
                {age} yrs • {gender} • {dob}
              </p>

              {/* DETAILS WITH ICONS */}
              <div className="flex flex-wrap gap-5 text-sm text-slate-600">

                <div className="flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-slate-500" />
                  <span>{cnic}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>{phone}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>{city}</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};