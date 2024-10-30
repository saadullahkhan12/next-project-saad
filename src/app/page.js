import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function Home() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex justify-end sm:justify-center mx-2 my-4">
            <Button
              className="w-full sm:w-1/3 md:w-1/4 text-center font-semibold text-base sm:text-lg bg-slate-50 py-4 sm:py-6"
              variant="outline"
            >
              Payment System
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-lg sm:text-xl">Inventory, Payment, and Billing</SheetTitle>
            <SheetDescription className="text-sm sm:text-base">
              Manage your payment system and income details
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right sm:text-left">
                Name
              </Label>
              <Input id="name" placeholder="Your Name" className="sm:col-span-3" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right sm:text-left">
                Role
              </Label>
              <Input id="username" placeholder="Admin" className="sm:col-span-3" />
            </div>
            <Label className="text-base sm:text-lg text-center mt-4">Key</Label>
            <hr className="border-t border-gray-300" />
            <div className="flex justify-center items-center gap-2">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-full sm:w-auto">
                Save
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div className="w-full bg-slate-50 h-24 sm:h-32 border-b border-gray-300 hover:bg-gray-100">
        <h1 className="text-center py-6 sm:py-8 text-xl sm:text-2xl text-gray-950 font-semibold">
          User Details
        </h1>
      </div>
    </div>
  );
}
