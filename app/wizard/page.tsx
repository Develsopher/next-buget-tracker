import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <h1 className="text-center text-3xl">
        안녕하세요!
        <span className="ml-2 font-bold">{user.firstName}님 👋</span>
      </h1>
      <h2 className="mt-4 text-center text-base text-muted-foreground">
        사용할 화폐단위를 설정하세요!
      </h2>
      <h3 className="mt-2 text-center text-sm text-muted-foreground">
        해당 설정은 언제든지 변경가능합니다.
      </h3>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>화폐단위 💸</CardTitle>
          <CardDescription>
            수입/지출 내역에 사용할 기본 화페단위를 설정하세요.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>설정완료! 대시보드로 이동하기</Link>
      </Button>
      <div className="mt-8">
        <Logo />
      </div>
    </div>
  );
};

export default page;
