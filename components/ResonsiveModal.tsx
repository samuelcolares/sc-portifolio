"use client";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "./ui/input";
import { Check, Copy, LucideIcon } from "lucide-react";
import Link from "next/link";

type DrawerDialogProps = {
  trigger: string;
  title: string;
  sendString: string;
  inputValue: string;
  href: string;
  acessibilityString: string;
  closeString: string;
};

const DrawerDialog: React.FC<DrawerDialogProps> = ({
  title,
  trigger,
  sendString,
  inputValue,
  href,
  acessibilityString,
  closeString,
}) => {
  const [Icon, setIcon] = React.useState<LucideIcon>(Copy);
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const Trigger = <p className="cursor-pointer">{trigger}</p>;
  const Title = title;
  const SendString = sendString;
  const InputValue = inputValue;
  const LinkHref = href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(InputValue);
    setIcon(Check);
    setTimeout(() => {
      setIcon(Copy);
    }, 1000);
  };

  const desktop = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{Trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
        </DialogHeader>
        <div>
          <div className="relative">
            <Input readOnly value={InputValue} className="text-lg px-2 py-6" />
            <Button
              className="absolute top-1/2 -translate-y-1/2 right-2 p-1 h-auto transition-opacity"
              onClick={copyToClipboard}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{acessibilityString}</span>
            </Button>
          </div>
          <div className="mt-2 flex gap-2">
            <Button className="flex-1" asChild>
              <Link href={LinkHref}>{SendString}</Link>
            </Button>
            <DialogClose asChild>
              <Button className="flex-1">{closeString}</Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const mobile = (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{Title}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-8">
          <div className="relative">
            <Input readOnly value={InputValue} className="text-lg px-2 py-6" />
            <Button
              className="absolute top-1/2 -translate-y-1/2 right-2 p-1 h-auto transition-opacity"
              onClick={copyToClipboard}
            >
              <Icon className="h-4 w-4" />
              <span className="sr-only">{acessibilityString}</span>
            </Button>
          </div>
          <div className="mt-2 flex gap-2">
            <Button className="flex-1" asChild>
              <Link href={LinkHref}>{SendString}</Link>
            </Button>
            <DrawerClose asChild>
              <Button className="flex-1">{closeString}</Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );

  return isDesktop ? desktop : mobile;
};

export default DrawerDialog;
