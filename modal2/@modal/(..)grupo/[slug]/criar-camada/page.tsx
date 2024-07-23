import { redirect } from "next/navigation";
import CamadaForm from "@/components/forms/camada-form";
import ModalSlot from "@/components/modal-slot";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function CriarCamadaModal({
  params,
}: {
  params: { slug: string };
}) {
  const handleSuccessForm = async () => {
    "use server";
    redirect(`/camadas/grupo/${params.slug}`);
  };

  return (
    <ModalSlot>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova camada</DialogTitle>
          <DialogDescription>
            Crie e customize uma nova camada para o mapa.
          </DialogDescription>
        </DialogHeader>
        <CamadaForm slug={params.slug} onSuccess={handleSuccessForm} />
      </DialogContent>
    </ModalSlot>
  );
}
