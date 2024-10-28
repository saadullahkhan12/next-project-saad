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
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const usernames = [
  {
    username: "saif ullah",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    username: "sharuk khan",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    username: "ali khan",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    username: "areeba Fatima",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    username: "sania Saeed ",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    username: "hadiqa Azeem",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    username: "saad ullah",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function Home() {
  return (
   <div className="container">
   <Sheet>
      <SheetTrigger asChild>
        <div  className="flex align-middle justify-center my-8 ">
        <Button  className="w-1/4 text-center border-indigo-300 bg-slate-200 text-xl font-semibold" variant="outline">payment system</Button>

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
            <Label htmlFor="username" className="text-right">
              passkey  
            </Label>
            <Input id="passkey"  placeholder="passkey" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    <Table>
      <TableCaption>A list of your recent usernames.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">username</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usernames.map((username) => (
          <TableRow key={username.username}>
            <TableCell className="font-medium">{username.username}</TableCell>
            <TableCell>{username.paymentStatus}</TableCell>
            <TableCell>{username.paymentMethod}</TableCell>
            <TableCell className="text-right">{username.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>



    
    
   </div>
  );
}
