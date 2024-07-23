import { RedirectType, redirect } from "next/navigation";
import ModalSlot from "@/components/modal-slot";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GrupoForm } from "@/components/forms/grupo-form";

export default function CreateGroupModal() {
  async function handleSuccessForm() {
    "use server";

    redirect(`/camadas/grupo`, RedirectType.push);
  }

  return (
    <ModalSlot>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo grupo</DialogTitle>
          <DialogDescription>Crie um agrupador de camadas.</DialogDescription>
        </DialogHeader>
        <GrupoForm hasCancelButton onSuccess={handleSuccessForm} />
      </DialogContent>
    </ModalSlot>
  );
}
