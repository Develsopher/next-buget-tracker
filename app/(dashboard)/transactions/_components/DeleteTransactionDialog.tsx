"use client";

import { DeleteTransaction } from "@/app/(dashboard)/transactions/_actions/deleteTransaction";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  transactionId: string;
}

function DeleteTransactionDialog({ open, setOpen, transactionId }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: DeleteTransaction,
    onSuccess: async () => {
      toast.success("내역을 성공적으로 삭제하였습니다!", {
        id: transactionId,
      });

      await queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
    onError: () => {
      toast.error("Something went wrong", {
        id: transactionId,
      });
    },
  });
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>😭 한번 더 확인해주세요!</AlertDialogTitle>
          <AlertDialogDescription>
            해당 내역을 삭제하면 되돌릴 수 없어요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>취소하기</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              toast.loading("내역 지우는중...", {
                id: transactionId,
              });
              deleteMutation.mutate(transactionId);
            }}
          >
            계속하기
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteTransactionDialog;
