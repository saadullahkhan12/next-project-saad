import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"




export default function Home() {
  return (

   <div className="container">
   <Sheet>
      <SheetTrigger asChild>
        <div  className="flex align-middle justify-right mx-2 my-8 ">
        <Button  className="w-1/4 text-center font-semibold text-lg bg-slate-50 py-8" variant="outline">payment system</Button>

        </div>
        
        
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> Inventory , payment and billing </SheetTitle>
          <SheetDescription>
          your payment side and saad regular income
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="your name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Role  
            </Label>
            <Input id="username"  placeholder="Admin" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
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
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
         </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    <div className=" w-screen bg-slate-50 h-32 border border-b-grey hover:bg-gray-100">
    <h1  className="text-center py-8 text-2xl text-gray-950 font-semibold">Users Details</h1>


    </div>

    



    
    
   </div>
  );
}
